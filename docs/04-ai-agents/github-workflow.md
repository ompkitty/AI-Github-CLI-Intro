---
title: GitHub mit gh steuern
description: Issues, PRs, Runs und API aus dem Terminal – lesend großzügig, schreibend nur mit Auftrag.
sidebar_position: 6
---

## Was ist das?

Der GitHub-Anteil der Agentenarbeit, vollständig über `gh`: lesen, erstellen, kommentieren, mergen, deployen – je nach Auftrag.

## Warum ist es relevant?

`gh` ist die einzige GitHub-Schnittstelle, die deterministisch, skriptbar und im Terminal reproduzierbar ist.

## Wie funktioniert es?

```bash
gh auth status
gh repo view --json nameWithOwner,defaultBranchRef,url
gh issue list --json number,title,state,url
gh issue view 12
gh pr list --json number,title,state,headRefName,baseRefName,url
gh pr view 7
gh pr checks 7
gh run list --limit 10
gh api repos/{owner}/{repo}/pages
```

Schreibend (nur mit Auftrag):

```bash
gh issue create --title "..." --body "..."
gh issue comment 12 --body "..."
gh pr create --base main --head docs/thema --title "..." --body "..."
gh workflow run deploy.yml --ref main
```

## Wie prüfe ich das Ergebnis?

IDs und URLs aus den Antworten zitieren (Issue-Nummer, PR-URL, Run-ID) statt Erfolg zu behaupten.

## Welche Risiken sind zu beachten?

Schließen, Mergen, Löschen, Releases und Berechtigungsänderungen sind wirksam. `gh api` nur für Lücken ohne High-Level-Befehl; keine unnötigen Schreiboperationen.

## Weiterführend

- [Pull Requests](pull-request-workflow.md)
- [API-Zugriff](../03-github-cli/api.md)
- [Permissions](../07-reference/permissions.md)
