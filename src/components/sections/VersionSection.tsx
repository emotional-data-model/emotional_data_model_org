import { CheckCircle2, Circle } from "lucide-react";

const versions = [
  {
    version: "v0.4.0",
    status: "published",
    date: "December 2025",
    changes: [
      "Initial public release",
      "Core schema specification (10 domains, 96 fields)",
      ".ddna envelope format",
      "Affective manifold foundations",
    ],
  },
  {
    version: "v0.5.0",
    status: "published",
    date: "February 2026",
    changes: [
      "Enum expansions: emotion_primary (13), relational_dynamics (15), drive_state (9), coping_style (7), adaptation_trajectory (5)",
      "Identity binding renamed from AuraID to VitaPass",
      "W3C Data Integrity Proofs (eddsa-jcs-2022)",
      "New Zenodo DOI (10.5281/zenodo.18541956)",
    ],
  },
];

const VersionSection = () => {
  return (
    <section id="versions" className="relative py-24 lg:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Version History
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {versions.map((v, index) => (
            <div key={v.version} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < versions.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1">
                {v.status === "published" ? (
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                ) : (
                  <Circle className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
              
              <div className="bg-primary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono font-semibold text-lg text-white">{v.version}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-mono ${
                    v.status === "published"
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-white/70"
                  }`}>
                    {v.status}
                  </span>
                  <span className="text-xs text-white/70 ml-auto">{v.date}</span>
                </div>
                <ul className="space-y-2">
                  {v.changes.map((change) => (
                    <li key={change} className="text-sm text-white/80 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-white/60" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VersionSection;
