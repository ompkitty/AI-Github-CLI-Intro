# AGENTS.md — Git, GitHub CLI & KI-Agenten Documentation

## 1. Zweck und thematischer Rahmen

Dieses Repository ist eine **praxisorientierte Dokumentation über Git, GitHub CLI (`gh`) und die Zusammenarbeit von KI-Coding-Agenten mit Git/GitHub**.

Docusaurus ist ausschließlich die technische Veröffentlichungsplattform. Es ist **nicht** das fachliche Hauptthema der Website. Bestehende Inhalte, die primär Docusaurus erklären, sollen im Rahmen einer thematischen Neuausrichtung systematisch durch Inhalte rund um Git, GitHub CLI, Agenten-Workflows und Automatisierung ersetzt oder neu eingeordnet werden.

Die Dokumentation soll erklären:

- wie Git lokal funktioniert,
- wie GitHub CLI GitHub aus dem Terminal heraus steuerbar macht,
- wie Menschen und KI-Agenten mit Git und GitHub zusammenarbeiten,
- welche Automatisierungs- und Integrationsmöglichkeiten existieren,
- wie Änderungen sicher geplant, ausgeführt, geprüft und veröffentlicht werden,
- welche Grenzen, Risiken und Berechtigungen Agenten berücksichtigen müssen.

## 2. Primäre Quellen und Aktualität

Bei technischen Aussagen immer zuerst die offiziellen Quellen berücksichtigen. Vor allem bei CLI-Befehlen, Actions, Berechtigungen und sich ändernden Features müssen aktuelle Quellen geprüft werden.

Primärquellen:

- Docusaurus: https://docusaurus.io/docs
- Git: https://git-scm.com/docs
- GitHub CLI: https://cli.github.com/manual/
- GitHub CLI Repository: https://github.com/cli/cli
- GitHub Docs: https://docs.github.com/
- GitHub Actions: https://docs.github.com/en/actions
- GitHub Pages: https://docs.github.com/en/pages

Docusaurus stellt statische Dateien im `build/`-Verzeichnis bereit; Hosting und Deployment werden von der gewählten Plattform übernommen. Für dieses Projekt ist GitHub Pages mit GitHub Actions der bevorzugte Veröffentlichungsweg.

GitHub CLI umfasst unter anderem `gh auth`, `gh repo`, `gh issue`, `gh pr`, `gh run`, `gh workflow`, `gh api` sowie aktuelle Zusatzbereiche wie `gh agent-task` und `gh skill`. Diese Befehle dürfen in der Dokumentation nicht als erfundene oder hypothetische Features dargestellt werden; ihre aktuelle Verfügbarkeit ist vor der Veröffentlichung zu prüfen.

## 3. Zielgruppen

Die Dokumentation richtet sich an:

- Entwickler, die Git und GitHub CLI praktisch lernen wollen,
- DevOps- und Platform-Teams,
- technische Autoren,
- Nutzer von Coding-Agenten,
- Teams, die Agenten sicher in bestehende Git- und GitHub-Prozesse integrieren wollen.

Schreibe so, dass Einsteiger einen verständlichen Einstieg bekommen und erfahrene Nutzer schnell zu konkreten Befehlen, Workflows und Referenzen springen können.

## 4. Verbindliche Informationsarchitektur

Die Website soll fachlich neu strukturiert werden. Eine geeignete Zielstruktur ist:

```text
docs/
├── 01-introduction/
│   ├── what-is-git.md
│   ├── what-is-github-cli.md
│   └── why-ai-agents.md
├── 02-git/
│   ├── installation.md
│   ├── repository-basics.md
│   ├── staging-commits.md
│   ├── branches.md
│   ├── merge-rebase.md
│   ├── remotes.md
│   └── troubleshooting.md
├── 03-github-cli/
│   ├── installation.md
│   ├── authentication.md
│   ├── repository.md
│   ├── issues.md
│   ├── pull-requests.md
│   ├── actions.md
│   ├── releases.md
│   ├── api.md
│   └── scripting.md
├── 04-ai-agents/
│   ├── operating-model.md
│   ├── repository-discovery.md
│   ├── planning.md
│   ├── editing.md
│   ├── git-workflow.md
│   ├── github-workflow.md
│   ├── validation.md
│   ├── pull-request-workflow.md
│   └── permissions-and-safety.md
├── 05-automation/
│   ├── github-actions.md
│   ├── ci-cd.md
│   ├── issue-automation.md
│   ├── pr-automation.md
│   ├── agent-automation.md
│   └── pages-deployment.md
├── 06-patterns/
│   ├── daily-workflow.md
│   ├── bugfix.md
│   ├── feature-development.md
│   ├── documentation-change.md
│   ├── release-workflow.md
│   └── incident-recovery.md
└── 07-reference/
    ├── git-cheatsheet.md
    ├── gh-cheatsheet.md
    ├── exit-codes.md
    ├── permissions.md
    └── glossary.md
```

