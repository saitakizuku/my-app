import React, { ReactNode, useEffect, useRef, useState } from 'react';
import style from "../../css/Subpage.module.css";
import observer from "../../functions/observer";

interface Props{
    className: string;
    sectionTitle: string;
    children: ReactNode;
}

const Comment: React.FC<Props> = ({className, sectionTitle, children}) => {
    const ref = useRef<HTMLElement>(null);
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
        <section className={`${className} ${isVisible ? style.visible : ""}`} ref={ref}>
            <div>
                <h2>{sectionTitle}</h2>
            </div>
            <div className={style.item}>
                {children}
            </div>
        </section>
    )
}

export default Comment;