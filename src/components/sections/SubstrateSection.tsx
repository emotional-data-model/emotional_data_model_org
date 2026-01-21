const concepts = [
  {
    term: "Affective Vectors",
    definition: "Multi-dimensional representations of emotional states in a continuous space.",
  },
  {
    term: "Salience",
    definition: "Weighting mechanism that determines the significance of emotional data points.",
  },
  {
    term: "Emotional Gravity",
    definition: "The pull of past emotional states on current affective computation.",
  },
  {
    term: "Temporal Layers",
    definition: "Stratified representation of emotional evolution across time scales.",
  },
  {
    term: "Resonance Delta",
    definition: "The measurable difference between expected and actual emotional response.",
  },
  {
    term: "Cybernetic Lineage",
    definition: "The traceable heritage of emotional data through system transformations.",
  },
];

const SubstrateSection = () => {
  return (
    <section id="substrate" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            Core Concepts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Emotional Substrate & Affective Manifold
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The mathematical and conceptual foundations that enable structured emotional representation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {concepts.map((concept, index) => (
            <div
              key={concept.term}
              className="group p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-primary/60">0{index + 1}</span>
                <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {concept.term}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {concept.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubstrateSection;
