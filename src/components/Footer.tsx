import { Github, Twitter } from "lucide-react";
import EDMLogo from "./EDMLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <EDMLogo />
            <div className="h-8 w-px bg-border hidden md:block" />
            <p className="text-sm text-muted-foreground">
              © 2025 DeepaData Research. Open protocol.
            </p>
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
