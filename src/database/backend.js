const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();  // dotenvを使用して環境変数をロード

const app = express();
const port = process.env.PORT || 5000;  // ポートも環境変数で設定できるように
const dbPath = process.env.DATABASE_PATH || 'game_selection.db';  // デフォルト値も設定可能

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(
    'CREATE TABLE IF NOT EXISTS game_selection (game TEXT PRIMARY KEY, count INTEGER DEFAULT 0)',
    (err) => {
      if (err) {
        console.error('テーブル作成中にエラーが発生しました:', err.message);
      } else {
        console.log('テーブル作成に成功しました');
      }
    }
  );

  db.run(
    'CREATE TABLE IF NOT EXISTS user_votes (user_id TEXT PRIMARY KEY, game TEXT)',
    (err) => {
      if (err) {
        console.error('ユーザー投票テーブル作成中にエラーが発生しました:', err.message);
      } else {
        console.log('ユーザー投票テーブル作成に成功しました');
      }
    }
  );
});

app.post('/reset', (req, res) => {
  db.serialize(() => {
    db.run('DELETE FROM game_selection', (err) => {
      if (err) {
        console.error('データベースのリセット中にエラーが発生しました:', err.message);
        res.status(500).send('Internal server error');
        return;
      }
      db.run('DELETE FROM user_votes', (err) => {
        if (err) {
          console.error('ユーザー投票テーブルのリセット中にエラーが発生しました:', err.message);
          res.status(500).send('Internal server error');
          return;
        }
        res.status(200).send('Database reset successfully');
      });
    });
  });
});

app.post('/game_selection', (req, res) => {
  const game = req.body.game;
  let userId = req.cookies.userId;

  if (!userId) {
    userId = uuidv4();
    res.cookie('userId', userId, { httpOnly: true });
  }

  db.get('SELECT game FROM user_votes WHERE user_id = ?', [userId], (err, row) => {
    if (err) {
      console.error('ユーザー投票テーブルの読み取り中にエラーが発生しました:', err.message);
      res.status(500).send('Internal server error');
    } else if (row) {
      res.status(400).send('既に投票済みです');
    } else {
      db.run(
        'INSERT OR IGNORE INTO game_selection (game, count) VALUES (?, 0)',
        [game],
        (err) => {
          if (err) {
            console.error('データベースに書き込み中にエラーが発生しました:', err.message);
            res.status(500).send('Internal server error');
            return;
          }

          db.run(
            'UPDATE game_selection SET count = count + 1 WHERE game = ?',
            [game],
            (err) => {
              if (err) {
                console.error('データベースの更新中にエラーが発生しました:', err.message);
                res.status(500).send('Internal server error');
                return;
              }

              db.run(
                'INSERT INTO user_votes (user_id, game) VALUES (?, ?)',
                [userId, game],
                (err) => {
                  if (err) {
                    console.error('ユーザー投票テーブルの更新中にエラーが発生しました:', err.message);
                    res.status(500).send('Internal server error');
                  } else {
                    res.status(200).send('Game selection recorded successfully');
                  }
                }
              );
            }
          );
        }
      );
    }
  });
});

app.get('/game_selection', (req, res) => {
  db.all('SELECT game, count FROM game_selection', [], (err, rows) => {
    if (err) {
      console.error('データベースの読み取り中にエラーが発生しました:', err.message);
      res.status(500).send('Internal server error');
    } else {
      res.status(200).json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

