import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Motivation", href: "#motivation" },
  { label: "Architecture", href: "#architecture" },
  { label: "Domains", href: "#domains" },
  { label: "Conformance", href: "#conformance" },
  { label: ".ddna", href: "#envelope" },
  { label: "Versions", href: "#versions" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("motivation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["motivation", "architecture", "domains", "conformance", "envelope", "versions"];
      const scrollY = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav-top">
      <div className="wrap row">
        <a className="brand" href="#">
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="currentColor"/>
              <circle cx="9" cy="12" r="3" className="stroke-primary"/>
              <circle cx="15" cy="12" r="3" stroke="currentColor"/>
              <line x1="9" y1="12" x2="15" y2="12" className="stroke-primary"/>
            </svg>
          </span>
          <span>Emotional Data Model</span>
          <span className="v">v0.8.0</span>
        </a>

        <div className="navlinks hidden lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={activeSection === item.href.replace("#", "") ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm hidden sm:inline-flex" href="#downloads">Download</a>
          <a className="btn btn-primary btn-sm" href="https://zenodo.org/records/20678017" target="_blank" rel="noopener noreferrer">
            Read Spec <span className="arr">→</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'var(--ink-dim)' }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t" style={{ borderColor: 'var(--rule)' }}>
          <div className="wrap py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 dim hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
