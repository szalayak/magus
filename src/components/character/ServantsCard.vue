<template>
  <character-info-card
    :id="id"
    :editable="false"
    :title="$t('servants-and-companions')"
    :error.sync="error"
    :messages="messages"
  >
    <template v-slot:toolbar="{}">
      <v-dialog scrollable v-model="dialog" max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-show="editable"
            color="primary"
            text
            v-bind="attrs"
            v-on="on"
            icon
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>{{ formTitle }}</v-card-title>
          <v-card-text>
            <v-alert v-model="error" dense outlined type="error" dismissible>
              {{ messages }}
            </v-alert>
            <v-form :disabled="!editable" ref="form" v-model="valid">
              <v-row dense>
                <v-subheader class="pl-1">{{
                  $t("general-properties")
                }}</v-subheader>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.name"
                    :label="$t('name')"
                    :rules="[v => !!v || $t('field-is-mandatory')]"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model.number="editedItem.attacksPerTurn"
                    :label="$t('attacks-per-turn')"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="editedItem.weapon"
                    :items="weapons"
                    item-text="description.title"
                    item-value="id"
                    :label="$t('weapon')"
                    return-object
                  ></v-select>
                </v-col>
              </v-row>
              <v-row dense>
                <v-subheader class="pl-1">{{ $t("vitality") }}</v-subheader>
              </v-row>
              <v-row dense>
                <v-col cols="6">
                  <v-text-field
                    v-model.number="editedItem.health.vitality.current"
                    :label="$t('current')"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model.number="editedItem.health.vitality.max"
                    :label="$t('max')"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row dense>
                <v-subheader class="pl-1">{{ $t("hit-points") }}</v-subheader>
              </v-row>
              <v-row dense>
                <v-col cols="6">
                  <v-text-field
                    v-model.number="editedItem.health.hitPoints.current"
                    :label="$t('current')"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model.number="editedItem.health.hitPoints.max"
                    :label="$t('max')"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row dense>
                <v-subheader class="pl-1">{{
                  $t("combat-values")
                }}</v-subheader>
              </v-row>
              <combat-value-editor
                v-bind.sync="editedItem.combatValues"
                :melee="true"
                :ranged="true"
              />
              <v-row dense>
                <v-subheader class="pl-1">{{ $t("damage") }}</v-subheader>
              </v-row>
              <throw-scenario-editor v-bind.sync="editedItem.damage" />
              <v-row dense>
                <v-subheader class="pl-1">{{
                  $t("misc-properties")
                }}</v-subheader>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.maxDistance"
                    :label="$t('max-distance')"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.maxLoad"
                    :label="$t('max-load')"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.badHabit"
                    :label="$t('bad-habit')"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.specialAbilities"
                    :label="$t('special-abilities')"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.notes"
                    :label="$t('notes')"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="close">
              {{ $t("cancel") }}
            </v-btn>
            <v-btn v-if="editable" color="primary" text @click="save">
              {{ $t("save") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <confirm-delete-dialog
        :open.sync="dialogDelete"
        @cancel="closeDelete"
        @confirm="deleteItemsConfirm(selected)"
      />
      <v-btn
        v-if="editable"
        :disabled="selected.length === 0"
        icon
        text
        @click="deleteItems"
        color="error"
        ><v-icon>mdi-delete</v-icon></v-btn
      >
    </template>
    <template v-slot:fields="{}">
      <v-data-table
        v-model="selected"
        :show-select="editable"
        item-key="id"
        :headers="headers"
        :items="assignments"
        :sort-by="sortBy"
        disable-pagination
        hide-default-footer
      >
        <template v-slot:[`item.name`]="{ item }">
          <a @click="editItem(item)">{{ item.name }}</a>
        </template>
        <template v-slot:[`item.attacksPerTurn`]="{ item }">
          {{ attacksPerTurn(item) }}
        </template>
        <template v-slot:[`item.combatValues.initiation`]="{ item }">
          {{ offence(item.combatValues.initiation, item.weapon) }}
        </template>
        <template v-slot:[`item.combatValues.offence`]="{ item }">
          {{ offence(item.combatValues.offence, item.weapon) }}
        </template>
        <template v-slot:[`item.combatValues.defence`]="{ item }">
          {{ offence(item.combatValues.defence, item.weapon) }}
        </template>
        <template v-slot:[`item.combatValues.aiming`]="{ item }">
          {{ aiming(item.combatValues.aiming, item.weapon) }}
        </template>
        <template v-slot:[`item.damage`]="{ item }">
          {{ damageToString(item.damage, item.weapon) }}
        </template>
        <template v-slot:[`item.weapon`]="{ item }">
          {{ weaponToString(item.weapon) }}
        </template>
        <template v-slot:[`item.health.vitality`]="{ item }">
          {{ mutablePointValueToString(item.health.vitality) }}
        </template>
        <template v-slot:[`item.health.hitPoints`]="{ item }">
          {{ mutablePointValueToString(item.health.hitPoints) }}
        </template>
      </v-data-table>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { MutablePointValue, ThrowScenario } from "@/store/types";
import { getThrowScenarioString } from "@/utils/throwScenario";
import { CompanionType } from "@/API";
import { CharacterCompanion } from "@/store/modules/character";
import CombatValueEditorVue from "../admin/CombatValueEditor.vue";
import ThrowScenarioEditorVue from "../admin/ThrowScenarioEditor.vue";
import { localiseItem } from "@/utils/localise";
import { Weapon } from "@/store/modules/weapon";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";
import CharacterInfoList from "./CharacterInfoList";

@Component({
  name: "servants-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "combat-value-editor": CombatValueEditorVue,
    "throw-scenario-editor": ThrowScenarioEditorVue,
    "confirm-delete-dialog": ConfirmDeleteDialog,
  },
})
export default class ServantsCard extends CharacterInfoList {
  sortBy = ["name"];

  get headers() {
    return [
      { text: this.$t("name"), value: "name" },
      { text: this.$t("vp"), value: "health.vitality" },
      { text: this.$t("hp"), value: "health.hitPoints" },
      { text: this.$t("initiation"), value: "combatValues.initiation" },
      { text: this.$t("offence"), value: "combatValues.offence" },
      { text: this.$t("defence"), value: "combatValues.defence" },
      { text: this.$t("aiming"), value: "combatValues.aiming" },
      { text: this.$t("attacks-per-turn"), value: "attacksPerTurn" },
      { text: this.$t("damage"), value: "damage" },
      { text: this.$t("weapon"), value: "weapon" },
      { text: this.$t("bad-habit"), value: "badHabit" },
      { text: this.$t("special-abilities"), value: "specialAbilities" },
      { text: this.$t("notes"), value: "notes" },
    ];
  }

  get weapons() {
    return this.$store.getters["weapon/list"]?.filter((w: Weapon) => !w.ranged);
  }

  get assignments() {
    return (
      this.character.companions?.filter(
        c => c.type === CompanionType.SERVANT
      ) || []
    );
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-servant")
      : this.$t("edit-servant");
  }

  defaultItem(): CharacterCompanion {
    return {
      characterId: this.character.id || "",
      name: "",
      type: CompanionType.SERVANT,
      health: {
        vitality: {},
        hitPoints: {},
      },
      combatValues: {
        initiation: undefined,
        offence: undefined,
        defence: undefined,
        aiming: undefined,
      },
      damage: {
        iterationCount: 1,
        dice: undefined,
        modifier: undefined,
      },
    };
  }

  attacksPerTurn(item: CharacterCompanion) {
    return item.weapon?.attacksPerTurn || item.attacksPerTurn;
  }

  initiation(value?: number, weapon?: Weapon) {
    return (value || 0) + (weapon?.combatValues?.initiation || 0);
  }

  offence(value?: number, weapon?: Weapon) {
    return (value || 0) + (weapon?.combatValues?.offence || 0);
  }

  defence(value?: number, weapon?: Weapon) {
    return (value || 0) + (weapon?.combatValues?.defence || 0);
  }

  aiming(value?: number, weapon?: Weapon) {
    return (value || 0) + (weapon?.combatValues?.aiming || 0);
  }

  damageToString(damage: ThrowScenario, weapon?: Weapon) {
    return getThrowScenarioString(weapon?.damage || damage);
  }

  typeToString(type: CompanionType) {
    return this.$t(type);
  }

  mutablePointValueToString(value: MutablePointValue) {
    return `${value.current || 0}/${value.max || 0}`;
  }

  weaponToString(weapon: Weapon) {
    return weapon
      ? localiseItem(weapon, this.$i18n.locale).description?.title
      : "";
  }

  async createFunction(item: CharacterCompanion) {
    return this.$store.dispatch("character/createCharacterCompanion", item);
  }

  async updateFunction(item: CharacterCompanion) {
    return this.$store.dispatch("character/updateCharacterCompanion", item);
  }

  async deleteFunction(item: CharacterCompanion) {
    return this.$store.dispatch("character/deleteCharacterCompanion", item);
  }
}
</script>
