import React, { useEffect, useRef, useState } from "react";
import style from "../../css/Subpage.module.css";
import observer from "../../functions/observer";

interface Props {
    className: string;
    children: string;
}

const Info: React.FC<Props> = ({ className, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
        };

        observer(ref, callback);
    }, [isVisible]);

    const listItems = children.split("。");

    return (
        <section className={`${style.info} ${className} ${isVisible ? style.visible : ""}`}>
            <div ref={ref}>
                <h2>情報</h2>
                <ul className={style.listitems}>
                    {listItems.map((value, index) => (
                        <li className={style.listitem} key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Info;