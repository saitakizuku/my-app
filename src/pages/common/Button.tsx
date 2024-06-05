import React from "react";
import style from "../../css/Subpage.module.css";

interface ButtonProps{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({onClick}) => {
    return(
    <div className={style.button}> 
        <button className={style.backmain} onClick={onClick}>メイン</button>
    </div>
    )
}

export default Button;