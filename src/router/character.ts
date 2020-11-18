import { RouteConfigSingleView } from "vue-router/types/router";

export const characterRoutes: Array<RouteConfigSingleView> = [
  {
    path: "/player-characters/:id/:page?",
    name: "Player Character",
    component: () =>
      import(
        /* webpackChunkName: "player-character" */ "../views/character/PlayerCharacter.vue"
      ),
  },
  {
    path: "/non-player-characters/:id/:page?",
    name: "Non-Player Character",
    component: () =>
      import(
        /* webpackChunkName: "player-character" */ "../views/character/NonPlayerCharacter.vue"
      ),
  },
];
