---
title: Branches
description: Parallele Arbeitslinien anlegen, wechseln und aufräumen – ohne direkt auf dem Default-Branch zu arbeiten.
sidebar_position: 4
---

## Was ist das?

Ein Branch ist ein beweglicher Zeiger auf einen Commit. Er isoliert Arbeit, bis sie reviewt und zusammengeführt wird.

## Warum ist es relevant?

Feature-Branches schützen den Default-Branch vor halbfertigen Zuständen und machen PRs, CI-Gates und Reviews überhaupt erst möglich.

## Wie funktioniert es?

```bash
git branch --all
git switch -c docs/thema-kurz
# ... arbeiten, committen ...
git switch main
git merge --no-ff docs/thema-kurz
git branch -d docs/thema-kurz
```

Konventionen: `docs/…`, `feat/…`, `fix/…`, `chore/…` – kurz und beschreibend.

## Wie prüfe ich das Ergebnis?

```bash
git status --short --branch
git branch --show-current
git log --oneline --graph --decorate -8
```

Erwartet: korrekter aktueller Branch, sichtbare Verzweigung im Graphen.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Standard: pro Task ein frischer Branch ab aktuellem Default-Branch-Stand. Nie direkt auf `main` arbeiten, außer ausdrücklich beauftragt. Siehe [Git-Workflow](../04-ai-agents/git-workflow.md).

## Welche Risiken sind zu beachten?

- Alte Branches verweisen ins Leere (`gone`); regelmäßig mit `git fetch --prune` aufräumen.
- Branch-Löschung mit `-D` statt `-d` verwirft Commits – nur mit Auftrag.

## Weiterführend

- [Merge und Rebase](merge-rebase.md)
- [Pull-Request-Workflow](../04-ai-agents/pull-request-workflow.md)
