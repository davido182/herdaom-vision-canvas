import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import constructionBg from "@/assets/construction-bg.jpg";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const emptyForm: FormData = {
  name: "",
  email: "",
  phone: "+593 ",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("leads").insert([
        {
          nombre: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          telefono: formData.phone.trim(),
          mensaje: formData.message.trim(),
        },
      ]);

      if (error) throw error;

      toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
      setFormData(emptyForm);
    } catch (err) {
      console.error("Error al guardar el lead:", err);
      toast.error("Hubo un problema al enviar su mensaje. Por favor intente de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contacto"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${constructionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/95"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Contáctenos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para hacer realidad su próximo proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="font-montserrat text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">herdaom@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">+593 98 047 4043 / +593 95 921 3019</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Calle Antón Philips 865-62, Loja, Ecuador
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border border-white/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3 drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]">
                Horario de Atención
              </h4>
              <div className="space-y-2 text-foreground/80 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-background border-input"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-background border-input"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-background border-input"
                  placeholder="+593 98 047 4043"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="bg-background border-input resize-none"
                  placeholder="Cuéntenos sobre su proyecto..."
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
