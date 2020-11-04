interface LooseObject {
  [key: string]: unknown;
}

export const purgeUndefined = (obj: unknown) => {
  const input = obj as LooseObject;
  const result: LooseObject = {};
  Object.keys(input).forEach(key => {
    const attr = input[key];
    if (typeof attr === "object") {
      if (attr === null) {
        result[key] = attr;
      } else {
        result[key] = purgeUndefined(attr as LooseObject);
      }
    } else if (Array.isArray(attr)) {
      const ma = (attr as Array<LooseObject>).map(a => purgeUndefined(a));
      result[key] = ma.filter(a => !!a);
    } else {
      if (typeof attr !== "undefined") {
        result[key] = attr;
      }
    }
  });
  return result;
};
