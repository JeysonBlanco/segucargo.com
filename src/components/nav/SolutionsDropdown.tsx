import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Calculator, 
  Globe,
  BarChart,
  Laptop,
  Ship,
  Truck
} from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';

const SolutionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white hover:text-[#2AD4AE] px-3 py-2 rounded-md text-sm font-medium"
      >
        Soluciones
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-[400px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="p-4">
            <h3 className="text-[#001E5D] font-medium mb-4 px-3">Plataforma Digital</h3>
            <div className="space-y-2">
              <Link
                to="/quote"
                className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <Calculator className="h-6 w-6 text-[#2AD4AE]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#001E5D]">Cotizador Logístico</p>
                  <p className="text-xs text-gray-500">Cotiza tus envíos internacionales</p>
                </div>
              </Link>

              <Link
                to="/maritime-quote"
                className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <Ship className="h-6 w-6 text-[#2AD4AE]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#001E5D]">Cotizador Marítimo</p>
                  <p className="text-xs text-gray-500">Calcula costos de importación marítima</p>
                </div>
              </Link>

              <Link
                to="/tracking"
                className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <Truck className="h-6 w-6 text-[#2AD4AE]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#001E5D]">Tracking Online</p>
                  <p className="text-xs text-gray-500">Rastrea tus envíos en tiempo real</p>
                </div>
              </Link>

              <Link
                to="/dashboard"
                className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <BarChart className="h-6 w-6 text-[#2AD4AE]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#001E5D]">Dashboard Logístico</p>
                  <p className="text-xs text-gray-500">Gestiona tus operaciones</p>
                </div>
              </Link>

              <Link
                to="/api"
                className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <Laptop className="h-6 w-6 text-[#2AD4AE]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#001E5D]">API de Integración</p>
                  <p className="text-xs text-gray-500">Conecta tus sistemas con nuestra plataforma</p>
                </div>
              </Link>

              <Link
                to="/global-network"
                className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <Globe className="h-6 w-6 text-[#2AD4AE]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#001E5D]">Red Global</p>
                  <p className="text-xs text-gray-500">Accede a nuestra red de agentes</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionsDropdown;