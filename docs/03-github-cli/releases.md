---
title: Releases
description: Versionen mit gh release verwalten – von der Tag-Erstellung bis zur Veröffentlichung.
sidebar_position: 7
---

## Was ist das?

`gh release` verwaltet GitHub Releases: getaggte, dokumentierte und mit Assets versehene Versionsstände.

## Warum ist es relevant?

Releases markieren den Punkt, ab dem Code für Nutzer gilt. Sie verdienen denselben Respekt wie Produktionsdeployments.

## Wie funktioniert es?

```bash
gh release list --limit 10
gh release view v1.2.0
gh release create v1.2.0 --title "v1.2.0" --notes "Änderungen ..."
gh release create v1.2.0 --draft --title "v1.2.0" --notes "..."
gh release upload v1.2.0 dist/app.zip
```

Empfohlen: erst Draft anlegen, Notes prüfen, dann veröffentlichen.

## Wie prüfe ich das Ergebnis?

```bash
gh release view v1.2.0 --json tagName,isDraft,isPrerelease,url
```

Erwartet: korrekter Tag, Draft-Status wie beabsichtigt, stabile URL.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent bereitet Releases vor (Notes aus Commits/PRs entwerfen, Assets bauen), veröffentlicht aber nur mit ausdrücklichem Auftrag. Siehe [Release-Workflow](../06-patterns/release-workflow.md).

## Welche Risiken sind zu beachten?

Veröffentlichte Releases sind öffentlich sichtbar und lösen ggf. Downstream-Automatisierung aus. Tag-Namen und Versionsstände vorher verifizieren.

## Weiterführend

- [Release-Workflow](../06-patterns/release-workflow.md)
- [CI/CD](../05-automation/ci-cd.md)
