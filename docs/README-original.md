# SplitMate – WG-Kosten fair aufteilen

SplitMate ist eine Web-App, mit der WG-Bewohnende ihre gemeinsamen Ausgaben erfassen und automatisch abrechnen können. Man erstellt eine Gruppe, trägt Ausgaben ein und die App berechnet, wer wem wie viel schuldet.

Modul: WSEG · Semester: FS 2026 · Berner Fachhochschule (BFH)

## Tech-Stack

| Komponente | Technologie |
|------------|-------------|
| Frontend | Vue 3 (JavaScript) |
| Backend | Strapi 5 (Node.js) |
| Datenbank | SQLite (dev) / PostgreSQL (prod) |
| Auth | Strapi JWT |
| CI/CD | GitLab CI/CD |

## Voraussetzungen

- Node.js `>=20.0.0`
- npm `>=6.0.0`
- Git

## Installation & Start

**Backend:**
```bash
cd backend
npm install
npm run develop
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Umgesetzte Stufen

| Stufe | Beschreibung | Status |
|-------|--------------|--------|

## Blog

- [Iteration 3 – Vom Login zu echten Ausgaben](docs/iteration3.html)
| 1 | MVP mit 2 statischen Seiten | fertig |
| 2 | Login, Registrierung und Gruppen anzeigen | fertig |
| 3 | CRUD für Ausgaben und Mitglieder | läuft |

## Team

| Name | GitLab | Rolle |
|------|--------|-------|
| [Omran El-Assaad] | @elaso1 | Frontend |
| [Florian Mattes] | @mattf2 | Backend |