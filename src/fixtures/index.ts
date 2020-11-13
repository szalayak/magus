import * as weapon from "./weapon.json";
import * as valueRange from "./valueRange.json";
import * as race from "./race.json";
import * as cls from "./class.json";
import { Editable, LooseObject } from "@/store/types";
import { parseThrowScenarioString } from "@/utils/throwScenario";

interface JsonData {
  default: Array<LooseObject>;
}

type MappingFunction = (data: JsonData) => Array<Editable>;

const mapFlatObject: MappingFunction = ({ default: data }) => {
  return data.map(d => {
    const result: LooseObject = {};
    let localeIndex = -1;
    for (const key of Object.keys(d)) {
      if (key.match(/\./g)) {
        const [subobj, attr] = key.split(".");
        const value = d[key];
        if (subobj === "descriptions") {
          if (attr === "locale") {
            result.descriptions = result.descriptions || [];
            (result.descriptions as Array<LooseObject>).push({ [attr]: value });
            localeIndex++;
          } else {
            (result.descriptions as Array<LooseObject>)[localeIndex][
              attr
            ] = value;
          }
        } else {
          result[subobj] = Object.assign(result[subobj] || {}, {
            [attr]: value,
          });
        }
      } else if (key === "damage") {
        result[key] = parseThrowScenarioString(d[key] as string);
      } else if (key === "attacksPerTurn" && typeof d[key] === "string") {
        const [numerator, denominator] = (d[key] as string).split("/");
        result[key] = parseFloat(numerator) / parseFloat(denominator);
      } else if (key === "id") {
        result[key] =
          typeof d[key] === "string" ? d[key] : (d[key] as number).toString();
      } else result[key] = d[key];
    }
    return result;
  });
};

export interface Fixtures {
  [key: string]: Array<Editable>;
}

const fixtures: Fixtures = {
  weapons: mapFlatObject((weapon as unknown) as JsonData),
  valueRanges: mapFlatObject((valueRange as unknown) as JsonData),
  races: mapFlatObject((race as unknown) as JsonData),
  classes: mapFlatObject((cls as unknown) as JsonData),
};

export default fixtures;
