import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Constructora en Loja | Herdaom - Construcción de Casas</title>
        <meta name="description" content="Constructora en Loja, Ecuador. Construcción de casas, diseño arquitectónico, remodelaciones y consultoría. Herdaom Cía. Ltda." />
        <link rel="canonical" href="https://herdaom-vision-canvas.lovable.app/" />
        <meta property="og:url" content="https://herdaom-vision-canvas.lovable.app/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "name": "Constructora y Consultora Herdaom Cía. Ltda.",
          "description": "Constructora y consultora en Loja, Ecuador. Construcción de casas, remodelaciones y consultoría profesional.",
          "telephone": "+593980474043",
          "email": "herdaom@gmail.com",
          "url": "https://herdaom-vision-canvas.lovable.app",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle Antón Philips 865-62",
            "addressLocality": "Loja",
            "addressRegion": "Loja",
            "addressCountry": "EC"
          },
          "areaServed": "Loja, Ecuador",
          "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-13:00"]
        })}</script>
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
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
