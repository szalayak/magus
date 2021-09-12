<template>
  <admin-table
    :defaultItem="defaultItem"
    module="skill"
    :headers="headers"
    newText="new-skill"
    editText="edit-skill"
    title="skills"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-select
            v-model="editedItem.skillGroup"
            :items="skillGroups"
            item-text="description.title"
            item-value="id"
            :label="$t('skill-group')"
            return-object
          ></v-select>
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-checkbox
            v-model="editedItem.percentageSkill"
            :label="$t('percentage-skill')"
          />
        </v-col>
        <v-col v-if="!editedItem.percentageSkill" cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="editedItem.basicCost"
            type="number"
            :label="$t('skill-basic-cost')"
          />
        </v-col>
        <v-col v-if="!editedItem.percentageSkill" cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="editedItem.masterCost"
            type="number"
            :label="$t('skill-master-cost')"
          />
        </v-col>
      </v-row>
    </template>
    <template v-slot:[`item.percentageSkill`]="{ item }">
      <v-simple-checkbox
        v-model="item.percentageSkill"
        disabled
      ></v-simple-checkbox>
    </template>
  </admin-table>
</template>
<script lang="ts">
import { getDescriptionsForLocales } from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";
import { Skill } from "@/store/modules/skill";
import { ValueRange } from "@/store/modules/valueRange";
import { Locale, ValueRangeType } from "@/API";
import AdminTable from "./AdminTable.vue";
import { HeaderEntry } from "@/types";

@Component({
  name: "skill-admin",
  components: {
    "admin-table": AdminTable,
  },
})
export default class SkillAdmin extends Vue {
  defaultItem: Skill = {
    id: "",
    skillGroup: {
      id: "",
      description: { locale: this.$i18n.locale as Locale, title: "" },
    },
    description: { locale: this.$i18n.locale as Locale, title: "" },
    descriptions: getDescriptionsForLocales(),
  };
  customColumns = ["percentageSkill"];

  get headers(): HeaderEntry[] {
    return [
      { text: this.$t("skill-group"), value: "skillGroup.description.title" },
      { text: this.$t("title"), value: "description.title" },
      { text: this.$t("percentage-skill"), value: "percentageSkill" },
      { text: this.$t("skill-basic-cost"), value: "basicCost" },
      { text: this.$t("skill-master-cost"), value: "masterCost" },
    ];
  }

  get skillGroups(): ValueRange[] {
    return this.$store.getters["valueRange/getSkillGroups"];
  }

  created(): void {
    this.$store.dispatch("valueRange/loadByType", ValueRangeType.SKILL_GROUP);
  }
}
</script>
