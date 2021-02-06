<template>
  <character-info-card
    :id="id"
    :editable="false"
    :title="$t('skills')"
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
        :search="search"
        :items-per-page="skills.length"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            append-icon-inner="mdi-magnify"
            :label="$t('search')"
            class="mx-4"
            single-line
            hide-details
          ></v-text-field>
        </template>
        <template v-slot:[`item.mastery`]="{ item }">
          {{ masteryToString(item) }}
        </template>
        <template v-slot:[`item.skill.description.title`]="{ item }">
          <a @click="editItem(item, assignments)">{{
            item.skill.description.title
          }}</a>
        </template>
      </v-data-table>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { SkillAssignment } from "@/store/modules/character";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";
import CharacterInfoList from "./CharacterInfoList";

@Component({
  name: "skill-assignment-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "confirm-delete-dialog": ConfirmDeleteDialog,
  },
})
export default class SkillAssignmentCard extends CharacterInfoList {
  sortBy = ["skill.description.title"];
  search = "";

  get headers() {
    return [
      { text: this.$t("skill"), value: "skill.description.title" },
      {
        text: `${this.$t("mastery")}/${this.$t("percentage")}`,
        value: "mastery",
      },
      { text: this.$t("skill-points-used"), value: "skillPointsUsed" },
      { text: this.$t("notes"), value: "notes" },
    ];
  }

  get skills() {
    return this.$store.getters["skill/list"];
  }

  get assignments(): SkillAssignment[] {
    return this.character.skills || [];
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-skill")
      : this.$t("edit-skill");
  }

  defaultItem(): SkillAssignment {
    return {
      characterId: this.character.id || "",
    };
  }

  masteryToString(assignment: SkillAssignment) {
    return assignment.skill?.percentageSkill
      ? `${assignment.percentageValue || 0}%`
      : this.$t(assignment.mastery || "");
  }

  async createFunction(item: SkillAssignment) {
    return this.$store.dispatch("character/createSkillAssignment", item);
  }

  async updateFunction(item: SkillAssignment) {
    return this.$store.dispatch("character/updateSkillAssignment", item);
  }

  async deleteFunction(item: SkillAssignment) {
    return this.$store.dispatch("character/deleteSkillAssignment", item);
  }
}
</script>
