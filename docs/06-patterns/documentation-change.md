---
title: Dokumentationsänderung
description: Docs ändern wie Code – klein, konsistent, mit Build-Nachweis.
sidebar_position: 4
---

## Ablauf

1. Betroffene Seite und Sidebar-Einordnung klären.
2. Markdown bevorzugen; MDX nur bei echter Interaktivität.
3. Front-Matter-Konventionen übernehmen (`title`, `description`, `sidebar_position`).
4. URLs, IDs und Slugs stabil halten.
5. Lokal bauen, Links prüfen.

```bash
git switch -c docs/thema
# ... schreiben ...
git diff --check
npm run build
git commit -m "docs: kurze beschreibung"
git push -u origin docs/thema
gh pr create --fill
```

## Prüfung

Build erfolgreich, keine toten Links (`onBrokenLinks: throw` fängt sie), Sidebar zeigt die Seite an der erwarteten Stelle.

## Agentenhinweis

Der Agent ändert keine Dateipfade und Sidebar-Konfiguration gleichzeitig ohne Not und erfindet keine Slugs.

## Risiken

Umbenannte Dateien brechen externe Links; große Bilddateien blähen das Repo auf.

## Weiterführend

- [Dateien ändern](../04-ai-agents/editing.md)
- [GitHub Pages Deployment](../05-automation/pages-deployment.md)
