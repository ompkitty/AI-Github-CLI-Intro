---
title: gh installieren
description: GitHub CLI auf Windows, macOS und Linux installieren und die Version verifizieren.
sidebar_position: 1
---

## Was ist das?

Die Installation der GitHub CLI (`gh`) – dem Terminal-Werkzeug für GitHub.

## Warum ist es relevant?

Ohne `gh` bleibt GitHub für Agenten eine manuelle Weboberfläche. Mit `gh` wird es skriptbar.

## Wie funktioniert es?

Offizielle Quellen: [cli.github.com](https://cli.github.com/) und [Installationsanleitung](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

**Windows (winget):**

```powershell
winget install --id GitHub.cli
```

**macOS (Homebrew):**

```bash
brew install gh
```

**Linux:** offizielles Verfahren der jeweiligen Distribution verwenden (siehe Link oben).

## Wie prüfe ich das Ergebnis?

```bash
gh --version
```

Erwartet: Versionsnummer, z. B. `gh version 2.100.0`. Diese Dokumentation wurde mit `gh 2.100.0` verifiziert; bei älteren Versionen einzelne Flags gegen `gh <befehl> --help` prüfen.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Vor jeder GitHub-Aufgabe:

```bash
gh --version
gh auth status
```

Fehlt `gh` oder das Login, meldet der Agent das als Blocker statt Workarounds zu bauen.

## Welche Risiken sind zu beachten?

System-Paketquellen können veraltete `gh`-Versionen liefern. Für `agent-task`/`skill`-Preview-Features ist eine aktuelle Version nötig.

## Weiterführend

- [Authentifizierung](authentication.md)
- [GitHub CLI Manual](https://cli.github.com/manual/)
