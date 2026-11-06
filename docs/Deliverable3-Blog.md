# Iteration 3: Vom Login zu echten Ausgaben

**Modul:** WSEG · FS 2026 · Berner Fachhochschule  
**Projekt:** SplitMate – WG-Kosten fair aufteilen  
**Team:** Omran El-Assaad (@elaso1) · Florian Mattes (@mattf2) . Alper Simsek (@simsa1)

---

## Unsere Idee

Wir bauen SplitMate – eine Web-App für WGs, mit der man gemeinsame Ausgaben erfassen und automatisch abrechnen kann. Die Idee entstand ganz praktisch: Wir wohnen selbst in einer WG und haben gemerkt, wie umständlich es ist, gemeinsame Kosten über Excel oder WhatsApp-Nachrichten zu verwalten.

Die Kernfunktionen, die wir uns vorgestellt haben:

- Eine WG-Gruppe erstellen und Mitglieder einladen
- Ausgaben eintragen – z. B. «Migros, 45 CHF, bezahlt von Anna»
- Die App berechnet automatisch, wer wem wie viel schuldet

---

## Wo stehen wir nach Iteration 3?

### Was funktioniert

Das Frontend mit Vue 3 steht. Registrierung und Login laufen stabil – die Authentifizierung ist über Strapi JWT umgesetzt und kommuniziert korrekt mit dem Backend. Auf der Startseite werden Gruppen dynamisch vom Backend geladen.

### Ausgaben: noch mit Testdaten

Bei den Ausgaben arbeiten wir aktuell noch mit statischen Testdaten direkt im Code:

```javascript
const ausgaben = ref([
  { id: 1, beschreibung: 'Migros Einkauf', betrag: 45.50, bezahltVon: 'Anna' },
  { id: 2, beschreibung: 'Netflix', betrag: 15.00, bezahltVon: 'Marco' },
])
```

Das war eine bewusste Entscheidung: Wir wollten das UI fertigstellen und visuell validieren, bevor das Backend-Endpunkt für Ausgaben steht. In der nächsten Iteration ersetzen wir diese Daten durch echte API-Aufrufe.

### API-Dokumentation mit Bruno

Unsere Backend-API haben wir mit Bruno dokumentiert. Die Collection liegt im Repository unter `docs/backend` und zeigt alle verfügbaren Endpunkte mit Beispielanfragen und -antworten.

---

## Was uns schwer gefallen ist

### Strapi-Berechtigungen: fast zwei Stunden für eine Einstellung

Das frustrierendste Problem in dieser Iteration war ein `403 Forbidden`-Fehler von der Strapi-API. Alle Requests wurden blockiert – obwohl das Setup korrekt aussah. Nach langem Suchen stellte sich heraus: Wir hatten vergessen, in Strapi unter *Settings → Roles → Public* die entsprechenden Endpunkte freizugeben. Eine einzige Checkbox, aber sie hat uns fast zwei Stunden gekostet.

**Lerneffekt:** Bei Strapi sind Berechtigungen standardmässig gesperrt. Für neue Endpunkte immer zuerst die Roles-Konfiguration prüfen.

### Vue Router: Neuland

Der Vue Router war für uns beide neu. Das Konzept von `router-view`, verschachtelten Routen und Navigation Guards hat am Anfang für Verwirrung gesorgt. Wir haben uns kurz zusammengesetzt, die Dokumentation gemeinsam durchgeschaut und es danach Schritt für Schritt implementiert.

---

## Wie wir zusammenarbeiten

Omran übernimmt das Frontend, Florian das Backend mit Strapi. Wenn einer nicht weiterkommt, schreiben wir uns kurz – meistens lösen wir Probleme in einem kurzen Call. Das funktioniert gut, weil wir beide wissen was der andere macht und nicht aneinander vorbeiprogrammieren.

---

## Was kommt in Iteration 4?

- Ausgaben per API anlegen, bearbeiten und löschen (CRUD vollständig)
- Schulden-Berechnung im Backend implementieren
- GitLab Pages mit CI/CD aufsetzen – Blogpost und README als statische Seite deployen
- Arc42-Qualitätskriterien definieren und auf der Wiki-Seite dokumentieren
