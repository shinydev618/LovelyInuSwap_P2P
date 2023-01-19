import React, { memo, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import "./BgLayer.styles.css"

const debounce = (fn, ms = 300) => {
    let timeoutId;
    return function (thisOne, ...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(thisOne, args), ms);
    };
  };
export const BackMarquee = memo(() => {
    const [bgHeight, setBgHeight] = useState("100%");
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            const body = document.body;
            const html = document.documentElement;
            const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
            setBgHeight(height+"px")
        }, 300)
    
        window.addEventListener('resize', debouncedHandleResize)
        return () => {
          window.removeEventListener('resize', debouncedHandleResize)
        }
    })
    
    return (
        <div style={{height: bgHeight}} className="bg-back-component">
            <Marquee className="bg-text-span" direction="right" gradient={false}>
                <section className="bg-text">ZERO FEE DEX</section>
            </Marquee>
            <Marquee className="bg-text-span" direction="left" gradient={false}>
                <section className="bg-text">ZERO FEE DEX</section>
            </Marquee>
            <Marquee className="bg-text-span" direction="right" gradient={false}>
                <section className="bg-text">ZERO FEE DEX</section>
            </Marquee>
            <Marquee className="bg-text-span" direction="right" gradient={false}>
                <section className="bg-text">ZERO FEE DEX</section>
            </Marquee>
            <Marquee className="bg-text-span" direction="right" gradient={false}>
                <section className="bg-text">ZERO FEE DEX</section>
            </Marquee>
            <Marquee className="bg-text-span" direction="right" gradient={false}>
                <section className="bg-text">ZERO FEE DEX</section>
            </Marquee>
        </div>
    )
})

export default BackMarquee;