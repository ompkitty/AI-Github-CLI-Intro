---
title: Incident-Recovery
description: Wenn etwas schiefging – sichern, einordnen, gezielt reparieren, danach absichern.
sidebar_position: 6
---

## Ablauf

1. **Sichern:** aktuellen Stand in einen Branch retten (`git switch -c fix/rettung`), nichts löschen.
2. **Einordnen:** `git status`, `git log -5`, `gh run view <id> --log-failed`.
3. **Reparieren:** genau eine Maßnahme, dann erneut validieren.
4. **Absichern:** Guard ergänzen (Check, Schutzregel, Dokumentation), damit es nicht wieder passiert.

```bash
git switch -c fix/rettung
git status --short --branch
git log --oneline --decorate -5
git reflog --oneline -15
```

## Typfälle

| Lage | Maßnahme |
| --- | --- |
| Falscher Commit (lokal) | `git commit --amend` (nur vor Push) |
| Falscher Push (eigener Branch) | Korrektur committen und pushen |
| Öffentliche Historie beschädigt | Team einbeziehen, nie still force-pushen |
| Pages down nach Deploy | Letzten grünen Run und Config-Diff prüfen |

## Agentenhinweis

Der Agent führt keine destruktiven Befehle ohne Auftrag aus und dokumentiert jede Recovery-Entscheidung mit Befehl und Ergebnis.

## Risiken

Panik-Fixes (`reset --hard`, `clean -fd`, Force-Push) vernichten Beweismittel und fremde Arbeit.

## Weiterführend

- [Fehlerbehebung](../02-git/troubleshooting.md)
- [Berechtigungen und Sicherheit](../04-ai-agents/permissions-and-safety.md)
