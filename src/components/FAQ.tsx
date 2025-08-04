import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Cosa include la certificazione delle scaffalature?",
      answer: "La certificazione include un'ispezione completa della struttura, la verifica dei carichi di sicurezza, il controllo della stabilità e l'emissione di un certificato di conformità secondo la normativa UNI EN 15635. Forniamo anche tutta la documentazione tecnica necessaria."
    },
    {
      question: "Quanto tempo richiede il processo di certificazione?",
      answer: "I tempi dipendono dalle dimensioni del magazzino e dalla complessità dell'impianto. Generalmente, per un magazzino di medie dimensioni, completiamo la certificazione in 3-5 giorni lavorativi. Forniamo sempre un cronoprogramma dettagliato prima dell'inizio dei lavori."
    },
    {
      question: "Ogni quanto vanno ripetute le verifiche?",
      answer: "La normativa UNI EN 15635 richiede verifiche periodiche almeno una volta l'anno. Tuttavia, consigliamo controlli più frequenti in base all'intensità d'uso del magazzino. Offriamo programmi di manutenzione personalizzati per mantenere sempre la conformità."
    },
    {
      question: "Cosa succede se le scaffalature non sono conformi?",
      answer: "Se durante l'ispezione riscontriamo non conformità, forniamo un report dettagliato con le azioni correttive necessarie. Vi assistiamo nell'implementazione delle modifiche e nella successiva ri-certificazione per garantire la piena conformità normativa."
    },
    {
      question: "Operate in tutta Italia?",
      answer: "Sì, i nostri tecnici operano su tutto il territorio nazionale. Abbiamo esperienza in diversi settori industriali e ci spostiamo presso la vostra sede per eseguire tutti i controlli necessari senza interruzioni significative della vostra attività."
    },
    {
      question: "Quanto costa la certificazione?",
      answer: "Il costo varia in base alle dimensioni del magazzino, al numero di scaffalature e alla complessità dell'impianto. Offriamo sempre un preventivo gratuito e dettagliato dopo un sopralluogo iniziale. Contattateci per una valutazione personalizzata."
    },
    {
      question: "Fornite anche formazione per il personale?",
      answer: "Sì, offriamo corsi di formazione specializzati per il vostro personale sulla corretta gestione e manutenzione delle scaffalature, procedure di sicurezza e riconoscimento di potenziali problemi. La formazione può essere erogata presso la vostra sede."
    },
    {
      question: "Avete certificazioni e qualifiche specifiche?",
      answer: "I nostri tecnici sono certificati e costantemente aggiornati sulle normative vigenti. Collaboriamo con enti di certificazione riconosciuti e manteniamo sempre alti standard qualitativi nei nostri interventi."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Domande Frequenti
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trova risposta alle domande più comuni sui nostri servizi di certificazione 
            e sicurezza delle scaffalature.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};