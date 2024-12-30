import React from 'react';
import Navbar from '../components/Navbar';
import LogisticsQuote from '../components/quote/logistics/LogisticsQuote';
import SEOHead from '../components/seo/SEOHead';

const LogisticsQuotePage = () => {
  return (
    <>
      <SEOHead
        title="Cotizador Logístico Online"
        description="Cotiza tus envíos internacionales en tiempo real con nuestro cotizador logístico inteligente"
        keywords={['cotizador logístico', 'logística internacional', 'cotización envíos']}
      />
      <Navbar />
      <LogisticsQuote />
    </>
  );
};

export default LogisticsQuotePage;