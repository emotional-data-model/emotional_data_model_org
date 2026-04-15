import { Download, ExternalLink, FileCode, FileJson, FileText, Github } from "lucide-react";

const downloads = [
  {
    icon: FileText,
    title: "Whitepaper PDF",
    description: "Complete EDM v0.8.0 specification",
    href: "https://zenodo.org/records/19555166",
  },
  {
    icon: FileJson,
    title: "Schema JSON",
    description: "Canonical schema with 10 domain fragments",
    href: "https://github.com/emotional-data-model/edm-spec/tree/main/schema",
  },
  {
    icon: FileCode,
    title: "Example Artifacts",
    description: "Validated .ddna.json examples",
    href: "https://github.com/emotional-data-model/edm-spec/tree/main/examples",
  },
];

const repos = [
  {
    title: "edm-spec",
    description: "Canonical schema, validation, and examples",
    href: "https://github.com/emotional-data-model/edm-spec",
  },
  {
    title: "ddna-reader",
    description: "Verify and inspect .ddna envelopes",
    href: "https://github.com/emotional-data-model/ddna-reader",
  },
  {
    title: "ddna-tools",
    description: "CLI for sealing, verifying, and inspecting artifacts",
    href: "https://github.com/emotional-data-model/ddna-tools",
  },
];

const DownloadsSection = () => {
  return (
    <section id="downloads" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Downloads
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access the full specification, schemas, and sample files.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {downloads.map((download) => (
            <a
              key={download.title}
              href={download.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary rounded-lg p-6 hover:bg-primary/90 transition-colors duration-300 group block"
            >
              <download.icon className="w-10 h-10 text-white mb-4" />
              <h3 className="font-semibold mb-1 text-white">{download.title}</h3>
              <p className="text-sm text-white/80 mb-4">{download.description}</p>
              <div className="flex items-center justify-end">
                <Download className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-6 block text-center">
            Reference Implementation
          </span>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {repos.map((repo) => (
              <a
                key={repo.title}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary rounded-lg p-6 hover:bg-primary/90 transition-colors duration-300 group block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Github className="w-5 h-5 text-white" />
                  <h3 className="font-semibold font-mono text-sm text-white">{repo.title}</h3>
                  <span className="text-xs font-mono text-white/80 bg-white/20 rounded px-2 py-0.5 ml-auto">MIT</span>
                </div>
                <p className="text-sm text-white/80 mb-3">{repo.description}</p>
                <div className="flex items-center justify-end">
                  <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
