import React from 'react';
import { Menu, X, Ship, LogIn, Calculator } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useClickOutside } from '../../hooks/useClickOutside';
import QuickActions from '../mobile/QuickActions';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuRef = useClickOutside<HTMLDivElement>(onClose);
  const { translations } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      
      {/* Menu Panel */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out mobile-safe-bottom"
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center">
            <Ship className="h-6 w-6 text-[#2AD4AE]" />
            <span className="ml-2 font-bold text-[#001E5D]">seguCargo</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full touch-feedback"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 bg-gray-50 flex justify-around">
          <QuickActions />
        </div>

        {/* Navigation Links */}
        <nav className="h-full overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            {/* Primary Navigation */}
            <div className="space-y-3">
              <MobileMenuItem 
                href="#servicios" 
                label={translations.nav.services} 
                onClick={onClose} 
              />
              <MobileMenuItem 
                href="#nosotros" 
                label={translations.nav.about} 
                onClick={onClose} 
              />
              <MobileMenuItem 
                href="#contacto" 
                label={translations.nav.contact} 
                onClick={onClose} 
              />
            </div>

            {/* Actions */}
            <div className="pt-6 border-t space-y-3">
              <a
                href="/quote"
                onClick={onClose}
                className="flex items-center px-4 py-3 text-sm font-medium text-[#001E5D] bg-[#2AD4AE] rounded-lg hover:bg-[#2AD4AE]/90 touch-feedback"
              >
                <Calculator className="h-5 w-5 mr-3" />
                Cotizar Online
              </a>
              <a
                href="https://segucargo-login.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center px-4 py-3 text-sm font-medium text-[#001E5D] border border-[#2AD4AE] rounded-lg hover:bg-gray-50 touch-feedback"
              >
                <LogIn className="h-5 w-5 mr-3" />
                {translations.nav.clientArea}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

interface MobileMenuItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

const MobileMenuItem = ({ href, label, onClick }: MobileMenuItemProps) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center px-4 py-3 text-base text-gray-600 hover:text-[#001E5D] hover:bg-gray-50 rounded-lg touch-feedback"
  >
    {label}
  </a>
);

export default MobileMenu;