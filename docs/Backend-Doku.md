# Backend Dokumentation – SplitMate

**Autor:** Florian Mattes (@mattf2)  
**Datum:** Mai 2026

## Technologie

Das Backend basiert auf Strapi 5 mit Node.js und SQLite.

## Collections

### Group
Speichert WG-Gruppen.
- **name** – Name der Gruppe (z.B. "WG Bern")

### Expense
Speichert Ausgaben einer Gruppe.
- **beschreibung** – z.B. "Migros Einkauf"
- **betrag** – z.B. 45.50
- **bezahltVon** – wer hat bezahlt
- **bezahltFuer** – für wen wurde bezahlt
- **group** – Relation zur Gruppe

## API Endpunkte

| Methode | URL | Beschreibung |
|---------|-----|--------------|
| GET | /api/groups | Alle Gruppen laden |
| POST | /api/groups | Neue Gruppe erstellen |
| GET | /api/expenses | Alle Ausgaben laden |
| POST | /api/expenses | Neue Ausgabe erstellen |
| DELETE | /api/expenses/:id | Ausgabe löschen |

## Berechtigungen

Alle Endpunkte sind unter Settings → Users & Permissions → Public freigegeben.

## Starten

```bash
cd backend
fnm use 20
npm run develop
```

Admin Panel: http://localhost:1337/admin
