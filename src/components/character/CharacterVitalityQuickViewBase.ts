import { HealthInformation } from "@/store";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";

@Component({})
export default class CharacterVitalityQuickViewBase extends CharacterQuickView {
  get health() {
    return (
      this.character.health || {
        vitality: {},
        hitPoints: {},
      }
    );
  }

  get armour() {
    return this.character.armour || {};
  }

  async onCurrentVitalityChanged(newValue: number) {
    const health = { ...this.character.health } || { vitality: {} };
    if (health.vitality) health.vitality.current = newValue;
    return await this.save(this.character.id, health);
  }

  async onCurrentHitPointsChanged(newValue: number) {
    const health = { ...this.character.health } || { hitPoints: {} };
    if (health.hitPoints) health.hitPoints.current = newValue;
    return await this.save(this.character.id, health);
  }

  async save(id?: string, health?: HealthInformation) {
    this.loading = true;
    try {
      await this.$store.dispatch("character/update", { id, health });
    } catch (error) {
      this.throwError(error);
    }
    this.loading = false;
  }

  async toggleArmourActive() {
    this.loading = true;
    const armourActive = this.character.armourActive ? false : true;
    try {
      await this.$store.dispatch("character/update", {
        id: this.character.id,
        armourActive,
      });
    } catch (error) {
      this.throwError(error);
    }
    this.loading = false;
  }
}
