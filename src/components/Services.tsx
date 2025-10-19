import { Building2, Pencil, HardHat, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import constructionBg from "@/assets/construction-bg.jpg";

const services = [
  {
    icon: Building2,
    title: "Construcción",
    description: "Proyectos de construcción completos desde la planificación hasta la entrega final.",
  },
  {
    icon: Pencil,
    title: "Diseño Arquitectónico",
    description: "Diseños innovadores y funcionales adaptados a sus necesidades específicas.",
  },
  {
    icon: HardHat,
    title: "Gerencia de Proyectos",
    description: "Gestión profesional para garantizar el éxito de su proyecto en tiempo y forma.",
  },
  {
    icon: ClipboardCheck,
    title: "Consultoría Técnica",
    description: "Asesoramiento especializado en todas las fases de su proyecto constructivo.",
  },
];

const Services = () => {
  return (
    <section
      id="servicios"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${constructionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/92"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para cada etapa de su proyecto de construcción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
