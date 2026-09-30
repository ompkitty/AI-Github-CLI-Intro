---
title: Täglicher Workflow
description: Der Standard-Arbeitstag mit Git und gh – synchronisieren, arbeiten, prüfen, veröffentlichen.
sidebar_position: 1
---

## Ablauf

```bash
git switch main
git pull --ff-only origin main
git switch -c docs/thema
# ... ändern ...
git diff --check
git status --short --branch
git add <dateien>
git commit -m "docs: kurze beschreibung"
npm run build
git push -u origin docs/thema
gh pr create --fill
gh pr checks
```

## Warum diese Reihenfolge?

Synchronisieren zuerst verhindert Rebase-Schmerzen. Validieren vor Push verhindert CI-Schleifen. PR-Erstellung direkt nach Push hält Kontext frisch.

## Prüfung

```bash
git status --short --branch
gh pr checks
gh run list --limit 5
```

## Agentenhinweis

Der Agent führt exakt dieselbe Sequenz aus und meldet Branch, Commit-Hash und PR-URL. Siehe [Operating Model](../04-ai-agents/operating-model.md).

## Risiken

Auf `main` arbeiten statt auf Feature-Branch; `pull` ohne `--ff-only` bei Divergenz.

## Weiterführend

- [Remotes](../02-git/remotes.md)
- [Dokumentationsänderung](documentation-change.md)
