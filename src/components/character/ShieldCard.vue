<template>
  <character-info-card :id="id" :editable="editable" :title="$t('shield')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-select
            v-model="shield"
            :items="shields"
            item-text="description.title"
            item-value="id"
            :label="$t('shield')"
            return-object
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            :label="$t('defence')"
            :value="combatValues.defence"
            disabled
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            :label="$t('mpv')"
            :value="shield.movementPreventionValue"
            disabled
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            :label="$t('damage')"
            :value="damage(shield.damage)"
            disabled
          />
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="character.shieldMastery"
            :items="masteryLevels"
            :label="$t('mastery')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field :label="$t('weight')" :value="shield.weight" disabled />
        </v-col>
        <v-col cols="12">
          <v-text-field :label="$t('price')" :value="price(shield)" disabled />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { localise } from "@/utils/localise";
import { getPriceString } from "@/utils/price";
import { Shield } from "@/store/modules/shield";
import { ThrowScenario } from "@/store/types";
import { getThrowScenarioString } from "@/utils/throwScenario";

@Component({
  name: "shield-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class ShieldCard extends CharacterInfo {
  damage(damage?: ThrowScenario) {
    return getThrowScenarioString(damage || {}, this.$i18n);
  }

  price(shield: Shield) {
    return getPriceString(shield.price || 0, this.$i18n);
  }

  get shields(): Shield[] {
    return localise(
      this.$store.getters["shield/list"],
      this.$i18n.locale
    ) as Shield[];
  }
  get shield(): Shield {
    if (!this.character.shield) this.character.shield = {};
    return this.character.shield || {};
  }

  set shield(shield: Shield) {
    Object.assign(this.character.shield, shield);
  }

  get combatValues() {
    return this.shield.combatValues || {};
  }
}
</script>
