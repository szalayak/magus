<template>
  <admin-table
    :defaultItem="defaultItem"
    :module="module"
    :headers="headers"
    :newText="newText"
    :editText="editText"
    :title="title"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-select
            v-model="editedItem.weaponType"
            :items="weaponTypes"
            item-text="description.title"
            item-value="id"
            :label="$t('weapon-type')"
            return-object
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-checkbox v-model="editedItem.ranged" :label="$t('ranged')" />
        </v-col>
      </v-row>
      <v-row>
        <v-subheader>{{ $t("combat-values") }}</v-subheader>
      </v-row>
      <combat-value-editor v-bind.sync="editedItem.combatValues" />
      <v-row>
        <v-subheader>{{ $t("damage") }}</v-subheader>
      </v-row>
      <throw-scenario-editor v-bind.sync="editedItem.damage" />
    </template>
    <template v-slot:[`item.ranged`]="{ item }">
      <v-simple-checkbox v-model="item.ranged" disabled></v-simple-checkbox>
    </template>
  </admin-table>
</template>
<script lang="ts">
import { Locale, ValueRangeType } from "@/API";
import { Weapon } from "@/store/modules/weapon";
import { getDescriptionsForLocales, localise } from "@/utils/localise";
import Vue from "vue";
import Component from "vue-class-component";
import CombatValueEditor from "./CombatValueEditor.vue";
import ThrowScenarioEditor from "./ThrowScenarioEditor.vue";
import AdminTable from "./AdminTable.vue";
import { ValueRange } from "@/store/modules/valueRange";
import { Editable } from "@/store/types";

@Component({
  name: "weapon-table",
  components: {
    "admin-table": AdminTable,
    "combat-value-editor": CombatValueEditor,
    "throw-scenario-editor": ThrowScenarioEditor,
  },
})
export default class WeaponAdmin extends Vue {
  defaultItem: Weapon = {
    id: "",
    combatValues: {
      initiation: undefined,
      offence: undefined,
      defence: undefined,
      aiming: undefined,
    },
    attacksPerTurn: 1,
    damage: {
      iterationCount: undefined,
      dice: undefined,
      modifier: undefined,
    },
    description: { locale: this.$i18n.locale as Locale, title: "" },
    descriptions: getDescriptionsForLocales(),
  };
  headers = [
    { text: this.$t("id"), value: "id" },
    { text: this.$t("title"), value: "description.title" },
    { text: this.$t("weapon-type"), value: "weaponType.description.title" },
    { text: this.$t("ranged"), value: "ranged" },
    { text: this.$t("attack-range"), value: "attackRange" },
    { text: this.$t("attacks-per-turn"), value: "attacksPerTurn" },
    { text: this.$t("price"), value: "price" },
    { text: this.$t("weight"), value: "weight" },
    { text: this.$t("actions"), value: "actions", sortable: false },
  ];
  module = "weapon";
  newText = this.$t("new-weapon");
  editText = this.$t("edit-weapon");
  title = this.$t("weapons");
  customColumns = ["ranged"];

  get weaponTypes(): ValueRange[] {
    const mainClasses = this.$store.getters["valueRange/getWeaponTypes"];
    return localise(mainClasses, this.$i18n.locale) as ValueRange[];
  }
  created() {
    this.$store.dispatch("valueRange/loadByType", ValueRangeType.WEAPON_TYPE);
  }
}
</script>
