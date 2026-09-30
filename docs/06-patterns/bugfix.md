---
title: Bugfix
description: Vom Symptom zum minimalen Fix – reproduzieren, eingrenzen, beheben, absichern.
sidebar_position: 2
---

## Ablauf

1. **Reproduzieren:** Fehler lokal oder in CI nachstellen, Log sichern (`gh run view <id> --log-failed`).
2. **Eingrenzen:** betroffene Dateien und Commits identifizieren (`git log --oneline -10 -- <datei>`).
3. **Branch:** `fix/kurze-beschreibung` ab aktuellem Stand.
4. **Fix:** kleinstmögliche Änderung, keine Nebenbaustellen.
5. **Absichern:** betroffene Prüfung erneut ausführen (Build, Test, betroffener Check).
6. **PR:** Symptom, Ursache und Nachweis im Body dokumentieren.

```bash
git switch -c fix/kurze-beschreibung
# ... fix ...
git diff --check
npm run build
git commit -m "fix: kurze beschreibung"
git push -u origin fix/kurze-beschreibung
gh pr create --base main --head fix/kurze-beschreibung --title "fix: ..." --body "Symptom: ... Ursache: ... Nachweis: ..."
```

## Prüfung

Fix ohne Regression: betroffene Stelle grün, Rest unverändert.

## Agentenhinweis

Der Agent fixt genau eine Ursache pro Durchlauf und validiert nach jeder Korrektur erneut, statt mehrere Vermutungen zu stapeln.

## Risiken

„Nebenbei“ Refactoring im Bugfix-PR versteckt; Fix ohne Reproduktionstest kehrt zurück.

## Weiterführend

- [Fehlerbehebung](../02-git/troubleshooting.md)
- [Validieren](../04-ai-agents/validation.md)
