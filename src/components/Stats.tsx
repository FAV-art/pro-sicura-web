import { useEffect, useState, useRef } from "react";
import { Award, Users, CheckCircle, Calendar } from "lucide-react";

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: CheckCircle,
      number: 500,
      suffix: "+",
      label: "Scaffalature Certificate",
      description: "Migliaia di metri quadri di magazzino messi in sicurezza"
    },
    {
      icon: Users,
      number: 150,
      suffix: "+",
      label: "Clienti Soddisfatti",
      description: "Aziende che si affidano alla nostra esperienza"
    },
    {
      icon: Award,
      number: 10,
      suffix: "+",
      label: "Anni di Esperienza",
      description: "Competenza maturata nel settore della sicurezza"
    },
    {
      icon: Calendar,
      number: 24,
      suffix: "h",
      label: "Supporto Tecnico",
      description: "Assistenza rapida per emergenze e consulenze"
    }
  ];

  const AnimatedNumber = ({ target, suffix = "", isVisible }: { target: number; suffix?: string; isVisible: boolean }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCurrent(Math.min(Math.round(increment * step), target));
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [target, isVisible]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {current}{suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-primary/5 border-y border-primary/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            I Nostri Numeri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La fiducia dei nostri clienti si riflette nei risultati raggiunti
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-lg bg-background shadow-soft hover:shadow-elegant transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-2">
                <AnimatedNumber 
                  target={stat.number} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};