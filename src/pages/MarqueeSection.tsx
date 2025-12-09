import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MarqueeSection = () => {
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // Infinite Scroll Animation
        const ctx = gsap.context(() => {
            gsap.to(slider.current, {
                xPercent: -50, // Move halfway (since we duplicated the text)
                duration: 20, // Speed (higher = slower)
                ease: "linear",
                repeat: -1, // Infinite loop
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-white text-black py-8 overflow-hidden relative z-20 border-b border-black">
            {/* We double the text to create the seamless loop */}
            <div ref={slider} className="flex whitespace-nowrap w-fit">

                <h1 className="text-[8vw] font-black uppercase leading-none px-4">
                    Hypersonic Travel • Zero Gravity • Stratosphere Views • AeroView Official •
                </h1>

                {/* Duplicate */}
                <h1 className="text-[8vw] font-black uppercase leading-none px-4">
                    Hypersonic Travel • Zero Gravity • Stratosphere Views • AeroView Official •
                </h1>

            </div>
        </div>
    );
};

export default MarqueeSection;