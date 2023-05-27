import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicePage from "../views/ServicePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ServicePage",
    name: "ServicePage",
    component: ServicePage,
  },
  {
    path: "/AboutPage",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
