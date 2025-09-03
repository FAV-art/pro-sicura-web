import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Chi Siamo", id: "about" },
    { label: "Servizi", id: "servizi" },
    { label: "Perché Sceglierci", id: "trust" },
    { label: "Contatti", id: "contatti" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/75a648cd-cdd4-4fa9-9b7a-c1e83274795d.png" 
                alt="Pro Sicura Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">Pro Sicura</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="tel:+393505047810" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>3505047810</span>
              </a>
              <a href="mailto:info@pro-sicura.it" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@pro-sicura.it</span>
              </a>
            </div>
            <Button size="sm" onClick={() => scrollToSection('contatti')}>
              Preventivo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2 border-t border-border/50 mt-2 pt-4">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <a href="tel:+393505047810" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>3505047810</span>
                  </a>
                  <a href="mailto:info@pro-sicura.it" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@pro-sicura.it</span>
                  </a>
                </div>
                <Button 
                  size="sm" 
                  className="w-full mt-3" 
                  onClick={() => scrollToSection('contatti')}
                >
                  Richiedi Preventivo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};