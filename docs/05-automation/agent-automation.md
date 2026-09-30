---
title: Agenten-Automatisierung
description: Wiederkehrende Routineaufgaben an Agenten delegieren – mit klaren Aufträgen und prüfbaren Ergebnissen.
sidebar_position: 5
---

## Was ist das?

Die Delegation wiederkehrender Aufgaben (Docs-Updates, Dependency-PRs prüfen, Triage-Vorschläge) an KI-Agenten mit festem Auftrag und klarem Output.

## Warum ist es relevant?

Wiederholung ist die Stärke von Automatisierung – aber nur mit Leitplanken bleibt sie vertrauenswürdig.

## Wie funktioniert es?

Muster für einen guten Agentenauftrag:

1. **Ziel:** ein Satz, was fertig bedeutet.
2. **Scope:** welche Dateien/Issues/PRs betroffen sind.
3. **Verboten:** was der Agent nicht tun darf (z. B. kein Merge, kein Force-Push).
4. **Nachweis:** welche Artefakte erwartet werden (Branch, PR-URL, Build-Log).

Hinweis zu Preview-Features: `gh agent-task` und `gh skill` sind in aktuellen `gh`-Versionen als Preview verfügbar und können sich ändern. Vor Einsatz `gh agent-task --help` bzw. `gh skill --help` in der verwendeten Version prüfen und nicht als stabile Voraussetzung behandeln:

```bash
gh agent-task list
gh skill list
```

## Wie prüfe ich das Ergebnis?

Wie bei menschlicher Arbeit: Diff lesen, Checks prüfen, PR reviewen. Automatisiert erstellt ≠ automatisch richtig.

## Welche Risiken sind zu beachten?

Unbegrenzte Aufträge („räum mal auf“) erzeugen unbegrenzte Diffs. Lieber viele kleine, klar begrenzte Aufträge als einen großen.

## Weiterführend

- [Operating Model](../04-ai-agents/operating-model.md)
- [Täglicher Workflow](../06-patterns/daily-workflow.md)
