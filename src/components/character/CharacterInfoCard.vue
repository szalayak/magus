<template>
  <v-hover v-slot="{ hover }">
    <v-card class="pa-0" flat tile>
      <v-app-bar flat class="character-info-card-toolbar" color="transparent">
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
      </v-app-bar>
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

  async save(): Promise<void> {
    if ((this.$refs.data as Form).validate()) {
      this.$emit("save");
    }
  }

  cancel(): void {
    this.$emit("cancel");
    this.$emit("update:edit", false);
  }
}
</script>