Die konkrete Ordnerstruktur darf an das bestehende Repository angepasst werden. Die fachliche Reihenfolge soll jedoch erhalten bleiben:

**Grundlagen → Git → GitHub CLI → KI-Agenten → Automatisierung → Praxis → Referenz**

## 5. Inhaltliche Regeln

### 5.1 Git und GitHub CLI klar trennen

Git und GitHub CLI sind unterschiedliche Werkzeuge.

- Git verwaltet Versionshistorie, Branches, Commits, Remotes und den lokalen/verteilen Versionskontroll-Workflow.
- GitHub CLI steuert GitHub-Funktionen wie Issues, Pull Requests, Actions, Releases oder API-Aufrufe.
- Viele Workflows kombinieren beide Werkzeuge.

Diese Trennung muss in Erklärungen sichtbar bleiben.

### 5.2 Agenten als kontrollierte Operatoren erklären

Ein KI-Agent ist in dieser Dokumentation kein „magischer Autopilot“. Beschreibe ihn als Software-Operator, der:

1. Kontext sammelt,
2. den Repository-Zustand analysiert,
3. einen begrenzten Plan erstellt,
4. Änderungen lokal durchführt,
5. Änderungen validiert,
6. Git-Aktionen ausführt,
7. GitHub-Aktionen über `gh` durchführt,
8. Ergebnisse anhand von Rückmeldungen aus Tests und CI nachbessert.

Agenten sollen bevorzugt beobachtbare, reproduzierbare Kommandos verwenden und ihren Zustand nicht nur aus Annahmen ableiten.

### 5.3 Konkrete Möglichkeiten zeigen

Die Dokumentation soll zeigen, was ein Agent mit Git/GitHub CLI praktisch erledigen kann, zum Beispiel:

- Repository und Branch-Zustand untersuchen,
- Issues lesen, erstellen, kommentieren und aktualisieren,
- Pull Requests erstellen, prüfen und kommentieren,
- CI-Checks und Workflow-Runs analysieren,
- Releases vorbereiten und veröffentlichen,
- GitHub API-Abfragen mit `gh api` durchführen,
- strukturierte JSON-Ausgaben für skriptbare Agenten-Workflows verwenden,
- wiederkehrende Routineaufgaben automatisieren,
- Dokumentation ändern und anschließend per Pull Request veröffentlichen,
- GitHub Pages Deployments beobachten und verifizieren.

Die jeweils gültigen Befehle müssen mit der aktuellen GitHub-CLI-Dokumentation abgeglichen werden. Beispiele für Issues und Pull Requests sind unter anderem `gh issue list/view/create` sowie `gh pr list/view/create/checks`.

### 5.4 `gh api` mit Bedacht verwenden

`gh api` ist ein Escape Hatch für GitHub-API-Funktionen, für die kein passender High-Level-CLI-Befehl vorhanden ist. Es führt authentifizierte API-Anfragen aus und unterstützt auch strukturierte Datenverarbeitung.

Bevorzugt:

```bash
gh <fachbereich> <aktion>
```

und erst danach:

```bash
gh api <endpoint>
```

### 5.5 Authentifizierung erklären, ohne Secrets zu verbreiten

Die Dokumentation darf erklären, wie `gh auth login`, `gh auth status` und `gh auth setup-git` funktionieren. `gh auth setup-git` konfiguriert Git so, dass GitHub CLI als Credential Helper verwendet wird.

Tokens dürfen niemals in Beispielausgaben, Screenshots, Commits oder Log-Auszüge aufgenommen werden.

`gh auth status --show-token` darf in normalen Lernbeispielen **nicht** verwendet werden, weil es Tokenwerte sichtbar machen kann. Die Existenz eines aktiven Login-Zustands reicht in der Regel aus.

## 6. Standard-Agentenworkflow

Jeder beschriebene Agenten-Workflow soll diesem Muster folgen:

### Phase A — Observe

```bash
git status --short --branch
git remote -v
gh auth status
gh repo view --json nameWithOwner,defaultBranchRef,url
```

