import { NavItemConfig } from ".";

export const playerAreaRoutes: Array<NavItemConfig> = [
  {
    path: "/player-area/player-characters",
    name: "player-characters-as-player",
    title: "my-characters",
    icon: "mdi-account-group",
    component: () =>
      import(
        /* webpackChunkName: "player-area/player-characters" */ "../views/character/PlayerCharactersAsPlayer.vue"
      ),
  },
];
