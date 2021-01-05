<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title>{{ $t("abilities") }}</v-card-title>
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
      <v-col cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title>{{ $t("vitality") }}</v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="6"
                ><strong>{{ $t("vp") }}: </strong></v-col
              >
              <v-col cols="6">
                <strong>{{ health.vitality.current || 0 }}</strong
                >/{{ health.vitality.max }}
              </v-col>
              <v-col cols="6"
                ><strong>{{ $t("hp") }}: </strong></v-col
              >
              <v-col cols="6">
                <strong>{{ health.hitPoints.current || 0 }}</strong
                >/{{ health.hitPoints.max }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="6" lg="3" xl="2">
        <v-card outlined>
          <v-card-title>{{ $t("combat-values") }}</v-card-title>
          <v-card-text>
            <v-list flat class="ps-0">
              <v-subheader class="pl-0">{{ $t("no-weapons") }}</v-subheader>
              <v-list-item class="ps-0">
                <v-row dense>
                  <v-col cols="6"
                    ><strong>{{ $t("vp") }}: </strong></v-col
                  >
                  <v-col cols="6">
                    <strong>{{ health.vitality.current || 0 }}</strong
                    >/{{ health.vitality.max }}
                  </v-col>
                  <v-col cols="6"
                    ><strong>{{ $t("hp") }}: </strong></v-col
                  >
                  <v-col cols="6">
                    <strong>{{ health.hitPoints.current || 0 }}</strong
                    >/{{ health.hitPoints.max }}
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
            <v-list
              flat
              class="ps-0"
              v-for="weapon in weapons"
              :key="weapon.id"
            >
              <v-subheader class="pl-0">{{
                weapon.weapon.description.title
              }}</v-subheader>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { WeaponAssignment } from "@/store";
import { localiseItem, movementPreventionValueTotal } from "@/utils";
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
}
</script>
