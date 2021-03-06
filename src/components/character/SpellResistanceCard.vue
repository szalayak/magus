<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('spell-resistance')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-subheader class="pl-0">{{
        `${$t("astral-sr")}: ${astralTotal}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="3">
          <v-text-field
            v-model.number="spellResistance.astral.staticShield"
            :label="$t('static')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model.number="spellResistance.astral.dynamicShield"
            :label="$t('dynamic')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model.number="spellResistance.astral.innate"
            :label="$t('innate')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model.number="spellResistance.astral.magical"
            :label="$t('magical')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{
        `${$t("mental")}: ${mentalTotal}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="3">
          <v-text-field
            v-model.number="spellResistance.mental.staticShield"
            :label="$t('static')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model.number="spellResistance.mental.dynamicShield"
            :label="$t('dynamic')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model.number="spellResistance.mental.innate"
            :label="$t('innate')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model.number="spellResistance.mental.magical"
            :label="$t('magical')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { calculateSpellResistanceTotal, copySpellResistance } from "@/utils";

@Component({
  name: "spell-resistance-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class SpellResistanceCard extends CharacterInfo {
  spellResistance = copySpellResistance(
    this.character.spellResistance,
    this.character.abilities?.astral,
    this.character.abilities?.willpower
  );

  get astralTotal() {
    return calculateSpellResistanceTotal(this.spellResistance.astral);
  }

  get mentalTotal() {
    return calculateSpellResistanceTotal(this.spellResistance.mental);
  }
  save() {
    this.update({
      id: this.character.id,
      spellResistance: copySpellResistance(this.spellResistance),
    });
  }

  cancel() {
    this.spellResistance = copySpellResistance(
      this.character.spellResistance,
      this.character.abilities?.astral,
      this.character.abilities?.willpower
    );
  }
}
</script>
