import React, { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ContentSection from "./ContentSection"; 

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const bg1 = useRef(null);
    const img_container = useRef(null);
    const container = useRef(null); 
    const text1 = useRef(null);
    const text2 = useRef(null);
    const img = useRef(null);

    useLayoutEffect(() => {
        // Safety Check
        if (!bg1.current || !img_container.current || !container.current) return;

        let ctx = gsap.context(() => {
            // 1. Pin the background
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start: "top top",
                endTrigger: ".last", 
                end: "bottom bottom",
            });

            // 2. Set initial state (Crash-proof fix)
            // This ensures the ContentSection is hidden below the viewport initially
            gsap.set(container.current, { 
                marginTop: -(container.current?.offsetHeight || 0) 
            });

            // 3. The Main Timeline
            gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    pin: img_container.current,
                    scrub: 1,
                    start: "0% 0%",
                }
            })
            // ZOOM Effect
            .to(img.current, { transform: "translateZ(2200px)" }) 
            // Text Moves Up
            .to(text1.current, { y: -800 }, "<0.05") 
            .to(text2.current, { y: -800 }, "<0.05") 
            // Content Slides Up from bottom
            .fromTo(container.current, 
                { yPercent: 100, scaleY: 2 }, 
                { yPercent: 0, scaleY: 1 } 
            ); 
        });

        return () => ctx.revert();
    }, []);

    // I replaced your local image with a high-res Unsplash URL for immediate testing.
    // You can swap 'src' back to your 'bg' import later.
    const heroImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

    return (
        <div className="relative">
            {/* Background Layer (Dark Overlay) */}
            <div ref={bg1} className="bg bg-[#141414] absolute h-screen w-screen -z-10"></div>

            <section>
                {/* The Hero Visuals */}
                <div ref={img_container} className="w-screen h-screen flex items-center justify-center bg-[#141414] overflow-hidden">
                    <div className="image-wrapper perspective">
                        <img ref={img} src={heroImage} className="masked-image" alt="Aerial View" />
                        
                        <div className="absolute text-white flex flex-col items-center justify-center pointer-events-none">
                            <h1 ref={text1} className="text-[10vw] md:text-[140px] leading-none whitespace-nowrap flex items-center gap-4 font-bold z-10 mix-blend-overlay">
                                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "2px white" }}>AERO</span>VIEW
                            </h1>
                            <p ref={text2} className="opacity-80 text-sm md:text-base tracking-[0.5em] text-center mt-6 uppercase">
                                Perspectives from the Stratosphere
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Next Block (Passed via Ref) */}
                <div className="last">
                    <ContentSection ref={container} />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;