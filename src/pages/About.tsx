// About.tsx
import { useState } from 'react';
import Main from './Main';
import Home from './subpages/Gravity';

function About() {
    const [currentPage, setPage] = useState("");

    function renderPage()
    {
        switch(currentPage){
            case "main":
                return <Main />
            case "home":
                return <Home />
            default:
                return <>
                    <h2>アバウトページ</h2>
                    <button onClick={() => setPage("main")}>メイン</button>
                    <button onClick={() => setPage("home")}>ホーム</button>
                </>
        }
    }

    return (
        <>
            {renderPage()}
        </>
    );
}

export default About;
