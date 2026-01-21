import { Check } from "lucide-react";

const features = [
  { label: "Schema-first", description: "Structure precedes implementation" },
  { label: "Byte-stable", description: "Deterministic serialization" },
  { label: "Representation / Governance separation", description: "Clean architectural boundaries" },
  { label: "Cross-vendor", description: "No platform lock-in" },
  { label: "Model-agnostic", description: "Works with any AI system" },
  { label: "Emotional coherence foundation", description: "Built for affective continuity" },
];

const WhatSection = () => {
  return (
    <section id="what" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono text-secondary tracking-widest uppercase mb-4 block">
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What EDM Is
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                EDM is a foundational protocol that provides the missing infrastructure layer for emotional data in AI systems—stable, governed, and interoperable.
              </p>
              
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground">{feature.label}</span>
                      <span className="text-muted-foreground text-sm ml-2">— {feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="border-gradient p-8 font-mono text-sm">
                <div className="text-muted-foreground mb-2">// EDM Schema Structure</div>
                <pre className="text-foreground/90 overflow-x-auto">
{`{
  "edm_version": "0.4.1",
  "envelope": {
    "type": "ddna",
    "integrity": "sha256:...",
    "governance": {...}
  },
  "substrate": {
    "affective_vectors": [...],
    "temporal_layers": [...],
    "salience_map": {...}
  }
}`}
                </pre>
              </div>
              <div className="glow-orb w-[300px] h-[300px] bg-secondary/20 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
