<template>
  <v-btn class="ml-3 mr-4" elevation="1" fab small @click="changeMini()">
    <v-icon>
      {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
    </v-icon>
  </v-btn>
</template>

<script>
// Utilities

export default {
  name: "DefaultDrawerToggle",
  data() {
    return {};
  },

  computed: {
    mini() {
      return this.$store.getters.getMini;
    },
  },

  methods: {
    changeMini() {
      this.$store.commit("changeMini");
    },
  },
};
</script>
