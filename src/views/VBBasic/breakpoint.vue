<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">中斷點</h1>
          <p class="mb-0 h4">
            Visual Basic 的中斷點使用方式
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">什麼是中斷點?</h1>
        <p class="mb-0 fs-5">
          中斷點(breakpoints)，是一個非常重要Debug工具，它可以讓我們暫停程式的執行，查看正在執行中的變數當下的狀態。
        </p>
      </div>
      <div class="mb-3 mt-3 mb-lg-0">
        <h1 class="h3">如何使用?</h1>
        <p class="mb-0 fs-5">
          要在程式碼中設定中斷點，首先，在想要中斷的程式碼那一行的最左邊按一下，當顯示出紅點，便完成了中斷點的設置。
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint1.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 fs-5">
          此時只需要執行程式，程式便會停在中斷點這一行並顯示出黃色箭頭，<font
            class="bold text-danger"
            >注意!</font
          >，該行程式還尚未執行。
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint2.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 fs-5">
          我們只要將鼠標移至變數上，便可以查看變數當下的狀態。
        </p>
        <p class="mb-0 fs-5">
          圖片中的這一行還沒有執行，X還是0。
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint3.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 fs-5">
          此時有兩種方式繼續執行程式，分別是按下F5(繼續執行)和F8(逐步執行)。
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint4.png" class="img-fluid" />
        </div>
      </div>

      <div class="mb-3 mb-lg-0">
        <p class="mb-0 fs-5">
          使用F5繼續執行時，若後續沒有其他的中斷點，便會直接執行完程式，若有其他的中斷點，便會停留在下一個中斷點，暫停執行。
        </p>
        <p class="mb-0 fs-5">
          在第8行增加一個新的中斷點
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint5.png" class="img-fluid" />
        </div>
      </div>

      <div class="mb-3 mb-lg-0">
        <p class="mb-0 fs-5">
          執行後在第5行停下
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint6.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 fs-5">
          按下F5後，程式在第8行停下
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint7.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 fs-5">
          使用F8逐步執行時，目前所在的這一行程式將會被執行，然後在下一行程式停止。
        </p>
        <p class="mb-0 fs-5">
          中斷點設定在第5行，執行後在第5行停下
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint8.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 fs-5">
          按下F8後，程式在第6行停下，最左邊顯示黃色箭頭。
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <img src="../../assets/img/VBImg/breakpoint9.png" class="img-fluid" />
        </div>
      </div>

      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">應用</h1>
        <p class="mb-0 fs-5">
          當程式碼正常執行，但結果一直不是自己所想的那樣，便可以透過中斷點去查看，變數的狀態是不是符合自己的預期。
        </p>
        <p class="mb-0 fs-5">
          若程式出現錯誤，但找不到原因，則可以透過中斷點觀察，逐步縮小範圍，直到找到錯誤的那一行程式碼。
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
