import Vue from "vue";
import Component from "vue-class-component";

type StringFunction = () => string;
interface HasTitle {
  title?: string | StringFunction;
}

@Component
export default class TitleComponent extends Vue {
  get computedTitle(): string {
    const { title } = this as HasTitle;
    if (title) {
      return typeof title === "function" ? title.call(this) : title;
    } else {
      return "M.A.G.U.S";
    }
  }

  mounted(): void {
    this.$store.commit("setAppTitle", this.computedTitle);
  }
}
