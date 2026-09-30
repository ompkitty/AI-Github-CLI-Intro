---
title: Staging und Commits
description: Änderungen gezielt vormerken und in kleinen, logischen Commits festschreiben.
sidebar_position: 3
---

## Was ist das?

**Staging** (`git add`) stellt zusammen, was in den nächsten Commit gehört. **Commit** (`git commit`) schreibt diesen Stand mit Nachricht in die Historie.

## Warum ist es relevant?

Kleine, thematisch geschlossene Commits sind reviewbar, revertierbar und die Grundlage für `bisect`, Changelogs und saubere PRs.

## Wie funktioniert es?

```bash
git status --short
git diff
git add docs/02-git/staging-commits.md
git diff --cached
git commit -m "docs: staging und commits erklaeren"
```

Regeln:

- Nur Task-Dateien stagen, nie pauschal alles.
- Nachricht: kurz, sachlich, im Imperativ oder mit Scope (`docs:`, `fix:`, `feat:`).
- Vor dem Commit `git diff --cached` lesen – was dort steht, wird festgeschrieben.

## Wie prüfe ich das Ergebnis?

```bash
git diff --check
git status --short --branch
git log --oneline -3
git show --stat HEAD
```

Erwartet: keine Whitespace-Fehler, sauberer Baum, Commit mit passender Nachricht und Dateiliste.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent stagt explizit pro Datei, prüft den Staging-Diff und committet genau einmal pro logischer Einheit. Fremde `M`-Einträge bleiben unangetastet. Siehe [Dateien ändern](../04-ai-agents/editing.md).

## Welche Risiken sind zu beachten?

- `git add -A` / `git commit -a` können fremde oder geheime Dateien einsammeln (z. B. `.env`).
- `--amend` nach Push schreibt öffentliche Historie um – nur mit Auftrag und Verständnis der Folgen.

## Weiterführend

- [Branches](branches.md)
- [Git-Workflow für Agenten](../04-ai-agents/git-workflow.md)
