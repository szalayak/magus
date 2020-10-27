import { NavItemConfig } from ".";

export const adminRoutes: Array<NavItemConfig> = [
  {
    path: "/admin/value-ranges",
    name: "Value Ranges",
    title: "value-ranges",
    icon: "mdi-code-braces",
    component: () =>
      import(
        /* webpackChunkName: "admin/value-ranges" */ "../views/admin/ValueRanges.vue"
      ),
  },
  {
    path: "/admin/races",
    name: "Races",
    title: "races",
    icon: "mdi-account-multiple",
    component: () =>
      import(/* webpackChunkName: "admin/races" */ "../views/admin/Races.vue"),
  },
  {
    path: "/admin/classes",
    name: "Classes",
    title: "classes",
    icon: "mdi-account-details",
    component: () =>
      import(
        /* webpackChunkName: "admin/classes" */ "../views/admin/Classes.vue"
      ),
  },
  {
    path: "/admin/psi-schools",
    name: "PsiSchools",
    title: "psi-schools",
    icon: "mdi-head-cog",
    component: () =>
      import(
        /* webpackChunkName: "admin/psi-schools" */ "../views/admin/PsiSchools.vue"
      ),
  },
  {
    path: "/admin/armours",
    name: "Armours",
    title: "armours",
    icon: "mdi-shield-star",
    component: () =>
      import(
        /* webpackChunkName: "admin/armours" */ "../views/admin/Armours.vue"
      ),
  },
  {
    path: "/admin/shields",
    name: "Shields",
    title: "shields",
    icon: "mdi-shield",
    component: () =>
      import(
        /* webpackChunkName: "admin/shields" */ "../views/admin/Shields.vue"
      ),
  },
  {
    path: "/admin/skills",
    name: "Skills",
    title: "skills",
    icon: "mdi-certificate",
    component: () =>
      import(
        /* webpackChunkName: "admin/skills" */ "../views/admin/Skills.vue"
      ),
  },
  {
    path: "/admin/weapons",
    name: "Weapons",
    title: "weapons",
    icon: "mdi-sword-cross",
    component: () =>
      import(
        /* webpackChunkName: "admin/weapons" */ "../views/admin/Weapons.vue"
      ),
  },
  {
    path: "/admin/magical-items",
    name: "MagicalItems",
    title: "magical-items",
    icon: "mdi-auto-fix",
    component: () =>
      import(
        /* webpackChunkName: "admin/magical-items" */ "../views/admin/MagicalItems.vue"
      ),
  },
];