Bei Bedarf:

```bash
git log --oneline --decorate -10
git branch --all
gh issue list
gh pr status
```

### Phase B — Plan

Der Agent soll die Aufgabe, betroffene Dateien, erforderliche Git-Schritte und erforderliche GitHub-Schritte identifizieren, bevor er schreibende Operationen ausführt.

### Phase C — Change

Lokale Änderungen zuerst im Arbeitsbaum umsetzen. Vorhandene lokale Änderungen nicht löschen, überschreiben oder zurücksetzen, sofern dies nicht ausdrücklich beauftragt ist.

### Phase D — Validate

Mindestens:

```bash
git diff --check
git status --short --branch
```

Bei Docusaurus zusätzlich den vorhandenen Build-Befehl ausführen.

### Phase E — Commit

Nur thematisch zusammengehörige Änderungen committen. Commit-Nachrichten sollen kurz, sachlich und reproduzierbar sein.

### Phase F — Push / Pull Request

Feature-Branches bevorzugen. Für GitHub-Arbeit die GitHub CLI nutzen, zum Beispiel:

```bash
git push -u origin <branch>
gh pr create --fill
```

### Phase G — CI und Deployment

Nach Push oder Merge nicht nur den Push als Erfolg betrachten. Actions-Runs mit `gh run list`, `gh run view` oder `gh run watch` prüfen. `gh workflow run` kann einen Workflow auslösen, wenn dieser `workflow_dispatch` unterstützt.

## 7. GitHub Pages und Docusaurus

GitHub Pages wird per GitHub Actions veröffentlicht. Der Agent soll keine `build/`-Artefakte von Hand auf einen Deployment-Branch committen, wenn das Repository einen Actions-basierten Pages-Workflow verwendet.

Docusaurus erzeugt den Produktionsoutput in `build/`.

Die bevorzugte technische Form ist:

```text
Git source
   ↓
GitHub repository
   ↓
GitHub Actions
   ↓
Docusaurus build
   ↓
Pages artifact
   ↓
GitHub Pages
```

Für Actions-basierte Pages-Deployments sind die aktuellen offiziellen Action-Repositories zu prüfen. Beispielhaft existieren derzeit `actions/checkout`, `actions/setup-node`, `actions/configure-pages`, `actions/upload-pages-artifact` und `actions/deploy-pages`; die jeweils aktuell freigegebenen Major-Versionen sind vor einer Änderung zu verifizieren.

Vor Veröffentlichung:

- `url` und `baseUrl` korrekt für GitHub Pages setzen,
- Projekt-Pages (`OWNER.github.io/REPO/`) von User-/Organization-Pages (`OWNER.github.io/`) unterscheiden,
- bestehende Custom-Domain-Konfiguration respektieren,
- Deployment erst dann als erfolgreich melden, wenn der relevante Actions-Run erfolgreich war.

## 8. Monochromes Design — verbindliche UI-Richtlinie

Die Website soll **monochrom** gestaltet sein.

### Farbprinzip

Nur Schwarz, Weiß und neutrale Graustufen verwenden:

```text
#000000
#111111
#222222
#444444
#666666
#888888
#AAAAAA
#CCCCCC
#EEEEEE
#FFFFFF
```

Kein buntes Akzentfarbsystem, keine Farbverläufe und keine dekorativen Farbverläufe in Karten, Buttons oder Hintergründen.

### Visuelle Sprache

- klare Schwarz-Weiß-Kontraste,
- dünne bis mittlere Rahmen,
- flache Flächen,
- keine Glas-/Neon-/Gradienten-Optik,
- reduzierte Schatten oder möglichst keine Schatten,
- technische, ruhige, editoriale Anmutung,
- starke Typografie-Hierarchie,
- großzügiger Weißraum,
- Code und Terminalausgaben visuell prominent.

### Interaktion

Hover-, Focus- und Active-Zustände ebenfalls monochrom umsetzen, beispielsweise über Helligkeitswechsel, Unterstreichungen, Rahmen oder invertierte Flächen statt über Farben.

Accessibility geht vor Ästhetik: Text und interaktive Elemente müssen ausreichenden Kontrast behalten, Tastaturfokus sichtbar machen und auch ohne Farbe verständlich bleiben.

### Docusaurus-Theming

Vorhandene Docusaurus-Theme-Strukturen wiederverwenden. Für ein Redesign vorzugsweise `src/css/custom.css` sowie vorhandene Theme-Overrides nutzen, statt unnötig die gesamte Theme-Architektur zu swizzlen.

