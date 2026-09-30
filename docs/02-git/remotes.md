---
title: Remotes
description: Lokale Repositorys mit GitHub verbinden – fetch, pull, push und Tracking sauber einsetzen.
sidebar_position: 6
---

## Was ist das?

Remotes sind benannte Verweise auf entfernte Repositorys (meist `origin`). `fetch` lädt, `pull` lädt und führt zusammen, `push` veröffentlicht.

## Warum ist es relevant?

Erst der Remote macht aus lokaler Historie Zusammenarbeit: PRs, CI und Pages-Deployments laufen gegen den Remote-Stand.

## Wie funktioniert es?

```bash
git remote -v
git fetch origin --prune
git pull --ff-only origin main
git push -u origin docs/thema-kurz
```

- `fetch --prune` räumt gelöschte Remote-Branches lokal auf.
- `pull --ff-only` verweigert stille Merge-Commits bei Divergenz.
- `-u` setzt Upstream einmalig, danach reicht `git push`.

Den Default-Branch niemals annehmen – immer ermitteln:

```bash
gh repo view --json nameWithOwner,defaultBranchRef,url
```

## Wie prüfe ich das Ergebnis?

```bash
git status --short --branch
git branch -vv
```

Erwartet: `ahead/behind`-Angaben plausibel, Upstream korrekt gesetzt.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Vor jedem Push: Status + Staging-Diff prüfen, nur auf Feature-Branch pushen, kein `--force`. Nach Push: Run-Überwachung mit `gh run list`. Siehe [Push / Pull Request](../04-ai-agents/pull-request-workflow.md).

## Welche Risiken sind zu beachten?

- Push auf den Default-Branch umgeht Review-Gates.
- `--force` überschreibt Remote-Historie – nur mit ausdrücklichem Auftrag.

## Weiterführend

- [Repositorys mit gh](../03-github-cli/repository.md)
- [Täglicher Workflow](../06-patterns/daily-workflow.md)
