<template>
  <page-template>
    <v-container fluid>
      <v-toolbar flat>
        <v-toolbar-title>{{ $t("dm-overview") }}</v-toolbar-title>
        <v-spacer />
        <v-btn icon text @click="refresh"><v-icon>mdi-refresh</v-icon></v-btn>
      </v-toolbar>
      <v-tabs v-model="tab" align-title>
        <v-tab key="abilities">{{ $t("abilities") }}</v-tab>
        <v-tab-item key="abilities">
          <v-card flat>
            <v-toolbar flat>
              <v-card-title>{{ $t("player-characters") }}</v-card-title>
              <character-ability-selector
                modifier-dialog
                @select="abilityCheckForAllPCs"
              />
            </v-toolbar>
            <v-card-text
              ><v-row dense>
                <template v-for="character in playerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    :key="character.id"
                  >
                    <character-abilities-quick-view
                      :character="character"
                      :bus="pcEvents"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                      <template v-slot:subtitle>{{
                        ownerToString(character.owner)
                      }}</template>
                    </character-abilities-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-toolbar flat>
              <v-card-title>{{ $t("non-player-characters") }}</v-card-title>
              <character-ability-selector
                modifier-dialog
                @select="abilityCheckForAllNPCs"
              />
            </v-toolbar>
            <v-card-text
              ><v-row dense>
                <template v-for="character in nonPlayerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-abilities-quick-view
                      :character="character"
                      :bus="npcEvents"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                    </character-abilities-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab key="vitality">{{ $t("vitality") }}</v-tab>
        <v-tab-item key="vitality">
          <v-card flat>
            <v-card-title>{{ $t("player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in playerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-vitality-quick-view
                      :character="character"
                      @error="onError"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                      <template v-slot:subtitle>{{
                        ownerToString(character.owner)
                      }}</template>
                    </character-vitality-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-title>{{ $t("non-player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in nonPlayerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-vitality-quick-view
                      :character="character"
                      @error="onError"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                    </character-vitality-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card></v-tab-item
        >
        <v-tab key="combat-values">{{ $t("combat-values") }}</v-tab>
        <v-tab-item key="combat-values">
          <v-card flat>
            <v-card-title>{{ $t("player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in playerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    xl="3"
                    :key="character.id"
                  >
                    <character-combat-values-quick-view :character="character">
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                      <template v-slot:subtitle>{{
                        ownerToString(character.owner)
                      }}</template>
                    </character-combat-values-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-toolbar flat>
              <v-card-title>{{ $t("non-player-characters") }}</v-card-title>
              <v-btn color="primary" text @click="initiationForAllNPCs">{{
                $t("throw-initiative")
              }}</v-btn>
              <v-btn color="primary" text @click="offenceForAllNPCs">{{
                $t("throw-attack")
              }}</v-btn>
            </v-toolbar>
            <v-card-text
              ><v-row dense>
                <template v-for="character in nonPlayerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    xl="3"
                    :key="character.id"
                  >
                    <character-combat-values-quick-view
                      :character="character"
                      :bus="npcEvents"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                    </character-combat-values-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card></v-tab-item
        >
        <v-tab key="spell-resistance">{{ $t("spell-resistance") }}</v-tab>
        <v-tab-item key="spell-resistance">
          <v-card flat>
            <v-card-title>{{ $t("player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in playerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-spell-resistance-quick-view
                      :character="character"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                      <template v-slot:subtitle>{{
                        ownerToString(character.owner)
                      }}</template>
                    </character-spell-resistance-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-title>{{ $t("non-player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in nonPlayerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-spell-resistance-quick-view
                      :character="character"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                    </character-spell-resistance-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card></v-tab-item
        >
        <v-tab key="psi-mana-points"
          >{{ $t("psi") }}/{{ $t("mana-points") }}</v-tab
        >
        <v-tab-item key="psi-mana-points"
          ><v-card flat>
            <v-card-title>{{ $t("player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in playerCharacters">
                  <template v-if="character.psiUser || character.magicUser">
                    <v-col
                      cols="12"
                      xs="12"
                      sm="6"
                      md="4"
                      lg="3"
                      xl="2"
                      :key="character.id"
                    >
                      <character-psi-mana-points-quick-view
                        :character="character"
                        @error="onError"
                      >
                        <template v-slot:title>
                          <router-link :to="characterToLink(character)">{{
                            character.name
                          }}</router-link>
                        </template>
                        <template v-slot:subtitle>{{
                          ownerToString(character.owner)
                        }}</template>
                      </character-psi-mana-points-quick-view>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-title>{{ $t("non-player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in nonPlayerCharacters">
                  <template v-if="character.psiUser || character.magicUser">
                    <v-col
                      cols="12"
                      xs="12"
                      sm="6"
                      md="4"
                      lg="3"
                      xl="2"
                      :key="character.id"
                    >
                      <character-psi-mana-points-quick-view
                        :character="character"
                        @error="onError"
                      >
                        <template v-slot:title>
                          <router-link :to="characterToLink(character)">{{
                            character.name
                          }}</router-link>
                        </template>
                      </character-psi-mana-points-quick-view>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-card-text>
          </v-card></v-tab-item
        >
        <v-tab key="percentage-skills">{{ $t("percentage-skills") }}</v-tab>
        <v-tab-item key="percentage-skills">
          <v-card flat>
            <v-card-title>{{ $t("player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in playerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-percentage-skills-quick-view
                      :character="character"
                      @error="onError"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                      <template v-slot:subtitle>{{
                        ownerToString(character.owner)
                      }}</template>
                    </character-percentage-skills-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-title>{{ $t("non-player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in nonPlayerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-percentage-skills-quick-view
                      :character="character"
                      @error="onError"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                    </character-percentage-skills-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab key="skills">{{ $t("skills") }}</v-tab>
        <v-tab-item key="skills">
          <v-card flat>
            <v-card-title>{{ $t("player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in playerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-skills-quick-view
                      :character="character"
                      @error="onError"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                      <template v-slot:subtitle>{{
                        ownerToString(character.owner)
                      }}</template>
                    </character-skills-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-title>{{ $t("non-player-characters") }}</v-card-title>
            <v-card-text
              ><v-row dense>
                <template v-for="character in nonPlayerCharacters">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    :key="character.id"
                  >
                    <character-skills-quick-view
                      :character="character"
                      @error="onError"
                    >
                      <template v-slot:title>
                        <router-link :to="characterToLink(character)">{{
                          character.name
                        }}</router-link>
                      </template>
                    </character-skills-quick-view>
                  </v-col>
                </template>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
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
  </page-template>
</template>
<script lang="ts">
import CharacterAbilitiesQuickView from "@/components/character/dm-quick-view/CharacterAbilitiesQuickView.vue";
import CharacterCombatValuesQuickView from "@/components/character/dm-quick-view/CharacterCombatValuesQuickView.vue";
import CharacterPsiManaPointsQuickView from "@/components/character/dm-quick-view/CharacterPsiManaPointsQuickView.vue";
import CharacterSpellResistanceQuickView from "@/components/character/dm-quick-view/CharacterSpellResistanceQuickView.vue";
import CharacterVitalityQuickView from "@/components/character/dm-quick-view/CharacterVitalityQuickView.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { Character, LooseObject, User } from "@/store";
import { characterToLink } from "@/utils";
import Component from "vue-class-component";
import Vue from "vue";
import CharacterAbilitySelector from "@/components/character/CharacterAbilitySelector.vue";
import CharacterPercentageSkillsQuickView from "@/components/character/dm-quick-view/CharacterPercentageSkillsQuickView.vue";
import CharacterSkillsQuickView from "@/components/character/dm-quick-view/CharacterSkillsQuickView.vue";
import PageTemplate from "@/components/PageTemplate.vue";

@Component({
  name: "character-overview-as-dm",
  components: {
    "character-abilities-quick-view": CharacterAbilitiesQuickView,
    "character-vitality-quick-view": CharacterVitalityQuickView,
    "character-combat-values-quick-view": CharacterCombatValuesQuickView,
    "character-spell-resistance-quick-view": CharacterSpellResistanceQuickView,
    "character-psi-mana-points-quick-view": CharacterPsiManaPointsQuickView,
    "character-percentage-skills-quick-view": CharacterPercentageSkillsQuickView,
    "character-skills-quick-view": CharacterSkillsQuickView,
    "character-ability-selector": CharacterAbilitySelector,
    "page-template": PageTemplate,
  },
})
export default class CharacterOverviewAsDM extends TitleComponent {
  tab = null;
  title = this.$t("dm-overview");
  messages: string[] = [];
  notification = false;
  npcEvents = new Vue();
  pcEvents = new Vue();

  get playerCharacters(): Character[] {
    return this.$store.getters["character/playerCharactersAsDM"];
  }

  get nonPlayerCharacters(): Character[] {
    return this.$store.getters["character/nonPlayerCharactersAsDM"];
  }

  characterToLink(character: Character, selector?: string) {
    return characterToLink(character, selector);
  }

  onError(error: { messages: string[] }) {
    this.messages = error.messages;
    this.notification = true;
  }

  ownerToString(owner: string): string {
    return this.users.find((u: User) => u.username === owner)?.name || owner;
  }

  get users() {
    return this.$store.getters["getUsers"];
  }

  async refresh() {
    try {
      await this.$store.dispatch(
        "character/loadByDungeonMaster",
        this.$store.state.app.user.username
      );
      await this.$store.dispatch("loadUsers");
      this.$forceUpdate();
    } catch (error) {
      this.messages =
        typeof error === "string"
          ? [error]
          : error.errors?.map((err: LooseObject) => err.message) || [];
      this.notification = true;
    }
  }

  async created() {
    await this.refresh();
    const owners = Array.from(
      new Set(this.playerCharacters.map(character => character.owner))
    );
    const dungeonMaster = this.$store.getters["currentUser"];
    Promise.all(
      owners.map(owner => {
        return this.$store.dispatch("character/subscribeToUpdate", {
          owner,
          dungeonMaster,
        });
      })
    );
  }

  initiationForAllNPCs() {
    this.npcEvents.$emit("initiation");
  }

  offenceForAllNPCs() {
    this.npcEvents.$emit("offence");
  }

  abilityCheckForAllPCs({
    modifier,
    ability,
  }: {
    modifier: number;
    ability: string;
  }) {
    this.pcEvents.$emit("ability-check", ability, modifier);
  }

  abilityCheckForAllNPCs({
    modifier,
    ability,
  }: {
    modifier: number;
    ability: string;
  }) {
    this.npcEvents.$emit("ability-check", ability, modifier);
  }
}
</script>
