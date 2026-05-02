import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import Contact from "../Contact.vue";
import RedeemGuideline from "../RedeemGuideline.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: Contact },
    { path: "/redeem", component: RedeemGuideline }
  ]
});