import React from 'react';
import CallToAction from './CallToAction';

const BannerHero = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Cotiza, calcula impuestos y controla:
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Todo en una plataforma de logística integral, con el respaldo de un servicio al cliente humano y cercano.
        </p>
      </div>
      <div className="flex gap-4">
        <CallToAction 
          href="#demo"
          text="Ver Demo"
          primary={false}
        />
      </div>
    </div>
  );
};

export default BannerHero;