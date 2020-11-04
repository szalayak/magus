import VueI18n from "vue-i18n";

export interface Currency {
  gold: number;
  silver: number;
  copper: number;
}

export const convertFromCopper = (price: number): Currency => {
  const copper = price % 100;
  const i = ~~(price / 100);
  const silver = i % 10;
  const gold = ~~(i / 10);
  return { copper, silver, gold };
};

export const convertToCopper = ({ gold, silver, copper }: Currency): number => {
  return gold * 1000 + silver * 100 + copper;
};

export const getPriceString = (price: number, i18n: VueI18n): string => {
  const { copper, silver, gold } = convertFromCopper(price);
  const sGold = gold > 0 ? `${gold.toString()}${i18n.t("gold-abbr")} ` : "";
  const sSilver =
    silver > 0 ? `${silver.toString()}${i18n.t("silver-abbr")} ` : "";
  const sCopper =
    copper > 0 ? `${copper.toString()}${i18n.t("copper-abbr")} ` : "";
  return `${sGold}${sSilver}${sCopper}`.trim();
};
