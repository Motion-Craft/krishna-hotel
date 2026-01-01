
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import LocalGuide from './components/LocalGuide';

function App() {
  return (
    <div className="relative font-body">
      <Navbar />
      <Hero />
      
      <main>
        <About />
        <Specialties />
        
        {/* Subtle separator */}
        <div className="h-24 bg-gradient-to-b from-white to-bgSoft" />
        
        <Gallery />
        <LocalGuide />
        <Location />
        <Contact />
      </main>
      
      <Footer />
      <StickyActions />

      {/* Background decoration elements */}
      <div className="fixed top-0 right-0 pointer-events-none z-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="400" cy="0" r="400" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400) rotate(90) scale(400)">
              <stop stopColor="#E2B857" />
              <stop offset="1" stopColor="#E2B857" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default App;
