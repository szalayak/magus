<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('mana-points')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="magicalAbility.manaPointsPerLevel"
            :label="$t('mana-points-per-level')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            class="font-weight-bold"
            v-model.number="magicalAbility.manaPoints.current"
            type="number"
            :label="$t('current')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="magicalAbility.manaPoints.max"
            :label="$t('max')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="magicalAbility.modifiers"
            :label="$t('modifiers')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="magicalAbility.rechargingMethod"
            :label="$t('recharging-method')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="magicalAbility.manaPointsStoredElsehwere"
            :label="$t('mana-points-stored-elsewhere')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="magicalAbility.notes"
            :label="$t('notes')"
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
import { MagicalAbility } from "@/store/types";

const copyMagicalAbility = (
  magicalAbility?: MagicalAbility
): MagicalAbility => ({
  manaPoints: {
    current: magicalAbility?.manaPoints?.current,
    max: magicalAbility?.manaPoints?.max,
  },
  manaPointsPerLevel: magicalAbility?.manaPointsPerLevel,
  modifiers: magicalAbility?.modifiers,
  manaPointsStoredElsehwere: magicalAbility?.manaPointsStoredElsehwere,
  rechargingMethod: magicalAbility?.rechargingMethod,
  notes: magicalAbility?.notes,
});

@Component({
  name: "magical-ability-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class MagicalAbilityCard extends CharacterInfo {
  magicalAbility = copyMagicalAbility(this.character.magicalAbility);

  save() {
    this.update({ id: this.character.id, magicalAbility: this.magicalAbility });
  }

  cancel() {
    this.magicalAbility = copyMagicalAbility(this.character.magicalAbility);
  }
}
</script>
