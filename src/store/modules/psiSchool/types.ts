import { Editable } from "@/store";

export interface PsiSchool extends Editable {
  basePsiPoints?: number;
  psiPointsPerLevel?: number;
}

export interface PsiSchoolState {
  items: PsiSchool[];
}
