import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  "name": "Constructora y Consultora Herdaom Cía. Ltda.",
  "alternateName": "Herdaom",
  "description": "Empresa constructora y consultora en Loja, Ecuador. Especializada en construcción de casas, diseño arquitectónico, gerencia de proyectos, consultoría técnica, hormigones, pisos industriales, impermeabilizaciones y planos estructurales.",
  "url": "https://www.herdaom.com",
  "telephone": "+593980474043",
  "email": "herdaom@gmail.com",
  "image": "https://www.herdaom.com/og-image.jpg",
  "logo": "https://www.herdaom.com/favicon.svg",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Efectivo, Transferencia bancaria",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Antón Philips 865-62",
    "addressLocality": "Loja",
    "addressRegion": "Loja",
    "postalCode": "110101",
    "addressCountry": "EC"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -3.9931,
    "longitude": -79.2042
  },
  "areaServed": [
    { "@type": "City", "name": "Loja" },
    { "@type": "Country", "name": "Ecuador" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Construcción y Consultoría",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construcción de casas en Loja" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño arquitectónico" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gerencia de proyectos de construcción" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consultoría técnica en construcción" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hormigones y estructuras" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pisos industriales" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Impermeabilizaciones" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Planos estructurales" } }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/herdaom",
    "https://www.instagram.com/herdaom"
  ]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Constructora y Consultora en Loja Ecuador | Herdaom Cía. Ltda.</title>
        <meta name="description" content="Herdaom: constructora y consultora líder en Loja, Ecuador. Construcción de casas, diseño arquitectónico, gerencia de proyectos, hormigones, pisos industriales, impermeabilizaciones y planos estructurales. +15 años de experiencia." />
        <meta name="keywords" content="constructora Loja Ecuador, construcción casas Loja, empresa constructora Loja, constructora Ecuador, obras civiles Loja, diseño arquitectónico Loja, gerencia de proyectos construcción, consultoría construcción Ecuador, hormigones Loja, pisos industriales Ecuador, impermeabilización Loja, planos estructurales Loja, remodelación casas Loja, construcción edificios Loja, Herdaom constructora, obra civil Ecuador, contratista construcción Loja" />
        <link rel="canonical" href="https://www.herdaom.com/" />
        <meta property="og:title" content="Constructora y Consultora en Loja Ecuador | Herdaom" />
        <meta property="og:description" content="Herdaom: construcción de casas, diseño arquitectónico, gerencia de proyectos y consultoría técnica en Loja, Ecuador. Más de 500 proyectos completados." />
        <meta property="og:url" content="https://www.herdaom.com/" />
        <meta property="og:image" content="https://www.herdaom.com/og-image.jpg" />
        <meta property="og:image:alt" content="Herdaom - Constructora y Consultora en Loja, Ecuador" />
        <meta name="twitter:image" content="https://www.herdaom.com/og-image.jpg" />
        <meta name="twitter:description" content="Construcción de casas, diseño arquitectónico y consultoría técnica en Loja, Ecuador. +500 proyectos completados." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
