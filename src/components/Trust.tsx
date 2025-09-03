import { Shield, MapPin, Calendar, Award, Users, FileText } from "lucide-react";
export const Trust = () => {
  const trustElements = [{
    icon: Shield,
    title: "Conformità UNI EN 15635",
    description: "Certificazioni secondo la normativa europea per scaffalature metalliche"
  }, {
    icon: MapPin,
    title: "Copertura Nazionale",
    description: "Interventiamo su tutto il territorio italiano"
  }, {
    icon: Award,
    title: "Tecnici Certificati",
    description: "Team di specialisti qualificati e costantemente aggiornati"
  }, {
    icon: FileText,
    title: "Documentazione Completa",
    description: "Rilasciamo sempre documentazione tecnica dettagliata"
  }];
  return <section id="trust" className="py-20 bg-primary/5">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trustElements.map((element, index) => <div key={index} className="bg-background rounded-lg p-6 shadow-soft hover-lift group"
            style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <element.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
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
            </div>)}
        </div>

        {/* Sezione normative */}
        <div className="mt-16 bg-background rounded-lg p-8 shadow-elegant hover:shadow-glow transition-all duration-300 max-w-4xl mx-auto border border-primary/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Certificazione sismica come linee guida 2023</h3>
            <p className="text-muted-foreground mb-6">
              I nostri servizi rispettano rigorosamente tutte le normative vigenti
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default">UNI EN 15635</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default">D.Lgs. 81/08</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default">UNI EN 15512</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default">UNI EN 15629</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default">UNI EN 15620</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};