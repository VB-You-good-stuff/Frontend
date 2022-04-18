<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">For...Next迴圈</h1>
          <p class="mb-0 h4">
            有些時候我們會需要程式重複的執行很多次同樣的動作，例如:我們要讓MsgBox顯示100次Hello
            John! ，
            我們不可能重複的寫100次MsgBox的程式碼，這時候迴圈就很重要了!只要幾行程式碼，就可以顯示100次Hello
            John!
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">For...Next迴圈範例</h1>
        <p class="mb-0 fs-5">
          讓使用者<font class="bold text-success"
            >輸入一個數字並計算它的階層</font
          >。<br />
          首先，拉出一個能讓使用者輸入數字的畫面，畫面及各元件屬性如下 :
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext.png" class="img-fluid" />
          <table
            class="table table-striped table-hover"
            style="text-align:center; vertical-align: middle;"
          >
            <thead>
              <tr>
                <th scope="col">
                  <font style="font-size:20px;">物件</font>
                </th>
                <th scope="col">
                  <font style="font-size:20px;">Name</font>
                </th>
                <th scope="col">
                  <font style="font-size:20px;">Text</font>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">Lable</td>
                <td>lbl_describe</td>
                <td>請輸入一個數字 :</td>
              </tr>
              <tr>
                <td>lbl_show</td>
                <td>(清空)</td>
              </tr>

              <tr>
                <td>TextBox</td>
                <td>txt_input</td>
                <td>(清空)</td>
              </tr>
              <tr>
                <td>Button</td>
                <td>btn_result</td>
                <td>結果</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          點擊兩下 結果Button 進入程式編輯區，開始撰寫程式碼
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_1.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          假設今天使用者想要計算10的階乘，透過上方程式碼我們可以發現，
          利用迴圈便可輕鬆地將原本要重複寫10次的步驟，縮減到剩下3行程式碼，
          但迴圈內到底是怎麼運作的呢?讓我們下個中斷點來看看!
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_2.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          我們將中斷點設在next上，並按下執行，至此迴圈內的內容執行結束，要執行下一次時便會停止，來看看每個參數的值是什麼吧!
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_3.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          首先我們讓計算 3 的階乘，會看見參數num的值為
          3，也就是我們一開始輸入的數值， 那麼 i 是什麼呢， i 是迴圈變數，<font
            class="bold text-success"
            >有點像迴圈的計數器</font
          >， 要執行迴圈時我們<font class="bold text-success"
            >要給迴圈一個初始值跟終止值</font
          >， 好讓迴圈知道他要執行幾次， i
          的責任就是記憶現在的數值是多少，因為是計算 3 的階乘， 因此<font
            class="bold text-success"
            >迴圈的初始值是 1 ，終止值是 3 </font
          >，那麼在迴圈執行第一次時， i 的值即為 1 ， total的值為 1 x i 的值 1，
          所以total也是 1 ，讓我們按下繼續執行。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_4.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          迴圈執行第二次時， i 的值即為 2 ，total的值為 1 x i 的值 2
          ，所以total的值為 2 ，繼續執行迴圈。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_5.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          迴圈執行第三次時， i 的值即為3,total的值為 2 x i 的值 3
          ，所以total的值為 6 ，因為終止值為 3 ，迴圈在這裡就會執行結束了。
        </p>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">遞減的For...Next迴圈</h1>
        <p class="mb-0 fs-5">
          迴圈除了遞增外，也可以是遞減的，每次遞增遞減的數量也可以更改，下面的幾個例子將會展示如何操作。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_6.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          我們看到遞減的迴圈內用到一個方法step，那step是什麼呢?下面我們就來介紹step。
        </p>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Step</h1>
        <p class="mb-0 fs-5">
          <font class="bold text-success">Step</font>也就是For...Next<font
            class="bold text-success"
            >迴圈的變量</font
          >，迴圈每執行完一次 i 迴圈變數增加的值， 在<font
            class="bold text-success"
            >遞增的迴圈若沒有設定step每次增加的量即為 1 </font
          >，那我們如果要每次都增加2呢?<br />
          讓我們來看看
          <font class="bold text-success">1+3+5+…+13=</font> 的例子。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_7.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          因為我們設定step為 2 ，因此第一圈時迴圈變數 i = 初始值 1
          ，但在第二圈時，迴圈變數 i 會增加2，這時的迴圈變數 i = 3，
          第三圈時，迴圈變數 i 再增加 2，此時的迴圈變數 i = 5 ...，直至迴圈變數
          i = 終止值13。 由上可知，<font class="bold text-success"
            >要讓迴圈知道現在是遞減的狀態，我們必須設置step為 -1
            ，讓迴圈的變量每次都減 1</font
          >。
        </p>
      </div>
    </div>
    <div class="col-12 mb-4" id="forNextContinue">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Continue陳述式</h1>
        <p class="mb-0 fs-5">
          如何在For...Next迴圈中使用continue陳述式，讓我們來看
          <font class="bold text-success">列出1到100之間三的倍數</font>
          這個例子。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_8.png" class="img-fluid" />
        </div>
      </div>
    </div>
    <div class="col-12 mb-4" id="forNextExit">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Exit陳述式</h1>
        <p class="mb-0 fs-5">
          如何在For...Next迴圈中使用exit陳述式，讓我們來看
          <font class="bold text-success"
            >猜密碼，使用者輸入一組1到1000的數字密碼，使用for迴圈暴力破解密碼</font
          >
          這個例子
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/fornext_9.png" class="img-fluid" />
        </div>
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
