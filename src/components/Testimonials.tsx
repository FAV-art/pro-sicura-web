import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Marco Rossi",
      company: "Logistica Milano S.r.l.",
      role: "Responsabile Magazzino",
      content: "Pro Sicura ha certificato tutte le nostre scaffalature in tempi record. Professionalità e competenza eccezionali. Consiglio vivamente i loro servizi.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Laura Bianchi",
      company: "Industrie Meccaniche Bergamo",
      role: "Direttore Operativo", 
      content: "Grazie a Pro Sicura abbiamo messo in regola tutto il nostro magazzino. Il team è stato molto professionale e ha rispettato tutte le tempistiche.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Giuseppe Verdi",
      company: "Distribuzione Alimentare Nord",
      role: "Amministratore Delegato",
      content: "Servizio impeccabile. La certificazione delle scaffalature è stata eseguita con la massima precisione e nel rispetto delle normative vigenti.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Elena Russo",
      company: "Tessile Lombarda S.p.A.",
      role: "Responsabile Sicurezza",
      content: "Pro Sicura ha dimostrato grande competenza tecnica e disponibilità. Il supporto post-certificazione è stato fondamentale per la nostra azienda.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità. 
            Ecco cosa pensano del nostro lavoro.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(currentTestimonialData.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  "{currentTestimonialData.content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">
                      {currentTestimonialData.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {currentTestimonialData.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {currentTestimonialData.role}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {currentTestimonialData.company}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full shadow-soft hover:shadow-elegant"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full shadow-soft hover:shadow-elegant"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};