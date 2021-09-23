<template>
  <div>
    <!--擴展畫面增加 style的height要拔掉-->
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">常見問題</h1>
          <p class="mb-0 h4 ml-4">
            Visual Basic 的常見問題說明
          </p>
        </div>
      </div>
    </div>
    <div class="col-12 mb-3">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3 mb-4">安裝</h1>
        <v-row>
          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header class="fs-5 text-info"
                >進入下載連結時，畫面顯示 "抱歉!找不到您的訂閱"
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="fs-5 mt-1 mb-1">
                  可以點選圖片紅框內的<font class="text-danger bold">
                    加入Dev Essentials 方案</font
                  >
                  按鈕
                </p>

                <img
                  src="../../assets/img/VBImg/安裝問題1.png"
                  class="img-thumbnail"
                />
                <p class="fs-5 mt-1 mb-1">
                  點擊 <font class="text-danger bold"> confirm </font>
                </p>

                <img
                  src="../../assets/img/VBImg/安裝問題2.png"
                  class="img-thumbnail"
                />
                <p class="fs-5 mt-1 mb-1">
                  <font class="text-success bold">或者</font>， 進入visual
                  studio訂閱網頁，點選<font class="text-danger bold">
                    加入Visual Studio Dev Essentials
                  </font>
                </p>
                <img
                  src="../../assets/img/VBImg/安裝問題3.png"
                  class="img-thumbnail"
                />
                <p class="fs-5 mt-1 mb-1">
                  點擊 <font class="text-danger bold"> confirm </font>
                </p>
                <img
                  src="../../assets/img/VBImg/安裝問題2.png"
                  class="img-thumbnail"
                />
                <p class="fs-5 mt-1 mb-1">
                  <font class="text-success bold"
                    >完成後即可繼續下載步驟。</font
                  >
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </div>
    </div>
    <div class="col-12 mb-3">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3 mb-4">常見錯誤提示</h1>
        <v-row>
          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header class="fs-5 text-info"
                >'xxx'
                未宣告。由於其保護層級，可能無法對其進行存取。</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <p class="fs-5 bold">
                  <font class="text-danger">意思 : 此變數沒有宣告</font>
                  <br />
                  <font class="text-success">
                    解決方法 :<br />
                    1. &emsp;檢查之前有無宣告過 <br />
                    2. &emsp;檢查拼字( 尤其是 1 跟 l ) <br />
                  </font>
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="fs-5 text-info"
                >從字串 "xxx" 至類型 "資料型態" 的轉換是無效的。
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="fs-5 bold">
                  <font class="text-danger">意思 : 資料型態宣告錯誤 </font>
                  <br />
                  <font class="text-success">
                    解決方法 :<br />
                    1. &emsp;檢查資料型態是否錯誤 <br />
                    2. &emsp;檢查值是否正確 <br />
                  </font>
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VBQ&A",

  components: {},
};
</script>
