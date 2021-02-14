<template>
  <v-card :loading="loading" flat>
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">
        {{ $t("psi") }}/{{ $t("mana-points") }}
      </v-toolbar-title>
    </v-app-bar>
    <v-card-text>
      <v-alert
        :value="error"
        dense
        outlined
        type="error"
        dismissible
        @input="dismissError"
      >
        {{ messages }}
      </v-alert>
      <v-row dense>
        <v-col v-if="character.psiUser" cols="6">
          <quick-update-property-field
            v-if="isCurrentUser"
            :value="psiPoints.current || 0"
            :title="$t('current-psi-points')"
            @save="onCurrentPsiPointsChanged"
          >
            <quick-view-output-field
              :caption="$t('current-psi-points')"
              :value="`${psiPoints.current || 0}/${psiPoints.max || 0}`"
            />
          </quick-update-property-field>
          <quick-view-output-field
            v-else
            :caption="$t('current-psi-points')"
            :value="`${psiPoints.current || 0}/${psiPoints.max || 0}`"
          />
        </v-col>
        <v-col v-if="character.magicUser" cols="6">
          <quick-update-property-field
            v-if="isCurrentUser"
            :value="manaPoints.current || 0"
            :title="$t('current-mp')"
            @save="onCurrentManaPointsChanged"
          >
            <quick-view-output-field
              :caption="$t('current-mp')"
              :value="`${manaPoints.current || 0}/${manaPoints.max || 0}`"
            />
          </quick-update-property-field>
          <quick-view-output-field
            v-else
            :caption="$t('current-mp')"
            :value="`${manaPoints.current || 0}/${manaPoints.max || 0}`"
          />
        </v-col>
        <v-col cols="12">
          {{ magicalAbility.notes }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterPsiManaPointsQuickViewBase from "../CharacterPsiManaPointsQuickViewBase";
import QuickViewOutputField from "./QuickViewOutputField.vue";
import QuickUpdatePropertyField from "../QuickUpdatePropertyField.vue";
@Component({
  components: { QuickViewOutputField, QuickUpdatePropertyField },
  name: "psi-mana-points-quick-view",
})
export default class PsiManaPointsQuickView extends CharacterPsiManaPointsQuickViewBase {}
</script>
