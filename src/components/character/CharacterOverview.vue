<template>
  <v-container fluid>
    <v-row dense>
      <v-col id="abilities" cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title>
            <router-link :to="characterToLink(character, 2, 'abilities')">{{
              $t("abilities")
            }}</router-link></v-card-title
          >
          <v-card-text>
            <v-row dense>
              <v-col cols="4"
                ><strong>{{ $t("strength") }}: </strong></v-col
              >
              <v-col cols="3">
                {{ abilities.strength || 0 }}
              </v-col>
              <v-col cols="5"
                >{{ $t("damage-bonus") }}: {{ damageBonus }}</v-col
              >
              <v-col cols="4"
                ><strong>{{ $t("agility") }}: </strong></v-col
              >
              <v-col cols="3">
                {{ abilities.agility || 0 }}
              </v-col>
              <v-col cols="5"
                >{{ $t("in-armour") }}: {{ agilityInArmour }}</v-col
              >
              <v-col cols="4"
                ><strong>{{ $t("dexterity") }}: </strong></v-col
              >
              <v-col cols="3">
                {{ abilities.dexterity || 0 }}
              </v-col>
              <v-col cols="5"
                >{{ $t("in-armour") }}: {{ dexterityInArmour }}</v-col
              >
              <v-col cols="4"
                ><strong>{{ $t("stamina") }}: </strong></v-col
              >
              <v-col cols="8">
                {{ abilities.stamina || 0 }}
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("health") }}: </strong></v-col
              >
              <v-col cols="8">
                {{ abilities.health || 0 }}
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("beauty") }}: </strong></v-col
              >
              <v-col cols="8">
                {{ abilities.beauty || 0 }}
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("intelligence") }}: </strong></v-col
              >
              <v-col cols="8">
                {{ abilities.intelligence || 0 }}
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("willpower") }}: </strong></v-col
              >
              <v-col cols="8">
                {{ abilities.willpower || 0 }}
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("astral") }}: </strong></v-col
              >
              <v-col cols="8">
                {{ abilities.astral || 0 }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col id="vitality" cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title
            ><router-link :to="characterToLink(character, 2, 'health')">{{
              $t("vitality")
            }}</router-link></v-card-title
          >
          <v-card-text>
            <v-row dense>
              <v-col cols="4"></v-col>
              <v-col cols="4"
                ><strong>{{ $t("current") }}</strong></v-col
              >
              <v-col cols="4"
                ><strong>{{ $t("max") }}</strong></v-col
              >
              <v-col cols="4"
                ><strong>{{ $t("vp") }}: </strong></v-col
              >
              <v-col cols="4">
                <quick-update-property-field
                  :value="health.vitality.current || 0"
                  :title="$t('current-vp')"
                  @save="onCurrentVitalityChanged"
                />
              </v-col>
              <v-col cols="4">
                {{ health.vitality.max || 0 }}
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("hp") }}: </strong></v-col
              >
              <v-col cols="4">
                <quick-update-property-field
                  :value="health.hitPoints.current || 0"
                  :title="$t('current-hp')"
                  @save="onCurrentHitPointsChanged"
                />
              </v-col>
              <v-col cols="4">
                {{ health.hitPoints.max || 0 }}
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("drv") }}: </strong></v-col
              >
              <v-col cols="4">
                <strong>{{
                  character.armourCurrentDamageReductionValue ||
                    armour.damageReductionValue ||
                    0
                }}</strong>
              </v-col>
              <v-col cols="4">
                {{ armour.damageReductionValue || 0 }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col id="combat-values" cols="12" xs="12" md="6" lg="3" xl="3">
        <v-card outlined>
          <v-card-title
            ><router-link
              :to="characterToLink(character, 2, 'combat-values')"
              >{{ $t("combat-values") }}</router-link
            ></v-card-title
          >
          <v-card-text>
            <v-list flat class="ps-0">
              <v-subheader class="pl-0">{{ $t("no-weapons") }}</v-subheader>
              <v-list-item class="ps-0">
                <v-row dense>
                  <v-col cols="3">
                    <strong>{{ $t("initiation") }}:</strong>
                    {{ combatValuesWithoutWeapon.initiation }}
                  </v-col>
                  <v-col cols="3">
                    <strong>{{ $t("offence") }}:</strong>
                    {{ combatValuesWithoutWeapon.offence }}
                  </v-col>
                  <v-col cols="3">
                    <strong>{{ $t("defence") }}:</strong>
                    {{ combatValuesWithoutWeapon.defence }}
                  </v-col>
                  <v-col cols="3">
                    <strong>{{ $t("aiming") }}:</strong>
                    {{ combatValuesWithoutWeapon.aiming }}
                  </v-col>
                </v-row>
              </v-list-item>
              <template v-for="weapon in combatValuesWithWeapons">
                <v-subheader :key="weapon.id + '-subheader'" class="pl-0">{{
                  weapon.weapon.description.title
                }}</v-subheader>
                <v-list-item class="ps-0" :key="weapon.id">
                  <v-row dense>
                    <v-col cols="3">
                      <strong>{{ $t("initiation") }}:</strong>
                      {{ weapon.combatValues.initiation }}
                    </v-col>
                    <v-col v-if="!weapon.weapon.ranged" cols="3">
                      <strong>{{ $t("offence") }}:</strong>
                      {{ weapon.combatValues.offence }}
                    </v-col>
                    <v-col v-if="!weapon.weapon.ranged" cols="3">
                      <strong>{{ $t("defence") }}:</strong>
                      {{ weapon.combatValues.defence }}
                    </v-col>
                    <v-col v-if="weapon.weapon.ranged" cols="3">
                      <strong>{{ $t("aiming") }}:</strong>
                      {{ weapon.combatValues.aiming }}
                    </v-col>
                    <v-col v-if="weapon.weapon.ranged" cols="3"></v-col>
                    <v-col cols="3"
                      ><strong>{{ $t("damage") }}:</strong>
                      {{ damageToString(weapon.weapon.damage) }}</v-col
                    >
                  </v-row>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col id="spell-resistance" cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title
            ><router-link
              :to="characterToLink(character, 2, 'spell-resistance')"
              >{{ $t("spell-resistance") }}</router-link
            ></v-card-title
          >
          <v-card-text>
            <v-row dense>
              <v-col cols="4"> </v-col>
              <v-col cols="4">
                <strong>{{ $t("astral-sr") }}</strong>
              </v-col>
              <v-col cols="4">
                <strong>{{ $t("mental") }}</strong>
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("static") }}</strong></v-col
              >
              <v-col cols="4">{{ spellResistance.astral.static }}</v-col>
              <v-col cols="4">{{ spellResistance.mental.static }}</v-col>
              <v-col cols="4"
                ><strong>{{ $t("dynamic") }}</strong></v-col
              >
              <v-col cols="4">{{ spellResistance.astral.dynamic }}</v-col>
              <v-col cols="4">{{ spellResistance.mental.dynamic }}</v-col>
              <v-col cols="4"
                ><strong>{{ $t("innate") }}</strong></v-col
              >
              <v-col cols="4">{{ spellResistance.astral.innate }}</v-col>
              <v-col cols="4">{{ spellResistance.mental.innate }}</v-col>
              <v-col cols="4"
                ><strong>{{ $t("magical") }}</strong></v-col
              >
              <v-col cols="4">{{ spellResistance.astral.magical }}</v-col>
              <v-col cols="4">{{ spellResistance.mental.magical }}</v-col>
              <v-col cols="4"
                ><strong>{{ $t("total-sr") }}</strong></v-col
              >
              <v-col cols="4"
                ><strong>{{ astralSpellResistanceTotal }}</strong></v-col
              >
              <v-col cols="4"
                ><strong>{{ mentalSpellResistanceTotal }}</strong></v-col
              >
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        id="psi-mana-points"
        v-if="character.psiUser || character.magicUser"
        cols="12"
        xs="12"
        md="6"
        lg="3"
        xl="2"
      >
        <v-card outlined>
          <v-card-title
            ><router-link :to="characterToLink(character, 2, 'psi')">
              {{ $t("psi") }}/{{ $t("mana-points") }}</router-link
            >
          </v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="4"> </v-col>
              <v-col cols="4">
                <strong>{{ $t("current") }}</strong>
              </v-col>
              <v-col cols="4">
                <strong>{{ $t("max") }}</strong>
              </v-col>
              <template v-if="character.psiUser">
                <v-col cols="4"
                  ><strong>{{ $t("psi-points") }}</strong></v-col
                >
                <v-col cols="4">
                  <quick-update-property-field
                    :value="psiPoints.current || 0"
                    :title="$t('current-psi-points')"
                    @save="onCurrentPsiPointsChanged"
                /></v-col>
                <v-col cols="4">{{ psiPoints.max }}</v-col>
              </template>
              <template v-if="character.magicUser">
                <v-col cols="4"
                  ><strong>{{ $t("mp") }}</strong></v-col
                >
                <v-col cols="4">
                  <quick-update-property-field
                    :value="manaPoints.current || 0"
                    :title="$t('current-mp')"
                    @save="onCurrentManaPointsChanged"
                /></v-col>
                <v-col cols="4">{{ manaPoints.max }}</v-col>
                <v-col cols="12">
                  <v-subheader class="pl-0"
                    ><strong>{{ $t("notes") }}</strong></v-subheader
                  >
                </v-col>
                <v-col cols="12">
                  {{ magicalAbility.notes }}
                </v-col>
              </template>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-for="message in messages"
      v-model="notification"
      :key="message"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification = false">
          {{ $t("close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import {
  Character,
  CombatValues,
  LooseObject,
  Mastery,
  SpellResistance,
  ThrowScenario,
  WeaponAssignment,
} from "@/store";
import {
  aimingTotal,
  calculateInnateSpellResistance,
  calculateSpellResistanceTotal,
  characterToLink,
  combatValuesWithWeapon,
  defenceTotal,
  getThrowScenarioString,
  initiationTotal,
  localiseItem,
  movementPreventionValueTotal,
  offenceTotal,
} from "@/utils";
import Component from "vue-class-component";
import CharacterInfo from "./CharacterInfo";
import QuickUpdatePropertyField from "./QuickUpdatePropertyField.vue";
@Component({
  name: "character-overview",
  components: {
    "quick-update-property-field": QuickUpdatePropertyField,
  },
})
export default class CharacterOverview extends CharacterInfo {
  messages: string[] = [];
  notification = false;

  get agilityInArmour() {
    return this.character.abilities?.agility
      ? this.character.abilities.agility -
          movementPreventionValueTotal(this.character)
      : 0;
  }

  get dexterityInArmour() {
    return this.character.abilities?.dexterity
      ? this.character.abilities.dexterity -
          movementPreventionValueTotal(this.character)
      : 0;
  }

  get damageBonus() {
    return this.abilities.strength && this.abilities.strength > 16
      ? this.abilities.strength - 16
      : 0;
  }

  get abilities() {
    return this.character.abilities || {};
  }

  get health() {
    return (
      this.character.health || {
        vitality: {},
        hitPoints: {},
      }
    );
  }

  get weapons() {
    return this.character.weapons
      ?.filter(w => w.inHand)
      .map(w => ({
        ...w,
        weapon: w.weapon ? localiseItem(w.weapon, this.$i18n.locale) : w.weapon,
      })) as WeaponAssignment[];
  }

  get armour() {
    return this.character.armour || {};
  }

  get combatValuesWithWeapons() {
    return this.weapons?.map(w => {
      return {
        id: w.id,
        weapon: w.weapon,
        combatValues: combatValuesWithWeapon({
          character: this.character,
          weapon: w.weapon,
          mastery: w.mastery,
          inArmour: !!this.character.armour,
          withShield: !!this.character.shield,
        }),
      };
    });
  }

  get combatValuesWithoutWeapon(): CombatValues {
    return {
      initiation: initiationTotal(this.character, !!this.character.armour),
      offence: offenceTotal(this.character, !!this.character.armour),
      defence: defenceTotal(
        this.character,
        !!this.character.armour,
        !!this.character.shield
      ),
      aiming: aimingTotal(this.character, !!this.character.armour),
    };
  }

  get astralSpellResistanceTotal() {
    return calculateSpellResistanceTotal(this.spellResistance.astral);
  }

  get mentalSpellResistanceTotal() {
    return calculateSpellResistanceTotal(this.spellResistance.mental);
  }

  get spellResistance(): SpellResistance {
    return (
      this.character.spellResistance || {
        astral: {
          innate: calculateInnateSpellResistance(
            this.character.abilities?.astral
          ),
        },
        mental: {
          innate: calculateInnateSpellResistance(
            this.character.abilities?.willpower
          ),
        },
      }
    );
  }

  get psiPoints() {
    return this.character.psiPoints || {};
  }

  get manaPoints() {
    return this.character.magicalAbility?.manaPoints || {};
  }

  get magicalAbility() {
    return this.character.magicalAbility || {};
  }

  characterToLink(character: Character, page: number, selector: string) {
    return characterToLink(character, page, selector);
  }

  damageToString(damage: ThrowScenario) {
    return damage ? getThrowScenarioString(damage, this.$i18n) : "";
  }

  masteryToString(mastery: Mastery) {
    return this.$t(mastery);
  }

  async onCurrentVitalityChanged(newValue: number) {
    if (!this.character.health) this.character.health = { vitality: {} };
    if (this.character.health.vitality)
      this.character.health.vitality.current = newValue;
    return await this.save();
  }

  async onCurrentHitPointsChanged(newValue: number) {
    if (!this.character.health) this.character.health = { hitPoints: {} };
    if (this.character.health.hitPoints)
      this.character.health.hitPoints.current = newValue;
    return await this.save();
  }

  async onCurrentPsiPointsChanged(newValue: number) {
    if (!this.character.psiPoints) this.character.psiPoints = {};
    if (this.character.psiPoints) this.character.psiPoints.current = newValue;
    return await this.save();
  }

  async onCurrentManaPointsChanged(newValue: number) {
    if (!this.character.magicalAbility)
      this.character.magicalAbility = { manaPoints: {} };
    if (this.character.magicalAbility.manaPoints)
      this.character.magicalAbility.manaPoints.current = newValue;
    return await this.save();
  }

  async save() {
    try {
      await this.$store.dispatch("character/save", this.character.id);
    } catch (error) {
      this.messages =
        typeof error === "string"
          ? [error]
          : error.errors?.map((err: LooseObject) => err.message) || [];
      this.notification = true;
    }
  }
}
</script>
