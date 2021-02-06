import { RouteConfigSingleView } from "vue-router/types/router";

export const characterRoutes: Array<RouteConfigSingleView> = [
  {
    path: "/player-characters/:id",
    name: "Player Character",
    component: () =>
      import(
        /* webpackChunkName: "player-character" */ "../views/character/CharacterOverview.vue"
      ),
  },
  {
    path: "/player-characters/:id/details",
    name: "Player Character",
    component: () =>
      import(
        /* webpackChunkName: "player-character-details" */ "../views/character/PlayerCharacter.vue"
      ),
  },
  {
    path: "/non-player-characters/:id",
    name: "Non-Player Character",
    component: () =>
      import(
        /* webpackChunkName: "non-player-character" */ "../views/character/CharacterOverview.vue"
      ),
  },
  {
    path: "/non-player-characters/:id/details",
    name: "Non-Player Character",
    component: () =>
      import(
        /* webpackChunkName: "non-player-character-details" */ "../views/character/NonPlayerCharacter.vue"
      ),
  },
];
