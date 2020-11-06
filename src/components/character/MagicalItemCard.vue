<template>
  <character-info-card :id="id" :editable="false" :title="$t('magical-items')">
    <template v-slot:toolbar="{}">
      <v-dialog scrollable v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="editable" color="primary" text v-bind="attrs" v-on="on">
            {{ $t("new") }}
          </v-btn>
        </template>
        <v-card>
          <v-card-title>{{ formTitle }}</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.magicalItem"
                      :items="magicalItems"
                      item-text="description.title"
                      item-value="id"
                      :label="$t('magical-item')"
                      return-object
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.location"
                      :label="$t('location')"
                    ></v-text-field>
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
        disable-pagination
        hide-default-footer
      >
        <template v-slot:top>
          <v-alert v-if="notification" dense outlined type="error">
            {{ messages }}
          </v-alert>
        </template>
        <template v-slot:[`item.magicalItem`]="{ item }">
          {{ magicalItemToString(item.magicalItem) }}
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
import { localise, localiseItem } from "@/utils/localise";
import {
  MagicalItemAssignment,
  WeaponAssignment,
} from "@/store/modules/character";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { MagicalItem } from "@/store/modules/magicalItem";

@Component({
  name: "magical-item-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class MagicalItemAssignmentCard extends CharacterInfo {
  valid = true;
  dialog = false;
  sortBy = ["magicalItem.description.title"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();
  notification = false;
  messages: string[] = [];

  get headers() {
    const headers = [
      { text: this.$t("magical-item"), value: "magicalItem" },
      { text: this.$t("location"), value: "location" },
    ];
    return this.editable
      ? [
          ...headers,
          { text: this.$t("actions"), value: "actions", sortable: false },
        ]
      : headers;
  }

  get magicalItems() {
    return localise(
      this.$store.getters["magicalItem/list"] || [],
      this.$i18n.locale
    );
  }

  get assignments() {
    return this.character.magicalItems || [];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-magical-item")
      : this.$t("edit-magical-item");
  }

  magicalItemToString(magicalItem: MagicalItem) {
    return localiseItem(magicalItem, this.$i18n.locale).description?.title;
  }

  defaultItem(): MagicalItemAssignment {
    return {
      characterId: this.character.id || "",
    };
  }

  close() {
    this.dialog = false;
  }
  save() {
    this.$store
      .dispatch(
        this.isNewItem
          ? `character/createMagicalItemAssignment`
          : `character/updateMagicalItemAssignment`,
        this.editedItem
      )
      .then(() => {
        this.messages = [];
        this.notification = false;
      })
      .catch((error: GraphQLResult<WeaponAssignment>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
    this.dialog = false;
  }

  deleteItemConfirm() {
    this.$store.dispatch(
      `character/deleteMagicalItemAssignment`,
      this.editedItem
    );
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = this.defaultItem();
      this.editedIndex = -1;
    });
  }
  editItem(item: MagicalItemAssignment) {
    this.editedIndex = this.assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: MagicalItemAssignment) {
    this.editedIndex = this.assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
}
</script>
