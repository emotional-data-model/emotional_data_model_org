import { Github, Twitter, Mail } from "lucide-react";
import EDMLogo from "./EDMLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <EDMLogo />
            <div className="h-8 w-px bg-border hidden md:block" />
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-sm text-muted-foreground">
                © 2025 EDM Initiative. Open protocol.
              </p>
              <a
                href="mailto:contact@emotionaldatamodel.org"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                contact@emotionaldatamodel.org
              </a>
              <p className="text-xs text-muted-foreground/70">
                For hosted APIs and certification services, visit{" "}
                <a
                  href="https://deepadata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  deepadata.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
