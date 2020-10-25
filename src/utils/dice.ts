import { Dice } from "@/API";
import VueI18n from "vue-i18n";

export interface DiceObject {
  id: Dice;
  title: string;
}

export const getDice = (i18n: VueI18n): DiceObject[] => {
  return Object.keys(Dice).map(
    (type: string): DiceObject => ({
      id: type as Dice,
      title: i18n.t(type) as string,
    })
  );
};
