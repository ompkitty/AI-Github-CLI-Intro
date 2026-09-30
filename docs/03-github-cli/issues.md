---
title: Issues
description: Issues listen, lesen, erstellen und kommentieren – nur mit Auftrag schreiben.
sidebar_position: 4
---

## Was ist das?

`gh issue` steuert GitHub Issues: die Aufgaben- und Diskussions-Ebene über dem Code.

## Warum ist es relevant?

Issues sind der häufigste Einstiegspunkt für Agentenarbeit: Aufgabe lesen, Kontext verstehen, Ergebnis zurückmelden.

## Wie funktioniert es?

```bash
gh issue list --json number,title,state,url
gh issue view 12
gh issue view 12 --json number,title,state,body,labels,assignees
gh issue create --title "..." --body "..."
gh issue comment 12 --body "..."
```

Regel aus dieser Dokumentation: Issues nur erstellen, kommentieren, schließen oder bearbeiten, wenn es Teil des Auftrags ist oder ausdrücklich erlaubt wurde.

## Wie prüfe ich das Ergebnis?

```bash
gh issue view 12 --json number,state,url
gh issue list --json number,title,state --jq '.[] | select(.number == 12)'
```

Erwartet: korrekte Nummer, erwarteter State (`open`/`closed`), stabile URL.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Muster „Issue → Plan → PR“:

```bash
gh issue view 12 --json number,title,body,labels
# ... planen, ändern, validieren ...
gh pr create --base main --head docs/thema --title "..." --body "Closes #12"
```

## Welche Risiken sind zu beachten?

Schließen, Löschen oder massenhaftes Kommentieren stört echte Teams. Schreibende Issue-Befehle nur mit Auftrag; vorher `view` lesen.

## Weiterführend

- [Pull Requests](pull-requests.md)
- [Issue-Automatisierung](../05-automation/issue-automation.md)
