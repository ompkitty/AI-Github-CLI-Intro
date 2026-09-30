---
title: Feature-Entwicklung
description: Vom Issue zum gemergten PR – das vollständige Agentenbeispiel mit allen Phasen.
sidebar_position: 3
---

## Ablauf

```bash
# 1. Observe
git status --short --branch
git remote -v
gh repo view --json nameWithOwner,defaultBranchRef,url
gh issue view 12 --json number,title,body,labels

# 2. Plan: Dateien, Git-Schritte, GitHub-Schritte, Validierung

# 3. Branch + Change
git switch -c feat/kurzbeschreibung
# ... ändern ...

# 4. Validate
git diff --check
npm run build

# 5. Commit + Push
git add <dateien>
git commit -m "feat: kurze beschreibung"
git push -u origin feat/kurzbeschreibung

# 6. PR + CI
gh pr create --base main --head feat/kurzbeschreibung --title "feat: ..." --body "Closes #12"
gh pr checks
gh run list --limit 5

# 7. Fix / Iterate bei roten Checks
gh run view <run-id> --log-failed
# ... korrigieren, erneut validieren, pushen ...

# 8. Verify: Checks grün, PR-URL nennen
```

## Warum so ausführlich?

Jede Phase hinterlässt einen Nachweis. Fällt etwas aus, ist klar, wo.

## Prüfung

`gh pr checks` grün, Review adressiert, PR-Body referenziert das Issue.

## Risiken

Scope-Creep im Feature-Branch; Merge trotz roter Checks.

## Weiterführend

- [Operating Model](../04-ai-agents/operating-model.md)
- [Pull-Request-Workflow](../04-ai-agents/pull-request-workflow.md)
