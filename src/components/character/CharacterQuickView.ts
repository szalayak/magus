import { Character } from "@/store";
import { characterToLink } from "@/utils";
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import { BackendError } from "@/types";

@Component({})
export default class CharacterQuickView extends Vue {
  @Prop({ type: Object })
  character!: Character;

  @Prop({ type: Object })
  bus: Vue | undefined;

  loading = false;
  error = false;
  messages: string[] = [];

  get isCurrentUser(): boolean {
    return this.character.owner === this.$store.getters["currentUser"];
  }

  characterToLink(character: Character, selector: string): string {
    return characterToLink(character, selector);
  }

  dismissError(): void {
    this.error = false;
    this.messages = [];
  }

  throwError(error: BackendError | unknown): void {
    this.error = true;
    this.messages =
      typeof error === "string"
        ? [error]
        : (error as BackendError).errors?.map(err => err.message) || [];

    this.$emit("error", {
      messages: this.messages,
    });
  }
}
