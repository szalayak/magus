import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { RouteConfigSingleView } from "vue-router/types/router";
import Home from "../views/Home.vue";
import { adminRoutes } from "./admin";
import { characterRoutes } from "./character";
import { dungeonMasterAreaRoutes } from "./dungeonMasterArea";
import { playerAreaRoutes } from "./playerArea";
import goTo from "vuetify/lib/services/goto";

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
  {
    path: "/admin/seed-default-values",
    name: "Seed Default Values",
    component: () =>
      import(
        /* webpackChunkName: "seed-default-values" */ "../views/admin/SeedDefaultValues.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior: (to, _from, savedPosition) => {
    let scrollTo: string | number = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo, {});
  },
  routes,
});

export default router;
