import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../Home.vue";
import Contact from "../Contact.vue";

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: Contact }
  ]
});