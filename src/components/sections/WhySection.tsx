import { Brain, Database, EyeOff, Gauge, Info, Shield } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Emotional Representation Missing",
    description: "Structured affective context has no common schema across systems.",
  },
  {
    icon: Gauge,
    title: "No Intrinsic Significance Model",
    description: "Affective information lacks a native model for importance, persistence, or influence.",
  },
  {
    icon: Database,
    title: "No Stable Substrate",
    description: "Emotional data does not survive model upgrades, vendors, or architectures.",
  },
  {
    icon: Shield,
    title: "Ungoverned Memory",
    description: "Consent, jurisdiction, retention, and rights are not embedded in emotional data itself.",
  },
  {
    icon: EyeOff,
    title: "Provenance Blindness",
    description: "Systems cannot reliably determine who issued emotional context, when, or under what authority.",
  },
  {
    icon: Info,
    title: "Interpretation vs Inference",
    description: "Emotional meaning is inferred from signals rather than structured from explicitly provided content.",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why EDM Exists
          </h2>
          <p className="text-muted-foreground text-lg">
            No common schema exists for representing affective context across AI systems. EDM defines one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="border-gradient p-6 hover:bg-muted/30 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <reason.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
