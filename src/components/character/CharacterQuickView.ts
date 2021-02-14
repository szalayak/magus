import { Character, LooseObject } from "@/store";
import { characterToLink } from "@/utils";
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class CharacterQuickView extends Vue {
  @Prop({ type: Object })
  character!: Character;

  @Prop({ type: Object })
  bus: Vue | undefined;

  loading = false;
  error = false;
  messages: string[] = [];

  get isCurrentUser() {
    return this.character.owner === this.$store.getters["currentUser"];
  }

  characterToLink(character: Character, selector: string) {
    return characterToLink(character, selector);
  }

  dismissError() {
    this.error = false;
    this.messages = [];
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
