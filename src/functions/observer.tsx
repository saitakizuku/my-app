import React from 'react';

export function observer(ref: React.RefObject<HTMLElement>, callback:IntersectionObserverCallback){
    const observer = new IntersectionObserver(callback);
    if(ref.current){
        observer.observe(ref.current)
    }
    return() => {
        if(ref.current){
            observer.unobserve(ref.current);
        }
    }
}

export default observer;