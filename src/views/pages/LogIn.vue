<template>
  <!-- Section -->
  <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
    <div class="container">
      <p class="text-center">
        <a href="/" class="d-flex align-items-center justify-content-center">
          <v-icon large>mdi-arrow-left</v-icon>
          回首頁
        </a>
      </p>
      <div
        class="row justify-content-center form-bg-image"
        data-background-lg="../../assets/img/illustrations/signin.svg"
      >
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div
            class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500"
          >
            <div class="text-center text-md-center mb-4 mt-md-0">
              <h1 class="mb-0 h3">登入 VB你個好東東</h1>
            </div>
            <form action="#" class="mt-4">
              <!-- Form -->
              <div class="form-group mb-4">
                <label for="email">帳號</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    <v-icon large>mdi-email</v-icon>
                  </span>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="example@company.com"
                    id="email"
                    autofocus
                    required
                  />
                </div>
              </div>
              <!-- End of Form -->
              <div class="form-group">
                <!-- Form -->
                <div class="form-group mb-4">
                  <label for="password">密碼</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon2">
                      <v-icon large>mdi-lock</v-icon>
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      class="form-control"
                      id="password"
                      required
                    />
                  </div>
                </div>
                <!-- End of Form -->
                <div
                  class="d-flex justify-content-between align-items-top mb-4"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="remember"
                    />
                    <label class="form-check-label mb-0" for="remember">
                      記住我
                    </label>
                  </div>
                  <div>
                    <a href="./forgot-password.html" class="small text-right"
                      >忘記密碼?</a
                    >
                  </div>
                </div>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-gray-800">登入</button>
              </div>
            </form>

            <div class="d-flex justify-content-center align-items-center mt-4">
              <span class="fw-normal">
                還沒有帳號?
                <a href="./sign-up.html" class="fw-bold">現在註冊</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "LogIn",

  components: {},
};
</script>
