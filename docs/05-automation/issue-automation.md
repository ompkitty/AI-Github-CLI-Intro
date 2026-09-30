---
title: Issue-Automatisierung
description: Issues triagieren, labeln und mit Agenten-Workflows verbinden – ohne Spam zu erzeugen.
sidebar_position: 3
---

## Was ist das?

Regeln und Workflows, die Issues automatisch einordnen: Labels, Zuweisung, Duplikat-Hinweise, Verknüpfung mit PRs (`Closes #12`).

## Warum ist es relevant?

Gute Triage verkürzt die Zeit von „gemeldet“ bis „behoben“. Schlechte Automatisierung erzeugt Rauschen, das alle ignorieren.

## Wie funktioniert es?

Bausteine:

```bash
gh issue list --json number,title,labels,state
gh issue view 12 --json number,title,body,labels
gh label list
gh label create "agent-ready" --color 000000 --description "Bereit fuer Agentenbearbeitung"
```

PR-Bodys schließen Issues automatisch beim Merge:

```text
Closes #12
```

## Wie prüfe ich das Ergebnis?

Issue-Status, Labels und verlinkte PRs in `gh issue view` gegenprüfen.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent liest Issue-Titel, Body und Labels, plant danach und referenziert die Issue-Nummer im PR-Body – für Nachvollziehbarkeit ohne manuelle Klicks.

## Welche Risiken sind zu beachten?

Automatisches Schließen oder massenhaftes Kommentieren ohne Auftrag ist tabu. Labels erst nach Team-Abstimmung einführen.

## Weiterführend

- [Issues mit gh](../03-github-cli/issues.md)
- [PR-Automatisierung](pr-automation.md)
