<template>
  <v-edit-dialog
    v-if="dialog"
    @save="save"
    @open="open"
    :save-text="$t('throw-dice')"
    :cancel-text="$t('cancel')"
    large
  >
    <slot>
      <template v-if="!!label"
        ><strong>{{ label }}: </strong></template
      >
      <strong v-if="bold">{{ text || value }}</strong>
      <template v-if="!bold">{{ text || value }}</template>
    </slot>
    <template v-slot:input>
      <div class="mt-4 title">{{ title }}: {{ throwScenarioToString }}</div>
      <v-text-field
        v-model.number="modifier"
        :label="$t('modifier')"
        counter
      ></v-text-field>
    </template>
  </v-edit-dialog>
  <div class="pointer" v-else @click="performThrow">
    <slot>
      <template v-if="!!label"
        ><strong>{{ label }}: </strong></template
      >
      <strong v-if="bold">{{ text || value }}</strong>
      <template v-if="!bold">{{ text || value }}</template>
    </slot>
  </div>
</template>

<style>
.pointer {
  cursor: pointer;
}
</style>

<script lang="ts">
import { Dice } from "@/API";
import { ThrowScenario } from "@/store";
import {
  executeThrowScenario,
  getThrowScenarioString,
  parseThrowScenarioString,
} from "@/utils";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({ name: "throw-scenario-trigger-field" })
export default class ThrowScenarioTriggerField extends Vue {
  @Prop()
  throwScenarioString!: string | Dice;

  @Prop()
  title: string | undefined;

  @Prop()
  value: string | number | null | undefined;

  @Prop()
  text: string | number | null | undefined;

  @Prop({ type: Boolean })
  bold: boolean | undefined;

  @Prop()
  label: string | undefined;

  @Prop({ type: Boolean })
  dialog: boolean | undefined;

  throwScenario: ThrowScenario = {};
  modifier: number | null = null;

  get throwScenarioToString() {
    return getThrowScenarioString(this.throwScenario, this.$i18n);
  }

  open() {
    this.throwScenario = parseThrowScenarioString(this.throwScenarioString);
    this.modifier = null;
  }
  save() {
    this.$emit("save", {
      ...executeThrowScenario(this.throwScenario),
      modifier: this.modifier,
    });
  }
  performThrow() {
    this.throwScenario = parseThrowScenarioString(this.throwScenarioString);
    this.$emit("save", executeThrowScenario(this.throwScenario));
  }
}
</script>
