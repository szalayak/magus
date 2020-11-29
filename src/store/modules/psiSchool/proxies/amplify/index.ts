import {
  createPsiSchool,
  updatePsiSchool,
  deletePsiSchool,
} from "@/graphql/mutations";
import { getPsiSchool, listPsiSchools } from "@/graphql/queries";
import { LooseObject, PsiSchool } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";

const proxy = {
  defaultActions: createDefaultActions({
    actions: {
      list: listPsiSchools,
      read: getPsiSchool,
      create: createPsiSchool,
      update: updatePsiSchool,
      delete: deletePsiSchool,
    },
    mappingFunction: (item: PsiSchool): LooseObject => ({
      id: item.id && item.id.length > 0 ? item.id : null,
      descriptions: item.descriptions,
      basePsiPoints: item.basePsiPoints,
      psiPointsPerLevel: item.psiPointsPerLevel,
    }),
  }),
};

export default proxy;
