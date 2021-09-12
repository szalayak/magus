<template>
  <page-template>
    <template v-slot:app-bar>
      <app-bar>
        <template v-slot:actions>
          <v-btn v-if="!edit" icon text @click="edit = true"
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
          <v-btn v-if="edit" icon text @click="cancel" color="error"
            ><v-icon>mdi-close</v-icon></v-btn
          >
          <v-btn v-if="edit" icon text @click="save" color="primary"
            ><v-icon>mdi-content-save</v-icon></v-btn
          >
        </template>
      </app-bar>
    </template>
    <v-card flat>
      <v-card-title>{{ $t("profile") }}</v-card-title>
      <v-card-text>
        <v-alert v-model="notification" dense outlined type="error" dismissible>
          {{ messages }}
        </v-alert>
        <v-form ref="profile">
          <v-text-field :value="username" :label="$t('username')" disabled />
          <v-text-field
            :disabled="!edit"
            v-model="name"
            :label="$t('name')"
            :rules="[v => !!v || $t('field-is-mandatory')]"
          />
          <v-text-field
            :disabled="!edit"
            v-model="email"
            :label="$t('email')"
            type="email"
            :rules="[v => !!v || $t('field-is-mandatory')]"
          />
          <v-select
            :disabled="!edit"
            v-model="locale"
            :items="locales"
            :label="$t('locale')"
          />
        </v-form>
      </v-card-text>
    </v-card>
  </page-template>
</template>
<script lang="ts">
import { Auth } from "aws-amplify";
import Vue from "vue";
import Component from "vue-class-component";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { Locale } from "@/API";
import { Form } from "@/utils";
import PageTemplate from "@/components/PageTemplate.vue";
import AppBar from "@/components/AppBar.vue";
import { LooseObject } from "@/store";

@Component({
  name: "user-attributes",
  components: {
    PageTemplate,
    AppBar,
  },
})
export default class UserAttributes extends Vue {
  edit = false;
  notification = false;
  messages: string[] = [];
  currentAttributes: CognitoUserAttribute[] = [];
  writeableAttributes = [
    "name",
    "family_name",
    "middle_name",
    "gender",
    "nickname",
    "preferred_username",
    "picture",
    "profile",
    "email",
    "locale",
  ];
  locales = Object.keys(Locale).map(locale => ({
    value: locale,
    text: this.$i18n.t(locale),
  }));

  get username(): string {
    return this.$store.state.app?.user?.username || "";
  }

  get name(): string {
    return this.getAttributeValue("name");
  }

  set name(name: string) {
    this.setAttributeValue("name", name);
  }

  get email(): string {
    return this.getAttributeValue("email");
  }

  set email(email: string) {
    this.setAttributeValue("email", email);
  }

  get locale(): string {
    return this.getAttributeValue("locale");
  }

  set locale(locale: string) {
    this.setAttributeValue("locale", locale);
  }

  getAttribute(attr: string): CognitoUserAttribute | undefined {
    return this.currentAttributes.find(a => a.getName() === attr);
  }

  getAttributeValue(attr: string): string {
    return this.getAttribute(attr)?.getValue() || "";
  }

  setAttributeValue(Name: string, Value: string): void {
    const attribute = this.getAttribute(Name);
    if (attribute) attribute.setValue(Value);
    else this.currentAttributes.push(new CognitoUserAttribute({ Name, Value }));
  }

  cancel(): void {
    this.refresh();
    this.edit = false;
  }

  async save(): Promise<void> {
    if ((this.$refs.profile as Form).validate()) {
      try {
        await Auth.updateUserAttributes(this.$store.state.app.user, {
          name: this.name,
          email: this.email,
          locale: this.locale,
        });
        if (this.$i18n.locale !== this.locale) {
          this.$i18n.locale = this.locale;
          this.$root.$i18n.locale = this.locale;
          this.$vuetify.lang.current = this.locale;
          this.locales = Object.keys(Locale).map(locale => ({
            value: locale,
            text: this.$i18n.t(locale),
          }));
        }
        this.edit = false;
        this.notification = false;
      } catch (err) {
        this.messages = [(err as LooseObject).message as string];
        this.notification = true;
      }
    }
  }

  refresh(): void {
    Auth.userAttributes(this.$store.state.app?.user).then(
      attributes => (this.currentAttributes = attributes)
    );
  }

  mounted(): void {
    this.refresh();
  }
}
</script>
