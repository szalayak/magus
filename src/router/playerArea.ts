import { NavItemConfig } from ".";

export const playerAreaRoutes: Array<NavItemConfig> = [
  {
    path: "/player-area/player-characters",
    name: "Player Characters",
    title: "player-characters",
    icon: "mdi-account-group",
    component: () =>
      import(
        /* webpackChunkName: "player-area/player-characters" */ "../views/character/PlayerCharacters.vue"
      ),
  },
];
