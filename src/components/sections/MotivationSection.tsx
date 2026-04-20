const MotivationSection = () => {
  return (
    <section className="spec-section" id="motivation">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">
            <b>Motivation</b>
          </div>
          <div>
            <h2 className="sec-title">
              Today, affective context lives inside the model. That makes it non-portable,
              non-inspectable, and vulnerable to drift.
            </h2>
            <p className="sec-lede">
              Contemporary LLMs internalise emotional, narrative, and motivational cues transiently
              within latent activations. Those signals don't survive model updates, vendor migrations,
              or cross-context transport — and they can't be audited. EDM treats this as a
              representational deficit, not a tuning problem.
            </p>
          </div>
        </div>

        <div className="grid-3">
          <div className="motivation-card">
            <h3>Representational Deficit</h3>
            <p>
              Emotional state lives as a transient byproduct of inference — not as structured data.
              It cannot be inspected, compared, or preserved.
            </p>
          </div>
          <div className="motivation-card">
            <h3>Sovereignty Gap</h3>
            <p>
              Governance — jurisdiction, consent, retention — is applied by platforms, not attached
              to the artifact. Rights evaporate on export.
            </p>
          </div>
          <div className="motivation-card">
            <h3>Representation before computation</h3>
            <p>
              Structure is defined first, independent of any inference engine. Compute reads;
              it does not redefine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
