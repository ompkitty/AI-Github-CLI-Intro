---
title: GitHub Actions
description: Workflows verstehen, lesen und gezielt auslösen – die Automatisierungsebene über dem Repository.
sidebar_position: 1
---

## Was ist das?

GitHub Actions führt Workflows (YAML unter `.github/workflows/`) auf Events aus: Push, Pull Request, manuell (`workflow_dispatch`), zeitgesteuert.

## Warum ist es relevant?

Actions bauen, testen und deployen – auch diese Dokumentationsseite. Wer sie liest, versteht, warum ein Push erst mit Verzögerung sichtbar wird.

## Wie funktioniert es?

Minimaler Pages-Workflow (dieses Projekt, `.github/workflows/deploy.yml`):

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - uses: actions/configure-pages@v5
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v4
        with:
          path: build
  deploy:
    if: github.event_name != 'pull_request' && github.ref == 'refs/heads/main'
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Aktuell freigegebene Major-Versionen der Actions vor Änderungen separat prüfen (`checkout`, `setup-node`, `configure-pages`, `upload-pages-artifact`, `deploy-pages`).

Steuerung per CLI:

```bash
gh workflow list
gh run list --limit 10
gh run view <run-id> --log-failed
gh workflow run deploy.yml --ref main
```

## Wie prüfe ich das Ergebnis?

`gh run list` zeigt `completed/success`; `gh run view --log-failed` zeigt bei Fehlern die konkrete Ursache.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Der Agent liest erst Logs, ändert dann genau eine Ursache und löst Workflows nur gezielt erneut aus (kostet Runner-Minuten, kann deployen).

## Welche Risiken sind zu beachten?

Workflows laufen mit den vergebenen `permissions` – minimal halten. Secrets gehören in Actions-Secrets, nie ins YAML.

## Weiterführend

- [CI/CD](ci-cd.md)
- [GitHub Pages Deployment](pages-deployment.md)
- [Actions mit gh](../03-github-cli/actions.md)
