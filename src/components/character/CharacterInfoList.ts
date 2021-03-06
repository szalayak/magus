import { Form } from "@/utils";
import Component from "vue-class-component";
import CharacterInfo from "./CharacterInfo";

@Component({})
export default class CharacterInfoList extends CharacterInfo {
  valid = true;
  dialog = false;
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();
  selected: unknown[] = [];

  get isNewItem() {
    return this.editedIndex === -1;
  }

  createFunction(item: unknown): Promise<void> {
    throw `Create function not implemented, ${item}`;
  }
  updateFunction(item: unknown): Promise<void> {
    throw `Update function not implemented, ${item}`;
  }
  deleteFunction(item: unknown): Promise<void> {
    throw `Update function not implemented, ${item}`;
  }
  defaultItem(): unknown {
    return {};
  }

  close() {
    this.dialog = false;
    this.resetEditedItem();
  }
  async save() {
    const form = this.$refs.form as Form;
    if (!form || form.validate()) {
      const saveFunction = this.isNewItem
        ? this.createFunction
        : this.updateFunction;
      try {
        await saveFunction(this.editedItem);
        this.error = false;
        this.dialog = false;
        this.resetEditedItem();
      } catch (error) {
        this.throwError(error);
      }
    }
  }
  async deleteItemConfirm() {
    try {
      await this.deleteFunction(this.editedItem);
      this.error = false;
      this.dialog = false;
      this.resetEditedItem();
    } catch (error) {
      this.throwError(error);
    }
    this.closeDelete();
  }
  async deleteItemsConfirm(items: unknown[]) {
    try {
      await Promise.all(items.map(item => this.deleteFunction(item)));
      items.forEach(item =>
        this.selected.splice(this.selected.indexOf(item), 1)
      );
      this.error = false;
      this.dialog = false;
      this.resetEditedItem();
    } catch (error) {
      this.throwError(error);
    }
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.resetEditedItem();
  }
  editItem(item: unknown, assignments: unknown[]) {
    this.editedIndex = assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: unknown, assignments: unknown[]) {
    this.editedIndex = assignments.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
  deleteItems() {
    this.dialogDelete = true;
  }
  resetEditedItem() {
    this.$nextTick(() => {
      this.editedItem = this.defaultItem();
      this.editedIndex = -1;
    });
  }
}
