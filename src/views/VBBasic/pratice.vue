<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">綜合練習</h1>
          <p class="mb-0 h4">
            綜合三個章節，宣告、資料型態、運算子的練習題講解
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">題目</h1>
        <p class="mb-0 fs-5">
          讓使用者輸入完姓名，點擊按鈕後，在畫面上顯示"Hello"+使用者姓名(EX.使用者輸入John，顯示Hello
          John)
        </p>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">如何解題</h1>
        <p class="mb-0 fs-5">
          首先，Layout(畫面)的部分，在看完題目後，我們可以大致列出在Layout(畫面)上所需的物件清單
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <table
            class="table table-striped table-hover"
            style="text-align:center; vertical-align: middle;"
          >
            <thead>
              <tr>
                <th scope="col">
                  <font style="font-size:20px;">所需物件</font>
                </th>
                <th scope="col">
                  <font style="font-size:20px;">物件用途</font>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TextBox</td>
                <td>讓使用者能輸入姓名</td>
              </tr>
              <tr>
                <td>Boutton</td>
                <td>輸入完成後的點擊按鈕</td>
              </tr>
              <tr>
                <td>Label</td>
                <td>
                  點擊按鈕後顯示結果的文字標籤，以及用來說明的文字標籤
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          當然，這僅是初步構想時所需的物件，如果在寫程式的同時發現初步規劃的物件不夠使用時，還是可以再回到Layout(畫面)的地方做調整。
          列完清單後，就開始拉畫面吧!<br />
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_FuncIntro_6.png"
            class="img-fluid"
          />
        </div>
      </div>

      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">小練習</h1>
        <p class="mb-0 fs-5">
          試著做做看下面的練習題吧!
        </p>
      </div>
      <div class="card border-0 shadow practice_background ">
        <div class="card-body">
          <p class="fs-5 bold mb-0">試著宣告出下列所有變數</p>
          <div class="code_background">
            <p>
              <font style="color:#00C853"> 1. 變數名為car的字串</font><br />
              <font style="color:#00C853">
                2. 變數名為computer的整數，值為132231</font
              ><br />
              <font style="color:#00C853"> 3. 一個值為false的變數done</font
              ><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-row>
</template>
<style>
.bold {
  font-weight: bold;
}
.code_background {
  background-color: black;
}
.practice_background {
  background-color: #ffdeae;
}
</style>
