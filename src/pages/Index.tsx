
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Trust } from "@/components/Trust";

import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Trust />
      
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
