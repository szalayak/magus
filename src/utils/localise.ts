import { Describable } from "@/store";

export default function(objects: Describable[], component: Vue): Describable[] {
  return objects
    ? objects.map((obj: Describable) => ({
        ...obj,
        description: obj.descriptions.find(
          d => d.locale === component.$i18n.locale
        ),
      }))
    : [];
}
