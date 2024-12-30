import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001E5D]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="https://i.postimg.cc/vmFFny6F/Segucargo-logo-secundaria-negativo-1.png"
                />
                <img 
                  src="https://i.postimg.cc/vmFFny6F/Segucargo-logo-secundaria-negativo-1.png"
                  alt="seguCargo"
                  className="h-8 md:h-16 w-auto object-contain"
                  loading="lazy"
                  style={{
                    aspectRatio: "auto",
                    maxWidth: "280px"
                  }}
                />
              </picture>
            </div>
            <p className="mt-4 text-gray-300">
              Expertos en logística internacional y mudanzas globales. Conectando Chile con el mundo desde 1995.
            </p>
          </div>
          
          {/* Rest of the footer content remains the same */}
          {/* ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;