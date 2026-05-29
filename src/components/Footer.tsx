import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logoherdaom.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Herdaom Logo" className="h-12 w-auto mb-4" />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Construyendo el futuro con excelencia, innovación y compromiso en cada proyecto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/80">
            © {new Date().getFullYear()} Constructora y Consultora Herdaom Cía. Ltda. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
