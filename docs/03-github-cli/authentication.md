---
title: Authentifizierung
description: gh auth login, Statusprüfung und Credential Helper – ohne Tokens in Docs oder Logs.
sidebar_position: 2
---

## Was ist das?

Die Anmeldung von `gh` bei GitHub: Token-Erstellung, Speicherung und Wiederverwendung für Git-Operationen.

## Warum ist es relevant?

Ohne Login sind nur öffentliche Lesezugriffe möglich. Jeder Schreibzugriff (Issue, PR, Push via HTTPS) braucht Authentifizierung mit passenden Scopes.

## Wie funktioniert es?

```bash
gh auth login
gh auth status
gh auth setup-git
```

- `gh auth login` führt interaktiv durch Host, Protokoll und Login-Modus (Browser-Flow empfohlen, wo möglich).
- `gh auth status` zeigt Konten und Protokolle – **ohne `--show-token`**, damit kein Tokenwert sichtbar wird.
- `gh auth setup-git` konfiguriert Git so, dass die GitHub CLI als Credential Helper dient; danach funktionieren `git push/pull` über HTTPS mit dem `gh`-Login.

Für GitHub Enterprise zusätzlich `--hostname`:

```bash
gh auth login --hostname HOSTNAME
gh auth setup-git --hostname HOSTNAME
```

Benötigte Scopes hängen vom Einsatz ab; für diese Dokumentations-Workflows genügen typischerweise `repo` und `workflow` (plus `gist`, `read:org` je nach Setup).

## Wie prüfe ich das Ergebnis?

```bash
gh auth status
```

Erwartet: `Logged in to github.com account <name>`, aktives Konto, Protokoll `https`. Keine Tokenwerte kopieren – weder in Docs noch in Logs oder Commits.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent prüft `gh auth status` zu Beginn und meldet fehlende Anmeldung als Blocker. Er fordert niemals Tokens im Chat an und schreibt keine Authentifizierungswerte in Dateien.

## Welche Risiken sind zu beachten?

- `gh auth status --show-token` und `gh auth token` legen Secrets offen – in normalen Lernbeispielen verboten.
- Headless-/CI-Szenarien nutzen `GH_TOKEN` bzw. die vorgesehenen Token-Mechanismen, niemals hartcodierte Werte.

## Weiterführend

- [Permissions](../07-reference/permissions.md)
- [GitHub CLI Auth](https://cli.github.com/manual/gh_auth_login)
