import { ValueRangeType } from "@/API";
import i18n from "@/i18n";

export interface ValueRangeTypeObject {
  id: ValueRangeType;
  title: string;
}

export const getValueRangeTypes = (): ValueRangeTypeObject[] => {
  return Object.keys(ValueRangeType).map(
    (type: string): ValueRangeTypeObject => ({
      id: type as ValueRangeType,
      title: i18n.t(type) as string,
    })
  );
};
