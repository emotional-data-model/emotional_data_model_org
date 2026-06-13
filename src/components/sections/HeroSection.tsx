import ManifoldDiagram from "@/components/ManifoldDiagram";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-label">
            <span className="bar"></span>
            Technical Specification · EDM v0.8.0
          </div>
          <h1 className="hero-h">
            A governed, model-agnostic substrate for <em>affective context</em> in AI systems.
          </h1>
          <p className="hero-sub">
            EDM externalises emotional, narrative, and motivational context as a deterministic,
            schema-bound data object — decoupled from any single model, vendor, or inference engine.
          </p>
          <div className="hero-formula">
            <span className="lbl">Core</span>
            <span className="eq">
              R(x) = ( <u>Σ(x)</u> , <u>E(x)</u> )
            </span>
          </div>
          <div className="hero-cta">
            <a className="btn btn-primary" href="https://zenodo.org/records/20678017" target="_blank" rel="noopener noreferrer">
              Read the specification <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="https://zenodo.org/records/20678017" target="_blank" rel="noopener noreferrer">
              Download whitepaper (PDF)
            </a>
          </div>
          <div className="hero-meta">
            <div className="m">
              <span className="k">Schema</span>
              <span className="val">v0.8.0</span>
            </div>
            <div className="m">
              <span className="k">Domains</span>
              <span className="val">10</span>
            </div>
            <div className="m">
              <span className="k">Envelope</span>
              <span className="val">.ddna</span>
            </div>
          </div>
        </div>

        <ManifoldDiagram />
      </div>
    </section>
  );
};

export default HeroSection;
