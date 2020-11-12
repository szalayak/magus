import * as weapon from "@/fixtures/weapon.json";
import { Editable, LooseObject } from "@/store/types";
import { parseThrowScenarioString } from "@/utils/throwScenario";

interface JsonData {
  default: Array<LooseObject>;
}

type MappingFunction = (data: JsonData) => Array<Editable>;

const mapFlatObject: MappingFunction = ({ default: data }) => {
  return data.map(d => {
    const result: LooseObject = {};
    for (const key of Object.keys(d)) {
      if (key.match(/\./g)) {
        const [subobj, attr] = key.split(".");
        const value = d[key];
        if (attr === "descriptions") {
          result.descriptions = result.descriptions || [{ [attr]: value }];
          (result.descriptions as Array<LooseObject>)[0][attr] = value;
        } else {
          result[subobj] = Object.assign(result[subobj] || {}, {
            [attr]: value,
          });
        }
      } else if (key === "damage") {
        result[key] = parseThrowScenarioString(d[key] as string);
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
};

export default fixtures;
