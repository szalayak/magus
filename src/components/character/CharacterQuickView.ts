import { Character, LooseObject } from "@/store";
import { characterToLink } from "@/utils";
import { Prop } from "vue-property-decorator";
import Vue from "vue";

export default class CharacterQuickView extends Vue {
  @Prop({ type: Object })
  character!: Character;

  @Prop({ type: Object })
  bus: Vue | undefined;

  characterToLink(character: Character, page: number, selector: string) {
    return characterToLink(character, page, selector);
  }

  throwError(error: LooseObject) {
    this.$emit("error", {
      messages:
        typeof error === "string"
          ? [error]
          : (error.errors as LooseObject[])?.map(
              (err: LooseObject) => err.message
            ) || [],
    });
  }
}
