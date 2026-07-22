const DownloadsSection = () => {
  const downloads = [
    {
      ext: "PDF",
      title: "Whitepaper",
      description: "Full specification: representational architecture, envelope model, governance.",
      size: "v0.8.3 · 90 pp",
      href: "https://zenodo.org/records/21490478",
    },
    {
      ext: "JSON",
      title: "Schema",
      description: "JSON-Schema definitions for all ten domains, enumerations, and invariants.",
      size: "edm-spec",
      href: "https://github.com/emotional-data-model/edm-spec",
    },
    {
      ext: "CLI",
      title: "Extract, seal, verify",
      description: "Extract EDM artifacts from text (BYOK: Anthropic, OpenAI, Kimi), seal as .ddna envelopes with Ed25519, verify offline. Canonical profiles (essential, extended, full).",
      size: "npm install -g ddna-tools",
      href: "https://github.com/emotional-data-model/ddna-tools",
    },
    {
      ext: "TS",
      title: "Envelope reader",
      description: "Verify and inspect .ddna envelopes in TypeScript/JavaScript.",
      size: "ddna-reader",
      href: "https://github.com/emotional-data-model/ddna-reader",
    },
  ];

  return (
    <section className="spec-section" id="downloads">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">
            <b>Artifacts</b>
          </div>
          <div>
            <h2 className="sec-title">Specification, schema, reference envelopes.</h2>
            <p className="sec-lede">
              All artifacts are published with DOI anchoring.
              Reference encoders and validators follow separately.
            </p>
          </div>
        </div>

        <div className="downloads">
          {downloads.map((dl) => (
            <a
              key={dl.title}
              href={dl.href}
              target="_blank"
              rel="noopener noreferrer"
              className="dl"
            >
              <div className="t">
                <span className="ext">{dl.ext}</span>
                <h4>{dl.title}</h4>
              </div>
              <p>{dl.description}</p>
              <div className="f">
                <span>{dl.size}</span>
                <span>↓ download</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
