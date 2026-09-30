---
title: Git installieren
description: Git auf Windows, macOS und Linux installieren und die Identität für saubere Commits einrichten.
sidebar_position: 1
---

## Was ist das?

Die lokale Git-Installation: Binary, Konfiguration und Identitätsdaten für Commits.

## Warum ist es relevant?

Ohne installiertes Git kann kein Repository angelegt, gelesen oder verändert werden – weder von Menschen noch von Agenten.

## Wie funktioniert es?

Offizielle Installationsseite: [git-scm.com/install](https://git-scm.com/install/).

**Windows (winget):**

```powershell
winget install --id Git.Git -e --source winget
```

**macOS (Homebrew):**

```bash
brew install git
```

**Debian/Ubuntu:**

```bash
sudo apt update
sudo apt install git
```

Danach Identität einrichten (erscheint in jedem Commit):

```bash
git config --global user.name "Vorname Nachname"
git config --global user.email "name@beispiel.de"
git config --global init.defaultBranch main
```

## Wie prüfe ich das Ergebnis?

```bash
git --version
git config --global --list
```

Erwartet: eine Versionsnummer (z. B. `git version 2.55.0`) und die gesetzten `user.name`/`user.email`-Werte.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent prüft die Werkzeugkette, bevor er arbeitet, und bricht bei fehlendem Git ab statt zu improvisieren:

```bash
git --version
git config user.name
git config user.email
```

## Welche Risiken sind zu beachten?

Falsche Identität (z. B. automatisch generierte Hostnamen-Adressen) landet dauerhaft in der Historie. In geteilten Umgebungen `--global` vs. `--local` bewusst wählen.

## Weiterführend

- [Repository-Grundlagen](repository-basics.md)
- [Git-Dokumentation](https://git-scm.com/docs)
