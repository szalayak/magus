<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('core-information')"
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
            v-model="coreInformation.name"
            :label="$t('name')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" sm="3" lg="1">
          <v-select
            v-model="coreInformation.race"
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
        <v-col cols="6" sm="3" lg="2">
          <v-select
            v-model="coreInformation.class"
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
        <v-col cols="12" sm="3" lg="2">
          <v-text-field
            v-model="coreInformation.subclass"
            :label="$t('subclass')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="3" lg="2">
          <v-text-field
            v-model="coreInformation.specialisation"
            :label="$t('specialisation')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="4" lg="3">
          <v-select
            v-model="coreInformation.personality"
            :label="$t('personality')"
            :items="personalities"
            item-value="id"
            item-text="description.title"
            :disabled="!edit"
            required
            return-object
          />
        </v-col>
        <v-col cols="12" sm="4" lg="2">
          <v-text-field
            v-model="country"
            :label="$t('country')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="4" lg="2">
          <v-text-field
            v-model="religion"
            :label="$t('religion')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" sm="2">
          <v-text-field
            v-model.number="coreInformation.level.currentLevel"
            :label="$t('current-level')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="6" sm="2">
          <v-text-field
            v-model.number="coreInformation.level.currentExperience"
            :label="$t('current-experience')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            v-model.number="coreInformation.level.experienceForNextLevel"
            :label="$t('experience-for-next-level')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="6" sm="3" lg="2">
          <v-checkbox
            v-model="coreInformation.magicUser"
            :label="$t('magic-user')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" sm="3" lg="2">
          <v-checkbox
            v-model="coreInformation.psiUser"
            :label="$t('psi-user')"
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
import { localise } from "@/utils/localise";
import { Race } from "@/store/modules/race";
import { Class } from "@/store/modules/class";
import { ValueRange } from "@/store/modules/valueRange";
import { Character } from "@/store";

const copyCoreInformation = (character: Character) => ({
  name: character.name,
  race: character.race,
  class: character.class,
  subclass: character.subclass,
  specialisation: character.specialisation,
  personality: character.personality,
  level: {
    currentLevel: character.level?.currentLevel,
    currentExperience: character.level?.currentExperience,
    experienceForNextLevel: character.level?.experienceForNextLevel,
  },
  magicUser: character.magicUser,
  psiUser: character.psiUser,
});

@Component({
  name: "core-information-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class CoreInformationCard extends CharacterInfo {
  coreInformation = copyCoreInformation(this.character);
  country = this.character.basicInfo?.country;
  religion = this.character.basicInfo?.religion;

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

  save(): void {
    const basicInfo = {
      ...this.character.basicInfo,
      country: this.country,
      religion: this.religion,
    };
    this.update({ id: this.character.id, basicInfo, ...this.coreInformation });
  }

  cancel(): void {
    this.coreInformation = copyCoreInformation(this.character);
    this.country = this.character.basicInfo?.country;
    this.religion = this.character.basicInfo?.religion;
  }
}
</script>
