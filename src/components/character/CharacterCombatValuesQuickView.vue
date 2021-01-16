<template>
  <v-card outlined>
    <v-card-title
      ><slot name="title"
        ><router-link :to="characterToLink(character, 2, 'combat-values')">{{
          $t("combat-values")
        }}</router-link></slot
      ></v-card-title
    >
    <v-card-subtitle><slot name="subtitle"></slot></v-card-subtitle>
    <v-card-text>
      <v-alert
        dense
        v-if="combatValueThrowStatus.show"
        text
        color="success"
        dismissible
        @input="combatValueThrowResult = null"
      >
        <v-row dense>
          <v-col cols="6">
            <strong
              >{{ combatValueThrowResultWeapon || $t("no-weapons") }} -
              {{ combatValueThrowResult.name }}:
            </strong></v-col
          >
          <v-col cols="6"
            ><template v-if="combatValueThrowResult.value"
              >{{ combatValueThrowResult.value }} +
              {{ combatValueThrowResult.result.total }} =
            </template>
            <strong>
              {{
                (combatValueThrowResult.value || 0) +
                  (combatValueThrowResult.result.total || 0)
              }}</strong
            ></v-col
          >
          <v-col cols="6"
            >{{ $t("throw") }} ({{
              damageToString(combatValueThrowResult.result.throwScenario)
            }}):</v-col
          >
          <v-col cols="6"
            >{{ combatValueThrowResults
            }}<template
              v-if="combatValueThrowResult.result.throwScenario.modifier"
            >
              +
              {{
                combatValueThrowResult.result.throwScenario.modifier
              }}</template
            ><template v-if="combatValueThrowResult.result.modifier">
              +
              {{ combatValueThrowResult.result.modifier }}</template
            >
            = {{ combatValueThrowResult.result.total }}</v-col
          >
          <template v-if="combatValueThrowResult.damageBonus > 0">
            <v-col cols="6">{{ $t("damage-bonus") }}:</v-col>
            <v-col cols="6">{{ combatValueThrowResult.damageBonus }}</v-col>
          </template>
          <template
            v-if="combatValueThrowResult.weapon && combatValueThrowResult.id"
          >
            <v-col cols="6">{{ $t("no-weapons") }}:</v-col>
            <v-col cols="6">{{
              combatValuesWithoutWeapon[combatValueThrowResult.id]
            }}</v-col>
            <v-col cols="6">{{ combatValueThrowResultWeapon }}:</v-col>
            <v-col cols="6">{{
              combatValueThrowResult.weapon.weapon.combatValues[
                combatValueThrowResult.id
              ]
            }}</v-col>
            <template
              v-if="combatValueThrowResult.weapon.mastery === mastery.MASTER"
            >
              <v-col cols="6">{{ $t(mastery.MASTER) }}:</v-col>
              <v-col cols="6">{{
                masterSkillCombatValueModifiers[combatValueThrowResult.id]
              }}</v-col>
            </template>
            <template v-if="!combatValueThrowResult.weapon.mastery">
              <v-col cols="6">{{ $t("unskilled") }}:</v-col>
              <v-col cols="6">{{
                unskilledCombatValueModifiers[combatValueThrowResult.id]
              }}</v-col>
            </template>
          </template>
        </v-row>
      </v-alert>
      <v-row dense>
        <v-col cols="3"></v-col>
        <v-col cols="2"
          ><strong>{{ $t("attacks-per-turn") }}</strong></v-col
        >
        <v-col cols="1"
          ><strong>{{ $t("initiation") }}</strong></v-col
        >
        <v-col cols="1"
          ><strong>{{ $t("offence") }}</strong></v-col
        >
        <v-col cols="1"
          ><strong>{{ $t("defence") }}</strong></v-col
        >
        <v-col cols="1"
          ><strong>{{ $t("aiming") }}</strong></v-col
        >
        <v-col cols="3"
          ><strong>{{ $t("damage") }}</strong></v-col
        >
        <v-col cols="3"
          ><strong>{{ $t("no-weapons") }}</strong></v-col
        >
        <v-col cols="2">{{ character.attacksPerTurn }}</v-col>
        <v-col cols="1">
          <strong
            ><throw-scenario-trigger-field
              throwScenarioString="D10"
              :title="$t('initiation')"
              :value="combatValuesWithoutWeapon.initiation || 0"
              @save="
                onThrowResult(
                  $event,
                  $t('initiation'),
                  combatValuesWithoutWeapon.initiation || 0,
                  'initiation'
                )
              "/></strong
        ></v-col>
        <v-col cols="1">
          <strong
            ><throw-scenario-trigger-field
              throwScenarioString="D100"
              :title="$t('offence')"
              :value="combatValuesWithoutWeapon.offence || 0"
              @save="
                onThrowResult(
                  $event,
                  $t('offence'),
                  combatValuesWithoutWeapon.offence || 0,
                  'offence'
                )
              "/></strong
        ></v-col>
        <v-col cols="1">
          <throw-scenario-trigger-field
            throwScenarioString="D100"
            :title="$t('defence')"
            :value="combatValuesWithoutWeapon.defence || 0"
            @save="
              onThrowResult(
                $event,
                $t('defence'),
                combatValuesWithoutWeapon.defence || 0,
                'defence'
              )
            "
        /></v-col>
        <v-col cols="1">
          <strong
            ><throw-scenario-trigger-field
              throwScenarioString="D100"
              :title="$t('aiming')"
              :value="combatValuesWithoutWeapon.aiming || 0"
              @save="
                onThrowResult(
                  $event,
                  $t('aiming'),
                  combatValuesWithoutWeapon.aiming || 0,
                  'aiming'
                )
              "/></strong
        ></v-col>
        <v-col cols="3"
          ><strong
            ><throw-scenario-trigger-field
              :throwScenarioString="damageToString(character.damage)"
              :title="$t('damage')"
              :value="damageToString(character.damage)"
              @save="onThrowResult($event, $t('damage'))"/></strong
        ></v-col>
        <template v-for="weapon in combatValuesWithWeapons">
          <v-col :key="`${weapon.id}-weapon`" cols="3"
            ><strong>{{ weapon.weapon.description.title }}</strong></v-col
          >
          <v-col :key="`${weapon.id}-attacks-per-turn`" cols="2">{{
            weapon.weapon.attacksPerTurn
          }}</v-col>
          <v-col :key="`${weapon.id}-initiation`" cols="1"
            ><strong
              ><throw-scenario-trigger-field
                throwScenarioString="D10"
                :title="$t('initiation')"
                :value="weapon.combatValues.initiation || 0"
                @save="
                  onThrowResult(
                    $event,
                    $t('initiation'),
                    weapon.combatValues.initiation || 0,
                    'initiation',
                    weapon
                  )
                "/></strong
          ></v-col>
          <v-col :key="`${weapon.id}-offence`" cols="1">
            <strong
              ><throw-scenario-trigger-field
                v-if="!weapon.weapon.ranged"
                throwScenarioString="D100"
                :title="$t('offence')"
                :value="weapon.combatValues.offence || 0"
                @save="
                  onThrowResult(
                    $event,
                    $t('offence'),
                    weapon.combatValues.offence || 0,
                    'offence',
                    weapon
                  )
                "/></strong
          ></v-col>
          <v-col :key="`${weapon.id}-defence`" cols="1"
            ><template v-if="!weapon.weapon.ranged">{{
              weapon.combatValues.defence
            }}</template></v-col
          >
          <v-col :key="`${weapon.id}-aiming`" cols="1">
            <strong
              ><throw-scenario-trigger-field
                v-if="weapon.weapon.ranged"
                throwScenarioString="D100"
                :title="$t('aiming')"
                :value="weapon.combatValues.aiming || 0"
                @save="
                  onThrowResult(
                    $event,
                    $t('aiming'),
                    weapon.combatValues.aiming || 0,
                    'aiming',
                    weapon
                  )
                "/></strong
          ></v-col>
          <v-col :key="`${weapon.id}-damage`" cols="3"
            ><strong
              ><throw-scenario-trigger-field
                :throwScenarioString="damageToString(weapon.weapon.damage)"
                :title="$t('damage')"
                :value="damageToString(weapon.weapon.damage)"
                @save="
                  onThrowResult(
                    $event,
                    $t('damage'),
                    null,
                    null,
                    weapon,
                    damageBonus
                  )
                "/></strong
          ></v-col>
        </template>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-switch
        class="pl-2"
        v-if="!!character.shield"
        :input-value="character.shieldInHand"
        :label="$t('shield')"
        @change="toggleShieldInHand"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Dice } from "@/API";
