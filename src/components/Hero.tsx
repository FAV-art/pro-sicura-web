import { Shield, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contatti')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Logo e nome azienda */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Shield className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Pro <span className="text-primary">Sicura</span>
          </h1>
        </div>

        {/* Slogan */}
        <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8 text-balance">
          Sicurezza certificata per ogni scaffalatura
        </p>

        {/* Sottotitolo */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Specialisti nelle certificazioni di scaffalature e nella sicurezza dei magazzini. 
          Conformità garantita secondo la normativa UNI EN 15635.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300" onClick={scrollToContact}>
            Richiedi Preventivo
          </Button>
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="tel:+390123456789" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">3505047810</span>
            </a>
            <a href="mailto:info@prosicura.it" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@pro-sicura.it</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};