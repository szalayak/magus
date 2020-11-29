import { createArmour, updateArmour, deleteArmour } from "@/graphql/mutations";
import { getArmour, listArmours } from "@/graphql/queries";
import { Armour, LooseObject } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listArmours,
      read: getArmour,
      create: createArmour,
      update: updateArmour,
      delete: deleteArmour,
    },
    mappingFunction: (item: Armour): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      descriptions: item.descriptions,
      weight: item.weight,
      movementPreventionValue: item.movementPreventionValue,
      damageReductionValue: item.damageReductionValue,
      price: item.price,
    }),
  }),
};

export default proxy;
