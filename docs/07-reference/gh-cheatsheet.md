---
title: gh-Cheatsheet
description: Die wichtigsten gh-Befehle auf einer Seite – Repo, Issue, PR, Actions, API.
sidebar_position: 2
---

Alle Beispiele verifiziert mit `gh 2.100.0`. JSON-Felder bei älteren Versionen mit `gh <befehl> --help` gegenprüfen.

## Auth und Repo

```bash
gh auth login
gh auth status
gh repo view --json nameWithOwner,defaultBranchRef,url
gh repo list OWNER --limit 30
gh repo clone OWNER/REPO
```

## Issues

```bash
gh issue list --json number,title,state,url
gh issue view 12
gh issue create --title "..." --body "..."
gh issue comment 12 --body "..."
```

## Pull Requests

```bash
gh pr list --json number,title,state,headRefName,baseRefName,url
gh pr view 7
gh pr checks 7
gh pr status
gh pr create --fill
gh pr create --base main --head <branch> --title "..." --body "..."
```

## Actions

```bash
gh workflow list
gh run list --limit 10
gh run view <run-id>
gh run view <run-id> --log-failed
gh run watch <run-id> --exit-status
gh workflow run <workflow> --ref main   # braucht workflow_dispatch
```

## API und Filter

```bash
gh api repos/{owner}/{repo}
gh api repos/{owner}/{repo}/pages
gh issue list --json number,title,state --jq '.[] | select(.state == "open")'
```

## Preview (versionsabhängig)

```bash
gh agent-task list
gh skill list
```

Nur verwenden, wenn die installierte CLI sie anbietet (`gh agent-task --help`).

## Quelle

- [GitHub CLI Manual](https://cli.github.com/manual/)
