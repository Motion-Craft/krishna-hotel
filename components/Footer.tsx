
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bgSoft border-t border-accent/10 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">Krishna Hotel</h3>
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-6">Restaurant & Cafe</p>
            <p className="max-w-xs text-darkText/60 leading-relaxed mx-auto md:mx-0">
              Bringing you the authentic taste of tradition and the warmth of genuine Indian hospitality since our inception.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h4 className="font-bold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-darkText/60">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#specialties" className="hover:text-accent transition-colors">Menu</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-primary mb-4">Socials</h4>
              <ul className="space-y-2 text-darkText/60">
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Google Maps</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-darkText/40">
          <p>© {new Date().getFullYear()} Krishna Garden Hotel Restaurant and Cafe. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
