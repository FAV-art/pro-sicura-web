
import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefono: "",
    email: "",
    messaggio: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulazione invio form
    console.log("Form inviato:", formData);
    
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo entro 24 ore per fornirti tutte le informazioni richieste.",
    });

    // Reset form
    setFormData({
      nome: "",
      telefono: "",
      email: "",
      messaggio: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contatti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contattaci
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hai bisogno di certificazioni per le tue scaffalature? Richiedi un preventivo gratuito 
            o una consulenza. Il nostro team è pronto ad assisterti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form di contatto */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Richiedi Informazioni</CardTitle>
              <CardDescription>
                Compila il form e ti ricontatteremo entro 24 ore
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                      Nome e Cognome *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Il tuo nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                      Telefono *
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Es. +39 123 456 7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="la-tua-email@esempio.it"
                  />
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-foreground mb-2">
                    Messaggio
                  </label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    rows={5}
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Descrivi brevemente le tue esigenze: tipo di scaffalature, dimensioni del magazzino, tempistiche..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Invia Richiesta
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informazioni di contatto */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Informazioni di Contatto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefono</h4>
                    <p className="text-muted-foreground">+39 01 2345 6789</p>
                    <p className="text-sm text-muted-foreground">Lun-Ven: 8:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@prosicura.it</p>
                    <p className="text-muted-foreground">preventivi@prosicura.it</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sede Operativa</h4>
                    <p className="text-muted-foreground">
                      Via dell'Industria, 123<br />
                      20100 Milano (MI)<br />
                      Italia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Orari di Lavoro</h4>
                    <p className="text-muted-foreground">
                      Lunedì - Venerdì: 8:00 - 18:00<br />
                      Sabato: 9:00 - 13:00<br />
                      Domenica: Chiuso
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Interventi di Emergenza</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Per situazioni di pericolo immediato offriamo interventi urgenti
                </p>
                <p className="text-primary font-semibold">📞 +39 345 678 9012</p>
                <p className="text-xs text-muted-foreground">Disponibile 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
