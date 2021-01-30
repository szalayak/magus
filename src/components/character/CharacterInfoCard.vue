<template>
  <v-hover v-slot="{ hover }">
    <v-card class="pa-0" flat tile>
      <v-toolbar class="character-info-card-toolbar" flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-btn
          icon
          @click="$emit('update:edit', true)"
          v-if="editable && hover && !edit"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <slot name="toolbar" :edit="edit" />
        <!-- <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn> -->
      </v-toolbar>
      <v-card-text class="pa-0" v-show="show">
        <v-alert
          :value="error"
          dense
          outlined
          type="error"
          dismissible
          @input="$emit('update:error', false)"
        >
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

<style>
.character-info-card-toolbar .v-toolbar__content {
  padding: 0px !important;
}
</style>

<script lang="ts">
import { Form } from "@/utils";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";

@Component({
  name: "character-info-card",
})
export default class CharacterInfoCard extends Vue {
  @Prop({ type: String })
  title!: string;

  @Prop({ type: Boolean })
  editable!: boolean;

  @Prop({ type: Boolean })
  error: boolean | undefined;

  @Prop({ type: Array })
  messages: string[] | undefined;

  @Prop({ type: Boolean })
  edit: boolean | undefined;

  valid = true;
  show = true;

  async save() {
    if ((this.$refs.data as Form).validate()) {
      this.$emit("save");
      // try {
      //   await this.$store.dispatch("character/save", this.character.id);
      //   this.edit = false;
      // } catch (error) {
      //   this.messages =
      //     typeof error === "string"
      //       ? [error]
      //       : error.errors?.map((err: LooseObject) => err.message) || [];
      //   this.error = true;
      // }
    }
  }

  cancel() {
    this.$emit("cancel");
    // this.$store.dispatch("character/revert", this.id);
    this.$emit("update:edit", false);
  }
}
</script>
