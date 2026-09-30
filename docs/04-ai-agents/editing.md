---
title: Dateien ändern
description: Kleine, musterkonforme Änderungen – bestehende Konventionen vor eigenen Ideen.
sidebar_position: 4
---

## Was ist das?

Die Änderungsphase: Dateien im Arbeitsbaum bearbeiten, ohne fremde Arbeit zu berühren.

## Warum ist es relevant?

Jede Änderung konkurriert mit paralleler Arbeit anderer. Kleine Diffs gewinnen Reviews; große verlieren sie.

## Wie funktioniert es?

Regeln:

- Bestehende Muster bevorzugen (Front-Matter, Komponenten, Styles, Plugins wiederverwenden).
- Markdown statt MDX, außer Interaktivität erfordert JSX.
- Bestehende URLs, IDs, Slugs und Sidebar-Strukturen nicht ohne Grund ändern.
- Keine neuen Abhängigkeiten ohne nachvollziehbaren Nutzen.
- Keine Secrets in Dateien schreiben (kein `.env`, keine Tokens).
- Keine unnötigen Dateien anlegen.

Vor dem Weitergehen:

```bash
git status --short --branch
git diff --check
```

## Wie prüfe ich das Ergebnis?

`git diff` zeigt genau die Task-Dateien, nichts sonst. `git diff --check` ist sauber.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent editiert gezielt (kleine Ersetzungen statt Voll-Rewrites), liest editierte Regionen gegen und repariert Verletzungen von Erhaltungsregeln sofort.

## Welche Risiken sind zu beachten?

- Formatierungs-Tools können ganze Dateien umschreiben – Diff danach prüfen.
- `.nojekyll`/`CNAME`/Branch-Deploy-Konfiguration nicht blind anfassen.

## Weiterführend

- [Git ausführen](git-workflow.md)
- [Validieren](validation.md)
