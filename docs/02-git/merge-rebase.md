---
title: Merge und Rebase
description: Branches zusammenführen oder Historie glätten – beide Wege, ihre Folgen und wann welcher passt.
sidebar_position: 5
---

## Was ist das?

**Merge** verbindet zwei Linien mit einem Merge-Commit und erhält die Historie. **Rebase** schreibt eigene Commits auf eine neue Basis um und erzeugt eine lineare Historie.

## Warum ist es relevant?

Die Wahl bestimmt, ob Historie ehrlich (Merge) oder lesbar (Rebase) ist – und ob öffentliche Commits umgeschrieben werden.

## Wie funktioniert es?

```bash
# Merge (Standard für PRs in dieses Projekt)
git switch main
git merge --no-ff docs/thema-kurz

# Rebase (nur lokal, vor dem Push)
git switch docs/thema-kurz
git fetch origin
git rebase origin/main
```

Nach einem Rebase:

```bash
git log --oneline --graph --decorate -8
git status --short --branch
```

## Wie prüfe ich das Ergebnis?

- Merge: ein Merge-Commit verbindet beide Linien im Graphen.
- Rebase: eigene Commits stehen linear auf der neuen Basis; `git status` zeigt ggf. Divergenz zum Remote.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent bevorzugt Merge und meidet Rebase nach Push. Wenn Rebase nötig ist (lange lebender Branch), nur lokal und vor dem ersten Push – niemals mit `--force` ohne ausdrücklichen Auftrag.

## Welche Risiken sind zu beachten?

Rebase + Push erfordert Force-Push und kann fremde Arbeit zerstören. Bei Konflikten: betroffene Dateien prüfen, Marker auflösen, `git diff --check`, erneut validieren.

## Weiterführend

- [Branches](branches.md)
- [Incident-Recovery](../06-patterns/incident-recovery.md)
