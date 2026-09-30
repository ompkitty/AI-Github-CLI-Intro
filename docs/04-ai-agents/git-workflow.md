---
title: Git ausführen
description: Branch anlegen, gezielt committen und ohne Force push­en – die lokale Hälfte der Agentenarbeit.
sidebar_position: 5
---

## Was ist das?

Der lokale Git-Anteil: Branch, Staging, Commit, Push – ohne den Default-Branch zu berühren.

## Warum ist es relevant?

Saubere lokale Historie entscheidet, ob ein PR in Minuten oder Stunden reviewt wird.

## Wie funktioniert es?

```bash
git switch -c docs/kurze-beschreibung
# ... ändern ...
git diff --check
git status --short --branch
git add <dateien>
git diff --cached
git commit -m "docs: kurze beschreibung"
git push -u origin docs/kurze-beschreibung
```

Kein `--force` ohne ausdrücklichen Auftrag. Keine fremden Änderungen in den eigenen Commit aufnehmen.

## Wie prüfe ich das Ergebnis?

```bash
git log --oneline -3
git status --short --branch
git diff --cached
```

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent committet pro logischer Einheit genau einmal, nennt Commit-Hashes im Bericht und pusht nur den eigenen Feature-Branch.

## Welche Risiken sind zu beachten?

Direktes Arbeiten auf dem Default-Branch, Force-Push und `reset --hard`/`clean -fd` – alles nur mit ausdrücklichem Auftrag und verstandenen Folgen.

## Weiterführend

- [Staging und Commits](../02-git/staging-commits.md)
- [GitHub mit gh steuern](github-workflow.md)
