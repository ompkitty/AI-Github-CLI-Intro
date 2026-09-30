---
title: Actions
description: Workflow-Runs mit gh run und gh workflow auflisten, beobachten, auslösen und debuggen.
sidebar_position: 6
---

## Was ist das?

`gh run` und `gh workflow` steuern GitHub Actions aus dem Terminal: Runs verfolgen, Logs lesen, Workflows manuell starten.

## Warum ist es relevant?

Nach Push oder Merge ist nicht der Push der Erfolg, sondern der grüne Run. Agenten müssen Runs lesen können, um Fehler zu fixen statt zu raten.

## Wie funktioniert es?

```bash
gh workflow list
gh run list --limit 10
gh run view 36689795607
gh run view 36689795607 --log-failed
gh run watch 36689795607 --exit-status
gh workflow run deploy.yml --ref main
```

Hinweise:

- `gh run watch` ist im konkreten Umfeld ggf. nicht verfügbar – dann `gh run view <id> --log-failed` nutzen.
- `gh workflow run` setzt `workflow_dispatch` im Workflow voraus.

## Wie prüfe ich das Ergebnis?

```bash
gh run list --limit 5
gh pr checks 7
```

Erwartet: `completed / success` beim relevanten Run; bei PRs zusätzlich grüne `gh pr checks`.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Schleife: Run abwarten → bei Fehler Logs der **konkreten** fehlerhaften Jobs lesen → Ursache fixen → erneut validieren → ggf. Workflow erneut auslösen. Siehe [Validieren](../04-ai-agents/validation.md).

## Welche Risiken sind zu beachten?

- Re-Runs und manuelle `workflow_dispatch`-Starts verbrauchen Runner-Minuten und können deployen – nur gezielt auslösen.
- Logs können Secrets enthalten, wenn Workflows sie ausgeben – nicht in Docs kopieren.

## Weiterführend

- [GitHub Actions](../05-automation/github-actions.md)
- [CI/CD](../05-automation/ci-cd.md)
