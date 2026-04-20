const EnvelopeDiagram = () => (
  <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.18"/>
      </pattern>
    </defs>

    {/* outer envelope */}
    <rect x="10" y="10" width="400" height="320" rx="4" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.2"/>
    <text x="24" y="30" fontFamily="var(--font-mono)" fontSize="9" fill="hsl(var(--accent))" letterSpacing="1">.DDNA ENVELOPE · BYTE-STABLE</text>
    <text x="396" y="30" fontFamily="var(--font-mono)" fontSize="9" fill="hsl(var(--accent))" letterSpacing="1" textAnchor="end">SEALED</text>

    {/* governance band */}
    <rect x="24" y="44" width="372" height="58" rx="2" fill="hsl(var(--accent) / 0.08)" stroke="hsl(var(--accent))" strokeOpacity="0.4"/>
    <text x="36" y="62" fontFamily="var(--font-mono)" fontSize="9" fill="hsl(var(--accent))" letterSpacing="1">GOVERNANCE HEADER</text>
    <g fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.85">
      <text x="36" y="82">vitapass: "vp-id://…"</text>
      <text x="36" y="96">jurisdiction: "AU"</text>
      <text x="220" y="82">retention: "P7Y"</text>
      <text x="220" y="96">consent: "subject-aligned"</text>
    </g>

    {/* payload: EDM artifact with dotted fill */}
    <rect x="24" y="112" width="372" height="150" rx="2" fill="url(#dots)" stroke="hsl(var(--primary))" strokeOpacity="0.55"/>
    <text x="36" y="130" fontFamily="var(--font-mono)" fontSize="9" fill="hsl(var(--primary))" letterSpacing="1">EDM ARTIFACT · R(x) = (Σ, E)</text>
    <g fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.9">
      <text x="36" y="152">narrative:   [anchors × n]</text>
      <text x="36" y="170">constellation: {'{'}nodes, edges{'}'}</text>
      <text x="36" y="188">milky_way:   {'{'}frame, temporal{'}'}</text>
      <text x="36" y="206">gravity:     {'{'}weights, decay{'}'}</text>
      <text x="36" y="224">impulse:     {'{'}vectors{'}'}</text>
      <text x="36" y="248" fill="hsl(var(--primary))" opacity="0.8">meta.profile: "full"</text>
    </g>

    {/* integrity footer */}
    <rect x="24" y="272" width="372" height="46" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.35"/>
    <text x="36" y="290" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.55" letterSpacing="1">INTEGRITY</text>
    <g fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.85">
      <text x="36" y="308">sha256: 7f3c…8b2a</text>
      <text x="220" y="308">sig: ed25519 ✓</text>
    </g>
  </svg>
);

const EnvelopeSection = () => {
  return (
    <section className="spec-section" id="envelope">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">
            <b>.ddna Envelope</b>
          </div>
          <div>
            <h2 className="sec-title">
              Representation is preserved by a byte-stable, governance-bound envelope.
            </h2>
            <p className="sec-lede">
              The .ddna envelope binds governance logic — jurisdiction, identity rights, retention —
              directly to the payload. Compliance persists during transport; it is not reconstructed
              at the destination.
            </p>
          </div>
        </div>

        <div className="envelope">
          <div className="env-diagram">
            <EnvelopeDiagram />
          </div>
          <div className="env-copy">
            <span className="extn">.ddna · application/ddna+cbor</span>
            <h3>Sovereignty bound at the payload</h3>
            <ul>
              <li>
                <span className="k">Canonical</span>
                <span className="val">
                  <b>Byte-stable serialisation.</b> Two conformant encoders produce identical bytes
                  for identical artifacts.
                </span>
              </li>
              <li>
                <span className="k">Integrity</span>
                <span className="val">
                  <b>Cryptographic seal.</b> SHA-256 + ed25519. Tampering is detectable without
                  interpretation.
                </span>
              </li>
              <li>
                <span className="k">Identity</span>
                <span className="val">
                  <b>VitaPass.</b> Subject identity bound in-band, independent of platform.
                </span>
              </li>
              <li>
                <span className="k">Jurisdictional</span>
                <span className="val">
                  <b>In-band governance.</b> Jurisdiction, consent, retention travel with the artifact.
                </span>
              </li>
              <li>
                <span className="k">Stateless</span>
                <span className="val">
                  <b>Reduced-governance mode</b> available for interchange without subject identity.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvelopeSection;
