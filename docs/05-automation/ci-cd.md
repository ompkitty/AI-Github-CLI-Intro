---
title: CI und CD
description: Kontinuierliche Integration als Qualitätsgatter und Continuous Delivery als kontrollierte Auslieferung.
sidebar_position: 2
---

## Was ist das?

**CI** prüft jede Änderung automatisch (Build, Tests, Lint). **CD** liefert geprüfte Stände kontrolliert aus (hier: GitHub Pages).

## Warum ist es relevant?

CI fängt Fehler, bevor Menschen sie reviewen müssen. CD sorgt dafür, dass „gemergt“ auch „live“ bedeutet – reproduzierbar statt per Hand.

## Wie funktioniert es?

Typische CI-Stufen für dieses Projekt:

1. `npm ci` – reproduzierbare Installation.
2. `npm run build` – Docusaurus-Produktionsbuild.
3. Optional: Tests, Lint, Typecheck.
4. Artefakt-Upload (`build/`).

CD-Stufe: `deploy-pages` in der `github-pages`-Umgebung, nur auf dem Default-Branch.

Getrennt halten: PRs bauen ohne zu deployen; Default-Branch baut und deployt.

## Wie prüfe ich das Ergebnis?

```bash
gh pr checks <nummer>
gh run list --limit 10
```

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent betrachtet rote Checks als Arbeitsauftrag: Log lesen, lokal reproduzieren, fixen, erneut validieren – nicht als Pech.

## Welche Risiken sind zu beachten?

Flaky Tests und gecachte Dependencies erzeugen Scheinerfolge. Bei Zweifel: sauber neu bauen statt Cache zu vertrauen.

## Weiterführend

- [GitHub Actions](github-actions.md)
- [Bugfix](../06-patterns/bugfix.md)
