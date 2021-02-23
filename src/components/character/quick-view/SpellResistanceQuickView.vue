<template>
  <v-card flat>
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">{{
        $t("spell-resistance")
      }}</v-toolbar-title>
    </v-app-bar>
    <v-card-text class="pt-0">
      <div class="mt-2 primary--text">{{ $t("astral-sr") }}</div>
      <v-row dense>
        <v-col cols="2">
          <quick-view-output-field
            :caption="$t('total-sr')"
            :value="astralSpellResistanceTotal || 0"
          />
        </v-col>
        <v-col cols="2">
          <quick-view-output-field
            :caption="$t('static')"
            :value="spellResistance.astral.staticShield"
          />
        </v-col>
        <v-col cols="3" xs="3" sm="2">
          <quick-view-output-field
            :caption="$t('dynamic')"
            :value="spellResistance.astral.dynamicShield"
          />
        </v-col>
        <v-col cols="3" xs="3" sm="2">
          <quick-view-output-field
            :caption="$t('innate')"
            :value="spellResistance.astral.innate"
          />
        </v-col>
        <v-col cols="2">
          <quick-view-output-field
            :caption="$t('magical')"
            :value="spellResistance.astral.magical"
          />
        </v-col>
      </v-row>
      <div class="mt-2 primary--text">{{ $t("mental") }}</div>
      <v-row dense>
        <v-col cols="2">
          <quick-view-output-field
            :caption="$t('total-sr')"
            :value="astralSpellResistanceTotal || 0"
          />
        </v-col>
        <v-col cols="2">
          <quick-view-output-field
            :caption="$t('static')"
            :value="spellResistance.mental.staticShield"
          />
        </v-col>
        <v-col cols="3" xs="3" sm="2">
          <quick-view-output-field
            :caption="$t('dynamic')"
            :value="spellResistance.mental.dynamicShield"
          />
        </v-col>
        <v-col cols="3" xs="3" sm="2">
          <quick-view-output-field
            :caption="$t('innate')"
            :value="spellResistance.mental.innate"
          />
        </v-col>
        <v-col cols="2">
          <quick-view-output-field
            :caption="$t('magical')"
            :value="spellResistance.mental.magical"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterSpellResistanceQuickViewBase from "../CharacterSpellResistanceQuickViewBase";
import QuickViewOutputField from "./QuickViewOutputField.vue";
@Component({
  components: { QuickViewOutputField },
  name: "spell-resistance-quick-view",
})
export default class SpellResistanceQuickView extends CharacterSpellResistanceQuickViewBase {}
</script>
