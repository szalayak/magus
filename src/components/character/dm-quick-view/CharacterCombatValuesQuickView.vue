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
import Component from "vue-class-component";
import CharacterCombatValuesQuickViewBase from "../CharacterCombatValuesQuickViewBase";
import ThrowScenarioTriggerField from "../ThrowScenarioTriggerField.vue";
@Component({
  name: "character-combat-values-quick-view",
  components: {
    "throw-scenario-trigger-field": ThrowScenarioTriggerField,
  },
})
export default class CharacterCombatValuesQuickView extends CharacterCombatValuesQuickViewBase {}
</script>
