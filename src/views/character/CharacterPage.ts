import Vue from "vue";
import { Character } from "@/store/modules/character";
import { LooseObject } from "@/store/types";
import Component from "vue-class-component";
import { Race, Class } from "@/store";
import { localiseItem } from "@/utils";

@Component
export default class CharacterPage extends Vue {
  id = this.$route.params.id;
  messages: string[] = [];
  notification = false;
  loading = false;

  pullToRefreshConfig = {
    loadingLabel: this.$t("loading-indicator"),
    startLabel: this.$t("loading-indicator"),
    readyLabel: this.$t("pull-to-refresh"),
    errorLabel: this.$t("error"),
  };

  get page() {
    return this.$route.params.page ? parseInt(this.$route.params.page) : 0;
  }

  set page(page) {
    if (page !== undefined) {
      this.$router.push({
        name: this.$route.name || undefined,
        params: { ...this.$route.params, page: page.toString() },
      });
    }
  }

  get editable(): boolean {
    return (
      this.character?.owner === this.$store.getters["currentUser"] ||
      this.$store.getters["isCurrentUserAdmin"]
    );
  }

  get character(): Character | undefined {
    return this.$store.getters["character/list"].find(
      (char: Character) => char.id === this.id
    );
  }

  raceToString(race: Race): string {
    return localiseItem(race, this.$i18n.locale)?.description?.title || "";
  }

  classToString(cl: Class): string {
    return localiseItem(cl, this.$i18n.locale)?.description?.title || "";
  }

  characterToString() {
    const raceString = this.character?.race
      ? `${this.raceToString(this.character?.race)} `
      : "";
    const classString = this.character?.class
      ? `${this.classToString(this.character?.class)}`
      : "";
    return `${raceString}${classString}, ${this.$t("ex-lev")}: ${
      this.character?.level?.currentLevel
    }`;
  }

  async refresh() {
    this.loading = true;
    try {
      // load character
      await this.$store.dispatch("character/loadItem", this.id);

      // set title
      this.$store.commit("setAppTitle", this.character?.name || "");
    } catch (error) {
      this.messages =
        typeof error === "string"
          ? [error]
          : error.errors?.map((err: LooseObject) => err.message) || [];
      this.notification = true;
    }
    this.loading = false;
  }

  async created() {
    this.loading = true;
    try {
      // load character
      if (!this.character)
        await this.$store.dispatch("character/loadItem", this.id);

      // set title
      this.$store.commit("setAppTitle", this.character?.name || "");

      // load all other necessary data
      await Promise.all([
        this.$store.dispatch("race/load"),
        this.$store.dispatch("class/load"),
        this.$store.dispatch("valueRange/load"),
        this.$store.dispatch("psiSchool/load"),
        this.$store.dispatch("shield/load"),
        this.$store.dispatch("armour/load"),
        this.$store.dispatch("weapon/load"),
        this.$store.dispatch("skill/load"),
        this.$store.dispatch("magicalItem/load"),
      ]);
    } catch (error) {
      this.messages =
        typeof error === "string"
          ? [error]
          : error.errors?.map((err: LooseObject) => err.message) || [];
      this.notification = true;
    }
    if (this.character?.playerCharacter)
      this.$store.dispatch("character/subscribeToUpdate", this.character);

    this.loading = false;
  }
}
