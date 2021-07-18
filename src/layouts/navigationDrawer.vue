<template>
  <v-navigation-drawer
    id="navigation-drawer"
    dark
    left
    :mini-variant="mini"
    mini-variant-width="80"
    app
    width="260"
  >
    <div class="px-2">
      <navigationHeader />

      <v-divider class="mx-3 mb-2" />

      <v-list nav dense>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>首頁</v-list-item-title>
        </v-list-item>

        <v-list-group :value="true" prepend-icon="mdi-animation">
          <template v-slot:activator>
            <v-list-item-title>VB API</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>安裝</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-clipboard-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Q&A</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>

    <div class="pt-12" />
  </v-navigation-drawer>
</template>

<script>
import navigationHeader from "../components/navigationHeader.vue";
export default {
  name: "navigationDrawer",

  data() {
    return {
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
    };
  },

  components: {
    navigationHeader,
  },

  computed: {
    mini() {
      return !this.$store.getters.getMini;
    },
  },
};
</script>

<style lang="sass">
#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>
