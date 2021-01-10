<template>
  <character-info-card :id="id" :editable="false" :title="title">
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
                <slot name="editable-fields" :editedItem="editedItem"></slot>
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
        <template v-slot:[`item.${primaryColumn}`]="{ item }">
          <a @click="editItem(item)">{{ primaryColumnText(item) }}</a>
        </template>
        <template
          v-for="customColumn in customColumns"
          v-slot:[`item.${customColumn}`]="{ item }"
        >
          <slot :name="`item.${customColumn}`" :item="item" />
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
import { Assignment, LooseObject } from "@/store";
import { Component, Prop } from "vue-property-decorator";
import { DataTableHeader } from "vuetify";
import CharacterInfo from "./CharacterInfo";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { GraphQLResult } from "@aws-amplify/api-graphql";

@Component({
  name: "weapon-assignment-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class CharacterAssignmentCard extends CharacterInfo {
  @Prop({ type: Function })
  defaultItem!: Function;

  @Prop({ type: Array })
  headers!: DataTableHeader[];

  @Prop({ type: String })
  createAction!: string;

  @Prop({ type: String })
  updateAction!: string;

  @Prop({ type: String })
  deleteAction!: string;

  @Prop({ type: String })
  sortBy!: string[];

  @Prop({ type: String })
  newText!: string;

  @Prop({ type: String })
  editText!: string;

  @Prop({ type: String })
  title!: string;

  @Prop({ type: Array })
  customColumns!: string[];

  @Prop({ type: Array })
  assignments!: Assignment[];

  @Prop({ type: String })
  primaryColumn!: string;

  valid = true;
  dialog = false;
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();
  notification = false;
  messages: string[] = [];
  search = "";

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1 ? this.newText : this.editText;
  }

  primaryColumnText(item: LooseObject) {
    const levels = this.primaryColumn.split(".");
    let obj = item;
    while (levels.length > 0) {
      const prop = levels.shift();
      if (obj && prop) obj = obj[prop] as LooseObject;
    }
    return obj;
  }

  close() {
    this.dialog = false;
    this.resetEditedItem();
  }
  save() {
    this.$store
      .dispatch(
        this.isNewItem
          ? `character/${this.createAction}`
          : `character/${this.updateAction}`,
        {
          ...this.editedItem,
          characterId: this.character.id,
        }
      )
      .then(() => {
        this.messages = [];
        this.notification = false;
      })
      .catch((error: GraphQLResult<Assignment>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
    this.dialog = false;
    this.resetEditedItem();
  }

  deleteItemConfirm() {
    this.$store.dispatch(`character/${this.deleteAction}`, this.editedItem);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.resetEditedItem();
  }
  editItem(item: Assignment) {
    this.editedIndex = this.assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: Assignment) {
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
