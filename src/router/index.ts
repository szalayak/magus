import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { PositionResult, RouteConfigSingleView } from "vue-router/types/router";
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
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
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

    return new Promise(resolve => {
      setTimeout(() => {
        if (to.hash) {
          scrollTo = to.hash;
        } else if (savedPosition) {
          scrollTo = savedPosition.y;
        }

        resolve(goTo(scrollTo, { behavior: "smooth" }) as PositionResult);
      }, 500);
    });
  },
  routes,
});

export default router;
