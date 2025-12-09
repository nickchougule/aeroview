import React, { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
    const container = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Text Reveal Animation
            gsap.from(textRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%", // Starts when top of section hits 70% of viewport
                }
            });

            // 2. Magnetic Button Effect
            const btn = buttonRef.current;
            if (btn) {
                // Move button with mouse
                const moveBtn = (e: MouseEvent) => {
                    const rect = btn.getBoundingClientRect();
                    const relX = e.clientX - rect.left - rect.width / 2;
                    const relY = e.clientY - rect.top - rect.height / 2;

                    gsap.to(btn, {
                        x: relX * 0.3, // Strength of magnet (0.3 is subtle)
                        y: relY * 0.3,
                        duration: 0.3
                    });
                };

                // Reset on leave
                const leaveBtn = () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
                };

                btn.addEventListener('mousemove', moveBtn);
                btn.addEventListener('mouseleave', leaveBtn);

                // Cleanup listener inside effect
                return () => {
                    btn.removeEventListener('mousemove', moveBtn);
                    btn.removeEventListener('mouseleave', leaveBtn);
                };
            }

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="relative w-screen h-[80vh] bg-[#0b0b0b] text-white flex flex-col items-center justify-center overflow-hidden">

            {/* Background Image (Parallax Starfield) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2613&auto=format&fit=crop"
                    alt="Starfield"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <p className="text-red-500 tracking-[0.5em] text-sm uppercase mb-6 font-mono">
                    Initiate Launch Sequence
                </p>

                <h2 ref={textRef} className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-12 leading-tight">
                    Ready to Leave <br /> <span className="text-gray-600">Terra Firma?</span>
                </h2>

                {/* The Magnetic Button */}
                <button
                    ref={buttonRef}
                    className="group relative px-12 py-6 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                    {/* Hover Fill Effect */}
                    <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

                    {/* Button Text */}
                    <span className="relative z-10 font-bold tracking-widest uppercase text-sm group-hover:text-white transition-colors duration-300">
                        Book Expedition
                    </span>
                </button>
            </div>

        </div>
    );
};

export default CTASection;