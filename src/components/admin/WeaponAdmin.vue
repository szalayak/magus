<template>
  <admin-table
    :defaultItem="defaultItem"
    module="weapon"
    :headers="headers"
    newText="new-weapon"
    editText="edit-weapon"
    title="weapons"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-subheader class="pl-1">{{ $t("category") }}</v-subheader>
      </v-row>
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-select
            v-model="editedItem.weaponType"
            :items="weaponTypes"
            item-text="description.title"
            item-value="id"
            :label="$t('weapon-type')"
            return-object
          ></v-select>
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="editedItem.attacksPerTurn"
            :label="$t('attacks-per-turn')"
            type="number"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-checkbox v-model="editedItem.ranged" :label="$t('ranged')" />
        </v-col>
        <v-col cols="12" xs="12" sm="6" v-if="editedItem.ranged">
          <v-text-field
            v-model.number="editedItem.attackRange"
            type="number"
            :label="$t('attack-range')"
          />
        </v-col>
      </v-row>
      <v-row dense>
        <v-subheader class="pl-1">{{ $t("combat-values") }}</v-subheader>
      </v-row>
      <combat-value-editor
        v-bind.sync="editedItem.combatValues"
        :ranged="editedItem.ranged"
        :melee="!editedItem.ranged"
      />
      <v-row dense>
        <v-subheader class="pl-1">{{ $t("damage") }}</v-subheader>
      </v-row>
      <throw-scenario-editor v-bind.sync="editedItem.damage" />
      <v-row dense>
        <v-subheader class="pl-1">{{ $t("misc-properties") }}</v-subheader>
      </v-row>
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="editedItem.price"
            type="number"
            :label="$t('price')"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model="editedItem.weight"
            :label="$t('weight')"
          /> </v-col
      ></v-row>
    </template>
    <template v-slot:[`item.ranged`]="{ item }">
      <v-simple-checkbox v-model="item.ranged" disabled></v-simple-checkbox>
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
import { Locale, ValueRangeType } from "@/API";
import { Weapon } from "@/store/modules/weapon";
import { getDescriptionsForLocales } from "@/utils/localise";
import Vue from "vue";
import Component from "vue-class-component";
import CombatValueEditor from "./CombatValueEditor.vue";
import ThrowScenarioEditor from "./ThrowScenarioEditor.vue";
import AdminTable from "./AdminTable.vue";
import { ValueRange } from "@/store/modules/valueRange";
import { getThrowScenarioString } from "@/utils/throwScenario";
import { ThrowScenario } from "@/store/types";
import { getPriceString } from "@/utils/price";

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
  customColumns = ["ranged", "damage", "price"];

  get headers() {
    return [
      { text: this.$t("title"), value: "description.title" },
      { text: this.$t("weapon-type"), value: "weaponType.description.title" },
      { text: this.$t("ranged"), value: "ranged" },
      { text: this.$t("attacks-per-turn"), value: "attacksPerTurn" },
      {
        text: this.$t("initiation-value"),
        value: "combatValues.initiation",
      },
      { text: this.$t("offence-value"), value: "combatValues.offence" },
      { text: this.$t("defence-value"), value: "combatValues.defence" },
      { text: this.$t("aiming-value"), value: "combatValues.aiming" },
      { text: this.$t("damage"), value: "damage", sortable: false },
      { text: this.$t("attack-range"), value: "attackRange" },
      { text: this.$t("price"), value: "price" },
      { text: this.$t("weight"), value: "weight" },
    ];
  }

  get weaponTypes(): ValueRange[] {
    return this.$store.getters["valueRange/getWeaponTypes"];
  }

  damageToString(damage: ThrowScenario) {
    return getThrowScenarioString(damage);
  }

  priceToString(price: number) {
    return getPriceString(price);
  }

  created() {
    this.$store.dispatch("valueRange/loadByType", ValueRangeType.WEAPON_TYPE);
  }
}
</script>
