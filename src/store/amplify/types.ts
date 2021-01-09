import { Identifiable, PageableState } from "@/store";
import { LooseObject } from '../types';

export interface PageableResult {
  data: { [key: string]: PageableState };
}

export interface IdentifiableResult {
  data: { [key: string]: Identifiable };
}

export interface DefaultAmplifyActions{
  list?: string,
  read?: string,
  create?: string,
  update?: string,
  delete?: string;
}

export interface DefaultActionInputs{
  actions: DefaultAmplifyActions,
  mappingFunction: (item: Identifiable) => LooseObject;
}
