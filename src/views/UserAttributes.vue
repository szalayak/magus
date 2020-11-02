<template
  ><v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-title>{{ $t("profile") }}</v-list-item-title>
      </v-list-item>
    </template>
    <v-card>
      <v-toolbar dark color="primary" class="mb-2">
        <v-toolbar-title>{{ $t("profile") }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="profile">
          <v-text-field :value="username" :label="$t('username')" disabled />
          <v-text-field
            v-model="name"
            :label="$t('name')"
            :rules="[v => !!v || $t('field-is-mandatory')]"
          />
          <v-text-field
            v-model="email"
            :label="$t('email')"
            type="email"
            :rules="[v => !!v || $t('field-is-mandatory')]"
          />
          <v-select v-model="locale" :items="locales" :label="$t('locale')" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="dialog = false">
          {{ $t("cancel") }}
        </v-btn>
        <v-btn color="primary" text @click="save">
          {{ $t("save") }}
        </v-btn>
      </v-card-actions>
    </v-card>
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
  </v-dialog>
</template>
<script lang="ts">
import { Auth } from "aws-amplify";
import Vue from "vue";
import Component from "vue-class-component";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { Locale } from "@/API";

interface Attribute {
  name: string;
  value?: string;
}

type Form = Vue & { validate: () => boolean };

@Component({
  name: "user-attributes",
})
export default class UserAttributes extends Vue {
  dialog = false;
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

  get locale() {
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

  setAttributeValue(Name: string, Value: string) {
    const attribute = this.getAttribute(Name);
    if (attribute) attribute.setValue(Value);
    else this.currentAttributes.push(new CognitoUserAttribute({ Name, Value }));
  }

  save() {
    if ((this.$refs.profile as Form).validate()) {
      Auth.updateUserAttributes(this.$store.state.app.user, {
        name: this.name,
        email: this.email,
        locale: this.locale,
      })
        .then(() => {
          this.$i18n.locale = this.locale;
          this.$root.$i18n.locale = this.locale;
          this.$vuetify.lang.current = this.locale;
          this.dialog = false;
        })
        .catch(err => {
          this.messages = [err.message];
          this.notification = true;
        });
    }
  }

  mounted() {
    Auth.userAttributes(this.$store.state.app?.user).then(
      attributes => (this.currentAttributes = attributes)
    );
  }
}
</script>
