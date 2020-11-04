import Vue from "vue";
import Component from "vue-class-component";

interface HasTitle {
  title?: string | Function;
}

@Component
export default class TitleComponent extends Vue {
  getTitle() {
    const { title } = this.$data as HasTitle;
    if (title) {
      return typeof title === "function" ? title.call(this) : title;
    } else {
      return "M.A.G.U.S";
    }
  }

  created() {
    document.title = this.getTitle();
  }
}
