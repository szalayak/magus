import { updateClass, deleteClass, createClass } from "@/graphql/mutations";
import { getClass, listClasses } from "@/graphql/queries";
import { LooseObject } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";
import { Class } from "@/store/modules/class";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listClasses,
      read: getClass,
      create: createClass,
      update: updateClass,
      delete: deleteClass,
    },
    mappingFunction: (item: Class): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      mainClassId: item.mainClass?.id,
      magicUser: item.magicUser,
      descriptions: item.descriptions,
    }),
  }),
};

export default proxy;
