---
title: Repositorys
description: Repositorys mit gh betrachten, auflisten, klonen und anlegen – inklusive strukturierter JSON-Ausgabe.
sidebar_position: 3
---

## Was ist das?

`gh repo` verwaltet GitHub-Repositorys: Metadaten lesen, listen, klonen, erstellen.

## Warum ist es relevant?

Der Agent muss `OWNER/REPO`, Default-Branch und URLs **ermitteln statt annehmen**. Falsche Annahmen über Branch-Namen oder Sichtbarkeit sind eine der häufigsten Fehlerquellen.

## Wie funktioniert es?

```bash
gh repo view --json nameWithOwner,name,defaultBranchRef,url,homepageUrl
gh repo list OWNER --limit 30
gh repo clone OWNER/REPO
gh repo create NAME --public --source=. --remote=origin --push
```

Strukturiert filtern mit `--jq`:

```bash
gh repo view --json nameWithOwner,defaultBranchRef --jq '{repo: .nameWithOwner, default: .defaultBranchRef.name}'
```

## Wie prüfe ich das Ergebnis?

```bash
gh repo view --json nameWithOwner,defaultBranchRef,url
git remote -v
```

Erwartet: echter `OWNER/REPO`-Wert, realer Default-Branch (nicht angenommen), passender `origin`-Remote.

## Wie kann ein KI-Agent denselben Ablauf durchführen?

Jeder Task beginnt mit `gh repo view --json …`; `OWNER/REPO` und Default-Branch fließen danach in alle weiteren Befehle ein. `gh repo create` nur mit ausdrücklichem Auftrag – es erzeugt öffentliche Ressourcen.

## Welche Risiken sind zu beachten?

- Repository-Erstellung und Sichtbarkeitsänderung sind öffentlich wirksam.
- Geklonte URLs enthalten keine Secrets – trotzdem keine Credentials in Befehlsbeispiele einbetten.

## Weiterführend

- [Remotes](../02-git/remotes.md)
- [Repository Discovery](../04-ai-agents/repository-discovery.md)
