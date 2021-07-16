<template>
  <v-menu
    bottom
    left
    min-width="200"
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item link>
        <v-list-item-title>Profile</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item link @click="logIn()">
        <v-list-item-title>Log In</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item link>
        <v-list-item-title>Log Out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "account",

  data: () => ({}),
  computed: {},
  methods: {
    logIn() {
      this.$router.push("/logIn");
    },
  },
};
</script>
