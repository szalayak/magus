import VueI18n from "vue-i18n";

export const getPriceString = (price: number, i18n: VueI18n): string => {
  const copper = price % 100;
  const i = ~~(price / 100);
  const silver = i % 10;
  const gold = ~~(i / 10);
  const sGold = gold > 0 ? `${gold.toString()}${i18n.t("gold-abbr")} ` : "";
  const sSilver =
    silver > 0 ? `${silver.toString()}${i18n.t("silver-abbr")} ` : "";
  const sCopper =
    copper > 0 ? `${copper.toString()}${i18n.t("copper-abbr")} ` : "";
  return `${sGold}${sSilver}${sCopper}`.trim();
};
