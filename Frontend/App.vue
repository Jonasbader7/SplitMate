vue

<template>
  <div>
    <Navigation />
    <div class="inhalt">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Navigation from "./Components/Navigation.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
.inhalt {
  max-width: 700px;
  margin: 30px auto;
  padding: 0 15px;
}
</style>
