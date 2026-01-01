
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl bg-bgSoft border border-accent/10">
          <div className="lg:w-2/3 h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.425879835303!2d73.92763707538488!3d25.289891677651386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396847fa20645a7d%3A0xc87fde550e5b8b79!2sKrishna%20Garden%20Hotel%20Restaurant%20and%20Cafe!5e0!3m2!1sen!2sin!4v1767270262497!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="lg:w-1/3 p-10 flex flex-col justify-center">
            <span className="text-accent uppercase tracking-widest font-semibold mb-4 block">Find Us</span>
            <h2 className="text-3xl font-heading text-primary mb-6">Location & Details</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="text-accent mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Our Address</h4>
                  <p className="text-darkText/70">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-accent mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Opening Hours</h4>
                  <p className="text-darkText/70">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>
            
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full px-6 py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent hover:text-primary transition-all shadow-lg"
            >
              <span>Open in Google Maps</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
