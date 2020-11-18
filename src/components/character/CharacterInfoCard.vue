<template>
  <v-hover v-slot="{ hover }">
    <v-card outlined>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="toolbar" :edit="edit" />
        <v-btn icon @click="edit = true" v-if="editable && hover && !edit">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text v-show="show">
        <v-alert v-model="error" dense outlined type="error" dismissible>
          {{ messages }}
        </v-alert>
        <v-form :valid="valid" ref="data">
          <slot name="fields" :edit="edit" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" v-if="edit" text @click="cancel">{{
          $t("cancel")
        }}</v-btn>
        <v-btn color="primary" v-if="edit" text @click="save">{{
          $t("save")
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>
<script lang="ts">
import CharacterInfo from "@/components/character/CharacterInfo";
import { LooseObject } from "@/store/types";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

type Form = Vue & { validate: () => boolean };

@Component({
  name: "character-info-card",
})
export default class CharacterInfoCard extends CharacterInfo {
  @Prop({ type: String })
  title!: string;

  @Prop({ type: Boolean })
  editable!: boolean;

  edit = false;
  messages: string[] = [];
  error = false;
  valid = true;
  show = true;

  async save() {
    if ((this.$refs.data as Form).validate()) {
      try {
        await this.$store.dispatch("character/update", this.character);
        this.edit = false;
      } catch (error) {
        this.messages =
          typeof error === "string"
            ? [error]
            : error.errors?.map((err: LooseObject) => err.message) || [];
        this.error = true;
      }
    }
  }

  cancel() {
    this.$store.commit("character/revert", this.id);
    this.edit = false;
  }
}
</script>