import {
  CombatValues,
  Mastery,
  ThrowScenario,
  WeaponAssignment,
} from "@/store";
import {
  aimingTotal,
  combatValuesWithWeapon,
  CombatValueThrowResult,
  defenceTotal,
  getThrowScenarioString,
  initiationTotal,
  localiseItem,
  offenceTotal,
  ThrowScenarioResult,
  MasterSkillCombatValueModifiers,
  UnskilledCombatValueModifiers,
  executeThrowScenario,
  parseThrowScenarioString,
} from "@/utils";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";
import ThrowScenarioTriggerField from "./ThrowScenarioTriggerField.vue";
@Component({
  name: "character-combat-values-quick-view",
  components: {
    "throw-scenario-trigger-field": ThrowScenarioTriggerField,
  },
})
export default class CharacterCombatValuesQuickView extends CharacterQuickView {
  combatValueThrowResult: CombatValueThrowResult | null = null;

  get damageBonus() {
    return this.character.abilities?.strength &&
      this.character.abilities?.strength > 16
      ? this.character.abilities.strength - 16
      : 0;
  }

  get combatValueThrowStatus() {
    return { show: !!this.combatValueThrowResult };
  }

  get combatValueThrowResults() {
    return (
      this.combatValueThrowResult?.result.throwResults.map(r => r.result) || []
    );
  }

