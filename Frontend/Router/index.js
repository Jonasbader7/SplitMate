import { createRouter, createWebHistory } from "vue-router";
import Startseite from "../Views/Startseite.vue";
import Anmelden from "../Views/Anmelden.vue";
import Registrieren from "../Views/Registrieren.vue";
import Gruppe from "../Views/Gruppe.vue";

const routen = [
  { path: "/", component: Startseite },
  { path: "/anmelden", component: Anmelden },
  { path: "/registrieren", component: Registrieren },
  { path: "/gruppe/:id", component: Gruppe },
];

export default createRouter({ history: createWebHistory(), routes: routen });
