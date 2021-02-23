import { Character } from "@/store";

export interface CharacterNavbarItem {
  id: string;
  icon: string;
  title: string;
}

export default function(character: Character) {
  const items: CharacterNavbarItem[] = [
    {
      id: "appearance",
      icon: "mdi-account",
      title: "appearance",
    },
    {
      id: "administrative-info",
      icon: "mdi-cog",
      title: "administrative-info",
    },
    {
      id: "properties",
      icon: "mdi-ticket",
      title: "properties",
    },
    {
      id: "likes-and-dislikes",
      icon: "mdi-thumb-up",
      title: "likes-and-dislikes",
    },
    {
      id: "connections",
      icon: "mdi-connection",
      title: "connections",
    },
    {
      id: "core-information",
      icon: "mdi-information",
      title: "core-information",
    },
    {
      id: "abilities",
      icon: "mdi-arm-flex",
      title: "abilities",
    },
    {
      id: "health",
      icon: "mdi-stethoscope",
      title: "vitality",
    },
    {
      id: "combat-values",
      icon: "mdi-sword",
      title: "combat-values",
    },
    {
      id: "spell-resistance",
      icon: "mdi-shield-sun",
      title: "spell-resistance",
    },
    {
      id: "psi",
      icon: "mdi-head-cog",
      title: "psi",
    },
    {
      id: "magical-ability",
      icon: "mdi-auto-fix",
      title: "mana-points",
    },
    {
      id: "armour",
      icon: "mdi-shield-star",
      title: "armour",
    },
    {
      id: "shield",
      icon: "mdi-shield",
      title: "shield",
    },
    {
      id: "weapon-assignments",
      icon: "mdi-sword-cross",
      title: "weapons",
    },
    {
      id: "ranged-weapon-assignments",
      icon: "mdi-sword-cross",
      title: "ranged-weapons",
    },
    {
      id: "skill-assignments",
      icon: "mdi-certificate",
      title: "skills",
    },
    {
      id: "skill-points",
      icon: "mdi-certificate",
      title: "skill-points",
    },
    {
      id: "magical-item-assignments",
      icon: "mdi-auto-fix",
      title: "magical-items",
    },
    {
      id: "languages",
      icon: "mdi-translate",
      title: "languages",
    },
    {
      id: "wallet",
      icon: "mdi-language-ruby",
      title: "wallet",
    },
    {
      id: "inventory",
      icon: "mdi-bag-personal",
      title: "inventory",
    },
    {
      id: "poisons",
      icon: "mdi-bottle-tonic-skull",
      title: "poisons",
    },
    {
      id: "animals",
      icon: "mdi-horse",
      title: "mounts-and-other-animals",
    },
    {
      id: "servants",
      icon: "mdi-account-group",
      title: "servants-and-companions",
    },
    {
      id: "notes",
      icon: "mdi-note-multiple",
      title: "notes",
    },
  ];

  if (!character.psiUser) {
    const psi = items.find(i => i.id === "psi");
    if (psi) items.splice(items.indexOf(psi), 1);
  }

  if (!character.magicUser) {
    const magicalAbility = items.find(i => i.id === "magical-ability");
    if (magicalAbility) items.splice(items.indexOf(magicalAbility), 1);
  }

  return items;
}
