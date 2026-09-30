---
title: Repository Discovery
description: Repository, Branch und Remote zuerst ermitteln – niemals annehmen.
sidebar_position: 2
---

## Was ist das?

Die systematische Erkundung eines unbekannten Repositorys: Was liegt wo, welcher Branch ist Default, was ist der Stand?

## Warum ist es relevant?

Die verbotenen Fehlannahmen (Branch heißt `main`, Repo ist öffentlich, npm ist Paketmanager …) entstehen alle durch übersprungene Discovery.

## Wie funktioniert es?

```bash
git status --short --branch
git remote -v
gh repo view --json nameWithOwner,defaultBranchRef,url,homepageUrl
git log --oneline --decorate -10
git branch --all
```

Danach Projektdateien lesen: `package.json` + Lockfile, `docusaurus.config.*`, `sidebars.*`, `src/css/custom.css`, `.github/workflows/*`.

Checkliste:

- [ ] `OWNER/REPO` und Default-Branch bekannt?
- [ ] Paketmanager anhand Lockfile bestimmt (`package-lock.json` → npm)?
- [ ] Docusaurus-Version aus `package.json` bekannt?
- [ ] Offene Branches, Issues, PRs gesichtet?
- [ ] Lokale Änderungen identifiziert und respektiert?

## Wie prüfe ich das Ergebnis?

Der Agent kann benennen: Repo, Default-Branch, Remote-URL, Paketmanager, betroffene Dateien – alles aus Befehlsausgaben belegt.

## Welche Risiken sind zu beachten?

Discovery ist lesend und ungefährlich. Riskant ist nur, sie zu überspringen und danach schreibend zu handeln.

## Weiterführend

- [Planen](planning.md)
- [Repository-Grundlagen](../02-git/repository-basics.md)
