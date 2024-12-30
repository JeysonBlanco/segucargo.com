import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="inicio" className="relative bg-[#001E5D] pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Container ship"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Logística Internacional y<br />
          <span className="text-[#2AD4AE]">Mudanzas Globales</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Expertos en soluciones logísticas integrales para empresas y particulares.
          Conectamos Chile con el mundo a través de servicios de primera clase.
        </p>
        <div className="mt-10">
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#001E5D] bg-[#2AD4AE] hover:bg-[#E2E2E0] transition-colors duration-300"
          >
            Cotizar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;