import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-accent tracking-widest uppercase mb-4 block">
            Collaborate
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Research Collaboration
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in contributing to EDM development or exploring research partnerships?
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="border-gradient p-8">
            <form action="https://formspree.io/f/mwvoolye" method="POST" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-muted/50 border-border focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@institution.edu"
                    required
                    className="bg-muted/50 border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Affiliation</label>
                <Input
                  type="text"
                  name="affiliation"
                  placeholder="University or Organization"
                  className="bg-muted/50 border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your research interests or collaboration ideas..."
                  rows={4}
                  required
                  className="bg-muted/50 border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">Or reach us directly at</p>
              <a
                href="mailto:contact@emotionaldatamodel.org"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@emotionaldatamodel.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
