---
title: API-Zugriff mit gh api
description: Der Escape Hatch für alles ohne High-Level-Befehl – authentifizierte GitHub-API-Aufrufe mit Maß.
sidebar_position: 8
---

## Was ist das?

`gh api` sendet authentifizierte Anfragen an die GitHub REST- oder GraphQL-API. Es ist der Fallback, wenn kein `gh <bereich> <aktion>` existiert.

## Warum ist es relevant?

Manche Funktionen – etwa Pages-Konfiguration – haben keinen eigenen `gh`-Befehl. `gh api` schließt diese Lücke, ohne eigene HTTP-Clients oder Token-Verwaltung zu benötigen.

## Wie funktioniert es?

```bash
gh api repos/{owner}/{repo}
gh api repos/{owner}/{repo}/pages
gh api --method POST repos/{owner}/{repo}/pages -f build_type=workflow
```

Strukturiert arbeiten mit `--jq`:

```bash
gh issue list --json number,title,state,url --jq '.[] | select(.state == "open")'
```

Beispiel aus diesem Projekt (Pages auf Actions-Deployment umstellen):

```bash
gh api repos/OWNER/REPO/pages
gh api --method POST repos/OWNER/REPO/pages -f build_type=workflow
```

## Wie prüfe ich das Ergebnis?

Antwort-JSON auf erwartete Felder prüfen (`html_url`, `build_type`) statt nur auf Exit-Code zu vertrauen.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent nutzt `gh api` nur, wenn der High-Level-Befehl fehlt, und führt keine unnötigen Schreiboperationen aus. Vor GitHub-Konfigurationsänderungen liest er den Ist-Zustand.

## Welche Risiken sind zu beachten?

`gh api` kann mit `POST/PUT/PATCH/DELETE` weitreichend schreiben (Berechtigungen, Branch Protection, Secrets). Jede Schreiboperation braucht Auftrag und Minimalprinzip.

## Weiterführend

- [GitHub CLI als Schnittstelle](scripting.md)
- [GitHub REST-Dokumentation](https://docs.github.com/en/rest)
