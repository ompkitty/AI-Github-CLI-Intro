---
title: Permissions
description: Welche Rechte was dürfen – Token-Scopes, Workflow-Permissions und Branch-Schutz im Überblick.
sidebar_position: 4
---

## Was ist das?

Die Übersicht darüber, welche Berechtigung welche Aktion erlaubt – auf drei Ebenen: Token-Scopes, Workflow-`permissions` und Branch-Schutz.

## Token-Scopes (Auswahl)

| Scope | Erlaubt u. a. |
| --- | --- |
| `repo` | Private Repositorys lesen/schreiben, Issues, PRs |
| `workflow` | Actions-Workflows lesen/auslösen/aktualisieren |
| `read:org` | Organisationsdaten lesen |
| `gist` | Gists verwalten |

Der Login dieses Projekts nutzt `repo` und `workflow` – ausreichend für Issues, PRs, Actions und Pages-Konfiguration via API.

## Workflow-Permissions

Minimalprinzip – dieser Docs-Workflow braucht nur:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

Keine weiteren Rechte ohne konkrete Begründung hinzufügen.

## Branch-Schutz (Konzept)

Branch Protection Rules legen fest: Pflicht-Checks, erforderliche Reviews, Sperre für Force-Push und direkte Pushes. Agenten respektieren sie – Umgehung ist keine Option, sondern ein Sicherheitsvorfall.

## Prüfung

```bash
gh auth status
gh api repos/{owner}/{repo}/branches/{branch}/protection --jq '{required_checks: .required_status_checks.contexts}'
```

## Agentenhinweis

Vor schreibenden Aktionen fragen: Auftrag vorhanden? Scope ausreichend? Folge verstanden? Danach Beleg (ID/URL) liefern.

## Weiterführend

- [Berechtigungen und Sicherheit](../04-ai-agents/permissions-and-safety.md)
- [Authentifizierung](../03-github-cli/authentication.md)
