import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  href: string;
  text: string;
  primary?: boolean;
}

const CallToAction = ({ href, text, primary = false }: CallToActionProps) => {
  const baseClasses = "inline-flex items-center px-6 py-3 border text-base font-medium rounded-md transition-colors duration-300";
  const primaryClasses = "border-transparent text-[#001E5D] bg-[#2AD4AE] hover:bg-[#E2E2E0]";
  const secondaryClasses = "border-[#2AD4AE] text-white hover:bg-[#2AD4AE]/10";

  return (
    <a
      href={href}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {text}
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  );
};

export default CallToAction;