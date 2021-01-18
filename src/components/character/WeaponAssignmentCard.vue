<template>
  <character-info-card
    :id="id"
    :editable="false"
    :title="$t('weapons')"
    :error.sync="error"
    :messages="messages"
  >
    <template v-slot:toolbar="{}">
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
              <v-container>
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
                      v-model="editedItem.breakWeapon"
                      :items="masteryLevels"
                      :label="$t('break-weapon')"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.disarm"
                      :items="masteryLevels"
                      :label="$t('disarm')"
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
              </v-container>
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
        @confirm="deleteItemConfirm"
      />
    </template>
    <template v-slot:fields="{}">
      <v-data-table
        width="auto"
        height="auto"
        :headers="headers"
        :items="assignments"
        :sort-by="sortBy"
      >
        <template v-slot:[`item.mastery`]="{ item }">
          {{ masteryToString(item.mastery) }}
        </template>
        <template v-slot:[`item.weapon`]="{ item }">
          <a @click="editItem(item)">{{ weaponToString(item.weapon) }}</a>
        </template>
        <template v-slot:[`item.weapon.damage`]="{ item }">
          {{ damageToString(item.weapon.damage) }}
        </template>
        <template v-slot:[`item.weapon.combatValues.initiation`]="{ item }">
          {{ initiation(item) }}
        </template>
        <template v-slot:[`item.weapon.combatValues.offence`]="{ item }">
          {{ offence(item) }}
        </template>
        <template v-slot:[`item.weapon.combatValues.defence`]="{ item }">
          {{ defence(item) }}
        </template>
        <template v-slot:[`item.inHand`]="{ item }">
          <v-simple-checkbox disabled v-model="item.inHand" />
        </template>
        <template v-slot:[`item.breakWeapon`]="{ item }">
          {{ masteryToString(item.breakWeapon) }}
        </template>
        <template v-slot:[`item.disarm`]="{ item }">
          {{ masteryToString(item.disarm) }}
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon v-if="editable" small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon v-if="editable" small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { ThrowScenario } from "@/store/types";
import { getThrowScenarioString } from "@/utils/throwScenario";
import { Weapon } from "@/store/modules/weapon";
import { Mastery } from "@/API";
import { WeaponAssignment } from "@/store/modules/character";
import { combatValuesWithWeapon } from "@/utils/character";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";

@Component({
  name: "weapon-assignment-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "confirm-delete-dialog": ConfirmDeleteDialog,
  },
})
export default class WeaponAssignmentCard extends CharacterInfo {
  valid = true;
  dialog = false;
  sortBy = ["weapon.description.title"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();

  get headers() {
    return [
      { text: this.$t("weapon"), value: "weapon" },
      { text: this.$t("mastery"), value: "mastery" },
      { text: this.$t("attacks-per-turn"), value: "weapon.attacksPerTurn" },
      {
        text: this.$t("initiation"),
        value: "weapon.combatValues.initiation",
      },
      { text: this.$t("offence"), value: "weapon.combatValues.offence" },
      { text: this.$t("defence"), value: "weapon.combatValues.defence" },
      { text: this.$t("damage"), value: "weapon.damage" },
      { text: this.$t("in-hand"), value: "inHand" },
      { text: this.$t("break-weapon"), value: "breakWeapon" },
      { text: this.$t("disarm"), value: "disarm" },
      { text: this.$t("notes"), value: "notes" },
      { text: this.$t("actions"), value: "actions", sortable: false },
    ];
  }

  get weapons() {
    return this.$store.getters["weapon/list"].filter((w: Weapon) => !w.ranged);
  }

  get assignments() {
    return this.character.weapons?.filter(w => !w.weapon?.ranged) || [];
  }

  get isNewItem() {
    return this.editedIndex === -1;
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

  weaponToString(weapon: Weapon) {
    return weapon?.description?.title;
  }

  masteryToString(mastery: Mastery) {
    return this.$t(mastery);
  }

  initiation(assignment: WeaponAssignment) {
    return combatValuesWithWeapon({
      character: this.character,
      weapon: assignment.weapon,
      mastery: assignment.mastery,
    }).initiation;
  }
  offence(assignment: WeaponAssignment) {
    return combatValuesWithWeapon({
      character: this.character,
      weapon: assignment.weapon,
      mastery: assignment.mastery,
    }).offence;
  }
  defence(assignment: WeaponAssignment) {
    return combatValuesWithWeapon({
      character: this.character,
      weapon: assignment.weapon,
      mastery: assignment.mastery,
    }).defence;
  }
  close() {
    this.dialog = false;
    this.resetEditedItem();
  }
  save() {
    this.$store
      .dispatch(
        this.isNewItem
          ? `character/createWeaponAssignment`
          : `character/updateWeaponAssignment`,
        { ...this.editedItem, characterId: this.character.id }
      )
      .then(() => {
        this.messages = [];
      })
      .catch((error: GraphQLResult<WeaponAssignment>) => {
        this.messages = error.errors?.map(err => err.message) || [];
      });
    this.dialog = false;
    this.resetEditedItem();
  }

  deleteItemConfirm() {
    this.$store.dispatch(`character/deleteWeaponAssignment`, this.editedItem);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.resetEditedItem();
  }
  editItem(item: WeaponAssignment) {
    this.editedIndex = this.assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: WeaponAssignment) {
    this.editedIndex = this.assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }

  resetEditedItem() {
    this.$nextTick(() => {
      this.editedItem = this.defaultItem();
      this.editedIndex = -1;
    });
  }
}
</script>
