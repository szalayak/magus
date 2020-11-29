import { Class, Editable } from "@/store";

export interface MagicalItem extends Editable {
  class?: Class;
  manaCost?: number;
  duration?: string;
  price?: number;
}

export interface MagicalItemState {
  items: MagicalItem[];
}
