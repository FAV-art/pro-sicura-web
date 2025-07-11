
import { Target, Users, Award } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Chi Siamo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Pro Sicura</strong> è un'azienda specializzata nelle certificazioni di scaffalature 
            e nei servizi correlati alla sicurezza nei magazzini. Con anni di esperienza nel settore, 
            garantiamo la conformità alle normative vigenti e la massima sicurezza per i tuoi ambienti di lavoro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">La Nostra Missione</h3>
            <p className="text-muted-foreground">
              Garantire la sicurezza e la conformità normativa di ogni scaffalatura, 
              proteggendo persone e merci in ogni ambiente di lavoro.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Il Nostro Team</h3>
            <p className="text-muted-foreground">
              Un team di tecnici qualificati e certificati, con competenze specifiche 
              nel settore delle scaffalature industriali e della sicurezza.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">I Nostri Valori</h3>
            <p className="text-muted-foreground">
              Professionalità, precisione e affidabilità sono i pilastri 
              su cui costruiamo ogni intervento e relazione con i nostri clienti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
