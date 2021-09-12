<template>
  <v-edit-dialog
    :return-value.sync="currentValue"
    @save="save"
    @open="open"
    large
    :save-text="$t('save')"
    :cancel-text="$t('cancel')"
    ><slot
      ><strong>{{ value }}</strong></slot
    >
    <template v-slot:input>
      <div class="mt-4 title">
        {{ title }}
      </div>
      <v-text-field
        v-model.number="currentValue"
        :label="$t('edit')"
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

  open(): void {
    this.currentValue = this.value || 0;
  }
  save(): void {
    this.$emit("save", this.currentValue);
  }
}
</script>
