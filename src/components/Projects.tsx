import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from "lucide-react";
import constructionBg from "@/assets/construction-bg.jpg";

const projects = [
  {
    title: "Residencia Familiar",
    location: "Loja, Ecuador",
    type: "Construcción",
    year: "2024",
    description: "Casa de dos plantas con diseño moderno, hormigón armado y acabados de primera calidad.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    title: "Edificio Comercial",
    location: "Loja, Ecuador",
    type: "Obra Civil",
    year: "2023",
    description: "Edificio de uso mixto con locales comerciales en planta baja y oficinas en pisos superiores.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    title: "Planta Industrial",
    location: "Loja, Ecuador",
    type: "Piso Industrial",
    year: "2023",
    description: "Instalación de piso industrial de alta resistencia con impermeabilización total.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    title: "Complejo Residencial",
    location: "Loja, Ecuador",
    type: "Gerencia de Proyectos",
    year: "2022",
    description: "Gestión integral de complejo residencial de 12 unidades habitacionales.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Remodelación Oficinas",
    location: "Loja, Ecuador",
    type: "Consultoría y Diseño",
    year: "2024",
    description: "Rediseño arquitectónico completo de espacios corporativos con planos estructurales nuevos.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${constructionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/96 via-background/92 to-background/88" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Proyectos <span className="text-primary">Realizados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada obra es el resultado de nuestro compromiso con la calidad y la excelencia en Loja, Ecuador
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} - Herdaom Constructora Loja`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    {/* Year badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-montserrat text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows */}
          <CarouselPrevious className="hidden sm:flex -left-5 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
          <CarouselNext className="hidden sm:flex -right-5 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
        </Carousel>

        {/* Mobile swipe hint */}
        <p className="text-center text-muted-foreground text-sm mt-6 sm:hidden">
          Desliza para ver más proyectos
        </p>
      </div>
    </section>
  );
};

export default Projects;
