
import React from 'react';
import { SPECIALTIES } from '../constants';

const Specialties: React.FC = () => {
  return (
    <section id="specialties" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <span className="text-accent uppercase tracking-widest font-semibold mb-4 block">Delicious Variety</span>
        <h2 className="text-4xl md:text-5xl font-heading text-primary mb-16">Our Specialities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIALTIES.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">View More</span>
                </div>
              </div>
              <h3 className="text-2xl font-heading text-primary mb-2 transition-colors group-hover:text-accent">
                {item.title}
              </h3>
              <p className="text-darkText/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <button className="px-12 py-4 bg-primary text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all shadow-xl hover:-translate-y-1">
            View Complete Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
