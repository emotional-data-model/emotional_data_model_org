import { Download, FileCode, FileJson, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloads = [
  {
    icon: FileText,
    title: "Whitepaper PDF",
    description: "Complete EDM specification v0.4.0",
    filename: "edm-whitepaper-v0.4.0.pdf",
    size: "2.4 MB",
  },
  {
    icon: FileJson,
    title: "Schema JSON",
    description: "JSON Schema definition files",
    filename: "edm-schema-v0.4.0.json",
    size: "48 KB",
  },
  {
    icon: FileCode,
    title: ".ddna Sample",
    description: "Example envelope with sample data",
    filename: "sample.ddna",
    size: "12 KB",
  },
];

const DownloadsSection = () => {
  return (
    <section id="downloads" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-accent tracking-widest uppercase mb-4 block">
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
            <div
              key={download.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <download.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-semibold mb-1">{download.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{download.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{download.size}</span>
                <Button variant="ghost" size="sm" className="group-hover:text-accent">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
