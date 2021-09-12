<template>
  <v-card flat :loading="loading">
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">{{
        $t("combat-values")
      }}</v-toolbar-title>
      <v-spacer />
      <v-switch
        :disabled="!isCurrentUser"
        v-if="!!character.shield"
        :input-value="character.shieldInHand"
        :label="$t('shield')"
        @change="toggleShieldInHand"
        class="pt-4"
      />
    </v-app-bar>
    <v-card-text class="pt-0">
      <v-alert
        dense
        v-if="combatValueThrowStatus.show"
        text
        color="success"
        dismissible
        @input="combatValueThrowResult = null"
      >
        <v-row dense no-gutters>
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
      <v-chip-group
        :value="selectedWeapons"
        column
        multiple
        @change="selectedWeaponsChanged"
      >
        <v-chip
          :disabled="loading"
          filter
          v-for="weaponName in weaponNames"
          :key="weaponName"
          >{{ weaponName }}</v-chip
        >
      </v-chip-group>
      <template v-if="showNoWeapon">
        <div class="mt-2 primary--text">{{ $t("no-weapons") }}</div>
        <v-row dense>
          <v-col cols="3" sm="2">
            <throw-scenario-trigger-field
              throwScenarioString="D10"
              :title="$t('initiation')"
              @save="
                onThrowResult(
                  $event,
                  $t('initiation'),
                  combatValuesWithoutWeapon.initiation || 0,
                  'initiation'
                )
              "
            >
              <quick-view-output-field
                :caption="$t('initiation')"
                :value="combatValuesWithoutWeapon.initiation"
              />
            </throw-scenario-trigger-field>
          </v-col>
          <v-col cols="3" sm="2">
            <throw-scenario-trigger-field
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
              "
            >
              <quick-view-output-field
                :caption="$t('offence')"
                :value="combatValuesWithoutWeapon.offence"
              />
            </throw-scenario-trigger-field>
          </v-col>
          <v-col cols="3" sm="2">
            <quick-view-output-field
              :caption="$t('defence')"
              :value="combatValuesWithoutWeapon.defence"
            />
          </v-col>
          <v-col cols="3" sm="2">
            <throw-scenario-trigger-field
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
              "
            >
              <quick-view-output-field
                :caption="$t('aiming')"
                :value="combatValuesWithoutWeapon.aiming"
              />
            </throw-scenario-trigger-field>
          </v-col>
          <v-col cols="3" sm="2">
            <quick-view-output-field
              :caption="$t('attacks-per-turn')"
              :value="character.attacksPerTurn"
            />
          </v-col>
          <v-col cols="3" sm="2">
            <throw-scenario-trigger-field
              :throwScenarioString="damageToString(character.damage)"
              :title="$t('damage')"
              :value="damageToString(character.damage)"
              @save="onThrowResult($event, $t('damage'))"
            >
              <quick-view-output-field
                :caption="$t('damage')"
                :value="damageToString(character.damage)"
              />
            </throw-scenario-trigger-field>
          </v-col>
        </v-row>
      </template>
      <template v-for="weapon in combatValuesWithWeapons">
        <div :key="`${weapon.id}-label`" class="mt-2 primary--text">
          {{ weapon.weapon.description.title }}
        </div>
        <v-row :key="weapon.id" dense>
          <v-col cols="3" sm="2">
            <throw-scenario-trigger-field
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
              "
            >
              <quick-view-output-field
                :caption="$t('initiation')"
                :value="weapon.combatValues.initiation"
                clickable
              />
            </throw-scenario-trigger-field>
          </v-col>
          <v-col cols="3" sm="2">
            <throw-scenario-trigger-field
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
              "
            >
              <quick-view-output-field
                :caption="$t('offence')"
                :value="weapon.combatValues.offence"
              />
            </throw-scenario-trigger-field>
          </v-col>
          <v-col v-if="!weapon.weapon.ranged" cols="3" sm="2">
            <quick-view-output-field
              :caption="$t('defence')"
              :value="weapon.combatValues.defence"
            />
          </v-col>
          <v-col v-if="weapon.weapon.ranged" cols="3" sm="2">
            <throw-scenario-trigger-field
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
              "
            >
              <quick-view-output-field
                :caption="$t('aiming')"
                :value="weapon.combatValues.aiming"
              />
            </throw-scenario-trigger-field>
          </v-col>
          <v-col cols="3" sm="2">
            <quick-view-output-field
              :caption="$t('attacks-per-turn')"
              :value="weapon.weapon.attacksPerTurn"
            />
          </v-col>
          <v-col cols="3" sm="2">
            <throw-scenario-trigger-field
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
              "
            >
              <quick-view-output-field
                :caption="$t('damage')"
                :value="damageToString(weapon.weapon.damage)"
              />
            </throw-scenario-trigger-field>
          </v-col>
        </v-row>
      </template>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { WeaponAssignment } from "@/store";
import Component from "vue-class-component";
import CharacterCombatValuesQuickViewBase from "../CharacterCombatValuesQuickViewBase";
import ThrowScenarioTriggerField from "../ThrowScenarioTriggerField.vue";
import QuickViewOutputField from "./QuickViewOutputField.vue";

@Component({
  components: { QuickViewOutputField, ThrowScenarioTriggerField },
  name: "combat-values-quick-view",
})
export default class CombatValuesQuickView extends CharacterCombatValuesQuickViewBase {
  noWeapon = true;

  get selectedWeapons(): number[] {
    const defaultArray = this.noWeapon ? [0] : [];
    if (!this.character.weapons) return defaultArray;
    const result = [...defaultArray];
    for (let i = 0; i < this.character.weapons.length; i++) {
      const weapon = this.character.weapons[i];
      if (weapon.inHand) result.push(i + 1);
    }
    return result;
  }
  weaponNames = [
    this.$t("no-weapons").toString(),
    ...(this.character.weapons?.map(a => a.weapon?.description?.title || "") ||
      []),
  ];

  get showNoWeapon(): boolean {
    return this.selectedWeapons.find(w => w === 0) !== undefined;
  }

  async selectedWeaponsChanged(selected: number[]): Promise<void> {
    this.noWeapon = selected.find(w => w === 0) !== undefined;
    const weaponsInHand = this.character.weapons?.filter(w => !!w.inHand) || [];
    const create: WeaponAssignment[] = [];
    for (const s of selected.filter(s => s > 0)) {
      const i = s - 1;
      const weapon = this.character?.weapons && this.character.weapons[i];
      if (weapon && !weapon.inHand) create.push(weapon);
    }
    const remove: WeaponAssignment[] = [];
    for (let a = 0; a < weaponsInHand.length; a++) {
      const i = a + 1;
      if (!selected.find(w => w === i)) remove.push(weaponsInHand[a]);
    }
    if (create.length > 0 || remove.length > 0) {
      this.loading = true;
      await this.weaponSwitch(create, true);
      await this.weaponSwitch(remove, false);
      this.loading = false;
    }
  }

  async weaponSwitch(
    weaponAssignments: WeaponAssignment[],
    inHand: boolean
  ): Promise<unknown[] | undefined> {
    try {
      return await Promise.all(
        weaponAssignments.map(async w => {
          return await this.$store.dispatch(
            "character/updateWeaponAssignment",
            {
              id: w.id,
              inHand,
            }
          );
        })
      );
    } catch (error) {
      this.throwError(error);
    }
  }
}
</script>
