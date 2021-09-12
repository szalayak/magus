<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('shield')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="6">
          <v-select
            v-model="shieldData.shield"
            :items="shields"
            item-text="description.title"
            item-value="id"
            :label="$t('shield')"
            return-object
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="shieldData.shieldMastery"
            :items="masteryLevels"
            :label="$t('mastery')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            :label="$t('defence')"
            :value="combatValues.defence"
            disabled
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            :label="$t('mpv')"
            :value="shield.movementPreventionValue"
            disabled
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            :label="$t('damage')"
            :value="damage(shield.damage)"
            disabled
          />
        </v-col>
        <v-col cols="6">
          <v-text-field :label="$t('weight')" :value="shield.weight" disabled />
        </v-col>
        <v-col cols="6">
          <v-text-field :label="$t('price')" :value="price(shield)" disabled />
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="shieldData.shieldInHand"
            :label="$t('in-hand')"
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
import { getPriceString } from "@/utils/price";
import { Shield } from "@/store/modules/shield";
import { CombatValues, ThrowScenario } from "@/store/types";
import { getThrowScenarioString } from "@/utils/throwScenario";
import { Character } from "@/store";

type ShieldData = Pick<Character, "shield" | "shieldMastery" | "shieldInHand">;

const copyShieldData = (shieldData: ShieldData): ShieldData => ({
  shield: {
    id: shieldData.shield?.id,
    description: shieldData.shield?.description,
    descriptions: shieldData.shield?.descriptions,
    combatValues: shieldData.shield?.combatValues,
    damage: shieldData.shield?.damage,
    movementPreventionValue: shieldData.shield?.movementPreventionValue,
    attacksPerTurn: shieldData.shield?.attacksPerTurn,
    price: shieldData.shield?.price,
    weight: shieldData.shield?.weight,
  },
  shieldMastery: shieldData.shieldMastery,
  shieldInHand: shieldData.shieldInHand,
});

@Component({
  name: "shield-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class ShieldCard extends CharacterInfo {
  shieldData = copyShieldData(this.character);

  damage(damage?: ThrowScenario): string {
    return getThrowScenarioString(damage);
  }

  price(shield: Shield): string {
    return getPriceString(shield.price);
  }

  get shields(): Shield[] {
    return [
      {
        id: null,
        description: {
          title: this.$t("none"),
        },
      },
      ...this.$store.getters["shield/list"],
    ] as Shield[];
  }

  get combatValues(): CombatValues {
    return this.shieldData.shield?.combatValues || {};
  }
  get shield(): Shield {
    return this.shieldData.shield || {};
  }

  save(): void {
    this.update({ id: this.character.id, ...this.shieldData });
  }

  cancel(): void {
    this.shieldData = copyShieldData(this.character);
  }
}
</script>