  get combatValueThrowResultWeapon() {
    return this.combatValueThrowResult?.weapon?.weapon?.description?.title;
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
        mastery: w.mastery,
        combatValues: combatValuesWithWeapon({
          character: this.character,
          weapon: w.weapon,
          mastery: w.mastery,
        }),
      };
    });
  }

  get combatValuesWithoutWeapon(): CombatValues {
    return {
      initiation: initiationTotal(this.character),
      offence: offenceTotal(this.character),
      defence: defenceTotal(this.character),
      aiming: aimingTotal(this.character),
    };
  }

  damageToString(damage: ThrowScenario) {
    return damage ? getThrowScenarioString(damage, this.$i18n) : "";
  }

  masteryToString(mastery: Mastery) {
    return this.$t(mastery);
  }

  get mastery() {
    return Mastery;
  }

  get masterSkillCombatValueModifiers() {
    return MasterSkillCombatValueModifiers;
  }

  get unskilledCombatValueModifiers() {
    return UnskilledCombatValueModifiers;
  }

  onThrowResult(
    result: ThrowScenarioResult,
    name: string,
    value?: number,
    id?: string,
    weapon?: WeaponAssignment,
    damageBonus?: number
  ) {
    const hasDamageBonus =
      damageBonus && damageBonus > 0 && !weapon?.weapon?.ranged;
    const damageBonusValue = hasDamageBonus ? damageBonus || 0 : 0;
    this.combatValueThrowResult = {
      result: hasDamageBonus
        ? {
            ...result,
            total: result.total + damageBonusValue,
            modifier: (result.modifier || 0) + damageBonusValue,
          }
        : result,
      name,
      value,
      id,
      weapon,
      damageBonus: damageBonusValue,
    };
  }

  async toggleShieldInHand() {
    const shieldInHand = this.character.shieldInHand ? false : true;
    try {
      await this.$store.dispatch("character/update", {
        id: this.character.id,
        shieldInHand,
      });
    } catch (error) {
      this.throwError(error);
    }
  }

  created() {
    if (this.bus) {
      const weapon =
        this.combatValuesWithWeapons.length > 0
          ? this.combatValuesWithWeapons[0]
          : undefined;
      const combatValues = weapon
        ? weapon.combatValues
        : this.combatValuesWithoutWeapon;

      this.bus.$on("initiation", () => {
        this.combatValueThrowResult = {
          result: executeThrowScenario(parseThrowScenarioString(Dice.D10)),
          name: this.$t("initiation").toString(),
          value: combatValues.initiation,
          id: "initiation",
          weapon,
        };
      });

      this.bus.$on("offence", () => {
        this.combatValueThrowResult = {
          result: executeThrowScenario(parseThrowScenarioString(Dice.D100)),
          name: this.$t("offence").toString(),
          value: combatValues.offence,
          id: "offence",
          weapon,
        };
      });
    }
  }
}
</script>
