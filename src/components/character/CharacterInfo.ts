import { Character } from "@/store/modules/character";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

export default class CharacterInfo extends Vue {
  @Prop({ type: String, required: true })
  id!: string;

  @Prop({ type: Boolean })
  editable!: boolean;

  get character(): Character {
    return (
      this.$store.getters["character/listTransient"].find(
        (char: Character) => char.id === this.id
      ) || {}
    );
  }

  set character(character: Character) {
    this.$store.commit("race/mergeTransient", character);
  }
}
