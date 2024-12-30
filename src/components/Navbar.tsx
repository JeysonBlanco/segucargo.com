import React, { useState, useEffect } from 'react';
import { Menu, LogIn, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollPosition } from '../hooks/useScrollPosition';
import LanguageSelector from './layout/LanguageSelector';
import MobileMenu from './layout/MobileMenu';
import ServicesDropdown from './nav/ServicesDropdown';
import SolutionsDropdown from './nav/SolutionsDropdown';
import QuickActions from './mobile/QuickActions';
import MobileCTA from './mobile/MobileCTA';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations } = useLanguage();
  const { scrollPosition, isScrollingUp } = useScrollPosition();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navClasses = `
    fixed w-full z-50 transition-all duration-300
    ${scrollPosition > 0 
      ? 'bg-[#001E5D]/95 backdrop-blur-sm shadow-lg' 
      : 'bg-[#001E5D]'}
    ${scrollPosition > 100 && !isScrollingUp ? '-translate-y-full' : 'translate-y-0'}
  `;

  return (
    <nav className={navClasses}>
      {/* Top Bar */}
      <div className="hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-6">
              <a href="tel:+56224381919" className="flex items-center text-white hover:text-[#2AD4AE] text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +56 2 2438 1919
              </a>
              <a href="mailto:ventas@segucargo.cl" className="flex items-center text-white hover:text-[#2AD4AE] text-sm">
                <Mail className="h-4 w-4 mr-2" />
                ventas@segucargo.cl
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://meetings.hubspot.com/marketing-segucargo/reunion-rotativa-central"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm font-medium text-white border border-[#2AD4AE] rounded-md hover:bg-[#2AD4AE]/10 transition-colors touch-feedback"
              >
                {translations.nav.talk_to_exec}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center touch-feedback" aria-label="Ir al inicio">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="https://i.postimg.cc/vmFFny6F/Segucargo-logo-secundaria-negativo-1.png"
                />
                <img 
                  src="https://i.postimg.cc/vmFFny6F/Segucargo-logo-secundaria-negativo-1.png"
                  alt="seguCargo - Ir al inicio"
                  className="h-8 md:h-16 w-auto object-contain"
                  loading="eager"
                  style={{
                    aspectRatio: "auto",
                    maxWidth: "280px"
                  }}
                />
              </picture>
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center space-x-4">
            <MobileCTA />
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md text-white hover:text-[#2AD4AE] touch-feedback"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <ServicesDropdown />
            <SolutionsDropdown />
            <a href="#nosotros" className="text-white hover:text-[#2AD4AE] px-3 py-2 rounded-md text-sm font-medium">
              {translations.nav.about}
            </a>
            <a href="#contacto" className="text-white hover:text-[#2AD4AE] px-3 py-2 rounded-md text-sm font-medium">
              {translations.nav.contact}
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <a
              href="https://segucargo-login.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm font-medium text-white border border-[#2AD4AE] rounded-md hover:bg-[#2AD4AE]/10 transition-colors touch-feedback"
            >
              <LogIn className="h-4 w-4 mr-2" />
              {translations.nav.clientArea}
            </a>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;