
import { Shield, MapPin, Calendar, Award, Users, FileText } from "lucide-react";

export const Trust = () => {
  const trustElements = [
    {
      icon: Shield,
      title: "Conformità UNI EN 15635",
      description: "Certificazioni secondo la normativa europea per scaffalature metalliche"
    },
    {
      icon: Calendar,
      title: "15+ Anni di Esperienza",
      description: "Oltre 15 anni nel settore delle certificazioni di sicurezza"
    },
    {
      icon: MapPin,
      title: "Copertura Nazionale",
      description: "Interventiamo su tutto il territorio italiano"
    },
    {
      icon: Award,
      title: "Tecnici Certificati",
      description: "Team di specialisti qualificati e costantemente aggiornati"
    },
    {
      icon: Users,
      title: "1000+ Clienti Soddisfatti",
      description: "Aziende di ogni dimensione si affidano alla nostra competenza"
    },
    {
      icon: FileText,
      title: "Documentazione Completa",
      description: "Rilasciamo sempre documentazione tecnica dettagliata"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Perché Scegliere Pro Sicura
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La nostra esperienza, competenza e attenzione ai dettagli ci rendono 
            il partner ideale per la sicurezza delle tue scaffalature.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustElements.map((element, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <element.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {element.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sezione normative */}
        <div className="mt-16 bg-background rounded-lg p-8 shadow-sm max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Conformità Normativa Garantita
            </h3>
            <p className="text-muted-foreground mb-6">
              I nostri servizi rispettano rigorosamente tutte le normative vigenti
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">UNI EN 15635</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">D.Lgs. 81/08</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">UNI EN 15512</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">Direttiva Macchine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
