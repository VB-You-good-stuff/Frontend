<template>
  <v-app-bar
    id="default-app-bar"
    app
    class="v-bar--underline"
    color="transparent"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="70"
    flat
  >
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="changeMini()" />

    <!-- <navigationToggle class="hidden-sm-and-down" /> -->

    <v-spacer />
    <account />

    <!-- <default-search class="hidden-sm-and-down" /> -->
  </v-app-bar>
</template>

<script>
// Utilities
// import navigationToggle from "../components/navigationToggle.vue";
import account from "../components/account.vue";
export default {
  name: "appBar",

  components: {
    // DefaultSearch: () => import(
    //   /* webpackChunkName: "default-search" */
    //   './widgets/Search'
    // ),
    // navigationToggle,
    account,
  },

  computed: {
    mini() {
      return this.$store.getters.getMini;
    },
    drawer() {
      return this.$store.getters.getDrawer;
    },
    // ...sync('app', [
    //   'drawer',
    //   'mini',
    // ]),
  },
  methods: {
    changeMini() {
      this.$store.commit("changeMini");
      console.log(this.$store.getters.getMini);
    },
  },
};
</script>
