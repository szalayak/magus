<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('core-information')"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" sm="12" md="1">
          <v-select
            v-model="character.race"
            :label="$t('race')"
            :items="races"
            item-value="id"
            item-text="description.title"
            :disabled="!edit"
            :rules="[v => !!v || $t('field-is-mandatory')]"
            required
            return-object
          />
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-select
            v-model="character.class"
            :label="$t('class')"
            :items="classes"
            item-value="id"
            item-text="description.title"
            :disabled="!edit"
            :rules="[v => !!v || $t('field-is-mandatory')]"
            required
            return-object
          />
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-text-field
            v-model="character.subclass"
            :label="$t('subclass')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-text-field
            v-model="character.specialisation"
            :label="$t('specialisation')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="1">
          <v-select
            v-model="character.personality"
            :label="$t('personality')"
            :items="personalities"
            item-value="id"
            item-text="description.title"
            :disabled="!edit"
            required
            return-object
          />
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-text-field
            v-model="basicInfo.country"
            :label="$t('country')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-text-field
            v-model="basicInfo.religion"
            :label="$t('religion')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" sm="12" md="2">
          <v-text-field
            v-model.number="level.currentLevel"
            :label="$t('current-level')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-text-field
            v-model.number="level.currentExperience"
            :label="$t('current-experience')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-text-field
            v-model.number="level.experienceForNextLevel"
            :label="$t('experience-for-next-level')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="6" sm="12" md="2">
          <v-checkbox
            v-model="character.magicUser"
            :label="$t('magic-user')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" sm="12" md="2">
          <v-checkbox
            v-model="character.psiUser"
            :label="$t('psi-user')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import { CharacterBasicInfo, CharacterLevel } from "@/store/types";
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { localise } from "@/utils/localise";
import { Race } from "@/store/modules/race";
import { Class } from "@/store/modules/class";
import { ValueRange } from "@/store/modules/valueRange";

@Component({
  name: "core-information-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class CoreInformationCard extends CharacterInfo {
  get races(): Race[] {
    return localise(
      this.$store.getters["race/getPlayableRaces"],
      this.$i18n.locale
    );
  }

  get classes(): Class[] {
    return localise(this.$store.getters["class/list"], this.$i18n.locale);
  }

  get personalities(): ValueRange[] {
    return localise(
      this.$store.getters["valueRange/getPersonalities"],
      this.$i18n.locale
    );
  }

  get basicInfo() {
    if (!this.character.basicInfo) this.character.basicInfo = {};
    return this.character.basicInfo || {};
  }

  set basicInfo(basicInfo: CharacterBasicInfo) {
    Object.assign(this.character.basicInfo, basicInfo);
  }

  get level() {
    if (!this.character.level) this.character.level = { currentLevel: 1 };
    return this.character.level || {};
  }

  set level(level: CharacterLevel) {
    Object.assign(this.character.level, level);
  }
}
</script>
