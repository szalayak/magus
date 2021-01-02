import { createWeapon, updateWeapon, deleteWeapon } from "@/graphql/mutations";
import { getWeapon, listWeapons } from "@/graphql/queries";
import { Weapon, LooseObject } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listWeapons,
      read: getWeapon,
      create: createWeapon,
      update: updateWeapon,
      delete: deleteWeapon,
    },
    mappingFunction: (item: Weapon): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      descriptions: item.descriptions,
      weaponTypeId: item.weaponType?.id,
      weight: item.weight,
      price: item.price,
      attackRange: item.attackRange,
      combatValues: item.combatValues,
      damage: item.damage,
      attacksPerTurn: item.attacksPerTurn,
      ranged: item.ranged,
    }),
  }),
};

export default proxy;
