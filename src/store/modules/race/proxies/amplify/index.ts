import { createRace, updateRace, deleteRace } from "@/graphql/mutations";
import { getRace, listRaces } from "@/graphql/queries";
import { Race, LooseObject } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listRaces,
      read: getRace,
      create: createRace,
      update: updateRace,
      delete: deleteRace,
    },
    mappingFunction: (item: Race): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      descriptions: item.descriptions,
      playable: item.playable,
    }),
  }),
};

export default proxy;
