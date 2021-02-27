<template>
  <v-card flat>
    <v-card-title>{{ $t("core-information") }}</v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col>
          <quick-view-output-field
            :caption="$t('current-experience')"
            :value="currentExperience"
          />
        </v-col>
        <v-col>
          <quick-view-output-field
            :caption="$t('experience-for-next-level')"
            :value="experienceForNextLevel"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterQuickView from "../CharacterQuickView";
import QuickViewOutputField from "./QuickViewOutputField.vue";
@Component({
  components: { QuickViewOutputField },
  name: "header-quick-view",
})
export default class HeaderQuickView extends CharacterQuickView {
  get currentExperience() {
    return this.character?.level?.currentExperience;
  }
  get experienceForNextLevel() {
    return this.character?.level?.experienceForNextLevel;
  }
}
</script>
