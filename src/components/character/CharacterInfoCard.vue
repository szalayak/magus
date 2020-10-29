<template>
  <v-hover v-slot="{ hover }">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-alert v-if="error" dense outlined type="error">
          {{ messages }}
        </v-alert>
        <slot name="fields" :edit="edit" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          v-if="editable && hover && !edit"
          text
          @click="edit = true"
          >{{ $t("edit") }}</v-btn
        >
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
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

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

  save() {
    this.$store.dispatch("character/update", this.character);
    this.edit = false;
  }

  cancel() {
    this.$store.commit("character/revert", this.id);
    this.edit = false;
  }
}
</script>
