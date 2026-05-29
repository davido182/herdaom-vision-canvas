import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logoherdaom.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("inicio")}>
            <img src={logo} alt="Herdaom Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold"
            >
              Contacto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
