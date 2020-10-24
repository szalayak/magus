import { ValueRangeType } from "@/API";
import VueI18n from "vue-i18n";

export interface ValueRangeTypeObject {
  id: ValueRangeType;
  title: string;
}

export const getValueRangeTypes = (i18n: VueI18n): ValueRangeTypeObject[] => {
  return Object.keys(ValueRangeType).map(
    (type: string): ValueRangeTypeObject => ({
      id: type as ValueRangeType,
      title: i18n.t(type) as string,
    })
  );
};
