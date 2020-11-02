import { Locale } from "@/API";
import { Describable, Description } from "@/store/types";

export const localiseItem = (
  obj: Describable,
  locale: string
): Describable => ({
  ...obj,
  description: obj.descriptions?.find(d => d.locale === locale),
});

export const localise = (
  objects: Describable[],
  locale: string
): Describable[] => {
  return objects
    ? objects.map((obj: Describable) => localiseItem(obj, locale))
    : [];
};

export const getDescriptionsForLocales = (
  localesIn?: string[]
): Description[] => {
  const locales = localesIn || Object.keys(Locale);
  return locales.map(l => ({ locale: l, title: "" } as Description));
};

export const mergeDescriptions = (
  obj: Describable,
  locale: string
): Describable => {
  if (obj.description) {
    const d = obj.descriptions?.find(d => d?.locale === locale);
    if (d) {
      obj.descriptions?.splice(
        obj.descriptions?.indexOf(d),
        1,
        obj.description
      );
    }
  }
  return obj;
};
