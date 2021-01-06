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
              <v-col cols="6"
                ><strong>{{ $t("strength") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.strength || 0 }}, {{ $t("damage-bonus") }}:
                {{ damageBonus }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("agility") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.agility || 0 }}, {{ $t("in-armour") }}
                {{ agilityInArmour }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("dexterity") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.dexterity || 0 }}, {{ $t("in-armour") }}
                {{ dexterityInArmour }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("stamina") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.stamina || 0 }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("health") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.health || 0 }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("beauty") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.beauty || 0 }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("intelligence") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.intelligence || 0 }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("willpower") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.willpower || 0 }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("astral") }}: </strong></v-col
              >
              <v-col cols="6">
                {{ abilities.astral || 0 }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col id="vitality" cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title>{{ $t("vitality") }}</v-card-title>
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
                <strong>{{ health.vitality.current || 0 }}</strong>
              </v-col>
              <v-col cols="4">
                {{ health.vitality.max || 0 }}
              </v-col>
              <v-col cols="4"
                ><strong>{{ $t("hp") }}: </strong></v-col
              >
              <v-col cols="4">
                <strong>{{ health.hitPoints.current || 0 }}</strong>
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
      <v-col id="combat-values" cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title>{{ $t("combat-values") }}</v-card-title>
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
                    <v-col cols="3">
                      <strong>{{ $t("offence") }}:</strong>
                      {{ weapon.combatValues.offence }}
                    </v-col>
                    <v-col cols="3">
                      <strong>{{ $t("defence") }}:</strong>
                      {{ weapon.combatValues.defence }}
                    </v-col>
                    <v-col cols="3">
                      <strong>{{ $t("aiming") }}:</strong>
                      {{ weapon.combatValues.aiming }}
                    </v-col>
                  </v-row>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col id="spell-resistance" cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title>{{ $t("spell-resistance") }}</v-card-title>
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
          <v-card-title>{{ $t("psi") }}/{{ $t("mana-points") }}</v-card-title>
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
                <v-col cols="4"
                  ><strong>{{ psiPoints.current }}</strong></v-col
                >
                <v-col cols="4">{{ psiPoints.max }}</v-col>
              </template>
              <template v-if="character.magicUser">
                <v-col cols="4"
                  ><strong>{{ $t("mp") }}</strong></v-col
                >
                <v-col cols="4"
                  ><strong>{{ manaPoints.current }}</strong></v-col
                >
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
  </v-container>
</template>

<script lang="ts">
import {
  Character,
  CombatValues,
  SpellResistance,
  WeaponAssignment,
} from "@/store";
import {
  aimingTotal,
  calculateInnateSpellResistance,
  calculateSpellResistanceTotal,
  characterToLink,
  combatValuesWithWeapon,
  defenceTotal,
  initiationTotal,
  localiseItem,
  movementPreventionValueTotal,
  offenceTotal,
} from "@/utils";
import Component from "vue-class-component";
import CharacterInfo from "./CharacterInfo";
@Component({ name: "character-overview" })
export default class CharacterOverview extends CharacterInfo {
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
}
</script>
