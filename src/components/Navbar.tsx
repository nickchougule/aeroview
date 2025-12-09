import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline that is paused by default
      const tl = gsap.timeline({ paused: true });

      // 1. Slide down the menu background
      tl.to(menuRef.current, {
        y: 0,
        duration: 1,
        ease: "power4.inOut",
      });

      // 2. Stagger in the links
      tl.from(".menu-link", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.5"); // Start slightly before background finishes

      // Save timeline to the DOM element to access it in the toggle function
      (menuRef.current as any).animation = tl;

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle Toggle
  const toggleMenu = () => {
    const tl = (menuRef.current as any)?.animation;
    if (tl) {
      if (!isOpen) {
        tl.play(); // Play forward (Open)
      } else {
        tl.reverse(); // Play backward (Close)
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div ref={containerRef}>

      {/* 1. The Fixed Header Bar */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-10 py-6 mix-blend-difference text-white">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter uppercase cursor-pointer z-[100]">
          Aero<span className="font-light">View</span>
        </div>

        {/* Menu Toggle Button (Hamburger) */}
        <button
          onClick={toggleMenu}
          className="z-[100] group flex flex-col gap-1.5 cursor-pointer p-2"
        >
          <span className={`w-8 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-8 h-[2px] bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-8 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </nav>

      {/* 2. The Full Screen Overlay Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-screen h-screen bg-[#0b0b0b] z-[90] flex flex-col justify-center items-center translate-y-[-100%]"
      >
        {/* Background Texture (Optional) */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        <ul className="flex flex-col gap-6 text-center z-10">

          {/* LINK 1: HOME */}
          <li className="overflow-hidden">
            <a
              href="#home"
              onClick={toggleMenu}
              className="menu-link block text-5xl md:text-7xl font-bold uppercase tracking-tighter hover:text-red-500 transition-colors"
            >
              Home
            </a>
          </li>

          {/* LINK 2: MISSIONS (The Gallery) */}
          <li className="overflow-hidden">
            <a
              href="#missions"
              onClick={toggleMenu}
              className="menu-link block text-5xl md:text-7xl font-bold uppercase tracking-tighter hover:text-red-500 transition-colors"
            >
              Missions
            </a>
          </li>

          {/* LINK 3: CONTACT (The Footer) */}
          <li className="overflow-hidden">
            <a
              href="#contact"
              onClick={toggleMenu}
              className="menu-link block text-5xl md:text-7xl font-bold uppercase tracking-tighter hover:text-red-500 transition-colors"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Menu Footer */}
        <div className="absolute bottom-10 flex gap-10 text-xs uppercase tracking-widest text-gray-500">
          <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
          <span className="cursor-pointer hover:text-white transition-colors">Twitter</span>
          <span className="cursor-pointer hover:text-white transition-colors">LinkedIn</span>
        </div>

      </div>

    </div>
  );
};

export default Navbar;