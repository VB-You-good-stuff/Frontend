<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">第一個程式</h1>
          <p class="mb-0 h4">
            Visual Basic 第一個程式撰寫說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">怎麼開始?</h1>
        <p class="mb-0 fs-5">
          先選擇你需要的物件，我們通常會選擇textbox與button<br />
          textbox : 顯示你要的內容<br />
          button :
          觸發程式碼去顯示你的內容(白話一點就是點一下讓你的內容顯示出來)<br />
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/作業1.png" class="img-thumbnail" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          拉完物件後，開始處理過程，我們的過程只需要把textbox1的text屬性改成你要的結果。
          先點擊button兩次，他會進入到程式撰寫區，讓你把處理過程輸入到這個button裡面，這樣之後程式開始執行，你只要點擊button，他就會執行你要的處理過程。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/作業2.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          進到程式撰寫區，我們的需求就是將textbox1的text屬性換成”hello world !”
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/作業3.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          撰寫完成後，就可以點選執行。你就可以點擊button，textbox就會變成hello
          world !
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/作業4.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          按下按鈕有顯示文字代表你已完成第一個程式囉!
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
