import { Check } from "lucide-react";

const features = [
  { label: "Schema-bound", description: "10 domains / 96 fields for cross-system consistency" },
  { label: "Byte-stable", description: "Deterministic serialization for long-term integrity" },
  { label: "Governance-embedded", description: "Consent, jurisdiction, retention travel with the data" },
  { label: "Vendor-agnostic", description: "No dependency on model or platform" },
  { label: "Auditable", description: "Every artifact is attributable and contestable" },
];

const domainLegend = [
  { domain: "meta", description: "identity + provenance" },
  { domain: "core", description: "narrative structure" },
  { domain: "constellation", description: "affect + archetype" },
  { domain: "milky_way", description: "who, where, when" },
  { domain: "gravity", description: "salience + persistence" },
  { domain: "impulse", description: "intent + direction" },
  { domain: "governance", description: "consent + rights" },
  { domain: "telemetry", description: "extraction confidence" },
  { domain: "system", description: "technical compatibility" },
  { domain: "crosswalks", description: "external taxonomies" },
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
              <p className="text-muted-foreground text-lg mb-6">
                EDM defines a governed, schema-bound representational format that externalises affective context as a deterministic, model-agnostic data object.
              </p>

              <div className="bg-muted/30 border border-border rounded-lg p-4 mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-2">Non-biometric by design</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  EDM artifacts are issued from explicitly expressed content—user-provided text, journals, transcripts—not derived from biometric signals. The schema extends via cross-walks as permissions evolve, without breaking the core structure.
                </p>
              </div>

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

            <div className="relative min-w-0">
              <div className="border-gradient p-4 md:p-8 font-mono text-sm overflow-hidden">
                <div className="text-muted-foreground mb-2">// EDM v0.8.0 Domain Structure</div>
                <pre className="text-foreground/90 overflow-x-auto text-xs">
{`{
  "meta": { "id": "...", "version": "0.8.0" },
  "core": { "anchor": "...", "spark": "...", "wound": "..." },
  "constellation": { "emotion_primary": "...", "emotion_subtone": [] },
  "milky_way": { "location_context": "...", "associated_people": [] },
  "gravity": { "emotional_weight": 0.8, "recurrence_pattern": "..." },
  "impulse": { "drive_state": "...", "urgency": "..." },
  "governance": { "jurisdiction": "...", "consent_basis": "..." },
  "telemetry": { "entry_confidence": 0.95 },
  "system": { "embeddings": [] },
  "crosswalks": { "plutchik_primary": "..." }
}`}
                </pre>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {domainLegend.map((item) => (
                  <div key={item.domain} className="flex items-center gap-2 text-xs">
                    <span className="font-mono text-primary">{item.domain}</span>
                    <span className="text-muted-foreground">— {item.description}</span>
                  </div>
                ))}
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
