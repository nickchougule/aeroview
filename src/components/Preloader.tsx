import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const container = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Animate the Counter Object
      // We use a dummy object to animate the number from 0 to 100
      const counterObj = { val: 0 };
      
      const tl = gsap.timeline({
        onComplete: () => {
          // When counter finishes, slide the screen up
          gsap.to(container.current, {
            yPercent: -100,
            duration: 1.5,
            ease: "power4.inOut",
            delay: 0.5, // Slight pause at 100%
          });
        }
      });

      // The Counter Animation
      tl.to(counterObj, {
        val: 100,
        duration: 2, // How long the loader lasts (2 seconds)
        ease: "power2.out",
        onUpdate: () => {
          setCount(Math.floor(counterObj.val));
        }
      });

      // Text Reveal Animation (Optional polish)
      gsap.from(".loader-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.1
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={container} 
      className="fixed inset-0 bg-[#000] z-[9999] flex flex-col justify-between p-10 text-white"
    >
      {/* Top Text */}
      <div className="flex justify-between uppercase text-xs tracking-widest opacity-50 loader-text">
        <span>System Initializing</span>
        <span>Pune, IND</span>
      </div>

      {/* Center Big Counter */}
      <div className="flex justify-center items-center h-full">
        <h1 
          ref={counterRef} 
          className="text-[15vw] md:text-[20vw] font-bold leading-none tracking-tighter tabular-nums"
        >
          {count}%
        </h1>
      </div>

      {/* Bottom Text */}
      <div className="flex justify-between uppercase text-xs tracking-widest opacity-50 loader-text">
        <span>Loading Assets</span>
        <span>AeroView v1.0</span>
      </div>
    </div>
  );
};

export default Preloader;