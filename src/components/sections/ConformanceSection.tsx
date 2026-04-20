const ConformanceSection = () => {
  return (
    <section className="spec-section" id="conformance">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">
            <b>Conformance</b>
          </div>
          <div>
            <h2 className="sec-title">
              Three levels of graduated trust — from development artifacts to certified deployments.
            </h2>
            <p className="sec-lede">
              Conformance is independent of profile scope. Essential, Extended, and Full profiles can
              each reach any level; Partner profiles compose against the same matrix.
            </p>
          </div>
        </div>

        <table className="matrix">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Level 1 · Compliant</th>
              <th>Level 2 · Sealed</th>
              <th>Level 3 · Certified</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                Essential
                <small>Minimum viable domains</small>
              </th>
              <td className="cell-yes">Schema-valid</td>
              <td className="cell-yes">Hash + signature</td>
              <td className="cell-opt">Third-party attest.</td>
            </tr>
            <tr>
              <th>
                Extended
                <small>+ topology, salience</small>
              </th>
              <td className="cell-yes">Schema-valid</td>
              <td className="cell-yes">Hash + signature</td>
              <td className="cell-yes">Third-party attest.</td>
            </tr>
            <tr>
              <th>
                Full
                <small>Domain-complete manifold</small>
              </th>
              <td className="cell-yes">Schema-valid</td>
              <td className="cell-yes">Hash + signature</td>
              <td className="cell-yes">Third-party attest.</td>
            </tr>
            <tr>
              <th>
                Partner
                <small>Vendor-specific extension</small>
              </th>
              <td className="cell-yes">Schema-valid</td>
              <td className="cell-opt">Optional</td>
              <td className="cell-opt">By agreement</td>
            </tr>
          </tbody>
        </table>

        <div className="mono mute" style={{ marginTop: '20px', fontSize: '11px', display: 'flex', gap: '24px' }}>
          <span>● Required</span>
          <span>○ Optional</span>
          <span>— Not applicable</span>
        </div>
      </div>
    </section>
  );
};

export default ConformanceSection;
