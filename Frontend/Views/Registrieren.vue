vue

<template>
  <div class="mitte">
    <div class="kasten">
      <h2>Registrieren</h2>
      <input v-model="benutzername" placeholder="Benutzername" />
      <input v-model="email" type="email" placeholder="E-Mail" />
      <input v-model="passwort" type="password" placeholder="Passwort" />
      <button @click="registrieren">Account erstellen</button>
      <p>Bereits registriert? <RouterLink to="/anmelden">Anmelden</RouterLink></p>
      <p class="fehler" v-if="fehler">{{ fehler }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const benutzername = ref('')
const email = ref('')
const passwort = ref('')
const fehler = ref('')

async function registrieren() {
  const antwort = await fetch('http://localhost:1337/api/auth/local/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: benutzername.value, email: email.value, password: passwort.value }),
  })
  const daten = await antwort.json()
  if (daten.jwt) {
    localStorage.setItem('token', daten.jwt)
    router.push('/')
  } else {
    fehler.value = 'Registrierung fehlgeschlagen.'
  }
}
</script>

<style scoped>
.mitte { display: flex; justify-content: center; }
.kasten { background: white; border-radius: 10px; padding: 25px; width: 100%; max-width: 400px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
h2 { margin-bottom: 15px; }
input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; margin-bottom: 10px; display: block; }
button { width: 100%; background: #4ade80; border: none; padding: 10px; border-radius: 6px; font-size: 1rem; cursor: pointer; font-weight: bold; margin-bottom: 10px; }
.fehler { color: red; font-size: 0.9rem; }
</style>