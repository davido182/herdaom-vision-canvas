import { Award, Users, Target, TrendingUp } from "lucide-react";
import constructionBg from "@/assets/construction-bg.jpg";

const values = [
  {
    icon: Award,
    title: "Calidad",
    description: "Excelencia en cada proyecto que realizamos",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description: "Especialistas comprometidos con su éxito",
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Atención al detalle en cada etapa",
  },
  {
    icon: TrendingUp,
    title: "Innovación",
    description: "Soluciones modernas y eficientes",
  },
];

const About = () => {
  return (
    <section
      id="nosotros"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${constructionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Sobre <span className="text-primary">Herdaom</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos una empresa líder en construcción y consultoría, dedicada a transformar visiones en estructuras reales. Con años de experiencia en el sector, nos especializamos en proyectos que combinan funcionalidad, estética y sostenibilidad.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro compromiso es entregar proyectos que superen las expectativas, manteniendo los más altos estándares de calidad y cumplimiento de plazos.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-muted-foreground">Proyectos Completados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">15+</div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-muted-foreground">Satisfacción del Cliente</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
