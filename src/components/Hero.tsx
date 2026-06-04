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
            Construyendo el Futuro
            <span className="text-primary block mt-2">
              <span className="text-foreground/70">en Loja, Ecuador</span>
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Constructora y consultora líder en Loja. Transformamos sus proyectos de construcción en realidad con más de 15 años de experiencia, innovación y compromiso.
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
