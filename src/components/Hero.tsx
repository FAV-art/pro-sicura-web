import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contatti')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-16">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Logo e nome azienda */}
        <div className="mb-8 flex flex-col items-center relative">
          {/* Background worker image with soft opacity */}
          <div className="absolute -left-32 md:-left-48 lg:-left-64 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
            <img 
              src="/lovable-uploads/e97d4d6a-ff83-4aed-adfa-9027092d6d53.png" 
              alt="Safety Engineer" 
              className="w-48 h-48 xl:w-64 xl:h-64 object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          
          {/* Background worker image on right side for balance */}
          <div className="absolute -right-32 md:-right-48 lg:-right-64 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
            <img 
              src="/lovable-uploads/e97d4d6a-ff83-4aed-adfa-9027092d6d53.png" 
              alt="Safety Engineer" 
              className="w-48 h-48 xl:w-64 xl:h-64 object-cover rounded-lg filter grayscale scale-x-[-1] hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          
          <div className="relative group mb-8 z-10">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-700"></div>
            
            {/* Logo container with enhanced styling */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-full p-8 shadow-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-primary/20 group-hover:shadow-3xl animate-[fadeIn_1s_ease-out,scaleIn_0.8s_ease-out_0.3s_both]">
              <img 
                src="/lovable-uploads/75a648cd-cdd4-4fa9-9b7a-c1e83274795d.png" 
                alt="Pro Sicura Logo" 
                className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300 filter contrast-110 brightness-105" 
              />
              
              {/* Floating animation ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse group-hover:border-primary/50 transition-colors duration-300"></div>
            </div>
          </div>
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