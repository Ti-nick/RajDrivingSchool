import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../Home.vue";
import Contact from "../Contact.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: Contact }
  ]
});