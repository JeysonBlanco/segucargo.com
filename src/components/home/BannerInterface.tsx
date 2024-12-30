import React from 'react';
import { Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import BannerCTA from './BannerCTA';

const BannerInterface = () => {
  return (
    <div className="relative hidden lg:block w-[400px]">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2AD4AE]/20 via-transparent to-transparent rounded-2xl" />
      <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#2AD4AE] animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
            </div>
            <div className="h-1.5 w-16 bg-[#2AD4AE]/40 rounded-full" />
          </div>

          <div>
            <Link to="/maritime-quote">
              <BannerCTA
                icon={Ship}
                title="Cotizador Marítimo Online"
                description="Cotiza importaciones y exportaciones marítimas"
              />
            </Link>
            <div className="mt-3 p-3 bg-white/10 rounded-lg">
              <p className="text-xs text-white/80">
                Este cotizador es exclusivo para transporte marítimo (FCL/LCL). 
                No aplica para carga aérea, terrestre ni mudanzas internacionales.
              </p>
            </div>
          </div>

          <div className="flex items-end space-x-1.5 h-16">
            {[40, 70, 30, 80, 60, 45, 90].map((height, i) => (
              <div
                key={i}
                className="w-6 bg-gradient-to-t from-[#2AD4AE]/20 to-[#2AD4AE]/60 rounded-t-lg hover:to-[#2AD4AE] transition-colors duration-300"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerInterface;