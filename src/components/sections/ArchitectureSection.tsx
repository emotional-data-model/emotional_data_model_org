const ArchitectureSection = () => {
  return (
    <section className="spec-section" id="architecture">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">
            <b>Architecture</b>
          </div>
          <div>
            <h2 className="sec-title">
              Three layers, one invariant: representation precedes computation.
            </h2>
            <p className="sec-lede">
              EDM separates what something is (Representation), how it is preserved (Persistence),
              and what can be done with it (Computation). The boundaries are enforced structurally,
              not by policy.
            </p>
          </div>
        </div>

        <div className="layers">
          <div className="layer l3">
            <div className="lyr-n">
              LAYER 03
              <b>Computation</b>
            </div>
            <div>
              <h3>External compute — retrieval, appraisal, agentic workflows</h3>
              <p>
                Any downstream system reads from the persistence layer. EDM takes no position on
                the compute model, only on its source of truth.
              </p>
            </div>
            <div className="chips">
              <span className="chip">retrieval</span>
              <span className="chip">appraisal</span>
              <span className="chip">vector-search</span>
            </div>
          </div>

          <div className="layer-conn">
            <span>
              <i></i>
              READS / COMPUTES OVER
              <i></i>
            </span>
          </div>

          <div className="layer l2">
            <div className="lyr-n">
              LAYER 02
              <b>Persistence</b>
            </div>
            <div>
              <h3>.ddna — a byte-stable, governance-bound envelope</h3>
              <p>
                Canonical serialisation, integrity guarantees, and immutable governance attachment.
                Sovereignty travels with the payload.
              </p>
            </div>
            <div className="chips">
              <span className="chip">canonical</span>
              <span className="chip">signed</span>
              <span className="chip">VitaPass</span>
              <span className="chip">jurisdictional</span>
            </div>
          </div>

          <div className="layer-conn">
            <span>
              <i></i>
              ENCAPSULATES
              <i></i>
            </span>
          </div>

          <div className="layer l1">
            <div className="lyr-n">
              LAYER 01
              <b>Representation</b>
            </div>
            <div>
              <h3>EDM schema — the affective manifold</h3>
              <p>
                Ten domain-complete structures covering narrative anchors, affective topology,
                salience geometry, contextual framing, and motivational orientation.
              </p>
            </div>
            <div className="chips">
              <span className="chip">10 domains</span>
              <span className="chip">schema-bound</span>
              <span className="chip">non-inferential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
