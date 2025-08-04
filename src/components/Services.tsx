
import { CheckCircle, Search, Users, FileCheck, Wrench, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Certificazioni Scaffalature",
      description: "Certificazione completa delle scaffalature secondo la normativa UNI EN 15635, con rilascio di documentazione ufficiale.",
      features: [
        "Verifica strutturale completa",
        "Controllo carichi di sicurezza",
        "Certificato di conformità",
        "Documentazione tecnica"
      ]
    },
    {
      icon: Search,
      title: "Verifiche Periodiche",
      description: "Controlli programmati per mantenere nel tempo la sicurezza e la conformità delle tue scaffalature.",
      features: [
        "Ispezioni programmate",
        "Report dettagliati",
        "Monitoraggio continuo",
        "Pianificazione interventi"
      ]
    },
    {
      icon: Users,
      title: "Consulenza Sicurezza",
      description: "Consulenza specializzata per ottimizzare la sicurezza dei magazzini e la gestione degli spazi.",
      features: [
        "Analisi dei rischi",
        "Progettazione layout",
        "Formazione personale",
        "Piani di miglioramento"
      ]
    },
    {
      icon: FileCheck,
      title: "Audit e Compliance",
      description: "Verifiche complete per garantire la conformità normativa e identificare aree di miglioramento.",
      features: [
        "Audit approfonditi",
        "Verifica normative",
        "Report di conformità",
        "Azioni correttive"
      ]
    },
    {
      icon: Wrench,
      title: "Manutenzione Preventiva",
      description: "Programmi di manutenzione per prevenire problemi e garantire la durata delle scaffalature.",
      features: [
        "Manutenzione programmata",
        "Sostituzione componenti",
        "Riparazioni urgenti",
        "Ottimizzazione prestazioni"
      ]
    },
    {
      icon: BookOpen,
      title: "Formazione Specializzata",
      description: "Corsi di formazione per il personale sulla sicurezza e gestione corretta delle scaffalature.",
      features: [
        "Corsi personalizzati",
        "Materiale didattico",
        "Certificati di partecipazione",
        "Aggiornamenti normativi"
      ]
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi per garantire la sicurezza e la conformità 
            delle scaffalature in ogni tipo di magazzino e ambiente industriale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover-lift shadow-soft border-l-4 border-l-primary group"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
