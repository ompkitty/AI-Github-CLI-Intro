---
title: Was ist Git?
description: Verteilte Versionsverwaltung als Grundlage jeder Änderung – was Git speichert, wann es passt und wie ein Agent es prüft.
sidebar_position: 1
---

## Was ist das?

Git ist eine **verteilte Versionsverwaltung**. Es speichert den Zustand von Dateien als Folge von Snapshots (Commits) in einem Repository. Jede Kopie eines Repositorys enthält die vollständige Historie.

## Warum ist es relevant?

Jede fachliche Änderung – ob von Mensch oder KI-Agent – braucht eine nachvollziehbare Historie: Wer hat was, wann und warum geändert? Git beantwortet diese Fragen lokal, ohne Netzwerk, und bildet die Vertrauensbasis für Reviews, Releases und Rollbacks.

## Wie funktioniert es?

- Ein **Repository** enthält Arbeitsbaum, Staging-Area (Index) und Objektdatenbank.
- Eine Datei wandert: Arbeitsbaum → Staging-Area (`git add`) → Commit (`git commit`).
- Ein **Commit** speichert Autor, Zeitstempel, Nachricht und Verweise auf Vorgänger.
- **Branches** sind bewegliche Zeiger auf Commits; **Remotes** verbinden lokale mit entfernten Repositorys.

```bash
git init -b main
git status --short --branch
git log --oneline --decorate -10
```

## Welcher Befehl wird benötigt?

| Ziel | Befehl |
| --- | --- |
| Zustand prüfen | `git status --short --branch` |
| Historie lesen | `git log --oneline --decorate -10` |
| Änderung vormerken | `git add <datei>` |
| Änderung festschreiben | `git commit -m "..."` |

## Wie prüfe ich das Ergebnis?

```bash
git status --short --branch
git log --oneline -5
git diff --check
```

`git status` muss sauber sein oder nur erwartete Dateien zeigen. `git diff --check` meldet Whitespace-Fehler.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent startet jede Aufgabe mit Beobachtung statt Annahme:

```bash
git status --short --branch
git remote -v
git log --oneline --decorate -10
git branch --all
```

Erst danach plant er, welche Dateien er ändert. Siehe [Operating Model](../04-ai-agents/operating-model.md).

## Welche Risiken oder Berechtigungen sind zu beachten?

Git selbst braucht keine GitHub-Berechtigung. Riskant wird es erst bei **Veröffentlichung** (`push`), **Historienänderung** (Rebase, Amend nach Push) und **destruktiven Befehlen** (`reset --hard`, `clean -fd`). Ein Agent darf diese nur mit ausdrücklichem Auftrag nutzen. Siehe [Berechtigungen und Sicherheit](../04-ai-agents/permissions-and-safety.md).

## Weiterführend

- [Repository-Grundlagen](../02-git/repository-basics.md)
- [Staging und Commits](../02-git/staging-commits.md)
- [Git-Dokumentation](https://git-scm.com/docs)
