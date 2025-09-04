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
          <div className="relative group mb-8 z-10">
            {/* Enhanced radial glow behind left worker */}
            <div className="absolute -left-20 md:-left-28 lg:-left-36 top-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-[28rem] h-64 md:h-80 lg:h-[28rem] bg-primary/25 rounded-full blur-2xl -z-10"></div>
            
            {/* Large left worker image - more visible */}
            <div className="absolute -left-16 md:-left-24 lg:-left-32 top-1/2 -translate-y-1/2 hidden sm:block opacity-40 md:opacity-35 lg:opacity-30 pointer-events-none z-0">
              <img 
                src="/lovable-uploads/e97d4d6a-ff83-4aed-adfa-9027092d6d53.png" 
                alt="" 
                aria-hidden="true"
                className="w-48 md:w-64 lg:w-80 xl:w-96 h-auto object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-2xl" 
              />
            </div>
            
            {/* Smaller right mirrored worker - more visible */}
            <div className="absolute -right-12 md:-right-18 lg:-right-24 top-2/3 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none z-0">
              <img 
                src="/lovable-uploads/e97d4d6a-ff83-4aed-adfa-9027092d6d53.png" 
                alt="" 
                aria-hidden="true"
                className="w-36 md:w-48 lg:w-64 h-auto object-cover rounded-xl filter grayscale scale-x-[-1] transition-all duration-700 drop-shadow-xl" 
              />
            </div>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-700"></div>
            
            {/* Logo container with enhanced styling and containment */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-full p-10 md:p-12 shadow-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-primary/20 group-hover:shadow-3xl animate-[fadeIn_1s_ease-out,scaleIn_0.8s_ease-out_0.3s_both] overflow-hidden">
              <img 
                src="/lovable-uploads/75a648cd-cdd4-4fa9-9b7a-c1e83274795d.png" 
                alt="Pro Sicura Logo" 
                className="w-full h-full object-contain drop-shadow-lg group-hover:scale-[1.02] transition-transform duration-300 filter contrast-110 brightness-105" 
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
            <a href="tel:+393426355514" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">3426355514</span>
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