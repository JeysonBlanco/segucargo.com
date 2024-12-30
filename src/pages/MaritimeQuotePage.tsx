import React from 'react';
import Navbar from '../components/Navbar';
import MaritimeQuoteV2 from '../components/quote/maritime/MaritimeQuoteV2';
import SEOHead from '../components/seo/SEOHead';

const MaritimeQuotePage = () => {
  return (
    <>
      <SEOHead
        title="Cotizador Marítimo Online"
        description="Calcula el costo de tu importación marítima en tiempo real. Cotiza contenedores completos (FCL) o carga suelta (LCL)."
        keywords={[
          'cotizador marítimo',
          'importación marítima',
          'FCL',
          'LCL',
          'contenedores',
          'carga suelta',
          'transporte marítimo'
        ]}
      />
      <Navbar />
      <MaritimeQuoteV2 />
    </>
  );
};

export default MaritimeQuotePage;