---
title: Pull-Request-Workflow
description: Vom Feature-Branch zum grünen PR – erstellen, prüfen, iterieren, verifizieren.
sidebar_position: 8
---

## Was ist das?

Der vollständige Weg einer Änderung durch Review und CI bis zum Merge.

## Warum ist es relevant?

Der PR ist die Qualitäts­schleuse: Menschen prüfen Verständlichkeit, CI prüft Korrektheit.

## Wie funktioniert es?

```bash
git push -u origin docs/thema
gh pr create --base main --head docs/thema --title "..." --body "..."
gh pr checks 7
gh run list --limit 10
```

Empfohlen: PRs gegen den Default-Branch bauen/validieren **ohne** Produktionsdeployment; erst Push/Merge auf den Default-Branch deployt echt.

Bei roten Checks:

```bash
gh run view <run-id> --log-failed
```

Ursache fixen, lokal validieren, erneut pushen, Run erneut verfolgen. `gh workflow run` nur bei `workflow_dispatch`-Workflows.

## Wie prüfe ich das Ergebnis?

```bash
gh pr checks 7
gh pr view 7 --json state,mergeable,checks
gh run list --limit 5
```

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent erstellt den PR mit aussagekräftigem Body (Was? Warum? Wie validiert?), verfolgt Checks aktiv und nennt am Ende die PR-URL – nicht „vermutlich gemergt“.

## Welche Risiken sind zu beachten?

Mergen trotz roter Checks, Dismissal fremder Reviews, Schließen ohne Auftrag – alles tabu ohne ausdrückliche Freigabe.

## Weiterführend

- [Pull Requests mit gh](../03-github-cli/pull-requests.md)
- [Feature-Entwicklung](../06-patterns/feature-development.md)
