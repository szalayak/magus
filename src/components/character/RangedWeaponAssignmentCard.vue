<template>
  <character-info-card
    :id="id"
    :editable="false"
    :title="$t('ranged-weapons')"
    :error.sync="error"
    :messages="messages"
  >
    <template v-slot:toolbar>
      <v-dialog scrollable v-model="dialog" max-width="500px">
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
                <v-col cols="12">
                  <v-select
                    v-model="editedItem.weapon"
                    :items="weapons"
                    item-text="description.title"
                    item-value="id"
                    :label="$t('weapon')"
                    return-object
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="editedItem.mastery"
                    :items="masteryLevels"
                    :label="$t('mastery')"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="editedItem.aim"
                    :items="masteryLevels"
                    :label="$t('aim')"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="editedItem.horseback"
                    :items="masteryLevels"
                    :label="$t('horseback-archery')"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                    v-model="editedItem.inHand"
                    :label="$t('in-hand')"
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
      >
        <template v-slot:[`item.mastery`]="{ item }">
          {{ $t(item.mastery) }}
        </template>
        <template v-slot:[`item.weapon.description.title`]="{ item }">
          <a @click="editItem(item, assignments)">{{
            item.weapon.description.title
          }}</a>
        </template>
        <template v-slot:[`item.weapon.damage`]="{ item }">
          {{ damageToString(item.weapon.damage) }}
        </template>
        <template v-slot:[`item.weapon.combatValues.initiation`]="{ item }">
          {{ initiation(item) }}
        </template>
        <template v-slot:[`item.weapon.combatValues.aiming`]="{ item }">
          {{ aiming(item) }}
        </template>
        <template v-slot:[`item.inHand`]="{ item }">
          <v-simple-checkbox disabled v-model="item.inHand" />
        </template>
        <template v-slot:[`item.aim`]="{ item }">
          {{ $t(item.aim) }}
        </template>
        <template v-slot:[`item.horseback`]="{ item }">
          {{ $t(item.horseback) }}
        </template>
      </v-data-table>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { ThrowScenario } from "@/store/types";
import { getThrowScenarioString } from "@/utils/throwScenario";
import { Weapon } from "@/store/modules/weapon";
import { WeaponAssignment } from "@/store/modules/character";
import { combatValuesWithWeapon } from "@/utils/character";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";
import CharacterInfoList from "./CharacterInfoList";

@Component({
  name: "ranged-weapon-assignment-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "confirm-delete-dialog": ConfirmDeleteDialog,
  },
})
export default class RangedWeaponAssignmentCard extends CharacterInfoList {
  sortBy = ["weapon.description.title"];

  get headers() {
    return [
      { text: this.$t("weapon"), value: "weapon.description.title" },
      { text: this.$t("mastery"), value: "mastery" },
      { text: this.$t("attacks-per-turn"), value: "weapon.attacksPerTurn" },
      {
        text: this.$t("initiation"),
        value: "weapon.combatValues.initiation",
      },
      { text: this.$t("aiming"), value: "weapon.combatValues.aiming" },
      { text: this.$t("damage"), value: "weapon.damage" },
      { text: this.$t("in-hand"), value: "inHand" },
      { text: this.$t("aim"), value: "aim" },
      { text: this.$t("horseback-archery"), value: "horseback" },
      { text: this.$t("notes"), value: "notes" },
    ];
  }

  get weapons() {
    return this.$store.getters["weapon/list"].filter((w: Weapon) => w.ranged);
  }

  get assignments() {
    return this.character.weapons?.filter(w => w.weapon?.ranged) || [];
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-weapon")
      : this.$t("edit-weapon");
  }

  defaultItem(): WeaponAssignment {
    return {
      characterId: this.character.id || "",
    };
  }

  damageToString(damage: ThrowScenario) {
    return getThrowScenarioString(damage);
  }

  initiation(assignment: WeaponAssignment) {
    return combatValuesWithWeapon({
      character: this.character,
      weapon: assignment.weapon,
      mastery: assignment.mastery,
    }).initiation;
  }
  aiming(assignment: WeaponAssignment) {
    return combatValuesWithWeapon({
      character: this.character,
      weapon: assignment.weapon,
      mastery: assignment.mastery,
    }).aiming;
  }

  async createFunction(item: WeaponAssignment) {
    return this.$store.dispatch("character/createWeaponAssignment", item);
  }

  async updateFunction(item: WeaponAssignment) {
    return this.$store.dispatch("character/updateWeaponAssignment", item);
  }

  async deleteFunction(item: WeaponAssignment) {
    return this.$store.dispatch("character/deleteWeaponAssignment", item);
  }
}
</script>
