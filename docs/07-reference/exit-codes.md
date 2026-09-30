---
title: Exit-Codes
description: Was Exit-Code 0 und alles andere bedeuten – und wie Agenten und Skripte darauf reagieren.
sidebar_position: 3
---

## Was ist das?

Der Exit-Code ist die Zahl, die ein beendetes Programm ans System meldet: `0` bedeutet Erfolg, alles andere einen Fehler.

## Warum ist es relevant?

Agenten und Skripte erkennen Erfolg nicht am Bauchgefühl, sondern am Exit-Code – verkettet mit `&&` oder abgefragt via `$?` / `$LASTEXITCODE`.

## Die wichtigsten Codes

| Code | Bedeutung |
| --- | --- |
| `0` | Erfolg |
| `1` | Allgemeiner Fehler (z. B. fehlgeschlagener Befehl, Docusaurus-Broken-Link bei `throw`) |
| `2` | Falsche Verwendung (z. B. unbekanntes Flag) |
| `128` | Git-Basisfehler (z. B. kein Repository) |
| `129` | Falsche Git-Verwendung (z. B. `git diff --check` ohne Repo) |

`gh`-Hilfe kennt eine eigene Übersicht:

```bash
gh help exit-codes
```

HTTP-Fehler in `gh`-Ausgaben (z. B. `404 Not Found` bei `gh api`) erscheinen zusätzlich als Text – beide Signale auswerten.

## Praxis

```bash
gh repo view --json nameWithOwner
echo $?
```

Windows (PowerShell):

```powershell
gh repo view --json nameWithOwner
echo $LASTEXITCODE
```

## Agentenhinweis

Nach jedem kritischen Befehl Exit-Code prüfen, bevor der nächste Schritt folgt. `npm run build` ohne Log-Prüfung ist keine Validierung.

## Weiterführend

- [Validieren](../04-ai-agents/validation.md)
- [Fehlerbehebung](../02-git/troubleshooting.md)
