import { Archive, Bot, Brain, Building2, Heart, RefreshCw } from "lucide-react";

const useCases = [
  {
    icon: Heart,
    title: "Personal Media",
    description: "Annotate photos, videos, and journals with emotional context that persists across platforms.",
  },
  {
    icon: Archive,
    title: "Therapeutic Archives",
    description: "Secure, governed storage of emotional data for therapeutic and mental health applications.",
  },
  {
    icon: Bot,
    title: "Reflective Agents",
    description: "AI companions that maintain emotional continuity and authentic relational memory.",
  },
  {
    icon: RefreshCw,
    title: "Memory Retrieval Engines",
    description: "Systems that can query and reconstruct emotional context from past interactions.",
  },
  {
    icon: Brain,
    title: "Life-long AI",
    description: "Persistent AI systems that accumulate and integrate emotional understanding over time.",
  },
  {
    icon: Building2,
    title: "Enterprise Compliance",
    description: "Governed emotional data handling that meets regulatory and ethical requirements.",
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
            EDM enables a new category of applications where emotional data is a first-class citizen.
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
