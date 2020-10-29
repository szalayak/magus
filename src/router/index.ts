import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { RouteConfigSingleView } from "vue-router/types/router";
import Home from "../views/Home.vue";
import { adminRoutes } from "./admin";
import { characterRoutes } from "./character";
import { dungeonMasterAreaRoutes } from "./dungeonMasterArea";
import { playerAreaRoutes } from "./playerArea";

Vue.use(VueRouter);

export interface NavItemConfig extends RouteConfigSingleView {
  title: string;
  icon: string;
}

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
  ...adminRoutes,
  ...playerAreaRoutes,
  ...dungeonMasterAreaRoutes,
  ...characterRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
