import {
  createValueRangeValue,
  updateValueRangeValue,
  deleteValueRangeValue,
} from "@/graphql/mutations";
import {
  getValueRangeValue,
  listValueRangeValues,
  listValueRangeValuesByType,
} from "@/graphql/queries";
import { LooseObject, PageableState } from "@/store";
import { PageableResult } from "@/store/amplify";
import { createDefaultActions } from "@/store/amplify/utils";
import { ValueRange } from "@/store/modules/valueRange";
import { API } from "aws-amplify";
import { ValueRangeType } from "..";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listValueRangeValues,
      read: getValueRangeValue,
      create: createValueRangeValue,
      update: updateValueRangeValue,
      delete: deleteValueRangeValue,
    },
    mappingFunction: (item: ValueRange): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      type: item.type,
      descriptions: item.descriptions,
    }),
  }),
  loadByTypeFunction: async (type: ValueRangeType): Promise<PageableState> => {
    const result = (await API.graphql({
      query: listValueRangeValuesByType,
      variables: { type },
    })) as PageableResult;

    return Object.values(result.data)[0] as PageableState;
  },
};

export default proxy;
export * from "./types";
