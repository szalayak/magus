import { ValueRangeType } from "./proxies";
import { Editable } from "@/store";
import { PageableState } from "@/store/types";

export interface ValueRange extends Editable {
  type?: ValueRangeType;
}

export interface ValueRangeState extends PageableState {
  items: ValueRange[];
}

export { ValueRangeType } from "./proxies";