Vor dem Redesign prüfen:

- `src/css/custom.css`
- `docusaurus.config.*`
- vorhandene Theme-Komponenten
- Navbar/Footer
- Docs-Sidebar
- Search UI, sofern vorhanden
- Code-Block-Theme

## 9. Schreibstil

Die Dokumentation soll:

- technisch präzise,
- handlungsorientiert,
- klar und direkt,
- freundlich, aber nicht werblich,
- deutsch als Hauptsprache,
- mit englischen CLI-/Git-Begriffen dort, wo sie als Fachbegriffe üblich sind.

Bevorzuge:

```text
Was macht der Befehl?
Wann benutze ich ihn?
Welche Voraussetzungen gibt es?
Was passiert dabei?
Wie kann ein KI-Agent ihn sicher einsetzen?
Was kann schiefgehen?
```

Vermeide Marketingformulierungen wie „magisch“, „revolutionär“ oder „vollautomatisch ohne Kontrolle“.

## 10. Codebeispiele

Alle Shell-Beispiele sollen realistisch und direkt ausführbar sein.

Bevorzuge:

```bash
gh repo view

gh issue list --json number,title,state

gh pr status

gh run list --limit 10
```

Für Agenten und Skripte möglichst strukturierte Ausgabe einsetzen:

```bash
gh issue list --json number,title,state,url
```

Keine erfundenen Flags verwenden. Bei versionsabhängigen Features kenntlich machen, dass die konkrete CLI-Version geprüft werden muss.

## 11. Installation von Git und GitHub CLI

Die Dokumentation soll Installation und Erstkonfiguration abdecken.

Git:

- offizielle Installationsseite: https://git-scm.com/install/
- danach `git --version` prüfen.

GitHub CLI:

- offizielle Installationsseite/Dokumentation: https://cli.github.com/
- danach `gh --version` und `gh auth status` prüfen.

Beispielhaft für die Authentifizierung:

```bash
gh auth login
gh auth status
gh auth setup-git
```

`gh auth login` unterstützt Web-/Browser-Login sowie weitere Modi; die konkrete Wahl soll von Umgebung und Sicherheitsanforderungen abhängen.

## 12. Sicherheitsregeln für KI-Agenten

Ein Agent darf:

- den Repository-Zustand lesen,
- lokale Änderungen durchführen,
- Git-Historie und Branches analysieren,
- GitHub-Daten lesen,
- nach explizitem Auftrag GitHub-Ressourcen verändern,
- CI/CD-Ergebnisse auswerten.

Ein Agent muss vor riskanten Aktionen besonders vorsichtig sein bei:

- force push,
- Branch-Löschung,
- Issue/PR-Schließung oder -Löschung,
- Release-Veröffentlichung,
- Änderungen an Branch Protection oder Repository-Regeln,
- Secrets und Tokens,
- Produktionsdeployments,
- API-Schreibzugriffen mit weitreichenden Berechtigungen.

Keine destruktiven Befehle wie `git reset --hard`, `git clean -fd` oder Force-Push einsetzen, ohne dass dies für den konkreten Task ausdrücklich erforderlich und autorisiert ist.

## 13. Definition of Done für Dokumentationsänderungen

Eine thematische Änderung ist erst abgeschlossen, wenn:

1. die alten Docusaurus-zentrierten Inhalte fachlich ersetzt, neu eingeordnet oder bewusst entfernt wurden,
2. die Navigation die neue Git/GitHub-CLI/Agenten-Struktur widerspiegelt,
3. das gesamte UI monochrom umgesetzt ist,
4. interne Links und Codebeispiele funktionieren,
5. der Docusaurus-Build erfolgreich ist,
6. `git diff --check` erfolgreich ist,
7. GitHub Pages über den vorgesehenen Actions-Workflow erfolgreich deployt wurde,
8. die veröffentlichte URL verifiziert werden konnte.

## 14. Verbotene Fehlannahmen

Nicht annehmen, dass:

- der Default-Branch `main` heißt,
- das Repository öffentlich ist,
- GitHub Pages bereits aktiviert ist,
- die Repository-URL einer bestimmten Organisation gehört,
- eine bestimmte Shell verwendet wird,
- npm der Paketmanager ist,
- ein bestimmter Docusaurus-Workflow bereits existiert.

Solche Fakten zuerst aus Repository oder GitHub ermitteln.
