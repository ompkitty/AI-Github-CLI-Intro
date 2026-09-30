---
title: Validieren
description: Lokal prüfen, was prüfbar ist – Diff, Build, Tests, Links – bevor CI die Arbeit übernimmt.
sidebar_position: 7
---

## Was ist das?

Die Validierungsphase: alle lokalen Nachweise einsammeln, bevor gepusht wird.

## Warum ist es relevant?

Lokale Fehler lokal zu finden ist um Größenordnungen billiger als über CI-Schleifen.

## Wie funktioniert es?

Mindestens:

```bash
git diff --check
git status --short --branch
```

Bei Docusaurus zusätzlich mit dem Projekt-Paketmanager (hier npm):

```bash
npm ci
npm run build
```

Sowie, falls vorhanden: `npm test`, `npm run lint`, `npm run typecheck`. Zusätzlich prüfen: tote Links, verwaiste Dokumente, Sidebar, Navigation, Codebeispiele, Kontrast, Fokus, Responsive.

## Wie prüfe ich das Ergebnis?

Build-Log mit `Generated static files in "build"`, sauberes `git diff --check`, grüne Zusatz-Checks. Ergebnisse im Abschlussbericht nennen – keine behaupteten Erfolge.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent validiert nach jeder Korrektur erneut und unterscheidet klar: lokaler Build ≠ Deployment. Produktion gilt erst bei erfolgreichem Pages-Run als geliefert.

## Welche Risiken sind zu beachten?

Validierung ohne Blick auf das Ergebnis (Log nicht gelesen) ist keine Validierung. Fehlgeschlagene Checks klar als offen benennen.

## Weiterführend

- [Pull Requests](pull-request-workflow.md)
- [GitHub Pages Deployment](../05-automation/pages-deployment.md)
