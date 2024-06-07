import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Game {
    game: string;
    count: number;
}

interface Props {
    name: string;
    flg: boolean;
    setFlg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Bort: React.FC<Props> = ({ name, flg, setFlg }) => {
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = () => {
        // 投票数を取得
        axios.get('http://localhost:5000/game_selection')
            .then((response) => {
                setGames(response.data);
            })
            .catch((error) => {
                console.error('Error fetching game selections:', error);
            });
    };

    const handleGameSelect = (game: string) => {
        setFlg(false);

        axios.post('http://localhost:5000/game_selection', { game })
            .then(() => {
                setSuccessMessage('投票ありがとうございます！');
                fetchGames();
            })
            .catch((error) => {
                console.error('Error recording game selection:', error);
                setSuccessMessage('投票に失敗しました');
            });
    };

    const handleReset = () => {
        axios.post('http://localhost:5000/reset')
            .then(() => {
                setSuccessMessage('Database reset successfully');
                fetchGames();
            })
            .catch((error) => {
                console.error('Error resetting database:', error);
                setSuccessMessage('Failed to reset database');
            });
    };

    return (
        <div>
            {flg ? <button onClick={() => handleGameSelect(name)}>投票</button> : null}
            <button onClick={handleReset}>リセット</button>
            <p>{successMessage}</p>
            <h2>投票数</h2>
            <ul>
                {games.map((game) => (
                    game.game === name ? <li key={game.game}>{game.game}: {game.count}</li> : null
                ))}
            </ul>
        </div>
    );
}

export default Bort;






