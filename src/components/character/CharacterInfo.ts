import { Mastery } from "@/API";
import { Character } from "@/store/modules/character";
import { DropdownValueList, LooseObject } from "@/store/types";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

export default class CharacterInfo extends Vue {
  @Prop({ type: String, required: true })
  id!: string;

  @Prop({ type: Boolean })
  editable!: boolean;

  @Prop({ type: Object })
  character!: Character;

  @Prop({ type: String, default: "character" })
  module!: string;

  messages: string[] = [];
  error = false;
  edit = false;

  get masteryLevels(): DropdownValueList[] {
    return [
      {
        text: this.$t("none").toString(),
        value: null,
      },
      ...Object.keys(Mastery).map(m => ({
        value: m.toString(),
        text: this.$t(m).toString(),
      })),
    ];
  }

  // get character(): Character {
  //   return (
  //     this.$store.getters["character/list"].find(
  //       (char: Character) => char.id === this.id
  //     ) || {}
  //   );
  // }

  // set character(character: Character) {
  //   this.$store.commit("character/change", character);
  // }

  async update(item: LooseObject) {
    try {
      await this.$store.dispatch(`${this.module}/update`, item);
      this.edit = false;
    } catch (error) {
      this.throwError(error);
    }
  }

  throwError(error: LooseObject) {
    this.error = true;
    this.messages =
      typeof error === "string"
        ? [error]
        : (error.errors as LooseObject[])?.map(
            (err: LooseObject) => err.message as string
          ) || [];

    this.$emit("error", {
      messages: this.messages,
    });
  }
}
