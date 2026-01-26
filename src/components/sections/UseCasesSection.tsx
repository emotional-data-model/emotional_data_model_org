import { Archive, BookOpen, Brain, Heart, RefreshCw, Shield } from "lucide-react";

const useCases = [
  {
    icon: Brain,
    title: "Salience-Based Recall",
    description: "Retrieve affective context by significance, not recency. Enable systems to surface what matters across long timeframes.",
  },
  {
    icon: Heart,
    title: "Therapeutic Applications",
    description: "Structured affective context for mental health platforms with consent, jurisdiction, and retention controls embedded in-band.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Audit trails and provenance for AI systems processing affective context under EU AI Act and emerging frameworks.",
  },
  {
    icon: Archive,
    title: "Research Archives",
    description: "Consistent affective representation for longitudinal studies requiring schema stability across extended timeframes.",
  },
  {
    icon: RefreshCw,
    title: "Personal Data Portability",
    description: "User-owned affective records that transfer between applications under GDPR portability and similar rights.",
  },
  {
    icon: BookOpen,
    title: "Journaling & Legacy",
    description: "Structure meaningful user input\u2014journals, life stories, significant moments\u2014for long-term preservation and retrieval.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-secondary tracking-widest uppercase mb-4 block">
            Applications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Use Cases
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            EDM provides the representational foundation for applications where affective context must persist, transfer, and remain auditable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="border-gradient p-6 hover:bg-muted/20 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
