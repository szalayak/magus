import { Identifiable, PageableState } from "@/store";
import { DocumentNode } from "graphql/language/ast";
import { LooseObject } from "../types";

export interface PageableResult {
  data: { [key: string]: PageableState };
}

export interface IdentifiableResult {
  data: { [key: string]: Identifiable };
}

export interface DefaultAmplifyActions {
  list?: string | DocumentNode;
  read?: string | DocumentNode;
  create?: string | DocumentNode;
  update?: string | DocumentNode;
  delete?: string | DocumentNode;
}

export interface DefaultActionInputs {
  actions: DefaultAmplifyActions;
  mappingFunction: (item: Identifiable) => LooseObject;
}
