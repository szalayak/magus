import { Editable } from "@/store";
import { PageableState } from "@/store/types";
import { ValueRange } from "../valueRange";

export interface Class extends Editable {
  mainClass?: ValueRange;
  magicUser?: boolean;
}

export interface ClassState extends PageableState {
  items: Class[];
}
