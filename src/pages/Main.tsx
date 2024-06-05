import React, { useState } from 'react';
import Gravity from "./subpages/Gravity";
import MHW from "./subpages/MHW";
import Cs2 from "./subpages/CS";
import "../css/Main.css";
import gravity from "../img/gravity.webp";
import mhw from "../img/モンハン.webp";
import cs2 from "../img/cs2.webp";
import gold from "../img/gold.png";
import silver from "../img/silver.png";
import bronze from "../img/bronze.png";

function Main() {
    const [currentPage, setCurrentPage] = useState<string>("");

    const renderPage = () => {
        switch(currentPage){
            case "gravity":
                return <Gravity />;
            case "MHW":
                return <MHW />;
            case "cs2":
                return <Cs2 />;
            default:
                return(
                    <div className='wrapper'>
                        <h1 className='h'>TOP3 Games</h1>
                        <Crown />
                        <Image setCurrentPage={setCurrentPage} />
                        <Names setCurrentPage={setCurrentPage} />
                        <Catch />
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

const Crown = () => {
    return(
        <div className='crown'>
            <img className='bronze' src={bronze} alt='bronze' />
            <img className='gold' src={gold} alt='gold' />
            <img className='silver' src={silver} alt='silver' />
        </div>
    );
}

interface GameImagesProps{
    setCurrentPage: (page: string) => void;
}
const Image: React.FC<GameImagesProps> = ({setCurrentPage}) =>{
    return(
        <div className="imgs">
            <img className="gravity" src={gravity} alt="cat" onClick={() => setCurrentPage("gravity")} />
            <img className='cs2' src={cs2} alt="cs2" onClick={() => setCurrentPage("cs2")} />
            <img className="mhw" src={mhw} alt="mhw" onClick={() => setCurrentPage("MHW")} />
        </div>
    );
}

interface NamesProps{
    setCurrentPage: (page: string) => void;
}
const Names: React.FC<NamesProps> = ({setCurrentPage}) => {
    return(
        <div className='names'>
            <h3 className="gravity third" onClick={() => setCurrentPage("gravity")}>3rd. Gravity Daze</h3>
            <h3 className='cs2 first' onClick={() => setCurrentPage("cs2")}>1st. Counter Strike</h3>
            <h3 className="mhw second" onClick={() => setCurrentPage("MHW")}>2nd. MonsterHunter WORLD</h3>
        </div>
    );
}

function Catch() {
    return(
        <div className='cathc'>
            <h3 className='three'>ハードのせいであまり売れてないゲーム</h3>
            <h3 className='one'>世界１のFPS</h3>
            <h3 className='two'>王道</h3>
        </div>
    );
}

export default Main;