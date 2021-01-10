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

export const throwDice = (dice: Dice): number => {
  const diceNumericValues = dice.match(/[0-9]/g);
  const diceValue = diceNumericValues
    ? parseInt(diceNumericValues.join(""))
    : 0;

  const maxValue = dice === Dice.D1 ? 6 : diceValue;

  const value = Math.floor(Math.random() * maxValue) + 1;

  if (dice === Dice.D1) return value < 6 ? 0 : 1;
  else return value;
};
