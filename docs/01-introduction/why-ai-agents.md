---
title: Warum KI-Agenten?
description: KI-Agenten als kontrollierte Operatoren für Git und GitHub – was sie leisten, wo ihre Grenzen liegen und wie der Idealzyklus aussieht.
sidebar_position: 3
---

## Was ist das?

Ein KI-Coding-Agent ist in dieser Dokumentation kein „magischer Autopilot“, sondern ein **kontrollierter Software-Operator**: Er sammelt Kontext, plant begrenzt, ändert lokal, validiert, committet und nutzt `gh` für GitHub – alles beobachtbar und reproduzierbar.

## Warum ist es relevant?

Routineaufgaben – Issues lesen, Branches prüfen, Docs ändern, Builds fixen, PRs erstellen – folgen immer demselben Muster. Ein Agent kann sie übernehmen, wenn das Muster explizit ist und jede Stufe prüfbar bleibt. Ohne dieses Modell entstehen unkontrollierte Änderungen.

## Wie funktioniert der Idealzyklus?

```text
OBSERVE → PLAN → CHANGE → VALIDATE → COMMIT → PUSH / PR → CI CHECK → FIX / ITERATE → VERIFY
```

Konkret:

1. **Observe:** `git status`, `git remote -v`, `gh auth status`, `gh repo view`.
2. **Plan:** Aufgabe, betroffene Dateien, Git- und GitHub-Schritte festlegen.
3. **Change:** lokal ändern, fremde Änderungen nicht anfassen.
4. **Validate:** `git diff --check`, Build, Tests.
5. **Commit:** klein, thematisch geschlossen.
6. **Push / PR:** Feature-Branch, `gh pr create`.
7. **CI:** `gh run list`, `gh pr checks`, Fehler aus Logs ableiten.

## Welcher Befehl wird benötigt?

Der Einstiegssatz für fast jede Agentenaufgabe:

```bash
git status --short --branch
git remote -v
gh auth status
gh repo view --json nameWithOwner,defaultBranchRef,url
```

## Wie prüfe ich das Ergebnis?

Nicht der Push ist der Erfolg, sondern der verifizierte Endzustand: sauberer Arbeitsbaum, grüne Checks, gemergter oder reviewter PR, ggf. verifizierte Pages-URL. Siehe [Validieren](../04-ai-agents/validation.md).

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Indem er ihn selbst einhält – jede Phase hinterlässt Spuren (Diff, Commit, Run-Log, PR-URL). Das vollständige Modell steht unter [Operating Model](../04-ai-agents/operating-model.md), das Praxisbeispiel unter [Feature-Entwicklung](../06-patterns/feature-development.md).

## Welche Risiken oder Berechtigungen sind zu beachten?

Ein Agent darf lesen, lokal ändern und CI auswerten. Vorsicht gilt bei Force-Push, Branch-Löschung, Issue-/PR-Schließung, Releases, Branch-Protection-Änderungen, Secrets und Produktionsdeployments. Details unter [Berechtigungen und Sicherheit](../04-ai-agents/permissions-and-safety.md).

## Weiterführend

- [Operating Model](../04-ai-agents/operating-model.md)
- [Repository Discovery](../04-ai-agents/repository-discovery.md)
- [Täglicher Workflow](../06-patterns/daily-workflow.md)
