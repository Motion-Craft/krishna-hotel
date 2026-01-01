
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-bgSoft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest font-semibold mb-4 block">Sneak Peek</span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary">Ambience & Food Gallery</h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="p-4 bg-white/90 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-primary font-semibold">{img.alt}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
