vue

<template>
  <nav class="nav">
    <RouterLink to="/" class="logo">💸 SplitMate</RouterLink>
    <div>
      <RouterLink to="/anmelden">Anmelden</RouterLink>
      <RouterLink to="/registrieren">Registrieren</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background-color: #222; }
.logo { color: #4ade80; text-decoration: none; font-size: 1.3rem; font-weight: bold; }
.nav a { color: white; text-decoration: none; margin-left: 20px; }
.nav a:hover { color: #4ade80; }
</style>
