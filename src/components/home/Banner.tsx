import React from 'react';
import BannerHero from './BannerHero';
import BannerInterface from './BannerInterface';

const Banner = () => {
  return (
    <div className="relative bg-[#001E5D] pt-16 font-archia overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Global logistics and technology"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001E5D] via-[#001E5D]/90 to-[#001E5D]/70" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] bg-[#2AD4AE]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[80rem] h-[80rem] bg-[#2AD4AE]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <BannerHero />
          <div className="hidden lg:block">
            <BannerInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;