import {
  createMagicalItem,
  deleteMagicalItem,
  updateMagicalItem,
} from "@/graphql/mutations";
import { getMagicalItem, listMagicalItems } from "@/graphql/queries";
import { MagicalItem, LooseObject } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listMagicalItems,
      read: getMagicalItem,
      create: createMagicalItem,
      update: updateMagicalItem,
      delete: deleteMagicalItem,
    },
    mappingFunction: (item: MagicalItem): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      descriptions: item.descriptions,
      magicalItemClassId: item.class?.id,
      price: item.price,
      duration: item.duration,
      manaCost: item.manaCost,
    }),
  }),
};

export default proxy;
