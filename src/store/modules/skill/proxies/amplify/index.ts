import { createSkill, updateSkill, deleteSkill } from "@/graphql/mutations";
import { getSkill, listSkills } from "@/graphql/queries";
import { Skill, LooseObject } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listSkills,
      read: getSkill,
      create: createSkill,
      update: updateSkill,
      delete: deleteSkill,
    },
    mappingFunction: (item: Skill): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      descriptions: item.descriptions,
      skillGroupId: item.skillGroup?.id,
      percentageSkill: item.percentageSkill,
      basicCost: item.percentageSkill ? undefined : item.basicCost,
      masterCost: item.percentageSkill ? undefined : item.masterCost,
    }),
  }),
};

export default proxy;
