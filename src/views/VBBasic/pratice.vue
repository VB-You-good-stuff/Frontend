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
          讓使用者輸入各科成績，計算出總成績及總平均
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
                <td>讓使用者能輸入成績</td>
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
          列完清單後，就開始拉畫面吧!
        </p>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">畫面繪製</h1>
        <p class="mb-0 fs-5">
          物件屬性清單 :
          <br />
          屬性的Text、Name可以不用跟範例上的一模一樣。但建議屬性Name取一個有意義、方便辨識的名字，方便日後維護與閱讀
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
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
                <td rowspan="3">TextBox</td>
                <td>TextBox_Math</td>
                <td>(不輸入任何文字)</td>
              </tr>
              <tr>
                <td>TextBox_Chinese</td>
                <td>(不輸入任何文字)</td>
              </tr>
              <tr>
                <td>TextBox_English</td>
                <td>(不輸入任何文字)</td>
              </tr>
              <tr>
                <td rowspan="5">Label</td>
                <td>Label_Directions</td>
                <td>請輸入各科成績，輸入完成後請按送出</td>
              </tr>
              <tr>
                <td>Label_Math</td>
                <td>數學 :</td>
              </tr>
              <tr>
                <td>Label_Chinese</td>
                <td>國文 :</td>
              </tr>
              <tr>
                <td>Label_English</td>
                <td>英文 :</td>
              </tr>
              <tr>
                <td>Label_Result</td>
                <td>(不輸入任何文字，顯示結果用)</td>
              </tr>
              <tr>
                <td>Button</td>
                <td>Button_Submit</td>
                <td>送出</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          畫面會長得像這樣
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/綜合練習_畫面長相.png"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          畫面繪製完成後就可以開始撰寫程式碼了
        </p>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">程式碼撰寫</h1>
        <p class="mb-0 fs-5">
          變數宣告 :
          <br />
          因為計算平均、總成績這些動作是在按下按鈕後開始的，因此我們必須將程式碼寫在Button身上，在畫面編輯區點擊兩下Button，進入程式編輯區<br /><br />
          Step 1.<br />
          先宣告存取使用者輸入的成績的變數，並將使用者在TextBox輸入的值存到變數內
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/綜合練習_程式碼1.png"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          Step 2.
          <br />開始撰寫運算式，使我們獲得總成績、總平均的計算結果
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/綜合練習_程式碼2.png"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          Step 3.
          <br />將我們計算後獲得的結果顯示在畫面上，使用字串串接的運算子"&"，把要顯式的文字與運算結果串聯，再將值給Label_Result物件
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/綜合練習_程式碼3.png"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          Step 4.
          <br />程式碼撰寫完後，就來跑跑看結果正不正確吧
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/綜合練習_結果.png"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          輸入成績，並按下送出，若結果正確顯示在畫面上，恭喜!你成功了喔!
        </p>
      </div>

      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">小練習</h1>
        <p class="mb-0 fs-5">
          試著做做看下面的練習題吧!
        </p>
      </div>
      <div class="card border-0 shadow practice_background ">
        <div class="card-body">
          <p class="fs-5 bold mb-0">題目</p>
          <div class="code_background">
            <p>
              <font style="color:#00C853">
                讓使用者輸入身高、體重後，顯示BMI值給使用者</font
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
