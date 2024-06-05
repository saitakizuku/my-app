import React, { useState } from "react";
import style from "../../css/Subpage.module.css";
import cadian from "../../img/cadian.jpg";
import cs2 from "../../img/cs2.webp";
import buymenu from "../../img/cs2_buymenu.jpg";
import play from "../../img/cs2_play.jpg";
import waiting from "../../img/cs2_waiting.jpg";
import g2 from "../../img/g2won.jpg";
import katowice from "../../img/katowice2024.jpg";
import Main from "../Main";
import Button from "../common/Button";
import Comment from "../common/Coment";
import Image from "../common/Image";
import Info from "../common/Info";
import Video from "../common/Video";

const imgs: string[] = [play, waiting, buymenu, g2, katowice, cadian];

const Cs2: React.FC = () => {
    const [page, setPage] = useState("subpage");

    const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        setPage("main");
    };

    if (page === "main") {
        return <Main />;
    }

    return (
        <>
            <div>
                <h1 className={style.header}>Counter-Strike</h1>
                <Image className={style.main} src={cs2} />
                <Comment className={style.comment} sectionTitle="紹介">
                    <p>
                        　私が一番好きなゲームはCounter-Strikeです。このゲームはいわゆる爆破FPSと呼ばれるジャンルで、攻撃側、防衛側に分かれ5vs5で対戦するゲームです。世界で最も人気なFPS、ま
                        た、世界で2番目に視聴者の多いEスポーツタイトルになっています。日本で人気なゲームでいうとVALORANTと同じジャンルです。<br />
                        　私は中学生の頃にこのゲームを知り、ずっとプレイしたかったのですが、PCを買うお金がなく、仕方なくPS4の同じジャンルのゲームを遊んでいました。高校生になってからPCを買いプレイし
                        始め、学校の成績がすごいことになりました。<br />
                        　現在はあまり時間をかけてゲームをすることができないので、少し前まで大会を観たりしていたのですが、プレイしたいという欲が抑えられなくなりそうだったので、大会観戦もやめています。
                        ゲームに慣れていない人がいきなり楽しめるようなゲームではないですが、ワークショップなどでユーザーが制作したいろいろなモードを遊ぶことができます。友人とそのようなカジュアルモードで遊
                        んでいるプレイヤーもたくさんいるので、是非1度触ってみてください。
                    </p>
                </Comment>
                <div className={style.gallery}>
                    {imgs.map((img, index) => {
                        return (
                            <div className={style.galleryimg} key={index}>
                                <Image src={img} className={style.galleryitem} />
                            </div>
                        );
                    })}
                </div>
                <Video
                    className={style.video}
                    src="https://www.youtube.com/embed/vvma9W-h7dE?si=jl8YYFr2DJp3LvYT"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
                <Info className={style.info}>
                    価格 　: 無料。 発売日 : 2023年9月27日。 ハード 　: PC。 人数 　: 1～10
                </Info>
                <Button onClick={handleButtonClick} />
            </div>
        </>
    );
};

export default Cs2;
