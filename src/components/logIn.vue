<template>
  <v-card elevation="2" class="mx-auto my-12" max-width="374">
    <div class="text-overline mb-4">
      會員登入
    </div>
    <form>
      <v-text-field v-model="name" label="帳號" required></v-text-field>
      <v-text-field v-model="passWD" label="密碼" required></v-text-field>
    </form>

    <v-card-actions>
      <v-btn outlined rounded text>
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// Utilities

export default {
  name: "logIn",
  data() {
    return {
      name: "",
      passWD: "",
    };
  },

  computed: {},

  methods: {},
};
</script>
