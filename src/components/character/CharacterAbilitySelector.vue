<template>
  <v-menu v-model="menu" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="primary" text v-bind="attrs" v-on="on">
        <v-icon>mdi-dice-5</v-icon>
      </v-btn>
    </template>
    <v-list>
      <template v-if="!modifierDialog">
        <v-list-item v-for="ability in abilities" :key="ability">
          <v-list-item-title>{{ $t(ability) }}</v-list-item-title>
        </v-list-item>
      </template>
      <template v-if="modifierDialog">
        <v-edit-dialog
          :key="ability"
          v-for="ability in abilities"
          @save="save(ability)"
          @open="open"
          :save-text="$t('throw-dice')"
          :cancel-text="$t('cancel')"
          large
        >
          <v-list-item>
            <v-list-item-title>{{ $t(ability) }}</v-list-item-title>
          </v-list-item>
          <template v-slot:input>
            <v-text-field
              v-model.number="modifier"
              :label="$t('modifier')"
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-list>
  </v-menu>
</template>
<script lang="ts">
import { Ability } from "@/store";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({ name: "character-ability-selector" })
export default class CharacterAbilitySelector extends Vue {
  @Prop({ type: Boolean })
  modifierDialog: boolean | undefined;

  modifier: number | null = null;

  menu = false;

  get abilities() {
    return Object.values(Ability);
  }

  open() {
    this.modifier = null;
  }

  save(ability: string) {
    this.menu = false;
    this.$emit("select", { modifier: this.modifier, ability });
  }
}
</script>
