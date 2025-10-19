import { Button } from "@/components/ui/button";
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
            Construyendo el
            <span className="text-primary block mt-2">Futuro Juntos</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Expertos en construcción y consultoría. Transformamos sus proyectos en realidad con experiencia, innovación y compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold text-lg px-8 py-6 group"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              Nuestros Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
