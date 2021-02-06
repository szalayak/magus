<template>
  <admin-table
    :defaultItem="defaultItem"
    module="shield"
    :headers="headers"
    newText="new-shield"
    editText="edit-shield"
    title="shields"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-col cols="12" xs="6" sm="6" lg="3">
          <v-text-field
            v-model.number="editedItem.attacksPerTurn"
            :label="$t('attacks-per-turn')"
            type="number"
          />
        </v-col>
        <v-col cols="12" xs="6" sm="6" lg="3">
          <v-text-field
            v-model.number="editedItem.movementPreventionValue"
            type="number"
            :label="$t('movement-prevention-value')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="6" sm="6" lg="3">
          <v-text-field
            v-model="editedItem.weight"
            :label="$t('weight')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="6" sm="6" lg="3">
          <v-text-field
            v-model.number="editedItem.price"
            type="number"
            :label="$t('price')"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-subheader class="pl-1">{{ $t("combat-values") }}</v-subheader>
      </v-row>
      <combat-value-editor
        v-bind.sync="editedItem.combatValues"
        :melee="true"
      />
      <v-row dense>
        <v-subheader class="pl-1">{{ $t("damage") }}</v-subheader>
      </v-row>
      <throw-scenario-editor v-bind.sync="editedItem.damage" />
    </template>
    <template v-slot:[`item.damage`]="{ item }">
      {{ damageToString(item.damage) }}
    </template>
    <template v-slot:[`item.price`]="{ item }">
      {{ priceToString(item.price) }}
    </template>
  </admin-table>
</template>
<script lang="ts">
import { Shield } from "@/store/modules/shield";
import { getDescriptionsForLocales } from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";
import CombatValueEditor from "./CombatValueEditor.vue";
import ThrowScenarioEditor from "./ThrowScenarioEditor.vue";
import { Locale } from "@/API";
import AdminTable from "./AdminTable.vue";
import { ThrowScenario } from "@/store/types";
import { getThrowScenarioString } from "@/utils/throwScenario";
import { getPriceString } from "@/utils/price";

@Component({
  name: "shield-admin",
  components: {
    "admin-table": AdminTable,
    "combat-value-editor": CombatValueEditor,
    "throw-scenario-editor": ThrowScenarioEditor,
  },
})
export default class ShieldAdmin extends Vue {
  defaultItem: Shield = {
    id: "",
    descriptions: getDescriptionsForLocales(),
    description: {
      locale: this.$i18n.locale as Locale,
      title: "",
    },
    combatValues: {
      initiation: undefined,
      offence: undefined,
      defence: undefined,
      aiming: undefined,
    },
    damage: {
      iterationCount: undefined,
      dice: undefined,
      modifier: undefined,
    },
    attacksPerTurn: 1,
  };

  customColumns = ["damage", "price"];

  get headers() {
    return [
      { text: this.$t("title"), value: "description.title" },
      {
        text: this.$t("movement-prevention-value"),
        value: "movementPreventionValue",
      },
      { text: this.$t("attacks-per-turn"), value: "attacksPerTurn" },
      {
        text: this.$t("initiation-value"),
        value: "combatValues.initiation",
      },
      { text: this.$t("offence-value"), value: "combatValues.offence" },
      { text: this.$t("defence-value"), value: "combatValues.defence" },
      { text: this.$t("aiming-value"), value: "combatValues.aiming" },
      { text: this.$t("damage"), value: "damage", sortable: false },
      { text: this.$t("price"), value: "price" },
      { text: this.$t("weight"), value: "weight" },
    ];
  }

  damageToString(damage: ThrowScenario) {
    return getThrowScenarioString(damage);
  }

  priceToString(price: number) {
    return getPriceString(price);
  }
}
</script>
