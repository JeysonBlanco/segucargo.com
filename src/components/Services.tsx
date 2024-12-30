import React from 'react';
import { Ship, Truck, Home, Package, Globe, Clock } from 'lucide-react';

const services = [
  {
    title: 'Transporte Marítimo',
    description: 'Servicios de carga marítima internacional con cobertura global y seguimiento en tiempo real.',
    icon: Ship,
  },
  {
    title: 'Transporte Terrestre',
    description: 'Distribución nacional e internacional por tierra con una amplia red de transportistas certificados.',
    icon: Truck,
  },
  {
    title: 'Mudanzas Internacionales',
    description: 'Servicio personalizado de mudanzas internacionales puerta a puerta con embalaje profesional.',
    icon: Home,
  },
  {
    title: 'Almacenaje',
    description: 'Instalaciones seguras y modernas para el almacenamiento temporal de sus mercancías.',
    icon: Package,
  },
  {
    title: 'Comercio Internacional',
    description: 'Asesoría en comercio exterior y gestión de documentación aduanera.',
    icon: Globe,
  },
  {
    title: 'Entregas Express',
    description: 'Servicios de entrega urgente para envíos que requieren máxima prioridad.',
    icon: Clock,
  },
];

const Services = () => {
  return (
    <div id="servicios" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#001E5D] sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluciones logísticas integrales adaptadas a sus necesidades
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#2AD4AE] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-[#002DA4] text-[#2AD4AE] ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-[#001E5D]">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;