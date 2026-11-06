<template>
  <div>
    <div class="kopfzeile">
      <h2>{{ gruppenName }}</h2>
    </div>

    <div class="kasten">
      <h3>Neue Ausgabe</h3>
      <input v-model="neueBeschreibung" placeholder="Beschreibung" />
      <input v-model="neueBetrag" type="number" placeholder="Betrag CHF" />
      <input v-model="neueBezahltVon" placeholder="Bezahlt von" />
      <button @click="ausgabeErstellen">Hinzufügen</button>
    </div>

    <div class="kasten">
      <h3>Alle Ausgaben</h3>

      <p v-if="ausgaben.length === 0">Noch keine Ausgaben eingetragen.</p>

      <ul>
        <li v-for="ausgabe in ausgaben" :key="ausgabe.id" class="zeile">
          <div>
            <strong>{{ ausgabe.beschreibung }}</strong>
            <span class="info">bezahlt von {{ ausgabe.bezahltVon }}</span>
          </div>

          <div class="betrag">{{ Number(ausgabe.betrag).toFixed(2) }} CHF</div>
        </li>
      </ul>
    </div>

    <div class="kasten">
      <h3>Schuldenübersicht</h3>

      <p v-if="schulden.length === 0">Keine Schulden vorhanden.</p>

      <ul>
        <li v-for="s in schulden" :key="s.von + s.an" class="zeile">
          <span>{{ s.von }} zahlt an {{ s.an }}</span>
          <strong>{{ Number(s.betrag).toFixed(2) }} CHF</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const gruppenName = ref("Meine WG");
const ausgaben = ref([]);
const schulden = ref([]);

const neueBeschreibung = ref("");
const neueBetrag = ref("");
const neueBezahltVon = ref("");

async function ladeAusgaben() {
  const antwort = await fetch("http://localhost:1337/api/expenses");
  const daten = await antwort.json();
  ausgaben.value = daten.data;
}

async function ladeSchulden() {
  const antwort = await fetch("http://localhost:1337/api/expenses/schulden");
  const daten = await antwort.json();
  schulden.value = daten.data;
}

async function ausgabeErstellen() {
  if (!neueBeschreibung.value || !neueBetrag.value || !neueBezahltVon.value)
    return;

  await fetch("http://localhost:1337/api/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        beschreibung: neueBeschreibung.value,
        betrag: parseFloat(neueBetrag.value),
        bezahltVon: neueBezahltVon.value,
      },
    }),
  });

  neueBeschreibung.value = "";
  neueBetrag.value = "";
  neueBezahltVon.value = "";

  await ladeAusgaben();
  await ladeSchulden();
}

onMounted(async () => {
  await ladeAusgaben();
  await ladeSchulden();
});
</script>

<style scoped>
.kopfzeile {
  margin-bottom: 20px;
}

.kasten {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 10px;
  display: block;
}

button {
  background: #4ade80;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}

ul {
  list-style: none;
}

.zeile {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.info {
  display: block;
  font-size: 0.85rem;
  color: #888;
}

.betrag {
  font-weight: bold;
}
</style>
