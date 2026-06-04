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
              Somos una empresa constructora y consultora líder en Loja, Ecuador, dedicada a transformar visiones en estructuras reales. Con más de 15 años de experiencia en el sector, nos especializamos en proyectos que combinan funcionalidad, estética y sostenibilidad.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Desde Loja atendemos proyectos en todo Ecuador. Nuestro compromiso es entregar obras que superen las expectativas, manteniendo los más altos estándares de calidad y cumplimiento de plazos.
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

          <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-md mx-auto w-full aspect-square">
            {values.map((value, index) => {
              // Cross layout: top, left, right, bottom
              const positions = [
                "col-start-2 row-start-1", // top
                "col-start-1 row-start-2", // left
                "col-start-3 row-start-2", // right
                "col-start-2 row-start-3", // bottom
              ];
              return (
                <div
                  key={index}
                  className={`${positions[index]} group bg-transparent border border-primary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm transition-transform duration-300 group-hover:scale-110">
                    {value.title}
                  </h3>
                  <p className="text-xs text-muted-foreground transition-transform duration-300 group-hover:scale-105">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
