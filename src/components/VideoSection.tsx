import { AspectRatio } from "@/components/ui/aspect-ratio";

export const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Scopri Pro Sicura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri il nostro team di professionisti che garantisce la sicurezza delle tue scaffalature
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/aab6429b-eb32-4ea6-bc00-8dd7ea48455b.png"
              alt="Pro Sicura - Professionista della sicurezza scaffalature"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};