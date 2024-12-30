import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className="flex items-center space-x-2 px-3 py-2 text-sm text-[#2AD4AE] hover:text-white transition-colors"
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'ES' : 'EN'}</span>
    </button>
  );
};

export default LanguageSelector;