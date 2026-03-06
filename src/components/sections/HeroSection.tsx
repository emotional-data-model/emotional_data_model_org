import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import EDMLogo from "@/components/EDMLogo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="glow-orb w-[600px] h-[600px] bg-primary/8 -top-40 -left-40" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary/5 -bottom-20 -right-20" style={{ animationDelay: '-10s' }} />
      <div className="glow-orb w-[400px] h-[400px] bg-secondary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-5s' }} />
      
      <div className="container relative z-10 px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-up">
            <EDMLogo className="scale-150" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            The{" "}
            <span className="text-gradient">Emotional Data Model</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up font-light" style={{ animationDelay: '0.2s' }}>
            An open specification for representing affective context in portable, machine-readable form.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://zenodo.org/records/18883392" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                Download v0.5.1 (PDF)
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="group" asChild>
              <a href="https://zenodo.org/records/18883392" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
                View on Zenodo
              </a>
            </Button>
          </div>

          <p className="text-xs font-mono text-muted-foreground mt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            DOI: 10.5281/zenodo.18883392
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
