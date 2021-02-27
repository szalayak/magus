import { NavItemConfig } from ".";

export const dungeonMasterAreaRoutes: Array<NavItemConfig> = [
  {
    path: "/dm-area/player-characters",
    name: "player-characters-as-dm",
    title: "player-characters",
    icon: "mdi-account-group",
    component: () =>
      import(
        /* webpackChunkName: "dm-area/player-characters" */ "../views/character/PlayerCharactersAsDM.vue"
      ),
  },
  {
    path: "/dm-area/non-player-characters",
    name: "non-player-characters-as-dm",
    title: "non-player-characters",
    icon: "mdi-account-group-outline",
    component: () =>
      import(
        /* webpackChunkName: "dm-area/non-player-characters" */ "../views/character/NonPlayerCharactersAsDM.vue"
      ),
  },
  {
    path: "/dm-area/dm-overview",
    name: "dm-overview",
    title: "dm-overview",
    icon: "mdi-eye",
    component: () =>
      import(
        /* webpackChunkName: "dm-area/non-player-characters" */ "../views/character/CharacterOverviewAsDM.vue"
      ),
  },
];
