---
title: Glossar
description: Die wichtigsten Begriffe von Commit bis Workflow in einem Satz.
sidebar_position: 5
---

| Begriff | Bedeutung |
| --- | --- |
| Agent | Kontrollierter Software-Operator, der Observe → Plan → Change → Validate → Commit → PR → CI durchläuft. |
| Artefakt | Build-Ergebnis (hier: `build/`-Verzeichnis), das an Pages übergeben wird. |
| Branch | Beweglicher Zeiger auf einen Commit; isoliert Arbeit bis zum Merge. |
| Check | Automatisierte Prüfung an einem PR oder Commit (Build, Test, Lint). |
| Commit | Festgeschriebener Snapshot mit Autor, Zeit und Nachricht. |
| Default-Branch | Hauptbranch des Repositorys (Name per `gh repo view` ermitteln, nicht annehmen). |
| Draft-PR | Noch nicht reviewreifer PR (`--draft`). |
| Fetch | Lädt Remote-Stand, ohne zu mergen. |
| `gh` | GitHub CLI – Terminal-Werkzeug für GitHub. |
| `gh api` | Authentifizierter API-Fallback, wenn kein High-Level-Befehl existiert. |
| Issue | Aufgabe oder Diskussion auf GitHub, adressierbar per Nummer. |
| Merge | Zusammenführung zweier Linien mit Merge-Commit. |
| Pages | GitHubs Static-Hosting; hier per Actions-Workflow beliefert. |
| Pull Request | Vorschlag + Review-Schleuse, einen Branch zu mergen. |
| Rebase | Umschreiben eigener Commits auf neue Basis (nur lokal, vor Push). |
| Release | Getaggter, dokumentierter Versionsstand, ggf. mit Assets. |
| Remote | Benannter Verweis aufs entfernte Repository (meist `origin`). |
| Run | Einzelne Ausführung eines Actions-Workflows. |
| Staging | Vormerkbereich (`git add`) für den nächsten Commit. |
| Upstream | Zugeordneter Remote-Branch (`-u` beim ersten Push). |
| Workflow | YAML-Automatisierung unter `.github/workflows/`. |
| `workflow_dispatch` | Manueller Start-Trigger für Workflows. |

## Quellen

- [Git-Dokumentation](https://git-scm.com/docs)
- [GitHub CLI Manual](https://cli.github.com/manual/)
- [GitHub Docs](https://docs.github.com/)
