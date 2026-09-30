---
title: gh als Agentenschnittstelle
description: Warum JSON, Exit-Codes und deterministische Befehle gh zur idealen Schnittstelle für KI-Agenten machen.
sidebar_position: 9
---

## Was ist das?

Die Begründung und Praxis dafür, GitHub-Arbeit von Agenten grundsätzlich über `gh` laufen zu lassen statt über Web-Klickpfade.

## Warum ist es relevant?

Agenten arbeiten mit begrenztem Kontext. `gh` liefert kleine, strukturierte, reproduzierbare Ausgaben – Webseiten liefern große, fragile HTML-Bäume.

## Wie funktioniert es?

Prinzipien:

1. **Deterministische Kommandos** statt Klickpfade.
2. **JSON-Ausgabe** statt Fließtext-Parsing.
3. **`--jq`-Filter** statt Vollausgaben.
4. **Exit-Codes** statt Raten.
5. **Lokale Reproduzierbarkeit:** Jeder Befehl ist im Terminal nachvollziehbar.

```bash
gh repo view --json nameWithOwner,defaultBranchRef,url
gh issue list --json number,title,state,url
gh pr status --json
gh run list --limit 10
```

Verfügbare JSON-Felder hängen von der CLI-Version ab – im Zweifel `gh <befehl> --help` prüfen. Verifiziert mit `gh 2.100.0`.

## Preview-Bereiche einordnen

`gh agent-task` und `gh skill` existieren in aktuellen `gh`-Versionen als **Preview** und können sich ohne Ankündigung ändern:

```bash
gh agent-task list
gh skill list
```

Sie nur dokumentieren oder einsetzen, wenn die verwendete CLI-Version sie tatsächlich anbietet – und nicht als stabile Projektvoraussetzung behandeln.

## Wie prüfe ich das Ergebnis?

```bash
gh issue list --json number,title,state,url --jq 'length'
gh pr status --json --jq 'keys'
echo $?
```

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent baut jede GitHub-Phase aus `gh`-Bausteinen (view/list → Plan → create → checks/run) und zitiert am Ende IDs und URLs statt Behauptungen.

## Welche Risiken sind zu beachten?

Auch lesende Befehle mit großen Limits (`--limit 1000`) kosten Kontext und Zeit. Limits klein halten, mit `--jq` filtern.

## Weiterführend

- [Operating Model](../04-ai-agents/operating-model.md)
- [Exit-Codes](../07-reference/exit-codes.md)
- [gh-Cheatsheet](../07-reference/gh-cheatsheet.md)
