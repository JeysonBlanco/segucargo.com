import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Ship, 
  Plane, 
  Truck, 
  Package, 
  Home,
  MoveRight,
  Network,
  Globe,
  Users
} from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';

const freightServices = [
  {
    title: 'Marítimo FCL',
    description: 'Contenedores completos para grandes volúmenes',
    icon: Ship,
    href: '/servicios/maritimo-fcl'
  },
  {
    title: 'Marítimo LCL',
    description: 'Consolidado de carga para envíos pequeños',
    icon: Ship,
    href: '/servicios/maritimo-lcl'
  },
  {
    title: 'Aéreo',
    description: 'Envíos rápidos y seguros vía aérea',
    icon: Plane,
    href: '/servicios/aereo'
  },
  {
    title: 'Terrestre',
    description: 'Transporte terrestre nacional e internacional',
    icon: Truck,
    href: '/servicios/terrestre'
  },
  {
    title: 'Courier',
    description: 'Envíos express puerta a puerta',
    icon: Package,
    href: '/servicios/courier'
  }
];

const movingServices = [
  {
    title: 'Mudanzas Internacionales Marítimas',
    description: 'Servicio completo de mudanzas por vía marítima',
    icon: Ship,
    href: '/servicios/mudanzas-maritimas'
  }
];

const networkingServices = [
  {
    title: 'Red Global de Agentes',
    description: 'Accede a nuestra red internacional de agentes certificados',
    icon: Globe,
    href: '/servicios/red-global'
  },
  {
    title: 'Programa de Partners',
    description: 'Únete a nuestro programa de colaboración empresarial',
    icon: Users,
    href: '/servicios/partners'
  },
  {
    title: 'Alianzas Estratégicas',
    description: 'Establece conexiones comerciales estratégicas',
    icon: Network,
    href: '/servicios/alianzas'
  }
];

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'freight' | 'moving' | 'networking'>('freight');
  const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const getActiveServices = () => {
    switch (activeSection) {
      case 'freight':
        return freightServices;
      case 'moving':
        return movingServices;
      case 'networking':
        return networkingServices;
      default:
        return freightServices;
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white hover:text-[#2AD4AE] px-3 py-2 rounded-md text-sm font-medium"
      >
        Servicios
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 bg-gray-50 p-4 rounded-l-md">
              <button
                onClick={() => setActiveSection('freight')}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium mb-2 ${
                  activeSection === 'freight'
                    ? 'bg-[#001E5D] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Freight Forwarder
              </button>
              <button
                onClick={() => setActiveSection('moving')}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium mb-2 ${
                  activeSection === 'moving'
                    ? 'bg-[#001E5D] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Mudanzas Internacionales
              </button>
              <button
                onClick={() => setActiveSection('networking')}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'networking'
                    ? 'bg-[#001E5D] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Networking
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              <div className="grid grid-cols-1 gap-2">
                {getActiveServices().map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors duration-150 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      <service.icon className="h-6 w-6 text-[#2AD4AE]" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-[#001E5D] flex items-center">
                        {service.title}
                        <MoveRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;