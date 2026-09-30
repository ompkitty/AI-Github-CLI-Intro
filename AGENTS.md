# AGENTS.md — Docusaurus & GitHub CLI Arbeitsrichtlinien

## Zweck

Diese Datei definiert die Arbeitsweise eines KI-Coding-Agenten in diesem Docusaurus-Repository. Der Agent arbeitet primär lokal mit Git und nutzt die GitHub CLI (`gh`) für Vorgänge auf GitHub.

Die Regeln gelten für Dokumentation, Konfiguration, React/MDX-Code, Tests, Builds, Issues, Pull Requests und GitHub Actions.

## Technischer Kontext

- Framework: Docusaurus 3.x
- Aktuelle offizielle Dokumentation: https://docusaurus.io/docs
- Zum Zeitpunkt der Erstellung: Docusaurus 3.10.2
- Node.js: mindestens 20.x
- Paketmanager: den bereits im Repository verwendeten Paketmanager beibehalten (`npm`, `yarn`, `pnpm` oder `bun`)
- Versionskontrolle: Git
- GitHub-Integration: GitHub CLI (`gh`)

Docusaurus ist ein statischer Site-Generator auf React-Basis. Dokumentationsseiten liegen typischerweise unter `docs/`; benutzerdefinierte Seiten und React-Komponenten typischerweise unter `src/`; statische Dateien unter `static/`. Die genauen Pfade dieses Repositories haben Vorrang vor den Standardannahmen.

## Prioritäten

1. Bestehende Repository-Konventionen erhalten.
2. Anforderungen des aktuellen Tasks erfüllen.
3. Kleine, nachvollziehbare Änderungen bevorzugen.
4. Bestehende APIs, URLs, IDs, Slugs und Sidebar-Strukturen nicht unnötig verändern.
5. Änderungen vor Abschluss lokal validieren.
6. GitHub-Aktionen nachvollziehbar und mit minimalen Berechtigungen durchführen.
7. Keine Secrets, Tokens oder privaten Inhalte ausgeben.

## Erster Schritt bei jedem Task

Vor Änderungen:

```bash
git status --short --branch
git remote -v
node --version
npm --version
git --version
gh --version
gh auth status
```

Anschließend:

- Repository-Struktur prüfen.
- `package.json` und Lockfile identifizieren.
- Docusaurus-Version aus `package.json` bzw. mit `npx docusaurus --version` prüfen.
- Vorhandene README-, CONTRIBUTING-, CI/CD- und weitere `AGENTS.md`-Dateien lesen.
- Bestehende lokale Änderungen nicht überschreiben oder zurücksetzen.
- Bei einem Dirty Working Tree nur die Dateien des Tasks verändern, sofern der Nutzer nichts anderes verlangt.

## Installation der Werkzeuge

### Git

Git muss installiert und im `PATH` verfügbar sein.

Offizielle Installationsseite:
https://git-scm.com/install/

Beispiele:

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

Nach der Installation:

```bash
git --version
```

### GitHub CLI

GitHub CLI heißt `gh` und wird für GitHub-spezifische Vorgänge bevorzugt.

Offizielle Dokumentation:
https://cli.github.com/manual/

Beispiele:

**Windows (winget):**

```powershell
winget install --id GitHub.cli
```

**macOS (Homebrew):**

```bash
brew install gh
```

**Linux:**

Verwende das offizielle Installationsverfahren für die jeweilige Distribution:
https://github.com/cli/cli/blob/trunk/docs/install_linux.md

Nach der Installation:

```bash
gh --version
```

### GitHub-Authentifizierung

Interaktive Anmeldung:

```bash
gh auth login
```

Danach Zustand prüfen:

```bash
gh auth status
```

Damit Git Credential Handling für Git über GitHub CLI erfolgen kann:

```bash
gh auth setup-git
```

Für GitHub Enterprise:

```bash
gh auth login --hostname <hostname>
gh auth setup-git --hostname <hostname>
```

Tokens niemals in Dateien, Commits, Issues, Pull Requests, Logs oder Chat-Antworten schreiben. Für Headless-/CI-Szenarien `GH_TOKEN` bzw. die von GitHub vorgesehenen Token-Mechanismen verwenden.

## Docusaurus-Regeln

### Dokumentation

Neue Dokumente grundsätzlich als Markdown (`.md`) oder nur bei tatsächlich benötigter Interaktivität als MDX (`.mdx`) anlegen.

Typischer Aufbau:

```text
docs/
├── getting-started/
│   ├── intro.md
│   └── installation.md
├── guides/
└── reference/
```

Die Ordnerstruktur soll möglichst die Sidebar-Struktur widerspiegeln. Bei automatisch generierten Sidebars ist dies besonders wichtig.

### Front Matter

