<template>
  <v-row>
    <span>{{ this.$route.query.doc }}</span>
    <VBDocHead />
    <VBDoc />
  </v-row>
</template>
<script>
import VBDoc from "../components/VBDoc.vue";
import VBDocHead from "../components/VBDocHead.vue";
export default {
  name: "VBLang",
  props: ["doc"],

  components: { VBDoc, VBDocHead },
};
</script>
