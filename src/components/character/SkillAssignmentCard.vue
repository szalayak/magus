<template>
  <character-info-card :id="id" :editable="false" :title="$t('skills')">
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
            <v-form :disabled="!editable" ref="form" v-model="valid">
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.skill"
                      :items="skills"
                      item-text="description.title"
                      item-value="id"
                      :label="$t('skill')"
                      return-object
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.mastery"
                      v-if="
                        editedItem.skill && !editedItem.skill.percentageSkill
                      "
                      :items="masteryLevels"
                      :label="$t('mastery')"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model.number="editedItem.percentageValue"
                      v-if="
                        editedItem.skill && editedItem.skill.percentageSkill
                      "
                      :label="$t('percentage')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model.number="editedItem.skillPointsUsed"
                      :label="$t('skill-points-used')"
                    ></v-text-field>
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
            <v-btn
              v-if="editable"
              color="primary"
              text
              @click="deleteItemConfirm"
              >{{ $t("ok") }}</v-btn
            >
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
          <v-alert
            v-model="notification"
            dense
            outlined
            type="error"
            dismissible
          >
            {{ messages }}
          </v-alert>
        </template>
        <template v-slot:[`item.mastery`]="{ item }">
          {{ masteryToString(item) }}
        </template>
        <template v-slot:[`item.skill`]="{ item }">
          <a @click="editItem(item)">{{ skillToString(item.skill) }}</a>
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
import { ThrowScenario } from "@/store/types";
import { getThrowScenarioString } from "@/utils/throwScenario";
import { localise, localiseItem } from "@/utils/localise";
import { SkillAssignment } from "@/store/modules/character";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Skill } from "@/store/modules/skill";

@Component({
  name: "skill-assignment-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class SkillAssignmentCard extends CharacterInfo {
  valid = true;
  dialog = false;
  sortBy = ["skill.description.title"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();
  notification = false;
  messages: string[] = [];

  get headers() {
    const headers = [
      { text: this.$t("skill"), value: "skill" },
      {
        text: `${this.$t("mastery")}/${this.$t("percentage")}`,
        value: "mastery",
      },
      { text: this.$t("skill-points-used"), value: "skillPointsUsed" },
      { text: this.$t("notes"), value: "notes" },
    ];
    return this.editable
      ? [
          ...headers,
          { text: this.$t("actions"), value: "actions", sortable: false },
        ]
      : headers;
  }

  get skills() {
    return localise(this.$store.getters["skill/list"] || [], this.$i18n.locale);
  }

  get assignments() {
    return this.character.skills || [];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-skill")
      : this.$t("edit-skill");
  }

  skillToString(skill: Skill) {
    return localiseItem(skill, this.$i18n.locale).description?.title;
  }

  defaultItem(): SkillAssignment {
    return {
      characterId: this.character.id || "",
    };
  }

  damageToString(damage: ThrowScenario) {
    return damage ? getThrowScenarioString(damage, this.$i18n) : "";
  }

  masteryToString(assignment: SkillAssignment) {
    return assignment.skill?.percentageSkill
      ? `${assignment.percentageValue || 0}%`
      : this.$t(assignment.mastery || "");
  }

  close() {
    this.dialog = false;
    this.resetEditedItem();
  }
  save() {
    this.$store
      .dispatch(
        this.isNewItem
          ? `character/createSkillAssignment`
          : `character/updateSkillAssignment`,
        { ...this.editedItem, characterId: this.character.id }
      )
      .then(() => {
        this.messages = [];
        this.notification = false;
      })
      .catch((error: GraphQLResult<SkillAssignment>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
    this.dialog = false;
    this.resetEditedItem();
  }

  deleteItemConfirm() {
    this.$store.dispatch(`character/deleteSkillAssignment`, this.editedItem);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.resetEditedItem();
  }
  editItem(item: SkillAssignment) {
    this.editedIndex = this.assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: SkillAssignment) {
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
