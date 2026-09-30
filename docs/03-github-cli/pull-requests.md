---
title: Pull Requests
description: PRs erstellen, prüfen und mit Checks verknüpfen – der Review-Kanal für jede Änderung.
sidebar_position: 5
---

## Was ist das?

`gh pr` verwaltet Pull Requests: Vorschläge, einen Branch in einen anderen zu mergen, inklusive Review und CI-Gates.

## Warum ist es relevant?

Der PR ist der Ort, an dem Agentenarbeit sichtbar und prüfbar wird. Ohne PR keine Review, ohne Checks kein Vertrauen.

## Wie funktioniert es?

```bash
gh pr list --json number,title,state,headRefName,baseRefName,url
gh pr view 7
gh pr view 7 --json number,title,state,checks,reviews
gh pr checks 7
gh pr create --base main --head docs/thema --title "..." --body "..."
gh pr create --fill
```

Vor Änderungen an bestehenden PRs: Beschreibung, Checks und Review-Status lesen.

## Wie prüfe ich das Ergebnis?

```bash
gh pr checks 7
gh pr view 7 --json state,mergeable,checks
```

Erwartet: alle erforderlichen Checks grün, Review-Status bekannt. Erst dann mergen.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

```bash
git push -u origin docs/thema
gh pr create --base main --head docs/thema --title "..." --body "..."
gh pr checks 7
gh run list --limit 10
```

Bei roten Checks: `gh run view <run-id> --log-failed`, Ursache fixen, erneut validieren. Siehe [Pull-Request-Workflow](../04-ai-agents/pull-request-workflow.md).

## Welche Risiken sind zu beachten?

Mergen, Schließen oder Review-Dismissal sind wirksam und teils irreversibel. Branch Protection respektieren; Draft-PRs (`--draft`) für unfertige Stände nutzen.

## Weiterführend

- [PR-Automatisierung](../05-automation/pr-automation.md)
- [Feature-Entwicklung](../06-patterns/feature-development.md)
