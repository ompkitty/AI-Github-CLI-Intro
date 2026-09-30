# Git, GitHub CLI & KI-Agenten

Praxisorientierte Dokumentation über Git, GitHub CLI (`gh`) und die Zusammenarbeit von KI-Coding-Agenten mit Git/GitHub. Gebaut mit [Docusaurus](https://docusaurus.io/), veröffentlicht über GitHub Pages mit GitHub Actions.

Live: https://ompkitty.github.io/AI-Github-CLI-Intro/

## Installation

```bash
npm install
```

## Lokale Entwicklung

```bash
npm run start
```

## Build

```bash
npm run build
```

## Deployment

Automatisiert per `.github/workflows/deploy.yml`: Push auf `main` → `npm ci` → `npm run build` → Pages-Artefakt aus `build/` → `actions/deploy-pages`. Manueller Start via `workflow_dispatch` möglich:

```bash
gh workflow run deploy.yml --ref main
```
