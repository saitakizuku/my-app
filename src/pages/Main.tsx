import React, { useState } from 'react';
import "../css/Main.css";
import third from "../img/bronze.png";
import cs2 from "../img/cs2.webp";
import first from "../img/gold.png";
import gravity from "../img/gravity.webp";
import second from "../img/silver.png";
import mhw from "../img/モンハン.webp";
import Cs2 from "./subpages/CS";
import Gravity from "./subpages/Gravity";
import MHW from "./subpages/MHW";

function Main() {
    const [currentPage, setCurrentPage] = useState<string>("");

    const renderPage = () => {
        switch (currentPage) {
            case "gravity":
                return <Gravity />;
            case "MHW":
                return <MHW />;
            case "cs2":
                return <Cs2 />;
            default:
                return (
                    <div className='wrapper'>
                        <h1 className='h'>TOP3 Games</h1>
                        <div className='games'>
                            <Game name="gravity" rankImg={third} mainImg={gravity} setPage={() => setCurrentPage("gravity")}>
                                <h3 className='title'>Gravity Daze</h3>
                                <h3 className='comment'>ハードのせいであまり売れてないゲーム</h3>
                            </Game>
                            <Game name='cs2' rankImg={first} mainImg={cs2} setPage={() => setCurrentPage("cs2")}>
                                <h3 className='title'>Counter-Strike</h3>
                                <h3 className='comment'>世界一のFPS</h3>
                            </Game>
                            <Game name='MHW' rankImg={second} mainImg={mhw} setPage={() => setCurrentPage("MHW")}>
                                <h3 className='title'>MonsterHunter WORLD</h3>
                                <h3 className='comment'>王道</h3>
                            </Game>
                        </div>
                    </div>
                );
        }
    };

    return (
        <>
            {renderPage()}
        </>
    );
}

interface Props {
    name: string,
    rankImg: string,
    mainImg: string,
    children: React.ReactNode,
    setPage: () => void,
}

const Game: React.FC<Props> = ({ name, rankImg, mainImg, children, setPage }) => {
    return (
        <div  className={`game ${name}`} >
            <div onClick={setPage}>
                <img className="rank-img" src={rankImg} alt={`${name} rank`} />
                <img className="main-img" src={mainImg} alt={name} />
            </div>
            {children}
        </div>    
    );
}

export default Main;

