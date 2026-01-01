
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bgSoft">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800"
                alt="Our Culinary Story"
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0" />
              <div className="absolute -bottom-4 -left-4 border-2 border-accent w-24 h-24 rounded-lg z-20 hidden md:block" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-accent uppercase tracking-widest font-semibold mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              The Essence of Tradition & Taste
            </h2>
            <div className="space-y-4 text-darkText/80 text-lg leading-relaxed">
              <p>
                Krishna Hotel began with a simple vision: to bring authentic flavors and genuine Indian hospitality to every plate. Over the years, we have grown from a local favorite into a cherished destination for food lovers and travelers alike.
              </p>
              <p>
                Our kitchen is a celebration of diversity. From the robust spices of North Indian thalis to the comforting aroma of a perfectly brewed coffee in our cafe, every item on our menu is crafted with passion and high-quality ingredients.
              </p>
              <p className="font-semibold text-primary italic">
                "We don't just serve food; we serve memories that last a lifetime."
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-accent/10">
                <span className="text-3xl font-heading text-accent block mb-2">100%</span>
                <span className="text-sm text-darkText/60">Fresh Ingredients</span>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-accent/10">
                <span className="text-3xl font-heading text-accent block mb-2">Family</span>
                <span className="text-sm text-darkText/60">Friendly Dining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
