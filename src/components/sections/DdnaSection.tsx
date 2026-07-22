import { FileCode, Fingerprint, Link2, Lock, Shield } from "lucide-react";

const properties = [
  { icon: Lock, label: "Tamper-evident", description: "Cryptographic integrity verification" },
  { icon: FileCode, label: "Persistent", description: "Designed for long-term storage" },
  { icon: Fingerprint, label: "Identity-aligned", description: "Bound to source identity" },
  { icon: Shield, label: "Governance metadata", description: "Embedded policy controls" },
  { icon: Link2, label: "Interoperable", description: "Built for cross-system exchange" },
];

const DdnaSection = () => {
  return (
    <section id="ddna" className="relative py-24 lg:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            The Container
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The <span className="font-mono text-secondary">.ddna</span> Envelope
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A secure, self-describing container format for affective context that ensures integrity, provenance, and long-range interoperability.
          </p>

          <div className="max-w-xl mx-auto text-left mb-8">
            <h4 className="text-sm font-semibold text-foreground mb-3">Issuance pathways</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-medium text-foreground">Subject-initiated</span> — the subject provides the content and initiates issuance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-medium text-foreground">Delegated</span> — an authorised delegate issues on behalf of the subject under recorded authority.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-medium text-foreground">Retrospective</span> — prior text can be structured into EDM with explicit subject authorisation.</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3">
              Each issuance event records its pathway and associated governance metadata in-band.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {properties.map((prop) => (
            <div
              key={prop.label}
              className="flex items-center gap-3 bg-primary rounded-full px-5 py-3 hover:bg-primary/90 transition-colors duration-300"
            >
              <prop.icon className="w-4 h-4 text-white" />
              <div className="text-left">
                <span className="text-sm font-medium text-white">{prop.label}</span>
                <span className="text-xs text-white/80 ml-2 hidden sm:inline">
                  {prop.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="border-gradient p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="font-mono text-xs text-muted-foreground ml-2">sample.ddna</span>
            </div>
            <pre className="font-mono text-xs text-muted-foreground leading-relaxed overflow-x-auto">
{`{
  `}<span className="text-primary">"ddna_header"</span>{`: {
    "ddna_version": "1.1",
    "edm_version": "0.8.3",
    "payload_type": "edm.v0.8.full",
    "consent_basis": "explicit_consent",
    "jurisdiction": "AU",
    "audit_chain": [ ... ]
  },
  `}<span className="text-secondary">"edm_payload"</span>{`: {
    "meta": { ... }, "core": { ... },
    "constellation": { ... }, "milky_way": { ... },
    "gravity": { ... }, "impulse": { ... },
    "governance": { ... }, "telemetry": { ... },
    "system": { ... }, "crosswalks": { ... }
  },
  `}<span className="text-primary">"proof"</span>{`: {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-jcs-2022",
    "verificationMethod": "did:key:z6Mk...",
    "proofValue": "z3FXQeKv..."
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DdnaSection;
