import { AlertCircle, Brain, Database, Info, Scale, Shield } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Emotional Representation Missing",
    description: "Current AI systems lack structured frameworks for representing emotional states as explicit, subject-provided data.",
  },
  {
    icon: AlertCircle,
    title: "LLM Drift",
    description: "Without stable emotional anchors, language models drift from their original affective context over time.",
  },
  {
    icon: Database,
    title: "No Stable Substrate",
    description: "Emotional data requires a persistent, schema-governed substrate that survives model upgrades and vendor changes.",
  },
  {
    icon: Shield,
    title: "Ungoverned Memory",
    description: "Emotional memory in AI is not model-governed, leading to inconsistent and unreliable affective recall.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "EDM provides representational infrastructure compatible with EU AI Act Article 5(1)(f) requirements, which restrict AI systems that infer emotions from biometric signals. EDM operates on explicitly expressed content rather than inferred states.",
  },
  {
    icon: Info,
    title: "Interpretation vs Inference",
    description: "Inference derives emotional states from involuntary signals—facial expressions, voice patterns, physiological data. Interpretation structures emotional content from explicitly provided text. EDM operates in the interpretation domain.",
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
            No common schema exists for representing emotional context across AI systems. EDM defines one.
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
