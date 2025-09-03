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
            Guarda il nostro video per scoprire come garantiamo la sicurezza delle tue scaffalature
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube-nocookie.com/embed/d-hgervHRW4"
              title="Pro Sicura - Certificazioni Scaffalature"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};