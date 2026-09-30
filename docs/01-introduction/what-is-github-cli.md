---
title: Was ist die GitHub CLI?
description: gh steuert GitHub aus dem Terminal – deterministisch, skriptbar und ideal als Schnittstelle für KI-Agenten.
sidebar_position: 2
---

## Was ist das?

Die GitHub CLI (`gh`) ist das offizielle Kommandozeilenwerkzeug für GitHub. Während Git lokale Historie verwaltet, steuert `gh` GitHub-Seite: Repositorys, Issues, Pull Requests, Actions, Releases und API-Zugriffe.

## Warum ist es relevant?

Weboberflächen sind für Menschen klickbar, aber für Agenten teuer: Sie kosten Kontext, sind schwer reproduzierbar und schlecht skriptbar. `gh` liefert **deterministische Befehle, Exit-Codes und JSON-Ausgaben** – die ideale Agentenschnittstelle.

## Wie funktioniert es?

`gh` authentifiziert sich einmal gegen GitHub und sendet danach API-Anfragen:

```bash
gh auth login
gh auth status
gh repo view --json nameWithOwner,defaultBranchRef,url
```

Für alles ohne passenden High-Level-Befehl gibt es den Escape Hatch `gh api`:

```bash
gh api repos/{owner}/{repo}
```

Regel: erst `gh <bereich> <aktion>`, erst danach `gh api`.

## Welcher Befehl wird benötigt?

| Ziel | Befehl |
| --- | --- |
| Version prüfen | `gh --version` |
| Login-Status prüfen | `gh auth status` |
| Repo-Überblick | `gh repo view --json nameWithOwner,defaultBranchRef,url` |
| Issues listen | `gh issue list --json number,title,state,url` |
| PR-Status | `gh pr status` |
| Workflow-Runs | `gh run list --limit 10` |

## Wie prüfe ich das Ergebnis?

```bash
gh auth status
gh repo view --json nameWithOwner,defaultBranchRef,url
echo $?
```

Exit-Code `0` bedeutet Erfolg. Details zu Codes stehen unter [Exit-Codes](../07-reference/exit-codes.md).

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent bevorzugt `gh` gegenüber manuellen Webschritten und JSON gegenüber Fließtext:

```bash
gh issue list --json number,title,state,url
gh pr list --json number,title,state,headRefName,baseRefName,url
gh run list --limit 10
```

Mit `--jq` filtert er Felder, statt große Ausgaben ins Kontextfenster zu laden. Siehe [gh als Agentenschnittstelle](../03-github-cli/scripting.md).

## Welche Risiken oder Berechtigungen sind zu beachten?

Lesen (`list`, `view`, `status`) ist ungefährlich. Schreiben (`create`, `comment`, `merge`, `close`) verändert GitHub-Ressourcen und braucht Auftrag plus passende Token-Rechte (`repo`, `workflow`). Niemals Tokenwerte in Docs, Logs oder Commits aufnehmen. Siehe [Permissions](../07-reference/permissions.md).

## Weiterführend

- [Authentifizierung](../03-github-cli/authentication.md)
- [Repositorys mit gh](../03-github-cli/repository.md)
- [GitHub CLI Manual](https://cli.github.com/manual/)
