import { Mastery } from "@/API";
import { Character } from "@/store/modules/character";
import { DropdownValueList, LooseObject } from "@/store/types";
import { BackendError } from "@/types";
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

  async update(item: LooseObject): Promise<void> {
    try {
      await this.$store.dispatch(`${this.module}/update`, item);
      this.edit = false;
      this.error = false;
    } catch (error) {
      this.throwError(error);
    }
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
