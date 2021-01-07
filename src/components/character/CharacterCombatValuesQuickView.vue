<template>
  <v-card outlined>
    <v-card-title
      ><slot name="title"
        ><router-link :to="characterToLink(character, 2, 'combat-values')">{{
          $t("combat-values")
        }}</router-link></slot
      ></v-card-title
    >
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
      <v-list dense flat class="ps-0">
        <v-subheader class="pl-0">{{ $t("no-weapons") }}</v-subheader>
        <v-list-item class="ps-0">
          <v-row dense>
            <v-col cols="3">
              <throw-scenario-trigger-field
                throwScenarioString="D10"
                :title="$t('initiation')"
                :value="combatValuesWithoutWeapon.initiation || 0"
                :label="$t('initiation')"
                @save="
                  onThrowResult(
                    $event,
                    $t('initiation'),
                    combatValuesWithoutWeapon.initiation || 0,
                    'initiation'
                  )
                "
              />
            </v-col>
            <v-col cols="3">
              <throw-scenario-trigger-field
                throwScenarioString="D100"
                :title="$t('offence')"
                :value="combatValuesWithoutWeapon.offence || 0"
                :label="$t('offence')"
                @save="
                  onThrowResult(
                    $event,
                    $t('offence'),
                    combatValuesWithoutWeapon.offence || 0,
                    'offence'
                  )
                "
              />
            </v-col>
            <v-col cols="3">
              <strong>{{ $t("defence") }}:</strong>
              {{ combatValuesWithoutWeapon.defence }}
            </v-col>
            <v-col cols="3">
              <throw-scenario-trigger-field
                throwScenarioString="D100"
                :title="$t('aiming')"
                :value="combatValuesWithoutWeapon.aiming || 0"
                :label="$t('aiming')"
                @save="
                  onThrowResult(
                    $event,
                    $t('aiming'),
                    combatValuesWithoutWeapon.aiming || 0,
                    'aiming'
                  )
                "
              />
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
                <throw-scenario-trigger-field
                  throwScenarioString="D10"
                  :title="$t('initiation')"
                  :value="weapon.combatValues.initiation || 0"
                  :label="$t('initiation')"
                  @save="
                    onThrowResult(
                      $event,
                      $t('initiation'),
                      weapon.combatValues.initiation || 0,
                      'initiation',
                      weapon
                    )
                  "
                />
              </v-col>
              <v-col v-if="!weapon.weapon.ranged" cols="3">
                <throw-scenario-trigger-field
                  throwScenarioString="D100"
                  :title="$t('offence')"
                  :value="weapon.combatValues.offence || 0"
                  :label="$t('offence')"
                  @save="
                    onThrowResult(
                      $event,
                      $t('offence'),
                      weapon.combatValues.offence || 0,
                      'offence',
                      weapon
                    )
                  "
                />
              </v-col>
              <v-col v-if="!weapon.weapon.ranged" cols="3">
                <strong>{{ $t("defence") }}:</strong>
                {{ weapon.combatValues.defence }}
              </v-col>
              <v-col v-if="weapon.weapon.ranged" cols="3">
                <throw-scenario-trigger-field
                  throwScenarioString="D100"
                  :title="$t('aiming')"
                  :value="weapon.combatValues.aiming || 0"
                  :label="$t('aiming')"
                  @save="
                    onThrowResult(
                      $event,
                      $t('aiming'),
                      weapon.combatValues.aiming || 0,
                      'aiming',
                      weapon
                    )
                  "
                />
              </v-col>
              <v-col v-if="weapon.weapon.ranged" cols="3"></v-col>
              <v-col cols="3">
                <throw-scenario-trigger-field
                  :throwScenarioString="damageToString(weapon.weapon.damage)"
                  :title="$t('damage')"
                  :value="damageToString(weapon.weapon.damage)"
                  :label="$t('damage')"
                  @save="
                    onThrowResult($event, $t('damage'), null, null, weapon)
                  "
              /></v-col>
            </v-row>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
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
    weapon?: WeaponAssignment
  ) {
    this.combatValueThrowResult = {
      result: { ...result, total: result.total + (result.modifier || 0) },
      name,
      value,
      id,
      weapon,
    };
  }
}
</script>
