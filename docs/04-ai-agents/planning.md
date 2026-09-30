---
title: Planen
description: Vor jeder Schreiboperation festlegen, was geändert wird – klein, begrenzt und umkehrbar.
sidebar_position: 3
---

## Was ist das?

Die Planungsphase: Aufgabe verstehen, Dateien identifizieren, Git- und GitHub-Schritte sowie Validierungen vorab benennen.

## Warum ist es relevant?

Ein Plan macht Aufwand schätzbar, Änderungen reviewbar und Abbrüche billig. Bei einfachen Tasks genügt ein Dreizeiler; bei großen Tasks verhindert er Scope-Creep.

## Wie funktioniert es?

Vor Änderungen festlegen:

1. Welche Dateien werden geändert (und welche ausdrücklich nicht)?
2. Welche Docusaurus- oder GitHub-Abhängigkeiten sind betroffen?
3. Welche Validierungen sind nötig (Build, Tests, Checks)?
4. Braucht es Branch, PR, Issue-Referenz?

Bei Docusaurus zusätzlich: URLs/IDs/Slugs stabil halten, Sidebar-Konsistenz wahren, keine experimentellen Plugins ohne Nutzen.

## Wie prüfe ich das Ergebnis?

Der Plan passt in wenige Sätze und nennt Dateien, Befehle und Prüfkriterien. Wenn er das nicht tut, ist er kein Plan.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent formuliert den Plan explizit (im Chat oder als Aufgabenliste), wartet bei Unklarheiten mit Schreiboperationen und fragt nach, statt zu raten.

## Welche Risiken sind zu beachten?

Stille Planausweitung („nebenbei noch refactorn“) zerstört Reviewbarkeit. Große Refactorings gehören nicht in kleine Docs-Tasks.

## Weiterführend

- [Dateien ändern](editing.md)
- [Dokumentationsänderung](../06-patterns/documentation-change.md)
