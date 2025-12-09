import React, { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            const panels = gsap.utils.toArray(".gallery-panel");

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current!.offsetWidth,
                }
            });

        }, component);

        return () => ctx.revert();
    }, []);

    const slides = [
        {
            id: 1,
            title: "LUNAR BASE",
            subtitle: "Sector 7",
            // STABLE SOURCE: Wikipedia/NASA (Full Moon)
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1280px-FullMoon2010.jpg",
            desc: "Establishing the first permanent human settlement."
        },
        {
            id: 2,
            title: "MARS COLONY",
            subtitle: "Red Horizon",
            // STABLE SOURCE: Wikipedia/ESA (Mars True Color)
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1280px-OSIRIS_Mars_true_color.jpg",
            desc: "Terraforming operations in Valles Marineris."
        },
        {
            id: 3,
            title: "TITAN OUTPOST",
            subtitle: "Saturn System",
            // STABLE SOURCE: Wikipedia/NASA (Titan in natural color)
            img: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=2574&auto=format&fit=crop",
            desc: "Mining liquid methane from surface lakes."
        },
        {
            id: 4,
            title: "DEEP VOID",
            subtitle: "Beyond the Belt",
            // STABLE SOURCE: Wikipedia/Hubble (Orion Nebula)
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/1280px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg",
            desc: "Exploration of interstellar anomalies."
        }
    ];

    return (
        <div ref={component} className="bg-[#0b0b0b] text-white overflow-hidden">

            <div className="py-20 px-10 text-center">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">The Archives</p>
                <h2 className="text-4xl md:text-5xl font-bold uppercase">Mission Gallery</h2>
            </div>

            <div ref={slider} className="w-[400vw] h-screen flex flex-nowrap">

                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="gallery-panel w-screen h-screen flex-none flex items-center justify-center relative border-r border-gray-900"
                    >
                        <div className="absolute inset-0 z-0">
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-black/60"></div>
                        </div>

                        <div className="relative z-10 max-w-4xl px-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="text-[8rem] md:text-[12rem] font-bold text-white/10 absolute -top-20 md:-top-40 left-0 select-none">
                                0{index + 1}
                            </div>

                            <div className="flex flex-col relative">
                                <span className="text-red-500 font-mono tracking-widest mb-4">{slide.subtitle}</span>
                                <h3 className="text-6xl md:text-8xl font-bold uppercase leading-none mb-6">{slide.title}</h3>
                                <p className="text-xl md:text-2xl font-light text-gray-300 max-w-lg">
                                    {slide.desc}
                                </p>
                                <button className="mt-8 px-8 py-3 border border-white/30 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-max">
                                    View Data
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default GallerySection;