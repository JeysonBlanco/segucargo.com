import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BannerCTAProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BannerCTA = ({ icon: Icon, title, description }: BannerCTAProps) => {
  return (
    <button className="group h-20 bg-white/5 rounded-lg border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Icon className="h-6 w-6 text-[#2AD4AE] group-hover:scale-110 transition-transform" />
        <div className="text-left">
          <div className="text-white font-medium">{title}</div>
          <div className="text-sm text-white/60">{description}</div>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-[#2AD4AE]/20 flex items-center justify-center group-hover:bg-[#2AD4AE]/30">
        <div className="w-2 h-2 border-t-2 border-r-2 border-[#2AD4AE] rotate-45 -translate-x-0.5" />
      </div>
    </button>
  );
};

export default BannerCTA;