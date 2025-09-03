import { Shield, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrizione */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src="/lovable-uploads/75a648cd-cdd4-4fa9-9b7a-c1e83274795d.png" alt="Pro Sicura Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-2xl font-bold">Pro Sicura</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Specialisti nelle certificazioni di scaffalature e nella sicurezza dei magazzini. 
              Garantiamo conformità normativa e sicurezza certificata per ogni ambiente di lavoro.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-background/60">
                <strong>P.IVA:</strong> 04694300981
              </p>
              
              <p className="text-background/60">
                <strong>REA:</strong> MI-1234567
              </p>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background/90">Via Lentumi,22</p>
                  <p className="text-background/90">25047 Darfo Boario Terme (BS)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+390123456789" className="text-background/90 hover:text-primary transition-colors">+39 3505047810</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@prosicura.it" className="text-background/90 hover:text-primary transition-colors">info@pro-sicura.it</a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-background/80">
                  <p>Lun-Ven: 8:00-18:00</p>
                  <p>Sab: 9:00-13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="text-lg font-semibold mb-4">I Nostri Servizi</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>• Certificazioni Scaffalature</li>
              <li>• Verifiche Periodiche</li>
              <li>• Consulenza Sicurezza</li>
              <li>• Audit e Compliance</li>
              <li>• Manutenzione Preventiva</li>
              <li>• Formazione Specializzata</li>
            </ul>
          </div>
        </div>

        {/* Normative */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-3">Conformità Normativa</h4>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">UNI EN 15635</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">D.Lgs. 81/08</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">UNI EN 15512</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">UNI ENC 15620</span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; 2024 Pro Sicura. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-primary transition-colors flex items-center gap-1">
              Privacy Policy
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#cookie" className="hover:text-primary transition-colors flex items-center gap-1">
              Cookie Policy
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#termini" className="hover:text-primary transition-colors flex items-center gap-1">
              Termini e Condizioni
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};