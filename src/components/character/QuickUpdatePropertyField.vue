<template>
  <v-edit-dialog
    :return-value.sync="currentValue"
    @save="save"
    @open="open"
    large
    ><strong>{{ value }}</strong>
    <template v-slot:input>
      <div class="mt-4 title">
        {{ title }}
      </div>
      <v-text-field
        v-model.number="currentValue"
        label="Edit"
        single-line
        counter
      ></v-text-field>
    </template>
  </v-edit-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({ name: "quick-update-property-field" })
export default class QuickUpdatePropertyField extends Vue {
  @Prop()
  value!: string | number | null | undefined;

  @Prop()
  title: string | undefined;

  currentValue: string | number = 0;

  open() {
    this.currentValue = this.value || 0;
  }
  save() {
    this.$emit("save", this.currentValue);
  }
}
</script>
