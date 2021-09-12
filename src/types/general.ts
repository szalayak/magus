import { LooseObject } from "@/store";
import { TranslateResult } from "vue-i18n";

export interface HeaderEntry {
  text?: TranslateResult;
  value: string;
  sortable?: boolean;
}

export interface ErrorObject extends LooseObject {
  message: string;
}

export interface BackendError {
  errors?: [ErrorObject];
}
