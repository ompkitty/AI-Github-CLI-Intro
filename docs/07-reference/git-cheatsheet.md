---
title: Git-Cheatsheet
description: Die wichtigsten Git-Befehle auf einer Seite – Zustand, Historie, Branches, Remotes.
sidebar_position: 1
---

## Zustand und Historie

```bash
git status --short --branch
git diff
git diff --cached
git diff --check
git log --oneline --decorate -10
git log --oneline --graph --decorate -8
git show --stat HEAD
```

## Staging und Commits

```bash
git add <datei>
git restore --staged <datei>
git commit -m "docs: kurze beschreibung"
git commit --amend -m "..."   # nur vor Push
```

## Branches

```bash
git branch --all
git branch --show-current
git switch -c <branch>
git switch <branch>
git branch -d <branch>
```

## Synchronisieren

```bash
git remote -v
git fetch origin --prune
git pull --ff-only origin main
git push -u origin <branch>
git push
```

## Reparieren (vorsichtig)

```bash
git reflog --oneline -15
git restore <datei>
git switch -c fix/rettung   # aus Detached HEAD retten
```

Destruktiv und nur mit Auftrag: `git reset --hard`, `git clean -fd`, `git push --force`.

## Quelle

- [Git-Dokumentation](https://git-scm.com/docs)
