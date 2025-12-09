import React from 'react';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection'; // Note: HeroSection renders this, but we need IDs
import GallerySection from './GallerySection';
import CTASection from './CTASection';
import Footer from './Footer';
import MarqueeSection from './MarqueeSection'; // Import Marquee

const Home = () => {
  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white overflow-x-hidden">
        
        {/* ID="HOME" for Navbar */}
        <div id="home">
            <HeroSection/>
        </div>

        {/* MARQUEE STRIP (New) */}
        <MarqueeSection />

        {/* ID="MISSIONS" for Navbar */}
        <div id="missions">
            <GallerySection />
        </div>

        <CTASection />

        {/* ID="CONTACT" for Navbar */}
        <div id="contact">
            <Footer />
        </div>
        
    </div>
  );
};

export default Home;