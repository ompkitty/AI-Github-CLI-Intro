---
title: Operating Model
description: Der verbindliche Agentenzyklus von Observe bis Verify – jede Phase mit Befehlen und Abbruchkriterien.
sidebar_position: 1
---

## Was ist das?

Das Betriebsmodell des Agenten: acht Phasen von der Beobachtung bis zur Verifikation, jede mit klaren Ein- und Ausgängen.

## Warum ist es relevant?

Ohne Modell wird Agentenarbeit beliebig. Mit Modell ist jeder Schritt überprüfbar – und Fehler lassen sich genau einer Phase zuordnen.

## Wie funktioniert es?

```text
OBSERVE → PLAN → CHANGE → VALIDATE → COMMIT → PUSH / PR → CI CHECK → FIX / ITERATE → VERIFY
```

### Phase A — Observe

```bash
git status --short --branch
git remote -v
gh auth status
gh repo view --json nameWithOwner,defaultBranchRef,url
```

Bei Bedarf: `git log --oneline --decorate -10`, `git branch --all`, `gh issue list`, `gh pr status`.

### Phase B — Plan

Aufgabe, betroffene Dateien, Git-Schritte und GitHub-Schritte festlegen – **vor** jeder Schreiboperation.

### Phase C — Change

Lokal ändern. Fremde Änderungen nicht löschen oder überschreiben.

### Phase D — Validate

```bash
git diff --check
git status --short --branch
npm run build
```

### Phase E — Commit

Klein und thematisch geschlossen:

```bash
git add <dateien>
git commit -m "docs: kurze beschreibung"
```

### Phase F — Push / PR

```bash
git push -u origin <branch>
gh pr create --fill
```

### Phase G — CI und Deployment

```bash
gh run list --limit 10
gh pr checks <nummer>
gh run view <run-id> --log-failed
```

### Verify

Arbeitsbaum sauber, Checks grün, PR-URL und ggf. Pages-URL nennen. Erfolg erst behaupten, wenn er belegt ist.

## Wie prüfe ich das Ergebnis?

Jede Phase hinterlässt ein Artefakt: Statusausgabe, Plan, Diff, Build-Log, Commit-Hash, PR-URL, Run-Status.

## Welche Risiken sind zu beachten?

Phasen überspringen (z. B. ohne Validate pushen) verlagert Fehler in CI und kostet alle Beteiligten Zeit. Siehe [Berechtigungen und Sicherheit](permissions-and-safety.md).

## Weiterführend

- [Planen](planning.md)
- [Validieren](validation.md)
- [Täglicher Workflow](../06-patterns/daily-workflow.md)
