# Iteration 4 – Plan und Live Demo

## Ziel der Iteration

In Iteration 4 wollen wir SplitMate von einer UI mit Testdaten zu einer Demo mit echten Ausgaben weiterentwickeln. Der wichtigste Fokus liegt darauf, dass Ausgaben nicht mehr statisch im Frontend stehen, sondern über die API erstellt und geladen werden.

## Geplante Funktionen

- Ausgaben über API laden
- Neue Ausgabe erstellen
- Ausgabe löschen
- einfache Schuldenberechnung anzeigen
- Live Demo vorbereiten
- Arc42-Qualitätskriterien dokumentieren

## Prioritäten

### Muss
- Login zeigen
- Gruppen vom Backend laden
- Ausgabe erstellen
- Ausgabe anzeigen

### Soll
- Ausgabe löschen
- Schuldenberechnung anzeigen

### Optional
- Ausgabe bearbeiten
- schöneres UI

## Demo-Ablauf

1. Benutzer meldet sich an
2. Gruppe wird geöffnet
3. Neue Ausgabe wird erfasst
4. Ausgabe erscheint in der Liste
5. SplitMate zeigt, wer wem wie viel schuldet

## Risiken

- Strapi-Berechtigungen können API-Zugriffe blockieren
- Backend-Endpunkte für Ausgaben sind noch nicht vollständig fertig
- Deployment mit GitLab Pages kann mehr Zeit brauchen als erwartet

## Qualitätskriterien nach Arc42

### Usability
Die App soll einfach verständlich sein. WG-Mitglieder sollen ohne lange Erklärung Ausgaben erfassen können.

### Wartbarkeit
Frontend-Komponenten, Router und API-Aufrufe sollen getrennt bleiben, damit Änderungen einfacher möglich sind.

### Sicherheit
Login und Registrierung laufen über JWT. Geschützte Bereiche sollen nur für eingeloggte Benutzer zugänglich sein.

### Zuverlässigkeit
Ausgaben sollen zentral im Backend gespeichert werden, damit keine Daten im Frontend verloren gehen.

### Erweiterbarkeit
Später sollen weitere Funktionen wie mehrere Gruppen, Einladungen oder detaillierte Abrechnungen ergänzt werden können.

## Nächste technische Schritte

1. Expense-Collection in Strapi prüfen oder erstellen
2. API-Berechtigungen in Strapi setzen
3. Vue-Seite für Ausgaben mit API verbinden
4. Formular für neue Ausgabe bauen
5. Schuldenberechnung implementieren