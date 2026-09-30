---
title: Fehlerbehebung
description: Typische Git-Probleme systematisch lösen – von Detached HEAD bis zu kaputten Pushes.
sidebar_position: 7
---

## Was ist das?

Eine Checkliste für die häufigsten Git-Störungen, sortiert nach Symptom statt nach Kommando.

## Warum ist es relevant?

Agenten und Menschen verlieren die meiste Zeit nicht beim Schreiben, sondern beim Entwirren unerwarteter Zustände. Ein festes Diagnoseprotokoll spart diese Zeit.

## Wie funktioniert es?

**1. Zustand bestimmen:**

```bash
git status --short --branch
git log --oneline --decorate -5
git branch -vv
```

**2. Häufige Fälle:**

| Symptom | Diagnose | Lösung |
| --- | --- | --- |
| Falscher Branch | `git branch --show-current` | `git switch <branch>` |
| Detached HEAD | `HEAD detached at …` | Branch anlegen: `git switch -c fix/rettung` |
| Push rejected (behind) | `git status -sb` zeigt behind | `git pull --ff-only`, bei Divergenz manuell mergen |
| Merge-Konflikt-Marker | `git diff --check` | Dateien editieren, Marker entfernen, erneut prüfen |
| Aus Versehen gestagt | `git diff --cached` zeigt zu viel | `git restore --staged <datei>` |
| Commit-Nachricht falsch (lokal) | `git log -1` | `git commit --amend -m "…"` (nur vor Push) |

**3. Verlorene Commits suchen:**

```bash
git reflog --oneline -15
```

## Wie prüfe ich das Ergebnis?

Nach jeder Reparatur: `git status --short --branch`, `git diff --check`, `git log --oneline --graph -5`.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent liest erst Logs (`git status`, Fehlermeldung), ändert dann gezielt eine Sache und validiert erneut – statt blind mehrere Fixes zu stapeln. CI-Fehler analysiert er über `gh run view <id> --log-failed`.

## Welche Risiken sind zu beachten?

Keine destruktiven Befehle (`reset --hard`, `clean -fd`, `push --force`) ohne ausdrücklichen Auftrag. Im Zweifel Branch sichern, bevor repariert wird.

## Weiterführend

- [Incident-Recovery](../06-patterns/incident-recovery.md)
- [Exit-Codes](../07-reference/exit-codes.md)
