# SplitMate

Studienprototyp für gemeinsame WG-Ausgaben mit Vue 3 und Strapi 5. Entwickelt im BFH-Modul WSEG, FS 2026.

## Projektstand

Dieses Repository ist eine bereinigte Momentaufnahme des lokal vorhandenen Teamprojekts. Es zeigt Frontend, API-Anbindung und einen eigenen Schuldenberechnungs-Endpunkt. Es ist keine vollständig eingerichtete oder produktionsfertige Mehrbenutzer-Anwendung.

## Mein Beitrag und Team

Jonas Bader: Schuldenberechnung im Backend und Frontend-Setup (Angabe im persönlichen Portfolio).

Die vorhandene Projektdokumentation nennt Omran El-Assaad für das Frontend und Florian Mattes für das Strapi-Backend. Der Kopf des Blogs zur dritten Iteration führt zusätzlich Alper Simsek auf. Die Dokumente bilden keine vollständige, widerspruchsfreie Zuordnung aller Beiträge ab; deshalb werden hier keine prozentualen Anteile behauptet. Die ursprünglichen Teamdokumente bleiben unter `docs/` erhalten, das ursprüngliche README unter `docs/README-original.md`.

## Was im Code enthalten ist

- Vue-Oberflächen für Registrierung, Login, Gruppen und Ausgaben.
- Anfragen an das lokale Strapi-Backend unter `http://localhost:1337`.
- Expense-Content-Type und eigener Endpunkt `GET /api/expenses/schulden`.
- Berechnung: Zahlungen je zahlender Person summieren, Gesamtbetrag gleichmässig auf diese Personen verteilen und negative/positive Salden durch Ausgleichszahlungen zusammenführen.
- Blogeinträge, Iterationsplan und Bruno-Beispielanfragen.

## Lokal ausprobieren

Node.js 20–24 und npm werden laut Backend-Paket benötigt.

Frontend:

```sh
cd Frontend
npm ci
npm run dev
```

Backend, in einem zweiten Terminal:

```sh
cd backend
npm ci
npm run develop
```

Vor dem Backend-Start eine eigene lokale `.env` für die in `config/server.ts` und `config/admin.ts` gelesenen Secrets einrichten. Datenbankstandard ist SQLite. Zugangsdaten, lokale Datenbank, Uploads und installierte Abhängigkeiten gehören nicht zum Repository. Die benötigten Strapi-Rollen und Berechtigungen müssen lokal eingerichtet werden; aus dem Quellstand lässt sich keine vollständige ursprüngliche Instanz rekonstruieren.

## Bekannte Grenzen des Quellstands

- Die Schuldenberechnung liest alle Ausgaben, ohne Filter für Gruppe oder angemeldete Person.
- Nur Personen mit erfassten Zahlungen zählen als Teilnehmende; Personen ohne Zahlung fehlen.
- Einzelne Rundungen können Cent-Restbeträge erzeugen. Der Algorithmus ist nicht für echte Abrechnungen freigegeben.
- Die Expense-Routendatei enthält nur die eigene Schuldenroute. Die vom Frontend erwarteten Standard-CRUD-Routen sind im vorhandenen Snapshot nicht vollständig definiert.
- Die vom Frontend angesprochene Gruppen-Collection ist im vorhandenen Backend-Quellstand nicht enthalten.
- Ausgabenanfragen senden im vorhandenen Frontend keinen Authentifizierungsheader. Fehlerbehandlung und Eingabevalidierung sind unvollständig.

Diese Punkte sind dokumentierte Weiterentwicklungsschritte, keine bereits umgesetzten Funktionen.

## Herkunft und Veröffentlichung

Aus dem vorhandenen lokalen BFH-GitLab-Projekt `ajzom` übernommen. Die Bereinigung entfernt lokale Laufzeitdaten und installationsbezogene Strapi-IDs; die Anwendungslogik bleibt erhalten. Die ursprüngliche GitLab-CI-Datei ist historischer Projektbestand und richtet kein GitHub-Deployment ein. Für Teambeiträge wird keine neue pauschale Lizenz vergeben.

## Validierung

Der Frontend-Produktionsbuild wurde am 6. November 2026 mit den lokal vorhandenen Abhängigkeiten erfolgreich ausgeführt (Vite 8.0.14, 32 Module). Dies prüft die Kompilierung; ein vollständiger Backend-/End-to-End-Test wurde nicht durchgeführt. Die oben beschriebenen API-Lücken bleiben bestehen.
