const DomainsSection = () => {
  return (
    <section className="spec-section" id="domains">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">
            <b>Affective Manifold</b>
          </div>
          <div>
            <h2 className="sec-title">
              Five core domains, ten total. Each with canonical keys, enumerations, and invariants.
            </h2>
            <p className="sec-lede">
              The manifold is domain-complete: every EDM artifact populates the same structural surface,
              with no omissions and no inference. Governance domains extend this surface without mutating it.
            </p>
          </div>
        </div>

        <div className="grid-5">
          <div className="domain">
            <div className="mark">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M3 6 L23 6 M3 13 L18 13 M3 20 L13 20" className="stroke-primary"/>
              </svg>
            </div>
            <h4>Narrative Primitives</h4>
            <div className="ns">core</div>
            <p>Identity, role, and narrative anchors. The discrete units on which higher-order affect composes.</p>
          </div>

          <div className="domain">
            <div className="mark">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="6" cy="6" r="1.5" className="fill-primary" stroke="none"/>
                <circle cx="20" cy="7" r="1.5" className="fill-primary" stroke="none"/>
                <circle cx="13" cy="14" r="1.5" className="fill-primary" stroke="none"/>
                <circle cx="7" cy="20" r="1.5" className="fill-primary" stroke="none"/>
                <circle cx="21" cy="19" r="1.5" className="fill-primary" stroke="none"/>
                <path d="M6 6 L13 14 L20 7 M13 14 L7 20 M13 14 L21 19" className="stroke-primary" strokeOpacity="0.45"/>
              </svg>
            </div>
            <h4>Emotional Topology</h4>
            <div className="ns">constellation</div>
            <p>Relational geometry between affective states. The shape, not the intensity, of emotional configuration.</p>
          </div>

          <div className="domain">
            <div className="mark">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.2">
                <ellipse cx="13" cy="13" rx="10" ry="5" className="stroke-primary"/>
                <ellipse cx="13" cy="13" rx="5" ry="10" className="stroke-primary" strokeOpacity="0.5"/>
              </svg>
            </div>
            <h4>Contextual Framing</h4>
            <div className="ns">milky_way</div>
            <p>Situational, temporal, and social framing under which affect is valid. Without frame, signal is noise.</p>
          </div>

          <div className="domain">
            <div className="mark">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="13" cy="13" r="3" className="fill-primary" stroke="none"/>
                <circle cx="13" cy="13" r="7" className="stroke-primary" strokeOpacity="0.6"/>
                <circle cx="13" cy="13" r="11" className="stroke-primary" strokeOpacity="0.25"/>
              </svg>
            </div>
            <h4>Salience &amp; Dynamics</h4>
            <div className="ns">gravity</div>
            <p>Weight, decay, and pull of each anchor over time. The dynamic field governing what persists and what fades.</p>
          </div>

          <div className="domain">
            <div className="mark">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M5 21 L21 5" className="stroke-primary"/>
                <path d="M21 5 L15 5 M21 5 L21 11" className="stroke-primary"/>
              </svg>
            </div>
            <h4>Motivational Orientation</h4>
            <div className="ns">impulse</div>
            <p>Direction of intent. What the subject is oriented toward or away from, independent of behavioural expression.</p>
          </div>
        </div>

        <div className="mono mute" style={{ marginTop: '28px', fontSize: '11px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <span>+ 5 governance domains: <span className="dim">meta · governance · telemetry · system · crosswalks</span></span>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
