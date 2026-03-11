# emotionaldatamodel.org Proposed Changes

**Status:** DRAFT — not committed
**Author:** Jason Harvey
**Date:** March 2026

---

## Proposed Change A: Add Semantic Convergence Trust Signal to HeroSection

### Rationale

The 77% cross-provider semantic convergence result (from 1,731 API calls across Anthropic, OpenAI, and Kimi) is a key empirical anchor for EDM's credibility. Adding this to the hero section communicates that EDM is not a theoretical framework but an empirically validated representation.

### File: `src/components/sections/HeroSection.tsx`

#### BEFORE (lines 24-26):

```tsx
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up font-light" style={{ animationDelay: '0.2s' }}>
            An open specification for representing affective context in portable, machine-readable form.
          </p>
```

#### AFTER:

```tsx
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-up font-light" style={{ animationDelay: '0.2s' }}>
            An open specification for representing affective context in portable, machine-readable form.
          </p>

          <p className="text-sm text-muted-foreground/80 max-w-xl mx-auto mb-10 animate-fade-up font-mono" style={{ animationDelay: '0.25s' }}>
            77% cross-provider semantic convergence across independent LLMs
          </p>
```

### Notes

- Reduced `mb-10` to `mb-6` on main description
- Added new trust signal paragraph in smaller, monospace font
- Convergence claim is empirically grounded (corpus evaluation, March 2026)

---

## Proposed Change B: Add "Build on EDM" CTA to DownloadsSection

### Rationale

The site currently lacks a clear integration pathway for developers who want to build on EDM. Adding a "Build on EDM" card in the Downloads section creates a natural progression from "download the spec" to "integrate with the platform."

### File: `src/components/sections/DownloadsSection.tsx`

#### BEFORE (lines 82-107 — Reference Implementation section):

```tsx
        <div className="max-w-4xl mx-auto mt-12">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-6 block text-center">
            Reference Implementation
          </span>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {repos.map((repo) => (
              ...
            ))}
          </div>
        </div>
```

#### AFTER:

```tsx
        <div className="max-w-4xl mx-auto mt-12">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-6 block text-center">
            Reference Implementation
          </span>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {repos.map((repo) => (
              ...
            ))}
          </div>
        </div>

        {/* Build on EDM CTA */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Build on EDM</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Integrate EDM into your memory platform, agent framework, or AI application.
              Access the hosted API, SDK, and certification services.
            </p>
            <a
              href="https://www.deepadata.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Integration Docs
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
```

### Notes

- Placed after the Reference Implementation grid
- Gradient background distinguishes it from the repo cards
- Links to deepadata.com/docs as the integration entry point
- Copy emphasises integration use cases (memory platforms, agent frameworks)

---

## Alternative: Add to a new "Integrate" section

If preferred, these CTAs could be a separate section between Downloads and Version History:

```tsx
// New component: src/components/sections/IntegrateSection.tsx

const IntegrateSection = () => {
  return (
    <section id="integrate" className="relative py-24 lg:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">
            For Developers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build on EDM
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            EDM is the open artifact format. DeepaData provides the hosted infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-primary rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Memory Platforms</h3>
            <p className="text-white/80 text-sm mb-4">
              Add EDM extraction alongside your existing memory layer.
              Start with Core Profile for lightweight emotional grounding.
            </p>
            <a href="https://www.deepadata.com/ai-memory-platforms" className="text-white/90 text-sm font-mono hover:text-white">
              Learn more →
            </a>
          </div>

          <div className="bg-primary rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Regulated Applications</h3>
            <p className="text-white/80 text-sm mb-4">
              Use Full Profile with Certified conformance for EU AI Act compliance,
              therapy platforms, and enterprise audit requirements.
            </p>
            <a href="https://www.deepadata.com/docs" className="text-white/90 text-sm font-mono hover:text-white">
              View docs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrateSection;
```

And add to Index.tsx:

```tsx
// In src/pages/Index.tsx, add after DownloadsSection:
import IntegrateSection from "@/components/sections/IntegrateSection";

// ...
<DownloadsSection />
<IntegrateSection />
<div className="section-divider" />
<VersionSection />
```

---

## Summary

| Change | File | Description |
|--------|------|-------------|
| A | HeroSection.tsx | Add 77% convergence trust signal |
| B | DownloadsSection.tsx | Add "Build on EDM" CTA card |
| (Alt) | New IntegrateSection.tsx | Dedicated integration section |

---

*These changes are proposed only. Awaiting approval before implementation.*
