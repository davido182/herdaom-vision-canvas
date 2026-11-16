import { ArrowRight } from "lucide-react";
import constructionBg from "@/assets/construction-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${constructionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-montserrat text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Ingeniería y control de costos
            <span className="block mt-2 text-foreground/70">sin sobrecostos ocultos</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Constructora familiar en Loja: un ingeniero civil, un economista y un arquitecto. Calculamos cada estructura bajo norma NEC y cada dólar en planilla abierta. Trabajamos en todo Ecuador.
          </p>
          <a
            href="https://wa.me/593980474043?text=Hola%20Herdaom%2C%20quisiera%20una%20consulta%20t%C3%A9cnica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Consulta por WhatsApp <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
