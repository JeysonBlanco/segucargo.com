import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="flex items-center space-x-4 md:hidden">
      <a
        href="https://wa.me/56223456789"
        className="p-2 text-[#2AD4AE] hover:text-white transition-colors touch-feedback"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+56223456789"
        className="p-2 text-[#2AD4AE] hover:text-white transition-colors touch-feedback"
        aria-label="Llamar"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="mailto:contacto@segucargo.cl"
        className="p-2 text-[#2AD4AE] hover:text-white transition-colors touch-feedback"
        aria-label="Enviar email"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
};

export default QuickActions;