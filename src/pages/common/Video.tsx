import React, { HTMLAttributeReferrerPolicy, useEffect, useRef, useState } from "react";
import style from "../../css/Subpage.module.css";
import observer from "../../functions/observer";

interface Props {
    className: string;
    src: string;
    title: string;
    frameBorder: number;
    allow: string;
    referrerPolicy: HTMLAttributeReferrerPolicy;
}

const Video: React.FC<Props> = ({ className, src, title, frameBorder, allow, referrerPolicy }) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const callback = function(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
            // else{
            //     setIsVisible(false);
            // }
        };

        observer(ref, callback);
    }, [isVisible]);

    return (
        <div className={`${style.videowrapper} ${className} ${isVisible ? style.visible : ""}`}>
            <iframe 
                className={style.iframe} 
                ref={ref} 
                width="800" 
                height="500" 
                src={src} 
                title={title} 
                frameBorder={frameBorder} 
                allow={allow} 
                referrerPolicy={referrerPolicy} 
                allowFullScreen 
            />
        </div>
    );
}

export default Video;
