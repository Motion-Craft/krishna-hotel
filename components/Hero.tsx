
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=2000"
          alt="Krishna Garden Hotel Ambience"
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-6 animate-fade-in-up">
          <span className="text-accent uppercase tracking-[0.3em] font-semibold text-sm md:text-base">
            Authentic Taste • Warm Hospitality
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl font-heading text-white mb-8 leading-tight animate-fade-in-up delay-100">
          Welcome to <span className="text-accent">Krishna Garden</span> <br /> 
          <span className="text-3xl md:text-5xl opacity-90">Hotel & Cafe</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          A tranquil retreat for travelers and food lovers. Experience the finest Rajasthani hospitality in our lush green garden restaurant.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#specialties"
            className="w-full sm:w-auto px-10 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Explore Specialities
          </a>
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default Hero;
