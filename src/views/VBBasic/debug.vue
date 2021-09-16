<template>
  <v-row>
    <div class="py-4" id="head">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">Debug</h1>
          <p class="mb-0 h4">
            Debug的技巧說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">出現紅色毛毛蟲</h1>
        <p class="mb-0 fs-5">
          你可以將滑鼠移到紅色毛毛蟲的位置，他會顯示錯誤訊息
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/debug1.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0 ">
        <p class="mb-0 mt-3 fs-5">
          就可以發現，這裡的錯誤就是<font class="text-success bold"
            >誤將 name_1 輸入成 name_l，造成變數未宣告的錯誤出現</font
          >
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/debug2.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">出現發生建置錯誤</h1>
        <p class="mb-0 fs-5">
          當你在寫程式的時候，看到這個畫面應該是大家的噩夢，這時我們必須按下
          <font class="text-danger bold">否</font>，來確認錯誤在哪邊
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/debug3.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          點擊 <font class="text-danger bold">否</font> 後，會出現<font
            class="text-success bold"
            >錯誤清單</font
          >，透過清單<font class="text-success bold">提示的錯誤訊息</font
          >來<font class="text-success bold">判斷程式碼哪裡出了問題</font>
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/debug4.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0 mt-2">
        <ul class="list-group list-group-flush">
          <li class="list-group-item fs-5">說明 : 程式碼出現甚麼錯誤</li>
          <li class="list-group-item fs-5">專案 : 在哪一個專案</li>
          <li class="list-group-item fs-5">檔案 : 在哪個檔案出錯</li>
          <li class="list-group-item fs-5">行&emsp; : 在第幾行</li>
        </ul>
        <p class="mb-0 mt-3 fs-5">
          由上列可知，錯誤訊息的意思 :
          <font class="text-success bold"
            >在專案xxx中，檔案Form1.vb的第4行，出現了變數未宣告的錯誤</font
          ><br />
          那我們就可以<font class="text-success bold"
            >去相對應的檔案看是發生了什麼問題</font
          >，你就可以發現，這裡的錯誤就是<font class="text-success bold"
            >誤將 name_1 輸入成 name_l，造成變數未宣告的錯誤出現</font
          >
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/debug5.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">未出現毛毛蟲及建置錯誤</h1>
        <p class="mb-0 fs-5">
          在程式撰寫時<font class="text-success bold">沒有出現毛毛蟲</font
          >，以及按下執行後也<font class="text-success bold"
            >沒跳出建置錯誤的訊息</font
          >，但卻跳出此畫面
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/debug6.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          出現此訊息就是代表，你的<font class="text-success bold"
            >程式可以執行</font
          >，但在<font class="text-success bold"
            >邏輯上出現錯誤導致電腦不理解你的要求</font
          >
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/debug7.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          你必須<font class="text-success bold"
            >先理解你的錯誤訊息，再回去看程式碼</font
          >是發生什麼問題，像是圖片上的這個訊息，在資料型態的轉換上發生了錯誤
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/debug8.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          因此我們回來看程式碼，程式碼在格式上是沒有問題的，但是邏輯的地方，<font
            class="text-success bold"
            >宣告整數的資料型態卻給予字串的值</font
          >，電腦會不知道怎麼處理，所以必須更改資料型態或是更改給予的值。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/debug9.png" class="img-fluid" />
        </div>
      </div>

      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">常見錯誤訊息</h1>
        <p class="mb-0 mt-3 fs-5">
          其他常見的錯誤可以參照<router-link to="/VBQ&A" class="h5 link-info"
            >這個頁面<v-icon color="#2361D6"
              >mdi-open-in-new</v-icon
            ></router-link
          >
        </p>
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
