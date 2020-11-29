import { createShield, updateShield, deleteShield } from "@/graphql/mutations";
import { getShield, listShields } from "@/graphql/queries";
import { Shield, LooseObject } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listShields,
      read: getShield,
      create: createShield,
      update: updateShield,
      delete: deleteShield,
    },
    mappingFunction: (item: Shield): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      descriptions: item.descriptions,
      combatValues: item.combatValues,
      damage: item.damage,
      movementPreventionValue: item.movementPreventionValue,
      weight: item.weight,
      price: item.price,
      attacksPerTurn: item.attacksPerTurn,
    }),
  }),
};

export default proxy;
