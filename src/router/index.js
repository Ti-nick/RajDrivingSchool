import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import Contact from "../Contact.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: Contact }
  ]
});