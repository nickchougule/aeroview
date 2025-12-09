import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader'; // Import Preloader

const App = () => {
  return (
    <Router>
      <SmoothScroll>
        
        {/* 1. The Preloader (Loads first) */}
        <Preloader />

        {/* 2. The Custom Cursor */}
        {/* <CustomCursor /> */}

        {/* 3. The Film Grain Texture */}
        <div className="noise-overlay"></div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </SmoothScroll>
    </Router>
  );
}

export default App;