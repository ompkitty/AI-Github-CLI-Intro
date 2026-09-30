---
title: Berechtigungen und Sicherheit
description: Was ein Agent darf, wobei er fragen muss und was grundsätzlich tabu ist – inklusive Token-Hygiene.
sidebar_position: 9
---

## Was ist das?

Das Sicherheitsmodell für Agentenarbeit mit Git und GitHub: erlaubte Aktionen, riskante Aktionen und verbotene Muster.

## Warum ist es relevant?

Ein Agent mit Schreibzugriff kann in Sekunden zerstören, was Teams in Monaten aufgebaut haben. Klare Leitplanken schützen beide Seiten.

## Wie funktioniert es?

**Ein Agent darf:**

- Repository-Zustand lesen,
- lokale Änderungen durchführen,
- Historie und Branches analysieren,
- GitHub-Daten lesen,
- nach explizitem Auftrag GitHub-Ressourcen verändern,
- CI/CD-Ergebnisse auswerten.

**Besonders vorsichtig bei:**

- Force-Push und Branch-Löschung,
- Issue-/PR-Schließung oder -Löschung,
- Release-Veröffentlichung,
- Branch-Protection- und Regeländerungen,
- Secrets und Tokens,
- Produktionsdeployments,
- API-Schreibzugriffen mit weitreichenden Berechtigungen.

**Grundsätze:**

- Minimale Workflow-Rechte (`contents: read`, `pages: write`, `id-token: write` für Pages-Deployments).
- Keine destruktiven Befehle (`reset --hard`, `clean -fd`, Force-Push) ohne ausdrücklichen, verstandenen Auftrag.
- Keine bestehenden Workflows oder Pages-Konfigurationen blind überschreiben.
- Keine erfundenen Domains, Repository-Namen oder Branches.

## Token-Hygiene

- Keine Secrets in Dateien, Commits, Issues, PRs, Logs oder Chat-Antworten.
- `gh auth status` ohne `--show-token` verwenden.
- `gh auth token`-Ausgaben niemals in Dateien, Logs oder Berichte kopieren.
- `.env` und Credential-Dateien nie committen.

## Wie prüfe ich das Ergebnis?

Vor jeder riskanten Aktion: Ist-Zustand gelesen? Auftrag vorhanden? Folgen verstanden? Danach: Änderung anhand von IDs/URLs belegt.

## Weiterführend

- [Permissions](../07-reference/permissions.md)
- [Incident-Recovery](../06-patterns/incident-recovery.md)
