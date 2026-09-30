---
title: Release-Workflow
description: Versionen vorbereiten, taggen und veröffentlichen – ruhig, dokumentiert, umkehrbar.
sidebar_position: 5
---

## Ablauf

1. Stand prüfen: `git status`, offene PRs (`gh pr list`), CI grün.
2. Notes entwerfen (Änderungen seit letztem Tag: `git log v1.1.0..main --oneline`).
3. Draft-Release anlegen und prüfen.
4. Veröffentlichen – nur mit ausdrücklichem Auftrag.
5. Danach URL und Tag verifizieren.

```bash
gh pr list --json number,title,state
git log v1.1.0..main --oneline
gh release create v1.2.0 --draft --title "v1.2.0" --notes "..."
gh release view v1.2.0 --json tagName,isDraft,url
```

## Prüfung

Tag, Draft-Status und URL wie beabsichtigt; Release-Notes nennen Nutzer-relevante Änderungen.

## Agentenhinweis

Der Agent bereitet vor, publiziert aber nicht selbstständig. Releases können Downstream-Automatisierung auslösen.

## Risiken

Falscher Tag, fehlende Notes, versehentlich veröffentlicht statt Draft.

## Weiterführend

- [Releases mit gh](../03-github-cli/releases.md)
- [CI/CD](../05-automation/ci-cd.md)