Front Matter nur einsetzen, wenn es einen konkreten Zweck erfüllt, zum Beispiel:

```md
---
title: Installation
description: Installation und Einrichtung des Projekts
sidebar_position: 2
slug: /installation
---
```

Vorhandene Felder und Konventionen des Projekts nicht ohne Grund umbenennen.

### URLs und IDs

Das Umbenennen von Dateien kann die standardmäßige Dokument-ID bzw. URL verändern. Bei öffentlich erreichbaren Dokumenten daher bestehende URLs stabil halten, zum Beispiel durch einen expliziten `slug`, wenn dies zur Repository-Konvention passt.

### Sidebar

Vor einer Änderung an `sidebars.js` oder einer ähnlichen Sidebar-Konfiguration zuerst prüfen, ob das Projekt eine automatisch generierte Sidebar verwendet.

Nicht gleichzeitig Dateipfade und Sidebar-Konfiguration unnötig umstrukturieren.

### Konfiguration

Vor Änderungen an `docusaurus.config.*`, `sidebars.*`, Theme- oder Plugin-Konfiguration die bestehende Struktur lesen und nur die tatsächlich benötigten Stellen ändern.

Keine experimentellen Plugins oder zusätzlichen Abhängigkeiten hinzufügen, wenn die Aufgabe ohne sie lösbar ist.

### Start, Build und Validierung

Den vorhandenen Paketmanager verwenden. Beispiele für npm:

```bash
npm install
npm run start
npm run build
```

`npm run start` ist für die lokale Vorschau; `npm run build` prüft den Produktions-Build. Bei anderen Paketmanagern die entsprechenden Scripts des Repositories verwenden.

Vor Abschluss mindestens:

```bash
npm run build
git diff --check
git status --short --branch
```

Weitere vorhandene Checks wie `npm test`, `npm run lint`, `npm run typecheck` oder CI-spezifische Kommandos ebenfalls ausführen, wenn sie im Repository definiert sind oder für die Änderung relevant sind.

## Git-Arbeitsweise

### Branching

Nicht direkt auf dem Default-Branch arbeiten, sofern der Nutzer dies nicht ausdrücklich verlangt und die Repository-Regeln es zulassen.

Bevorzugtes Muster:

```bash
git switch -c docs/<kurze-beschreibung>
```

Alternativ z. B. `feat/`, `fix/`, `chore/` passend zum Repository-Konventionen.

### Commits

Commits sollen klein und logisch sein. Eine Commit-Message beschreibt die Änderung, nicht den gesamten Dialog mit dem Nutzer.

Beispiel:

```bash
git add docs/installation.md

git commit -m "docs: improve installation guide"
```

Keine fremden oder bereits vorhandenen lokalen Änderungen in einen Commit aufnehmen.

### Push

Vor dem Push prüfen:

```bash
git status --short --branch
git diff --cached
```

Push nur auf den vorgesehenen Feature-Branch:

```bash
git push -u origin <branch>
```

Nicht mit `--force` pushen, außer der Nutzer verlangt dies ausdrücklich und die Konsequenzen sind verstanden.

## GitHub CLI — Arbeitsweise des KI-Agenten

GitHub CLI ist die bevorzugte Schnittstelle für GitHub, statt GitHub-Webseiten manuell zu simulieren oder API-Aufrufe mit beliebigen HTTP-Clients zu bauen.

### Repository-Informationen

```bash
gh repo view --json nameWithOwner,defaultBranchRef,url
```

Repositories auflisten oder klonen:

```bash
gh repo list <owner>
gh repo clone <owner>/<repo>
```

### Issues lesen und bearbeiten

```bash
gh issue list
gh issue view <nummer>
gh issue create --title "..." --body "..."
gh issue comment <nummer> --body "..."
```

Issues nur erstellen, kommentieren, schließen oder bearbeiten, wenn es Teil des Auftrags ist oder der Nutzer dies ausdrücklich erlaubt.

### Pull Requests

Status prüfen:

```bash
gh pr list
gh pr view <nummer>
gh pr checks <nummer>
```

Pull Request erstellen:

```bash
gh pr create --base <default-branch> --head <feature-branch> --title "..." --body "..."
```

Für einen Draft:

```bash
gh pr create --draft --base <default-branch> --head <feature-branch> --title "..." --body "..."
```

Bei vorhandenen Pull Requests zuerst Beschreibung, Checks und Review-Status lesen, bevor Änderungen vorgenommen werden.

### GitHub Actions

Runs anzeigen:

```bash
gh run list
gh run view <run-id>
```

Bei einem fehlgeschlagenen Check möglichst zuerst die Logs des konkreten Runs untersuchen, statt blind Änderungen vorzunehmen.

### Strukturierte Ausgabe

