<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('abilities')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.strength"
            :label="`${$t('strength')}, ${$t('damage-bonus')}: ${damageBonus}`"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.agility"
            :label="`${$t('agility')}, ${$t('in-armour')}: ${agilityInArmour}`"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.dexterity"
            :label="
              `${$t('dexterity')}, ${$t('in-armour')}: ${dexterityInArmour}`
            "
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.stamina"
            :label="$t('stamina')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.health"
            :label="$t('health')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.beauty"
            :label="$t('beauty')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.intelligence"
            :label="$t('intelligence')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.willpower"
            :label="$t('willpower')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.astral"
            :label="$t('astral')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" xs="6" sm="3">
          <v-text-field
            v-model.number="abilities.perception"
            :label="$t('perception')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import { Abilities } from "@/store/types";
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { movementPreventionValueTotal } from "@/utils/character";
import { Character } from "@/store";
import { Prop } from "vue-property-decorator";

const copyAbilities = (abilities?: Abilities) => ({
  strength: abilities?.strength,
  agility: abilities?.agility,
  dexterity: abilities?.dexterity,
  stamina: abilities?.stamina,
  health: abilities?.health,
  beauty: abilities?.beauty,
  intelligence: abilities?.intelligence,
  willpower: abilities?.willpower,
  astral: abilities?.astral,
  perception: abilities?.perception,
});

@Component({
  name: "abilities-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class AbilitiesCard extends CharacterInfo {
  @Prop({ type: Object })
  character!: Character;

  abilities: Abilities = copyAbilities(this.character.abilities);

  get damageBonus() {
    return this.abilities.strength && this.abilities.strength > 16
      ? this.abilities.strength - 16
      : 0;
  }

  get agilityInArmour() {
    return this.abilities.agility
      ? this.abilities.agility - movementPreventionValueTotal(this.character)
      : 0;
  }

  get dexterityInArmour() {
    return this.abilities.dexterity
      ? this.abilities.dexterity - movementPreventionValueTotal(this.character)
      : 0;
  }

  save() {
    this.update({ id: this.character.id, abilities: this.abilities });
  }

  cancel() {
    this.abilities = copyAbilities(this.character.abilities);
  }
}
</script>
