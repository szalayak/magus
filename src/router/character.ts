import { RouteConfigSingleView } from "vue-router/types/router";

export const characterRoutes: Array<RouteConfigSingleView> = [
  {
    path: "/player-characters/:id",
    name: "player-character-overview",
    component: () =>
      import(
        /* webpackChunkName: "player-character" */ "../views/character/CharacterOverview.vue"
      ),
  },
  {
    path: "/player-characters/:id/details",
    name: "player-character-details",
    component: () =>
      import(
        /* webpackChunkName: "player-character-details" */ "../views/character/PlayerCharacter.vue"
      ),
  },
  {
    path: "/non-player-characters/:id",
    name: "non-player-character-overview",
    component: () =>
      import(
        /* webpackChunkName: "non-player-character" */ "../views/character/CharacterOverview.vue"
      ),
  },
  {
    path: "/non-player-characters/:id/details",
    name: "non-player-character-details",
    component: () =>
      import(
        /* webpackChunkName: "non-player-character-details" */ "../views/character/NonPlayerCharacter.vue"
      ),
  },
];
