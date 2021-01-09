import { Editable } from "@/store";
import { PageableState } from "@/store/types";

export interface Race extends Editable {
  playable?: boolean;
}

export interface RaceState extends PageableState {
  items: Race[];
}
