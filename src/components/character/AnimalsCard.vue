<template>
  <character-info-card
    :id="id"
    :editable="false"
    :title="$t('mounts-and-other-animals')"
  >
    <template v-slot:toolbar="{}">
      <v-dialog scrollable v-model="dialog" max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="editable"
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
            <v-form ref="form" v-model="valid">
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
                <v-col cols="12">
                  <v-radio-group v-model="editedItem.type" row>
                    <v-radio value="MOUNT" :label="$t('MOUNT')" />
                    <v-radio value="ANIMAL" :label="$t('ANIMAL')" />
                  </v-radio-group>
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
                :ranged="false"
                :melee="true"
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
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="close">
              {{ $t("cancel") }}
            </v-btn>
            <v-btn color="primary" text @click="save">
              {{ $t("save") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline">{{
            $t("confirm-delete-message")
          }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="closeDelete">{{
              $t("cancel")
            }}</v-btn>
            <v-btn color="primary" text @click="deleteItemConfirm">{{
              $t("ok")
            }}</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:fields="{}">
      <v-data-table
        width="auto"
        height="auto"
        :headers="headers"
        :items="assignments"
        :sort-by="sortBy"
      >
        <template v-slot:top>
          <v-alert v-if="notification" dense outlined type="error">
            {{ messages }}
          </v-alert>
        </template>
        <template v-slot:[`item.type`]="{ item }">
          {{ typeToString(item.type) }}
        </template>
        <template v-slot:[`item.damage`]="{ item }">
          {{ damageToString(item.damage) }}
        </template>
        <template v-slot:[`item.health.vitality`]="{ item }">
          {{ mutablePointValueToString(item.health.vitality) }}
        </template>
        <template v-slot:[`item.health.hitPoints`]="{ item }">
          {{ mutablePointValueToString(item.health.hitPoints) }}
        </template>
        <template v-if="editable" v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
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
import { MutablePointValue, ThrowScenario } from "@/store/types";
import { getThrowScenarioString } from "@/utils/throwScenario";
import { CompanionType } from "@/API";
import { CharacterCompanion } from "@/store/modules/character";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import CombatValueEditorVue from "../admin/CombatValueEditor.vue";
import ThrowScenarioEditorVue from "../admin/ThrowScenarioEditor.vue";

type Form = Vue & { validate: () => boolean };

@Component({
  name: "animals-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "combat-value-editor": CombatValueEditorVue,
    "throw-scenario-editor": ThrowScenarioEditorVue,
  },
})
export default class AnimalsCard extends CharacterInfo {
  valid = true;
  dialog = false;
  sortBy = ["name"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();
  notification = false;
  messages: string[] = [];

  get headers() {
    const headers = [
      { text: this.$t("name"), value: "name" },
      { text: this.$t("type"), value: "type" },
      { text: this.$t("vp"), value: "health.vitality" },
      { text: this.$t("hp"), value: "health.hitPoints" },
      { text: this.$t("initiation"), value: "combatValues.initiation" },
      { text: this.$t("offence"), value: "combatValues.offence" },
      { text: this.$t("defence"), value: "combatValues.defence" },
      { text: this.$t("damage"), value: "damage" },
      { text: this.$t("max-distance"), value: "maxDistance" },
      { text: this.$t("max-load"), value: "maxLoad" },
      { text: this.$t("bad-habit"), value: "badHabit" },
      { text: this.$t("special-abilities"), value: "specialAbilities" },
    ];
    return this.editable
      ? [
          ...headers,
          { text: this.$t("actions"), value: "actions", sortable: false },
        ]
      : headers;
  }

  get assignments() {
    return (
      this.character.companions?.filter(
        c =>
          c.type && [CompanionType.MOUNT, CompanionType.ANIMAL].includes(c.type)
      ) || []
    );
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-animal")
      : this.$t("edit-animal");
  }

  defaultItem(): CharacterCompanion {
    return {
      characterId: this.character.id || "",
      name: "",
      type: CompanionType.MOUNT,
      health: {
        vitality: {},
        hitPoints: {},
      },
      combatValues: {
        initiation: undefined,
        offence: undefined,
        defence: undefined,
      },
      damage: {
        iterationCount: 1,
        dice: undefined,
        modifier: undefined,
      },
    };
  }

  damageToString(damage: ThrowScenario) {
    return damage ? getThrowScenarioString(damage, this.$i18n) : "";
  }

  typeToString(type: CompanionType) {
    return this.$t(type);
  }

  mutablePointValueToString(value: MutablePointValue) {
    return `${value.current}/${value.max}`;
  }

  close() {
    this.dialog = false;
  }
  save() {
    if ((this.$refs.form as Form).validate()) {
      this.$store
        .dispatch(
          this.isNewItem
            ? `character/createCharacterCompanion`
            : `character/updateCharacterCompanion`,
          { ...this.editedItem, characterId: this.character.id }
        )
        .then(() => {
          this.messages = [];
          this.notification = false;
        })
        .catch((error: GraphQLResult<CharacterCompanion>) => {
          this.messages = error.errors?.map(err => err.message) || [];
          this.notification = true;
        });
      this.dialog = false;
    }
  }

  deleteItemConfirm() {
    this.$store.dispatch(`character/deleteCharacterCompanion`, this.editedItem);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = this.defaultItem();
      this.editedIndex = -1;
    });
  }
  editItem(item: CharacterCompanion) {
    this.editedIndex = this.assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    if (!this.editedItem.combatValues) {
      this.editedItem.combatValues = {
        initiation: undefined,
        offence: undefined,
        defence: undefined,
      };
    }
    this.dialog = true;
  }
  deleteItem(item: CharacterCompanion) {
    this.editedIndex = this.assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
}
</script>
