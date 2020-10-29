import { Character } from "@/store/modules/character";
import { Class } from "@/store/modules/class";
import { Race } from "@/store/modules/race";
import { localiseItem } from "@/utils/localise";
import Vue from "vue";

export default class PlayerCharacters extends Vue {
  messages: string[] = [];
  notification = false;

  raceToString(race: Race): string {
    return localiseItem(race, this.$i18n.locale)?.description?.title || "";
  }

  classToString(cl: Class): string {
    return localiseItem(cl, this.$i18n.locale)?.description?.title || "";
  }

  characterToString(character: Character) {
    const raceString = character.race
      ? `${this.raceToString(character.race)} `
      : "";
    const classString = character.class
      ? `${this.classToString(character.class)} `
      : "";
    return `${this.$t("level")} ${
      character.level?.currentLevel
    } ${raceString}${classString}`;
  }
}
