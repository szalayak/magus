<template>
  <admin-table
    :defaultItem="defaultItem"
    module="psiSchool"
    :headers="headers"
    newText="new-psi-school"
    editText="edit-psi-school"
    title="psi-schools"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="editedItem.basePsiPoints"
            type="number"
            :label="$t('base-psi-points')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="editedItem.psiPointsPerLevel"
            type="number"
            :label="$t('psi-points-per-level')"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
  </admin-table>
</template>
<script lang="ts">
import { PsiSchool } from "@/store/modules/psiSchool";
import { getDescriptionsForLocales } from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";
import AdminTable from "./AdminTable.vue";
import { Locale } from "@/API";

@Component({
  name: "psi-school-admin",
  components: {
    "admin-table": AdminTable,
  },
})
export default class PsiSchoolAdmin extends Vue {
  defaultItem: PsiSchool = {
    id: "",
    descriptions: getDescriptionsForLocales(),
    description: { locale: this.$i18n.locale as Locale, title: "" },
    basePsiPoints: 0,
    psiPointsPerLevel: 0,
  };

  get headers() {
    return [
      { text: this.$t("title"), value: "description.title" },
      { text: this.$t("base-psi-points"), value: "basePsiPoints" },
      { text: this.$t("psi-points-per-level"), value: "psiPointsPerLevel" },
    ];
  }
}
</script>