Für Skripte und Agenten bevorzugt strukturierte Ausgabe nutzen:

```bash
gh issue list --json number,title,state,url

gh pr list --json number,title,state,headRefName,baseRefName,url
```

Mit `--jq` können relevante Felder gezielt extrahiert werden.

### GitHub API

`gh api` nur verwenden, wenn kein passender höherer `gh`-Befehl existiert:

```bash
gh api repos/<owner>/<repo>
```

Keine unnötigen Schreiboperationen über `gh api` durchführen.

### Optional: Agent Tasks und Skills

Neuere GitHub-CLI-Versionen bieten zusätzlich `gh agent-task` und `gh skill` als Preview-Funktionen. Diese sind nur zu verwenden, wenn das konkrete Umfeld sie unterstützt und der Task sie ausdrücklich oder sinnvoll voraussetzt. Preview-Funktionen nicht als stabile Projektvoraussetzung behandeln.

Beispiele:

```bash
gh agent-task list
gh skill list
```

## Empfohlener Agenten-Workflow

### 1. Verstehen

- Task lesen.
- Repository-Regeln lesen.
- Betroffene Dateien identifizieren.
- Git-Status und Remote prüfen.
- GitHub-Kontext mit `gh` prüfen, wenn der Task GitHub betrifft.

### 2. Planen

Vor Änderungen kurz festlegen:

- welche Dateien geändert werden,
- welche Docusaurus- oder GitHub-Abhängigkeiten betroffen sind,
- welche Validierungen notwendig sind.

Bei einfachen Änderungen keinen unnötig langen Plan erzeugen.

### 3. Ändern

- Bestehende Muster bevorzugen.
- Keine großen Refactorings im Rahmen eines kleinen Dokumentations-Tasks.
- Neue Abhängigkeiten nur mit nachvollziehbarem Nutzen.
- Inhalte verständlich, präzise und wartbar formulieren.
- Keine Secrets einchecken.

### 4. Prüfen

Nach Änderungen:

```bash
git diff --check
npm run build
git status --short --branch
```

Zusätzlich relevante Tests/Linter/Typechecks ausführen.

### 5. GitHub-Schritte

Wenn der Task einen Issue-/PR-/Actions-Schritt enthält:

1. Authentifizierung mit `gh auth status` prüfen.
2. Remote und Repository verifizieren.
3. Branch prüfen/erstellen.
4. Änderungen committen.
5. Feature-Branch pushen.
6. PR mit `gh pr create` anlegen oder bestehenden PR aktualisieren.
7. Checks mit `gh pr checks` bzw. `gh run` prüfen.
8. Am Ende die erzeugte PR-/Issue-URL nennen.

Keine automatisch ausgelösten Folgeaktionen durchführen, die über den Auftrag hinausgehen.

## Sicherheitsregeln

- Keine Token-Ausgaben wie `gh auth token` verwenden, außer ein konkreter Debugging-Fall erfordert dies und die Ausgabe wird sofort geschützt; grundsätzlich ist der Befehl zu vermeiden.
- Keine Secrets aus Umgebungsvariablen ausgeben.
- Niemals Dateien wie `.env`, Secret Stores oder Credential-Dateien in einen Commit aufnehmen.
- `gh auth status` ohne `--show-token` verwenden.
- Vor destruktiven Git-Befehlen wie `reset --hard`, `clean -fd`, `checkout -- <file>` oder erzwungenem Push die lokalen Änderungen und Auswirkungen prüfen. Ohne ausdrücklichen Auftrag keine destruktiven Operationen ausführen.
- Keine fremden lokalen Änderungen löschen.

## Kommunikationsregeln des Agenten

Am Ende einer Arbeit:

1. Zusammenfassen, was geändert wurde.
2. Relevante Validierungen nennen.
3. Offene Punkte oder fehlgeschlagene Checks klar benennen.
4. Bei GitHub-Aktionen die betroffene Issue-/PR-Nummer oder URL nennen.
5. Keine Behauptung aufstellen, ein Check sei erfolgreich, wenn er nicht tatsächlich ausgeführt bzw. aus einem belastbaren Ergebnis abgeleitet wurde.

## Offizielle Referenzen

- Docusaurus: https://docusaurus.io/docs
- Docusaurus Installation: https://docusaurus.io/docs/installation
- Docusaurus CLI: https://docusaurus.io/docs/cli
- Docusaurus Dokumente: https://docusaurus.io/docs/create-doc
- Docusaurus Sidebar: https://docusaurus.io/docs/sidebar
- Git: https://git-scm.com/install/
- GitHub CLI Manual: https://cli.github.com/manual/
- GitHub CLI Auth: https://cli.github.com/manual/gh_auth_login
- GitHub CLI Git Credential Helper: https://cli.github.com/manual/gh_auth_setup-git
