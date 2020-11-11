import { Editable, LooseObject } from "@/store/types";

export interface ModuleResults {
  [key: string]: Editable[];
}

export const readCSV = async (
  filename: string
): Promise<string[] | undefined> => {
  const buffer = await fetch(filename);
  console.log(buffer);
  return buffer.toString().split("\n");
};

export const csvToJson = (csv?: string[]): Editable[] => {
  if (!csv || csv.length < 1) return [];
  const [headerLine, ...bodyLines] = csv;
  if (bodyLines.length < 1) return [{}];
  const result: Editable[] = [];

  const headers = headerLine.split(",");

  for (const bodyLine of bodyLines) {
    const body = bodyLine.split(",");
    const obj: LooseObject = {};
    for (const i in headers) {
      const header = headers[i];
      const value = body[i];

      if (header.match(/\./g)) {
        const [subobj, attr] = header.split(".");
        if (attr === "descriptions") {
          obj.descriptions = obj.descriptions || [{ [attr]: value }];
          (obj.descriptions as Array<LooseObject>)[0][attr] = value;
        } else {
          obj[subobj] = Object.assign(obj[subobj] || {}, { [attr]: value });
        }
      } else {
        obj[header] = value;
      }
    }
    result.push(obj);
  }

  return result;
};

export const loadDataForModule = async (id: string): Promise<Editable[]> => {
  return csvToJson(await readCSV(`../fixtures/${id}.csv`));
};
