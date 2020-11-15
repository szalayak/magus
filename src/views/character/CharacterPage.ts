import Vue from "vue";
import { Character } from "@/store/modules/character";
import { LooseObject } from "@/store/types";
import Component from "vue-class-component";
import { listUsers } from "@/utils/users";

@Component
export default class CharacterPage extends Vue {
  id = this.$route.params.id;
  messages: string[] = [];
  notification = false;

  get page() {
    return this.$route.params.page ? parseInt(this.$route.params.page) - 1 : 0;
  }

  set page(page) {
    if (page !== undefined) {
      this.$router.push({
        name: this.$route.name || undefined,
        params: { ...this.$route.params, page: (page + 1).toString() },
      });
    }
  }

  get editable(): boolean {
    return (
      this.character.owner === this.$store.getters["currentUser"] ||
      this.$store.getters["isCurrentUserAdmin"]
    );
  }

  get character(): Character {
    return (
      this.$store.getters["character/listTransient"].find(
        (char: Character) => char.id === this.id
      ) || {}
    );
  }

  async created() {
    try {
      // load character
      await this.$store.dispatch("character/loadItem", this.id);

      // set title
      document.title = this.character.name;

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
    this.$store.dispatch("character/subscribeToUpdate");

    try {
      const users = await listUsers();
      console.log(users);
    } catch (err) {
      console.error(err);
    }
  }
}
