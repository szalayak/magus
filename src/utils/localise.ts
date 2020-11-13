import { Locale } from "@/API";
import { Describable, Description } from "@/store/types";

export const localiseItem = (obj: Describable, locale: string): Describable => {
  const res = {
    ...obj,
    description: obj.descriptions?.find(d => d.locale === locale),
    locale: locale as Locale,
  };
  if (res.description)
    res.description.description = res.description.description || "";
  return res;
};

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
  return locales.map(
    l => ({ locale: l, title: "", description: "" } as Description)
  );
};

export const mergeDescriptions = (
  obj: Describable,
  locale: string
): Describable => {
  obj.locale = locale as Locale;
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
