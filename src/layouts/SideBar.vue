<template>
  <div>
    <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
      <router-link to="/home">
        <img
          class="navbar-brand-dark"
          src="../assets/logo.svg"
          height="40"
          width="40"
          alt="VB Logo"
        />
        <img
          class="navbar-brand-light"
          src="../assets/logo.svg"
          height="40"
          width="40"
          alt="VB Logo"
        />
      </router-link>
      <div class="d-flex align-items-center">
        <button
          class="navbar-toggler d-lg-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <nav
      id="sidebarMenu"
      class="sidebar d-lg-block bg-gray-800 text-white collapse"
      data-simplebar
    >
      <div class="sidebar-inner px-4 pt-3">
        <div
          class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4"
        >
          <!-- <div class="d-flex align-items-center">
            <div class="avatar-lg me-4">
              <img
                src="../assets/img/team/profile-picture-3.jpg"
                class="card-img-top rounded-circle border-white"
                alt="Bonnie Green"
              />
            </div>
            <div class="d-block">
              <h2 class="h5 mb-3">Hi, Jane</h2>
              <a
                href="../../pages/examples/sign-in.html"
                class="btn btn-secondary btn-sm d-inline-flex align-items-center"
              >
                <svg
                  class="icon icon-xxs me-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Sign Out
              </a>
            </div>
          </div> -->
          <div class="collapse-close d-md-none">
            <a
              id="close_button"
              href="#sidebarMenu"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <svg
                class="icon icon-xs"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <ul class="nav flex-column pt-3 pt-md-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link d-flex align-items-center">
              <span class="sidebar-icon">
                <img
                  src="../assets/logo.svg"
                  height="40"
                  width="40"
                  alt="VB Logo"
                />
              </span>
              <span class="mt-1 ms-1 sidebar-text">VB 你個好東東</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/VBInstall" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af">mdi-download </v-icon>
              </span>
              <span class="sidebar-text">VB 安裝</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/VBStart" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af">mdi-folder-plus </v-icon>
              </span>
              <span class="sidebar-text">VB 新增專案</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/VBSave" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af"> mdi-content-save </v-icon>
              </span>
              <span class="sidebar-text">VB 儲存專案&壓縮</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/VBFuncIntro" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af">mdi-book </v-icon>
              </span>
              <span class="sidebar-text">VB 功能概述</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/VBFirstWork" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af">mdi-bag-personal </v-icon>
              </span>
              <span class="sidebar-text">第一個程式</span>
            </router-link>
          </li>
          <li class="nav-item">
            <span
              class="nav-link  collapsed  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#submenu-pages1"
            >
              <span>
                <span class="sidebar-icon">
                  <v-icon color="#9ca3af">mdi-notebook-multiple</v-icon>
                </span>
                <span class="sidebar-text">VB 物件常用方法</span>
              </span>
              <span class="link-arrow">
                <v-icon color="#9ca3af">mdi-chevron-right </v-icon>
              </span>
            </span>
            <div
              class="multi-level collapse "
              role="list"
              id="submenu-pages1"
              aria-expanded="false"
            >
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBFunction/Button" class="nav-link">
                    <span class="sidebar-text">Button</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/VBFunction/Form" class="nav-link">
                    <span class="sidebar-text">Form</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/VBFunction/TextBox" class="nav-link">
                    <span class="sidebar-text">TextBox</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/VBFunction/Label" class="nav-link">
                    <span class="sidebar-text">Label</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <span
              class="nav-link  collapsed  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#submenu-pages2"
            >
              <span>
                <span class="sidebar-icon">
                  <v-icon color="#9ca3af">mdi-book-open-variant</v-icon>
                </span>
                <span class="sidebar-text">VB 基礎語法</span>
              </span>
              <span class="link-arrow">
                <v-icon color="#9ca3af">mdi-chevron-right </v-icon>
              </span>
            </span>
            <div
              class="multi-level collapse "
              role="list"
              id="submenu-pages2"
              aria-expanded="false"
            >
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBBasic/testingSkill" class="nav-link">
                    <span class="sidebar-text">解題技巧及思維</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBBasic/define" class="nav-link">
                    <span class="sidebar-text">變數宣告</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBBasic/dataType" class="nav-link">
                    <span class="sidebar-text">資料型態</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBBasic/operator" class="nav-link">
                    <span class="sidebar-text">運算子</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBBasic/pratice" class="nav-link">
                    <span class="sidebar-text">綜合練習</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBBasic/debug" class="nav-link">
                    <span class="sidebar-text">Debug</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBBasic/breakpoint" class="nav-link">
                    <span class="sidebar-text">中斷點</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <span
              class="nav-link  collapsed  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#submenu-pages3"
            >
              <span>
                <span class="sidebar-icon">
                  <v-icon color="#9ca3af">mdi-book-open-page-variant</v-icon>
                </span>
                <span class="sidebar-text">VB 進階語法</span>
              </span>
              <span class="link-arrow">
                <v-icon color="#9ca3af">mdi-chevron-right </v-icon>
              </span>
            </span>

            <div
              class="multi-level collapse "
              role="list"
              id="submenu-pages3"
              aria-expanded="false"
            >
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBAdvanced/if-Else" class="nav-link">
                    <span class="sidebar-text">If-Eles</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBAdvanced/Select Case" class="nav-link">
                    <span class="sidebar-text">Select-Case</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBAdvanced/Loop" class="nav-link">
                    <span class="sidebar-text">VB的迴圈</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBfinal" class="nav-link">
                    <span class="sidebar-text">迴圈練習題</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBAdvanced/ForNext" class="nav-link">
                    <span class="sidebar-text">For...Next</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBAdvanced/DoLoop" class="nav-link">
                    <span class="sidebar-text">Do...Loop</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBAdvanced/NestedLoop" class="nav-link">
                    <span class="sidebar-text">巢狀迴圈</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBAdvanced/Array" class="nav-link">
                    <span class="sidebar-text">陣列</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBAdvanced/Sort" class="nav-link">
                    <span class="sidebar-text">排序</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <span
              class="nav-link  collapsed  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#submenu-pages4"
            >
              <span>
                <span class="sidebar-icon">
                  <v-icon color="#9ca3af">mdi-notebook-multiple</v-icon>
                </span>
                <span class="sidebar-text">課程作業</span>
              </span>
              <span class="link-arrow">
                <v-icon color="#9ca3af">mdi-chevron-right </v-icon>
              </span>
            </span>
            <div
              class="multi-level collapse "
              role="list"
              id="submenu-pages4"
              aria-expanded="false"
            >
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBHomework/hw1015" class="nav-link">
                    <span class="sidebar-text">10/15作業</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBHomework/hw1022" class="nav-link">
                    <span class="sidebar-text">10/22作業</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBHomework/hw1029" class="nav-link">
                    <span class="sidebar-text">10/29作業</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBHomework/hw1105" class="nav-link">
                    <span class="sidebar-text">11/05作業</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBHomework/hw1126" class="nav-link">
                    <span class="sidebar-text">11/26作業</span>
                  </router-link>
                </li>
              </ul>
              <ul class="flex-column nav">
                <li class="nav-item">
                  <router-link to="/VBHomework/hw1203" class="nav-link">
                    <span class="sidebar-text">12/03作業</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <!-- <li class="nav-item ">
            <router-link to="/VBfinal" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af">mdi-notebook-multiple</v-icon>
              </span>
              <span class="sidebar-text">迴圈練習題</span>
            </router-link>
          </li> -->
          <li class="nav-item ">
            <router-link to="/VBQA" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af">mdi-chat-question</v-icon>
              </span>
              <span class="sidebar-text">常見問題</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/forum" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af">mdi-frequently-asked-questions </v-icon>
              </span>
              <span class="sidebar-text">問題討論</span>
            </router-link>
          </li>

          <!-- <li class="nav-item ">
            <router-link to="../../pages/settings.html" class="nav-link">
              <span class="sidebar-icon">
                <v-icon color="#9ca3af">mdi-cog</v-icon>
              </span>

              <span class="sidebar-text">Settings</span>
            </router-link>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["IsLogin"],
  methods: {
    toVBDoc() {
      this.$router.push({ name: "VBLang", params: { userId: 1 } });
    },

    close() {
      if (
        document
          .getElementById("sidebarMenu")
          .className.split(" ")
          .filter((a) => a == "show").length == 1
      ) {
        document.getElementById("close_button").click();
      }
    },
  },
  watch: {
    $route() {
      if (document.documentElement.scrollWidth <= 1000) {
        this.close();
      }
    },
  },
};
</script>
