<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">Do...Loop迴圈</h1>
          <p class="mb-0 h4">
            Do…Loop迴圈可以<font class="bold text-success"
              >分為 "While" 與 "Until" 兩種敘述方式</font
            >，<font class="bold text-danger">While</font>是<font
              class="bold text-danger"
              >判斷條件式為真</font
            >時， 繼續執行程式區塊，直到條件判斷為假，<font
              class="bold text-danger"
              >Until</font
            >則是<font class="bold text-danger">判斷條件式為假</font
            >時，繼續執行程式區塊， 直到條件判斷為真，而這兩種又在分為
            <font class="bold text-danger"
              >"先做條件式判斷，再執行程式區塊"</font
            >
            的前測， 與
            <font class="bold text-danger"
              >"先執行程式區塊，再做條件式判斷"</font
            >
            的後測。
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Do...Loop迴圈範例</h1>
        <p class="mb-0 fs-5">
          這篇我們會用同一個例子，<font class="bold text-success">終極密碼</font
          >，將四種Do…Loop迴圈結構都試一次。
          <br />
          首先，拉出畫面，畫面及各元件屬性如下 :
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop.png" class="img-fluid" />
          <table
            class="table table-striped table-hover"
            style="text-align: center; vertical-align: middle"
          >
            <thead>
              <tr>
                <th scope="col">
                  <font style="font-size: 20px">物件</font>
                </th>
                <th scope="col">
                  <font style="font-size: 20px">Name</font>
                </th>
                <th scope="col">
                  <font style="font-size: 20px">Text</font>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lable</td>
                <td>lbl_describe</td>
                <td>終極密碼，點擊"開始"開始遊戲 :</td>
              </tr>
              <tr>
                <td>Button</td>
                <td>btn_start</td>
                <td>開始</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0" id="DoLoopWhileUntil">
        <p class="mb-0 mt-3 fs-5">
          點擊兩下 開始Button 進入程式編輯區，開始撰寫程式碼。
        </p>
        <h1 class="mt-4 h3">Do…Loop While/Until</h1>
        <p class="mb-0 fs-5">
          先從<font class="bold text-success">Do...Loop While</font>開始。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_1.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          Do…Loop While 會<font class="bold text-success"
            >先執行程式區塊一次</font
          >，才判斷條件式，只要<font class="bold text-danger"
            >條件式判斷為假，迴圈將會終止</font
          >，判斷式為真，迴圈將會繼續執行。
        </p>
        <p class="mb-0 mt-3 fs-5">
          再來是<font class="bold text-success">Do…Loop Until</font>。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_2.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          Do…Loop Until會<font class="bold text-success"
            >先執行程式區塊一次</font
          >，才判斷條件式，只要<font class="bold text-danger"
            >條件式判斷為真，迴圈將會終止</font
          >，判斷式為假，迴圈將會繼續執行。
        </p>
      </div>
      <div class="mb-3 mb-lg-0" id="DoWhileUntilLoop">
        <h1 class="mt-4 h3">Do While/Until…Loop</h1>
        <p class="mb-0 fs-5">
          先從<font class="bold text-success">Do While...Loop</font>開始。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_3.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          Do While…Loop會<font class="bold text-success">先判斷條件式</font
          >，才執行程式區塊，如果一開始就猜對數字，迴圈就不會跑到裡面有If的程式區塊，直接執行Loop後面的程式碼。
        </p>
        <p class="mb-0 mt-3 fs-5">
          再來是<font class="bold text-success">Do Until…Loop</font>。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_4.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          Do Until…Loop會<font class="bold text-success">先判斷條件式</font
          >，才執行程式區塊，如果一開始就猜對數字，迴圈就不會跑到裡面有If的程式區塊，直接執行Loop後面的程式碼。
        </p>
      </div>
    </div>
    <div class="col-12 mb-4" id="DoLoopContinue">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Continue陳述式</h1>
        <p class="mb-0 fs-5">
          如何在Do...Loop迴圈中使用continue陳述式，讓我們來看
          <font class="bold text-success">列出1到100之間三的倍數</font>
          這個例子。
        </p>
        <p class="mt-2 mb-0 fs-5">
          <font class="bold text-success">Do…loop while</font>
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_5.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mt-2 mb-0 fs-5">
          <font class="bold text-success">Do…loop Until</font>
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_6.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mt-2 mb-0 fs-5">
          <font class="bold text-success">Do While…loop</font>
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_7.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mt-2 mb-0 fs-5">
          <font class="bold text-success">Do Until…loop</font>
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_8.png" class="img-fluid" />
        </div>
      </div>
    </div>
    <div class="col-12 mb-4" id="DoLoopExit">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Exit陳述式</h1>
        <p class="mb-0 fs-5">
          如何在Do...Loop迴圈中使用exit陳述式，讓我們來看
          <font class="bold text-success">猜數字遊戲</font>
          這個例子
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/doloop_9.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          這是一個<font class="bold text-success"
            >無窮的Do...Loop迴圈，沒有設定任何條件</font
          >，當使用者猜對數字時，就會執行Exit跳出迴圈。
        </p>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">小練習</h1>
        <p class="mb-0 fs-5">
          迴圈的練習題都在
          <router-link
            to="/VBfinal"
            class="link-info bold text-decoration-underline"
            >VB迴圈練習題</router-link
          >
          裡。
        </p>
      </div>
    </div>
  </v-row>
</template>
<style>
.bold {
  font-weight: bold;
}
</style>
