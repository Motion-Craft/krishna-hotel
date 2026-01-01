
import React from 'react';
import { CONTACT_INFO } from '../constants';

const StickyActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden flex gap-4 w-[90%] max-w-sm">
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white py-4 rounded-full shadow-2xl active:scale-95 transition-all"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.772-1.547a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span className="font-bold">Call Now</span>
      </a>
      
      <a
        href={CONTACT_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center space-x-2 bg-accent text-primary py-4 rounded-full shadow-2xl active:scale-95 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="font-bold">Directions</span>
      </a>
    </div>
  );
};

export default StickyActions;
