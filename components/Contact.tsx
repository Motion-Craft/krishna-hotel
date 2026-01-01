
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-accent uppercase tracking-widest font-semibold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-heading mb-8">Ready to serve you the best meal of your life!</h2>
            <p className="text-white/70 text-lg mb-10">
              Whether you're planning a family dinner, looking for a quick cafe break, or need directions, we are just a call away.
            </p>
            
            <div className="space-y-6">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.772-1.547a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-white/50 uppercase tracking-widest">Call Now</span>
                  <span className="text-2xl font-semibold tracking-wide">{CONTACT_INFO.phone}</span>
                </div>
              </a>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-white/50 uppercase tracking-widest">Email Us</span>
                  <span className="text-xl font-medium tracking-wide">info@krishnahotel.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 text-darkText shadow-2xl">
              <h3 className="text-2xl font-heading mb-6 text-primary">Inquiry Form</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-bgSoft border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-bgSoft border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="+91 ..." />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Topic</label>
                  <select className="w-full px-4 py-3 bg-bgSoft border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50">
                    <option>General Inquiry</option>
                    <option>Party Booking</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-bgSoft border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent hover:text-primary transition-all transform hover:scale-[1.02]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
