<template>
  <v-dialog v-model="dialog" persistent max-width="50%">
    <template v-slot:activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" />
    </template>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <throw-scenario-editor v-bind.sync="editedScenario" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="dialog = false">
          {{ $t("cancel") }}
        </v-btn>
        <v-btn color="primary" text @click="save">
          {{ $t("save") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Dice } from "@/API";
import { ThrowScenario } from "@/store/types";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ThrowScenarioEditor from "./admin/ThrowScenarioEditor.vue";
@Component({
  name: "throw-scenario-dialog",
  components: {
    "throw-scenario-editor": ThrowScenarioEditor,
  },
})
export default class ThrowScenarioDialog extends Vue {
  @Prop({ type: String })
  dice!: Dice;

  @Prop({ type: Number })
  iterationCount!: number;

  @Prop({ type: Number })
  modifier!: number;

  @Prop({ type: String })
  title!: string;

  editedScenario: ThrowScenario = {
    dice: this.dice,
    iterationCount: this.iterationCount,
    modifier: this.modifier,
  };

  dialog = false;

  save(): void {
    this.$emit("update:dice", this.editedScenario.dice);
    this.$emit("update:iterationCount", this.editedScenario.iterationCount);
    this.$emit("update:modifier", this.editedScenario.modifier);
    this.dialog = false;
  }
}
</script>
