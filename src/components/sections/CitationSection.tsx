import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const citation = `Harvey, Jason. "The Emotional Data Model (EDM): A Schema-First Protocol for Emotional Representation, Governance, and AI Memory Integrity. v0.5.0." Zenodo (2026). DOI: 10.5281/zenodo.18541956`;

const bibtex = `@misc{harvey2026edm,
  author = {Harvey, Jason},
  title = {The Emotional Data Model (EDM): A Schema-First Protocol for Emotional Representation, Governance, and AI Memory Integrity},
  version = {0.5.0},
  year = {2026},
  publisher = {Zenodo},
  doi = {10.5281/zenodo.18541956}
}`;

const CitationSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast({
      title: "Copied to clipboard",
      description: `${type} citation copied successfully.`,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="citation" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-secondary tracking-widest uppercase mb-4 block">
            Reference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Citation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you use EDM in your research, please cite:
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Plain text citation */}
          <div className="bg-primary rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-white/70">Plain Text</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(citation, "Plain text")}
                className="gap-2 text-white hover:text-white hover:bg-white/20"
              >
                {copied === "Plain text" ? (
                  <Check className="w-4 h-4 text-secondary" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                Copy
              </Button>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">{citation}</p>
          </div>

          {/* BibTeX citation */}
          <div className="bg-primary rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-white/70">BibTeX</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(bibtex, "BibTeX")}
                className="gap-2 text-white hover:text-white hover:bg-white/20"
              >
                {copied === "BibTeX" ? (
                  <Check className="w-4 h-4 text-secondary" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                Copy
              </Button>
            </div>
            <pre className="text-sm font-mono text-white/80 overflow-x-auto whitespace-pre-wrap">
              {bibtex}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitationSection;
