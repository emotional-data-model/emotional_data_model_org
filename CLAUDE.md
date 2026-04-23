# emotional_data_model_org

Public website for the EDM open standard.

**Last session:** 2026-04-23 — DownloadsSection updated to reflect ddna-tools v0.3.0 extraction capability (796ba31)

## What This Repo Is

The public-facing website at emotionaldatamodel.org — the
neutral open standards body for EDM. Hosts documentation,
verification widget, and specification references.

- **License:** MIT
- **Live at:** emotionaldatamodel.org
- **Current EDM version displayed:** v0.8.0

## Role in the DeepaData System

```
   edm-spec (MIT, schema)
       ↓ referenced by
→ emotionaldatamodel.org ← YOU ARE HERE
       ↓ public verification widget calls
   deepadata-com /api/v1/verify (read-only lookup)
```

This is the open standard's public face. It references
the spec but does not implement extraction or sealing.

## Dual-Domain Strategy

- `emotionaldatamodel.org` — neutral standards body, MIT,
  read-only verification, spec documentation
- `deepadata.com` — commercial CA, hosted API, sealing,
  registry writes, VitaPass provisioning

## What This Site Does

- Display EDM specification documentation
- Host public verification widget (registry lookup)
- Provide citation information (Zenodo DOI)
- Link to GitHub repos in emotional-data-model org

## What This Site Does NOT Do

- Extract artifacts (use ddna-tools for canonical profiles)
- Seal or certify (use deepadata-com API)
- Write to registry (use deepadata-com API)

## Source of Truth

→ **See `deepadata-com/planning/CLAUDE_PROJECT.md`**
