<template>
  <v-row>
    <div class="px-3" style="text-align: center;">
      <img
        src="../../assets/logo.svg"
        height="250"
        width="250"
        alt="VB Logo"
        style="text-align: center;"
        class="mt-3 mb-4"
      />
      <h1 style="text-align:center" class="display-1 bold">
        VB 你個好東東
      </h1>
      <p class="lead">
        一切問題請詢問淑芬老師，祝您有個美好的一天
      </p>
      <p class="lead">
        <router-link
          to="/VBInstall"
          class="btn btn-lg btn-secondary fw-bold border-white bg-white "
          >Get Start</router-link
        >
      </p>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
