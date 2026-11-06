# Deliverable 2 – Was wir bisher gemacht haben

**Projekt:** SplitMate  
**Team:** AJZOM
**Datum:** 23.April 2026

---

## Unsere Idee

Wir bauen SplitMate – eine App für WGs, wo man gemeinsame Ausgaben eintragen kann und die App dann automatisch ausrechnet wer wem wie viel schuldet. Die Idee kam daher, dass wir selbst in einer WG wohnen und das mit Excel immer mühsam ist.

Die wichtigsten Funktionen die wir uns vorgestellt haben:

- Man erstellt eine WG-Gruppe
- Jeder kann Ausgaben eintragen (z.B. "Migros, 45 CHF, bezahlt von Anna")
- Die App zeigt dann wer wem was schuldet

---

## Wo stehen wir gerade

Wir haben das Frontend mit Vue aufgebaut. Man kann sich registrieren und einloggen, das funktioniert schon mit dem Strapi Backend zusammen. Die Startseite zeigt Gruppen an die vom Backend geladen werden.

Bei den Ausgaben selbst haben wir noch Testdaten direkt im Code, weil wir das Backend dafür noch nicht fertig haben:

```js
const ausgaben = ref([
  { id: 1, beschreibung: 'Migros Einkauf', betrag: 45.50, bezahltVon: 'Anna' },
  { id: 2, beschreibung: 'Netflix', betrag: 15.00, bezahltVon: 'Marco' },
])
```

Das werden wir in der nächsten Iteration durch echte API-Aufrufe ersetzen.

---

## Wie wir zusammenarbeiten

[Omran El-Assaad] macht hauptsächlich das Frontend, [Florian Mattes] kümmert sich ums Backend mit Strapi. Wenn einer nicht weiterkommt schreiben wir uns und schauen es zusammen an. Meistens lösen wir Probleme über einen kurzen Call.

**Was uns schwer gefallen ist:**

Strapi war am Anfang verwirrend. Wir haben lange nicht verstanden warum die API immer einen 403-Fehler zurückgegeben hat – es lag daran dass wir die Berechtigungen für "Public" in Strapi nicht gesetzt hatten. Das hat uns fast zwei Stunden gekostet.

Ausserdem war das Aufsetzen des Routers in Vue nicht ganz einfach, weil wir vorher noch nie damit gearbeitet haben.


## Bruno Collection

Hier sieht man wie unsere API funktioniert:

https://gitlab.ti.bfh.ch/w-wseg/26-fs/ajzom/-/tree/ab0cc94a518b6389581e7b924bdab83e401b3dd3/docs/backend