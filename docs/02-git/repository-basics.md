---
title: Repository-Grundlagen
description: Repository anlegen, klonen, Arbeitsbaum lesen und den Zustand jederzeit bestimmen.
sidebar_position: 2
---

## Was ist das?

Ein Git-Repository ist ein Verzeichnis mit Historie (`.git`), Arbeitsbaum und optionalen Remotes. Alles beginnt mit der Frage: „Wo bin ich und wie sieht der Baum aus?“

## Warum ist es relevant?

Jeder Agentenlauf und jede manuelle Änderung startet mit der Zustandsbestimmung. Wer sie überspringt, überschreibt fremde Arbeit oder committet versehentlich Unfertiges.

## Wie funktioniert es?

```bash
# Neues Repository
git init -b main

# Bestehendes klonen
git clone https://github.com/OWNER/REPO.git
cd REPO

# Zustand lesen
git status --short --branch
git remote -v
git log --oneline --decorate -10
git branch --all
```

`git status --short --branch` zeigt Branch, Ahead/Behind und geänderte Dateien in Kurzform. `M` = modifiziert, `??` = untracked, `A` = staged.

## Wie prüfe ich das Ergebnis?

```bash
git status --short --branch
git remote -v
```

Erwartet: korrekter Branch, erwarteter Remote (`origin`), keine überraschenden `M`-Einträge.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Pflichtprolog jedes Tasks (Phase Observe):

```bash
git status --short --branch
git remote -v
git log --oneline --decorate -10
git branch --all
```

Bei einem Dirty Tree nur Task-Dateien anfassen, fremde Änderungen nie zurücksetzen. Siehe [Repository Discovery](../04-ai-agents/repository-discovery.md).

## Welche Risiken sind zu beachten?

`git clone` in ein nicht-leeres Verzeichnis schlägt fehl. Große Repositorys ggf. mit `--depth 1` flach klonen – aber dann fehlt Historie für Analysen.

## Weiterführend

- [Staging und Commits](staging-commits.md)
- [Remotes](remotes.md)
