import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/races",
    name: "Races",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/Races.vue"),
  },
  {
    path: "/value-ranges",
    name: "Value Ranges",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/ValueRanges.vue"),
  },
  {
    path: "/classes",
    name: "Classes",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/Classes.vue"),
  },
  {
    path: "/armours",
    name: "Armours",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/Armours.vue"),
  },
  {
    path: "/magical-items",
    name: "MagicalItems",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/MagicalItems.vue"),
  },
  {
    path: "/psi-schools",
    name: "PsiSchools",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/PsiSchools.vue"),
  },
  {
    path: "/shields",
    name: "Shields",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/Shields.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/Skills.vue"),
  },
  {
    path: "/weapons",
    name: "Weapons",
    component: () =>
      import(/* webpackChunkName: "dice" */ "../views/Weapons.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
