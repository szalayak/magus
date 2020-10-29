import { RouteConfigSingleView } from "vue-router/types/router";

export const characterRoutes: Array<RouteConfigSingleView> = [
  {
    path: "/player-area/player-characters/:id",
    name: "Player Character",
    component: () =>
      import(
        /* webpackChunkName: "player-area/player-character" */ "../views/character/PlayerCharacter.vue"
      ),
  },
  {
    path: "/dm-area/player-characters/:id",
    name: "Player Character",
    component: () =>
      import(
        /* webpackChunkName: "dm-area/player-character" */ "../views/character/PlayerCharacter.vue"
      ),
  },
];
