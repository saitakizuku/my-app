import React, { useEffect, useRef, useState } from "react";
import style from "../../css/Subpage.module.css";
import observer from "../../functions/observer";

interface Props{
    className: string;
    src: string;
}

const Image:React.FC<Props> = ({className, src}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const callback = function(entries: IntersectionObserverEntry[], observer: IntersectionObserver){
            if(entries[0].isIntersecting){
                setIsVisible(true);
            }
            // else{
            //     setIsVisible(false);
            // }
        };

        observer(ref, callback);
    }, [isVisible]);

    return(
        <div className={`${style.img} ${isVisible ? style.visible : ""}`} ref={ref}>
            <img className={className} src={src}></img>
        </div>
    )
}

export default Image;