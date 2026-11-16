import { Building2, Search, Calculator, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import constructionBg from "@/assets/construction-bg.jpg";

const services = [
  { icon: Search, title: "Peritaje de Fisuras y Humedades", description: "Inspección técnica con informe escrito en 24 a 48 horas. Ideal antes de comprar una casa." },
  { icon: Calculator, title: "Auditoría de Presupuestos", description: "Revisamos el presupuesto que le dieron, rubro por rubro, para evitar sobrecostos." },
  { icon: ClipboardCheck, title: "Cálculo Estructural y Planos", description: "Planos y cálculo bajo norma NEC listos para aprobación municipal." },
  { icon: Building2, title: "Fiscalización y Construcción", description: "Supervisamos su obra o la construimos completa, con reportes de avance y costos." },
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
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground mb-4 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
            Soluciones integrales para cada etapa de su proyecto de construcción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/40 backdrop-blur-sm border-white/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto animate-fade-in">
          <p className="text-lg sm:text-xl text-foreground font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
            También somos expertos en{" "}
            <span className="text-primary font-bold">hormigones</span>,{" "}
            <span className="text-primary font-bold">pisos industriales</span>,{" "}
            <span className="text-primary font-bold">impermeabilizaciones</span> y{" "}
            <span className="text-primary font-bold">planos estructurales</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
