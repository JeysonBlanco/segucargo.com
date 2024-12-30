import React from 'react';
import { 
  Clock, 
  Globe, 
  FileCheck, 
  Truck, 
  Target,
  Rocket,
  HandshakeIcon,
  Briefcase
} from 'lucide-react';

const ValueProposition = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#001E5D] mb-6">
            ¿Problemas con envíos complicados, trámites interminables o costos inesperados?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En SeguCargo ®, entendemos que la logística internacional puede ser un desafío. 
            Por eso, nos hemos convertido en la empresa más tecnológica del sector, 
            ofreciendo soluciones rápidas, confiables y personalizadas para que tú te 
            concentres en lo más importante: tu negocio.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#001E5D] mb-8 text-center">
            ¿Qué hacemos por ti?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Clock}
              title="Cotización en minutos"
              description="Gracias a nuestro cotizador online, obtén tarifas claras y precisas para tus envíos internacionales, sin demoras ni sorpresas."
            />
            <ServiceCard
              icon={Globe}
              title="Gestión total de impuestos y derechos"
              description="Calcula automáticamente costos aduaneros con nuestra herramienta avanzada, evitando contratiempos."
            />
            <ServiceCard
              icon={Truck}
              title="Logística sin límites"
              description="Desde transporte marítimo y aéreo hasta mudanzas internacionales, adaptamos cada solución a tus necesidades."
            />
            <ServiceCard
              icon={FileCheck}
              title="Trámites simplificados"
              description="Olvídate del papeleo; nosotros nos encargamos de todo para que tu mercancía llegue sin complicaciones."
            />
            <ServiceCard
              icon={Target}
              title="Seguimiento en tiempo real"
              description="Mantén el control total de tus envíos con actualizaciones constantes y transparencia total."
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h3 className="text-2xl font-semibold text-[#001E5D] mb-8 text-center">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Rocket}
              title="Innovación tecnológica"
              description="Somos pioneros en soluciones digitales para la logística internacional."
            />
            <FeatureCard
              icon={HandshakeIcon}
              title="Confianza garantizada"
              description="Más de 10 años ayudando a empresas a alcanzar sus metas sin fronteras."
            />
            <FeatureCard
              icon={Briefcase}
              title="Servicio personalizado"
              description="Sabemos que cada cliente es único; diseñamos soluciones a la medida de tus objetivos."
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-[#001E5D] mb-4">
            🔹 Haz que tu logística deje de ser un problema.
          </p>
          <p className="text-lg text-gray-600">
            Con SeguCargo®, la tecnología y la experiencia trabajan para ti
          </p>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-[#001E5D]/10 rounded-lg">
        <Icon className="h-6 w-6 text-[#001E5D]" />
      </div>
    </div>
    <h4 className="text-lg font-semibold text-[#001E5D] mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-[#001E5D] p-6 rounded-lg text-white">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-white/10 rounded-lg">
        <Icon className="h-6 w-6 text-[#2AD4AE]" />
      </div>
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-200">{description}</p>
  </div>
);

export default ValueProposition;