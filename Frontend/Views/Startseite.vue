<template>
  <div>
    <h1>Willkommen bei SplitMate</h1>
    <p>Teile WG-Kosten einfach und fair auf.</p>

    <div class="kasten">
      <h2>Neue Gruppe erstellen</h2>
      <input v-model="gruppenName" placeholder="z.B. WG Bern" />
      <button @click="gruppeErstellen">Erstellen</button>
      <p class="fehler" v-if="fehler">{{ fehler }}</p>
    </div>

    <div class="kasten" v-if="gruppen.length > 0">
      <h2>Meine Gruppen</h2>
      <ul>
        <li v-for="gruppe in gruppen" :key="gruppe.id">
          <RouterLink :to="'/gruppe/' + gruppe.id">{{
            gruppe.name
          }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const gruppenName = ref("");
const gruppen = ref([]);
const fehler = ref("");

async function ladeGruppen() {
  try {
    const antwort = await fetch("http://localhost:1337/api/groups");
    const daten = await antwort.json();

    gruppen.value = daten.data.map((g) => ({
      id: g.id,
      name: g.name || g.attributes?.name,
    }));
  } catch (error) {
    fehler.value = "Gruppen konnten nicht geladen werden.";
  }
}

async function gruppeErstellen() {
  if (gruppenName.value === "") return;

  try {
    const antwort = await fetch("http://localhost:1337/api/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { name: gruppenName.value } }),
    });

    const daten = await antwort.json();

    if (!antwort.ok) {
      fehler.value =
        daten.error?.message || "Gruppe konnte nicht erstellt werden.";
      return;
    }

    const neueGruppe = {
      id: daten.data.id,
      name: daten.data.name || daten.data.attributes?.name,
    };

    gruppen.value.push(neueGruppe);
    gruppenName.value = "";

    router.push("/gruppe/" + neueGruppe.id);
  } catch (error) {
    fehler.value = "Backend nicht erreichbar. Läuft Strapi auf Port 1337?";
  }
}

onMounted(() => {
  ladeGruppen();
});
</script>

<style scoped>
h1 {
  margin-bottom: 10px;
}
p {
  color: #666;
  margin-bottom: 20px;
}
.kasten {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.kasten h2 {
  margin-bottom: 15px;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 10px;
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
ul li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
ul li a {
  color: #222;
  text-decoration: none;
}
.fehler {
  color: red;
  margin-top: 10px;
}
</style>
