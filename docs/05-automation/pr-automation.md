---
title: PR-Automatisierung
description: Pull Requests automatisch prüfen lassen – Checks, Labels und Merge-Regeln als Qualitätsgatter.
sidebar_position: 4
---

## Was ist das?

Automatisierung rund um Pull Requests: erforderliche Checks, automatische Labels, Draft-Regeln und Merge-Gates.

## Warum ist es relevant?

Automatisierte Gates sichern Mindestqualität, bevor Menschen Zeit investieren – Build muss grün sein, bevor Review beginnt.

## Wie funktioniert es?

```bash
gh pr checks 7
gh pr view 7 --json state,mergeable,checks,reviews
gh pr edit 7 --add-label "docs"
```

Branch Protection (über Web-UI oder API mit entsprechender Berechtigung) legt fest, welche Checks vor Merge Pflicht sind.

## Wie prüfe ich das Ergebnis?

Vor Merge: alle Pflicht-Checks grün, Review-Status bekannt, kein offener Konflikt (`mergeable`).

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent wartet Checks aktiv ab (`gh pr checks`, `gh run list`), statt Merge voreilig anzunehmen, und fixt rote Checks anhand der Logs.

## Welche Risiken sind zu beachten?

Auto-Merge und Review-Dismissal ohne Auftrag sind tabu. Automatisierung ersetzt kein menschliches Review bei sicherheitsrelevanten Änderungen.

## Weiterführend

- [Pull-Request-Workflow](../04-ai-agents/pull-request-workflow.md)
- [Feature-Entwicklung](../06-patterns/feature-development.md)
