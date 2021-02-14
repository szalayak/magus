<template>
  <v-card outlined>
    <v-card-title
      ><slot name="title"
        ><router-link :to="characterToLink(character, 2, 'psi')">
          {{ $t("psi") }}/{{ $t("mana-points") }}</router-link
        ></slot
      >
    </v-card-title>
    <v-card-subtitle><slot name="subtitle"></slot></v-card-subtitle>
    <v-card-text>
      <v-row dense>
        <v-col cols="4"> </v-col>
        <v-col cols="4">
          <strong>{{ $t("current") }}</strong>
        </v-col>
        <v-col cols="4">
          <strong>{{ $t("max") }}</strong>
        </v-col>
        <template v-if="character.psiUser">
          <v-col cols="4"
            ><strong>{{ $t("psi-points") }}</strong></v-col
          >
          <v-col cols="4">
            <quick-update-property-field
              v-if="isCurrentUser"
              :value="psiPoints.current || 0"
              :title="$t('current-psi-points')"
              @save="onCurrentPsiPointsChanged"
            />
            <template v-else
              ><strong>{{ psiPoints.current || 0 }}</strong></template
            ></v-col
          >
          <v-col cols="4">{{ psiPoints.max }}</v-col>
        </template>
        <template v-if="character.magicUser">
          <v-col cols="4"
            ><strong>{{ $t("mp") }}</strong></v-col
          >
          <v-col cols="4">
            <quick-update-property-field
              v-if="isCurrentUser"
              :value="manaPoints.current || 0"
              :title="$t('current-mp')"
              @save="onCurrentManaPointsChanged"
            /><template v-else
              ><strong>{{ manaPoints.current || 0 }}</strong></template
            ></v-col
          >
          <v-col cols="4">{{ manaPoints.max }}</v-col>
          <v-col cols="12">
            <v-subheader class="pl-0"
              ><strong>{{ $t("notes") }}</strong></v-subheader
            >
          </v-col>
          <v-col cols="12">
            {{ magicalAbility.notes }}
          </v-col>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Component from "vue-class-component";
import CharacterPsiManaPointsQuickViewBase from "../CharacterPsiManaPointsQuickViewBase";
import QuickUpdatePropertyField from "../QuickUpdatePropertyField.vue";
@Component({
  name: "character-psi-mana-points-quick-view",
  components: {
    "quick-update-property-field": QuickUpdatePropertyField,
  },
})
export default class CharacterPsiManaPointsQuickView extends CharacterPsiManaPointsQuickViewBase {}
</script>
