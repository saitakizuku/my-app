import React, {useState} from "react";
import Main from "../Main";
import Button from "../common/Button";
import Image from "../common/Image";
import Comment from "../common/Coment";
import Video from "../common/Video";
import Info from "../common/Info";
import mhw from "../../img/モンハン.webp";
import style from "../../css/Subpage.module.css";

const MHW: React.FC = () => {

    const [page, setPage] = useState("subpage");

    const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        setPage("main");
    }

    if(page === "main"){
        return <Main />
    }

    return(
        <div>
            <h1 className={style.header}>MonsterHunter WORLD</h1>
            <Image className={style.main} src={mhw}/>
            <Comment className={style.comment} sectionTitle="紹介">
                　モンハンワールドはゲーム好きの方なら触ったことがあると思います。2018年にモンハンシリーズでは久しぶりに据え置きゲーム機専用として発売されました。発売以来、毎年100万本以上
                売れており、現在2500万本の売り上げを出しているビックタイトルです。<br/>
                　ゲームの中身としては、ワールド以前のモンハンではマップのエリアごとにロードが入る方式から、マップ全体がつながっており、一度フィールドに出れば拠点に帰るまでロードを挟まないシステ
                ムに変更されました。また、据え置き専用なこともあり、それまでの携帯ゲーム機のころと比べて驚くほどラフィックが向上しています。そのせいもあり、PS4で遊ぶと、ロード時
                間の長さや激しいエフェクトが出た際のフレームレートのドロップなど旧世代機の限界を感じる部分もたくさんありました。<br/>
                　私は発売された時期は受験目前だったのですが、友達と徹夜で遊び続けました。それまでのモンハンと違いすぎてPVを最初にを見たときはいろいろと心配な部分もあったのですが、今とな
                ってはワールドがモンハンの基準になっているような気がします。<br/>
                　来年には新作も発表されていますし、その前にぜひワールドを触ってみたください
            </Comment>
            <Video className={style.video} src="https://www.youtube.com/embed/xe-RAeDfOMM?si=ZshS9nP6D1Q_3_et" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" />
            <div className="infoDiv">
                <Info className={style.info}>
                    価格 　: 4990円。
                    発売日 : 2018年1月26日。
                    ハード　: PC、XBOX、PS4、PS5。
                    人数 　: 1～4
                </Info>
            </div>
            <Button onClick={handleButtonClick} />
        </div>
    )
}

export default MHW;