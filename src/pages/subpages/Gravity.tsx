// Home.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import style from "../../css/Subpage.module.css";
import gravity from "../../img/gravity.webp";
import Main from '../Main';
import Button from '../common/Button';
import Comment from "../common/Coment";
import Image from '../common/Image';
import Info from "../common/Info";
import Video from "../common/Video";


function Gravity() {
    const [page, setPage] = useState("subpage");

    const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        setPage("main");
    }

    if(page === "main"){
        return <Main />
    }

    return( <>
            <div>
                <h1 className={style.header}>Gravity Daze</h1>
                <Image className={style.main} src={gravity}/>
                <Comment className={style.comment} sectionTitle='紹介'>
                    　このゲームは2012年にPSVitaで発売されたゲームです。主人公は重力を操作し、移動や攻撃をすることができます。空を飛んだり（正確には落ちている）壁を走ったり、地面を滑ったり
                    と、簡単に気持ちのいいアクションがすることができ、ストーリの演出もフランスで出版される漫画ジャンル、バンド・デシネの影響を受けていたりと独特なゲームになっています。<br/>
                    　売り上げを調べていると、Vita版が20万本、PS4版が3万本程度と大ヒット作品というわけではないようです。正直これはハードの売り上げに足を引っ張られている部分があると思うの
                    で、ゲーム好きの方はぜひ遊んでみてほしいと思っています。PS5ではPS4のゲームもプレイすることができるので、続編のGravityDaze2も併せてぜひ試してみてください。
                </Comment>
                <Video className={style.video} src="https://www.youtube.com/embed/xuQJGVXmvvk?si=s4QGKnm4O5S8X5ja" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"/>
                <Info className={style.info}>
                    価格 　: 4980円。
                    発売日 : 2012年2月9日。
                    ハード : PSVita、PS4。
                    人数 　: 1人
                </Info>
                <Button onClick={handleButtonClick}/>
            </div>
        </>
        )
}

export default Gravity;
