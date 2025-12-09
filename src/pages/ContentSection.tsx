import React, { forwardRef } from 'react';

// forwardRef is crucial here. It allows HeroSection to control this div for the slide-up animation.
const ContentSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="bg-white text-black min-h-screen w-screen relative z-10 flex flex-col items-center justify-center p-20">
      
      {/* 1. Updated Tagline */}
      <span className="uppercase tracking-widest text-sm mb-4 text-gray-500 font-bold">
        The Stratosphere & Beyond
      </span>
      
      <h2 className="text-6xl md:text-8xl font-bold mb-10 text-center uppercase tracking-tighter">
        Beyond the Horizon
      </h2>
      
      {/* 2. Updated Description (Replaced NOVA with AeroView) */}
      <p className="text-xl max-w-2xl text-center leading-relaxed font-light text-gray-800">
        The universe is not just a place, it's a destination. 
        <span className="font-bold text-black"> AEROVIEW</span> invites you to experience the silence of the void 
        and the brilliance of a billion stars. Your journey to the edge of reality begins now.
      </p>
      
      {/* 3. Space-themed grid content WITH REAL IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 w-full max-w-5xl">
         
         {/* Card 1: Orbital Flights */}
         <div className="h-96 relative rounded-lg overflow-hidden group cursor-pointer">
            {/* The Image */}
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Orbit" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-wider">Orbital Flights</h3>
                <p className="text-sm text-gray-200 opacity-80">Low earth orbit experiences</p>
            </div>
         </div>

         {/* Card 2: Deep Space */}
         <div className="h-96 relative rounded-lg overflow-hidden group cursor-pointer">
            {/* The Image */}
            <img 
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop" 
                alt="Deep Space" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-wider">Deep Space</h3>
                <p className="text-sm text-gray-200 opacity-80">Mars and beyond</p>
            </div>
         </div>

      </div>

    </div>
  );
});

export default ContentSection;