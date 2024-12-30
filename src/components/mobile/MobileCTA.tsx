import React from 'react';
import { Calculator } from 'lucide-react';

const MobileCTA = () => {
  return (
    <div className="md:hidden">
      <a
        href="/quote"
        className="flex items-center justify-center px-4 py-2 bg-[#2AD4AE] text-[#001E5D] rounded-md font-medium touch-feedback"
      >
        <Calculator className="h-4 w-4 mr-2" />
        <span>Cotizar</span>
      </a>
    </div>
  );
};

export default MobileCTA;