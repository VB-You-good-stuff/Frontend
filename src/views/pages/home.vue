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
      <p class="lead fs-5">
        一切問題請詢問淑芬老師，
        也可以加入官方Line@詢問，在平日的晚上我們會盡快回覆您的各種疑難雜症<br />
        祝您有個美好的一天
      </p>
      <div>
        <p class="mb-0 fs-5">
          <img
            src="../../assets/img/VBImg/LINE_logo.svg"
            height="25"
            width="25"
            alt="line Logo"
            class="mb-0"
          />
          QR_CODE
        </p>
        <img
          src="../../assets/img/VBImg/line@qrcode.png"
          height="110"
          width="110"
          alt="line@ QR CODE"
          style="text-align: center;"
          class="mt-0 mb-1"
        />
      </div>

      <p class="d-grid col-3 mx-auto">
        <router-link to="/VBInstall" class="btn btn-warning btn-lg fw-bold  "
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
