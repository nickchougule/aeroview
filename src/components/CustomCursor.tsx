import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = cursor.current;
    const f = follower.current;

    if (!c || !f) return;

    // Center the cursor elements
    gsap.set(c, { xPercent: -50, yPercent: -50 });
    gsap.set(f, { xPercent: -50, yPercent: -50 });

    // Move logic
    const moveCursor = (e: MouseEvent) => {
      // Instant movement for the dot
      gsap.to(c, { x: e.clientX, y: e.clientY, duration: 0 });
      // Smooth movement for the ring
      gsap.to(f, { x: e.clientX, y: e.clientY, duration: 0.2 });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div 
        ref={cursor} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      {/* Larger Ring */}
      <div 
        ref={follower} 
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference opacity-50"
      />
    </>
  );
};

export default CustomCursor;