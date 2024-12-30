import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords = [], 
  image = 'https://segucargo.cl/og-image.jpg',
  url = 'https://segucargo.cl'
}) => (
  <Helmet>
    {/* Basic metadata */}
    <title>{title} | SeguCargo</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(', ')} />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SeguCargo",
        "description": description,
        "url": url,
        "logo": "https://segucargo.cl/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+56-2-2345-6789",
          "contactType": "customer service",
          "areaServed": "CL"
        }
      })}
    </script>
  </Helmet>
);

export default SEOHead;