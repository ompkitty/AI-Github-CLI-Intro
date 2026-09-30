---
title: GitHub Pages Deployment
description: Docusaurus per GitHub Actions auf Pages veröffentlichen – vom Workflow bis zur verifizierten URL.
sidebar_position: 6
---

## Was ist das?

Der Veröffentlichungsweg dieses Projekts: Push auf den Default-Branch → Actions baut Docusaurus → `build/`-Artefakt → GitHub Pages.

```text
Git source → GitHub repository → GitHub Actions → Docusaurus build → Pages artifact → GitHub Pages
```

## Warum ist es relevant?

Manuelle `gh-pages`-Branch-Commits sind fehleranfällig. Der Actions-Weg ist reproduzierbar, berechtigungsarm und im Run-Log nachvollziehbar.

## Wie funktioniert es?

**1. Workflow** (`.github/workflows/deploy.yml`, siehe [GitHub Actions](github-actions.md)) mit `workflow_dispatch` für manuelle Re-Runs.

**2. Docusaurus-Konfiguration** (`docusaurus.config.ts`):

- Projekt-Pages: `url: 'https://OWNER.github.io'`, `baseUrl: '/REPO/'`.
- User-/Organization-Pages (`OWNER.github.io`): `baseUrl: '/'`.
- Beide nicht vermischen. Keine erfundene `CNAME` ohne Custom Domain.

**3. Pages-Quelle** per API prüfen/einrichten:

```bash
gh api repos/{owner}/{repo}/pages
gh api --method POST repos/{owner}/{repo}/pages -f build_type=workflow
```

`{owner}/{repo}` zuvor via `gh repo view --json nameWithOwner` ermitteln.

**4. Überwachen:**

```bash
gh run list --limit 10
gh run watch <run-id> --exit-status
gh run view <run-id> --log-failed
```

**5. URL verifizieren:**

```bash
gh api repos/{owner}/{repo}/pages --jq '.html_url'
```

## Wie prüfe ich das Ergebnis?

Erst bei `completed/success` plus erreichbarer `html_url` (HTTP 200) gilt die Seite als veröffentlicht. Ein lokaler Build allein ist kein Deployment.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent fasst nie „veröffentlicht“ zusammen, solange der Run nicht grün und die URL nicht geprüft ist. Scheitert die API an fehlenden Rechten, dokumentiert er die manuell nötige Einstellung statt es zu wiederholen.

## Welche Risiken sind zu beachten?

- Push auf den Default-Branch deployt Produktion – Feature-Branches deployen nicht.
- Fehlende `workflow`-Build-Type-Konfiguration lässt `configure-pages` mit 404 scheitern.

## Weiterführend

- [GitHub Actions](github-actions.md)
- [Validieren](../04-ai-agents/validation.md)
