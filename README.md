# SplitMate – WG-Ausgaben fair aufteilen

*English: Study prototype for splitting shared-flat expenses, built with Vue 3 and Strapi 5. My part: the debt calculation endpoint in the backend and the frontend setup.*

![Schuldenübersicht in SplitMate](https://jonasbader7.github.io/Portfoliopage/img/splitmate-schulden-anonym.png)

| | |
|---|---|
| **Rahmen** | BFH, Modul Software Engineering (WSEG), FS 2026, Teamprojekt |
| **Mein Teil** | Schuldenberechnung im Backend (`GET /api/expenses/schulden`) und Frontend-Setup |
| **Frontend** | Vue 3, Vue Router, Vite |
| **Backend** | Strapi 5 (REST-API), SQLite, JWT-Anmeldung |
| **Abläufe** | GitLab CI/CD (aus dem ursprünglichen BFH-GitLab-Projekt) |
| **Stand** | Studienprototyp, nicht für echte Abrechnungen gedacht |

## Was die App macht

Eine WG erstellt eine Gruppe oder tritt mit Code bei, erfasst Ausgaben, und SplitMate zeigt, wer wem wie viel schuldet.

## Die Schuldenberechnung (mein Teil)

Der eigene Endpunkt `GET /api/expenses/schulden` rechnet auf dem Server:

1. Pro Person zusammenzählen, was sie bezahlt hat.
2. Den Gesamtbetrag gleichmässig verteilen: Saldo = bezahlt − Anteil.
3. Schuldner und Gläubiger der Reihe nach ausgleichen, bis alle Salden null sind. So braucht es höchstens eine Zahlung weniger, als es Personen gibt.

## Lokal starten

Benötigt Node.js 20–24 und npm.

```sh
cd Frontend
npm ci
npm run dev
```

In einem zweiten Terminal:

```sh
cd backend
npm ci
npm run develop
```

Vorher eine eigene `.env` für die Werte in `config/server.ts` und `config/admin.ts` anlegen. Rollen und Berechtigungen in Strapi müssen lokal eingerichtet werden. Der Frontend-Build wurde am 6.11.2026 erfolgreich geprüft (Vite, 32 Module), ein Test über Backend und Frontend zusammen nicht.

## Bekannte Grenzen und nächste Schritte

- Die Berechnung liest alle Ausgaben, noch nicht pro Gruppe, und zählt nur Personen, die selbst bezahlt haben. Nächster Schritt: pro Gruppe rechnen und berücksichtigen, für wen eine Ausgabe war.
- Rundungen können Cent-Reste erzeugen.
- Im vorhandenen Stand fehlen im Backend die Standardrouten für Ausgaben und die Gruppen-Collection, die das Frontend erwartet; Ausgabenanfragen senden noch keinen Anmelde-Header.

## Team und Herkunft

Teamprojekt im BFH-GitLab (`ajzom`). Laut Projektdokumentation: Omran El-Assaad (Frontend), Florian Mattes (Strapi-Backend), Alper Simsek, Jonas Bader (Schuldenberechnung, Frontend-Setup). Teamdokumente, Blogs und das ursprüngliche README liegen in [`docs/`](docs/). Für Teambeiträge gilt keine Open-Source-Lizenz.

---

Weitere Projekte: [Portfolio von Jonas Bader](https://jonasbader7.github.io/Portfoliopage/)
