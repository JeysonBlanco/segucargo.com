import React from 'react';
import { Ship } from 'lucide-react';

const QuoteHeader = () => (
  <div className="bg-[#001E5D] text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <Ship className="h-10 w-10 text-[#2AD4AE]" />
        <div>
          <h1 className="text-3xl font-bold">Cotizador Marítimo Online</h1>
          <p className="text-gray-300 mt-2">
            Calcula el costo de tu importación marítima en tiempo real
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default QuoteHeader;