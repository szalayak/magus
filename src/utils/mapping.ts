import { LooseObject } from "@/store/types";

export const purgeUndefined = (obj: unknown): LooseObject => {
  const input = obj as LooseObject;
  const result: LooseObject = {};
  Object.keys(input).forEach(key => {
    const attr = input[key];
    if (typeof attr === "object") {
      if (attr === null) {
        result[key] = attr;
      } else {
        const purged = purgeUndefined(attr as LooseObject);
        result[key] = Object.keys(purged).every(p => purged[p] === null)
          ? null
          : purged;
      }
    } else if (Array.isArray(attr)) {
      const ma = (attr as Array<LooseObject>).map(a => purgeUndefined(a));
      result[key] = ma.every(a => a === null) ? null : ma;
    } else {
      if (typeof attr !== "undefined") {
        result[key] = attr;
      }
    }
  });
  return result;
};
