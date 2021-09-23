<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">解題技巧與思維</h1>
          <p class="mb-0 h4">
            Visual Basic 的題目解題技巧與解題思維說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">如何解題?</h1>
        <p class="mb-0 fs-5">
          當你今天看到題目的時候，先不要緊張，我們先嘗試去<font
            class="text-success bold"
            >理解</font
          >他，<font class="text-success bold">題目需要</font
          >使用者輸入什麼內容、輸入的內容需要經過怎樣的<font
            class="text-success bold"
            >處理程序</font
          >及最終的<font class="text-success bold">處理結果</font>。
          <br />例如買午餐，你必須<font class="text-success bold">先想</font
          >你午餐要<font class="text-success bold">吃什麼</font
          >，再去進行購買，<font class="text-success bold">購買的流程</font
          >就是找尋店家、選購品項、算出金額、店家製作、付錢，最終的目的就是<font
            class="text-success bold"
            >拿到午餐</font
          >，透過這些習以為常的生活小事，來練習程式的邏輯能力 <br /><br />
          我們可以用生活化的題目來<font class="text-success bold">練習</font
          >並且<font class="text-success bold">畫出流程圖</font>，EX :
          <font class="text-success bold"
            >透過自己的身高及體重，算出自己的BMI</font
          >
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/流程圖.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          最終你會得到你的BMI，也同時滿足了題目的要求，接下來你就可以<font
            class="text-success bold"
            >開始撰寫程式</font
          >，<font class="text-success bold">照著</font>你擬定好的<font
            class="text-success bold"
            >流程</font
          >，使用<font class="text-success bold">物件</font>去<font
            class="text-success bold"
            >包裝需要的資訊</font
          >，<font class="text-success bold">程式碼撰寫處理的過程</font
          >，最後在畫面上<font class="text-success bold">輸出結果</font>
        </p>
      </div>

      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">小練習</h1>
        <p class="mb-0 fs-5">
          利用以上流程完成以下練習題
        </p>
      </div>
      <div class="card border-0 shadow practice_background ">
        <div class="card-body">
          <p class="fs-5 bold mb-0">第一題</p>
          <div class="code_background">
            <p>
              <font style="color:#00C853"> 請將攝氏溫度轉為華氏溫度</font><br />
            </p>
          </div>
          <p class="fs-5 bold mb-0">第二題</p>
          <div class="code_background">
            <p>
              <font style="color:#00C853">
                媽媽要去買水果，蘋果一顆10元、柳丁一顆5元，媽媽要買10顆蘋果5顆柳丁，請計算出總價</font
              ><br />
            </p>
          </div>
          <p class="fs-5 bold mb-0">第三題</p>
          <div class="code_background">
            <p>
              <font style="color:#00C853">
                小明國文考95分，數學考10分，英文考30分，歷史考85分，生物考20分，化學考11分，請問總平均小明是否超過60分?並算出總成績及總平均</font
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
