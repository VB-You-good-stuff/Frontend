<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">VB的迴圈</h1>
          <p class="mb-0 h4">
            迴圈是學習程式的一個重要環節，<font class="bold text-success "
              >迴圈可以幫我們簡化重複運行的程式碼</font
            >， 在Visual Basic中有<font class="bold text-success"
              >兩種迴圈結構</font
            >， 分別是<font class="bold text-danger ">For...Next</font>、<font
              class="bold text-danger "
              >Do...Loop</font
            >， Do...Loop又再分成兩種敘述方式，<font class="bold text-success "
              >While 與 Until</font
            >
            而這兩種敘述方式又可再分為
            <font class="bold text-danger "
              >"先做條件式判斷，再執行程式區塊"</font
            >
            與
            <font class="bold text-danger "
              >"先執行程式區塊，再做條件式判斷"</font
            >， 這篇我們會簡單敘述各種<font class="bold text-success "
              >迴圈的流程圖與Continue陳述式、Exit陳述式</font
            >。
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">For...Next</h1>
        <p class="mb-0 fs-5">
          For迴圈會先比較迴圈變數的值，<font class="bold text-success "
            >第一次執行時會比較初始值</font
          ><font class="bold text-danger">是否超過終止值</font>， 若<font
            class="bold text-danger"
          >
            是 </font
          >則<font class="bold text-success">跳出迴圈執行NEXT以後的程式</font>，
          <font class="bold text-danger"> 否 </font>則<font
            class="bold text-success"
            >執行迴圈內的程式區塊</font
          >，執行完迴圈內的程式後， 迴圈變數會<font class="bold text-success"
            >加上變量，執行下一次迴圈直到迴圈變數超過終止值</font
          >。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <h5>
            For 迴圈變數 = 初始值 To 終止值 Step 變量 <br />
            &emsp;&emsp;程式區塊<br />
            Next<br />
          </h5>

          <img src="../../assets/img/VBImg/for.png" class="img-fluid" />
          <h5 class="mt-4">
            詳細範例與For...Next迴圈的運作請看
            <router-link
              to="/VBAdvanced/ForNext"
              class="link-info bold text-decoration-underline"
              >For...Next</router-link
            >。
          </h5>
        </div>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Do...Loop While/Until</h1>
        <p class="mb-0 fs-5">
          <font class="bold text-success">Do...Loop While</font>會<font
            class="bold text-danger"
            >先執行程式區塊一次，再做條件式判斷</font
          >， 若條件為<font class="bold text-danger">真</font>，則<font
            class="bold text-success"
            >重複執行程式區塊，直到條件式判斷為假</font
          >，才跳出迴圈，執行迴圈以後的程式。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <h5>
            Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop While 條件式<br />
          </h5>

          <img
            src="../../assets/img/VBImg/doloopwhile (1).png"
            class="img-fluid"
          />
          <h5 class="mt-4">
            詳細範例與Do...Loop While迴圈的運作請看
            <router-link
              :to="{ path: '/VBAdvanced/DoLoop', hash: '#DoLoopWhileUntil' }"
              class="link-info bold text-decoration-underline"
              >Do...Loop While</router-link
            >。
          </h5>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          <font class="bold text-success">Do...Loop Until</font>會<font
            class="bold text-danger"
            >先執行程式區塊一次，再做條件式判斷</font
          >， 若條件為<font class="bold text-danger">假</font>，則<font
            class="bold text-success"
            >重複執行程式區塊，直到條件式判斷為真</font
          >，才跳出迴圈，執行迴圈以後的程式。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <h5>
            Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop Until 條件式<br />
          </h5>

          <img src="../../assets/img/VBImg/doloopuntil.png" class="img-fluid" />
          <h5 class="mt-4">
            詳細範例與Do...Loop Until迴圈的運作請看
            <router-link
              :to="{ path: '/VBAdvanced/DoLoop', hash: '#DoLoopWhileUntil' }"
              class="link-info bold text-decoration-underline"
              >Do...Loop Until</router-link
            >。
          </h5>
        </div>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Do While/Until...Loop</h1>
        <p class="mb-0 fs-5">
          <font class="bold text-success">Do While...Loop</font>會<font
            class="bold text-danger"
            >先做條件式判斷</font
          >， 若條件為<font class="bold text-danger">真</font>，則<font
            class="bold text-success"
            >執行程式區塊，並重複執行直到條件式判斷為假</font
          >，才跳出迴圈，執行迴圈以後的程式。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <h5>
            Do While 條件式<br />
            &emsp;&emsp;程式區塊<br />
            Loop<br />
          </h5>

          <img src="../../assets/img/VBImg/dowhileloop.png" class="img-fluid" />
          <h5 class="mt-4">
            詳細範例與Do While...Loop迴圈的運作請看
            <router-link
              :to="{ path: '/VBAdvanced/DoLoop', hash: '#DoWhileUntilLoop' }"
              class="link-info bold text-decoration-underline"
              >Do While...Loop</router-link
            >。
          </h5>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          <font class="bold text-success">Do Until...Loop</font>會<font
            class="bold text-danger"
            >先做條件式判斷</font
          >， 若條件為<font class="bold text-danger">假</font>，則<font
            class="bold text-success"
            >執行程式區塊，並重複執行直到條件式判斷為真</font
          >，才跳出迴圈，執行迴圈以後的程式。
        </p>

        <div class="card border-0 shadow">
          <div class="card-body">
            <h5>
              Do Until 條件式<br />
              &emsp;&emsp;程式區塊<br />
              Loop<br />
            </h5>

            <img
              src="../../assets/img/VBImg/doloopuntil.png"
              class="img-fluid"
            />
            <h5 class="mt-4">
              詳細範例與Do Until...Loop迴圈的運作請看
              <router-link
                :to="{ path: '/VBAdvanced/DoLoop', hash: '#DoWhileUntilLoop' }"
                class="link-info bold text-decoration-underline"
                >Do Until...Loop</router-link
              >。
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Continue陳述式</h1>
        <p class="mb-0 fs-5">
          一般迴圈的執行流程都是在程式區塊執行完畢後，才繼續執行下一輪。
          但在某些特殊狀況，必須<font class="bold text-success"
            >略過接下來的程式碼，直接跳到下一輪</font
          >， 這時就需要用到continue陳述式，<font class="bold text-success"
            >通常會配合一個判斷式</font
          >，像是 If...Then，
          <font class="bold text-danger">當條件符合時，執行continue</font>。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <h5>
            For 迴圈變數 = 初始值 To 終止值 Step 變量 <br />
            &emsp;&emsp;If 條件式 Then Continue For<br />
            &emsp;&emsp;程式區塊<br />
            Next<br />
          </h5>

          <br />
          <h5>
            Do<br />
            &emsp;&emsp;If 條件式 Then Continue Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop While 條件式<br />
          </h5>

          <br />
          <h5>
            Do<br />
            &emsp;&emsp;If 條件式 Then Continue Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop Until 條件式<br />
          </h5>

          <br />
          <h5>
            Do While 條件式<br />
            &emsp;&emsp;If 條件式 Then Continue Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop<br />
          </h5>

          <br />
          <h5>
            Do Until 條件式<br />
            &emsp;&emsp;If 條件式 Then Continue Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop<br />
          </h5>

          <h5 class="mt-4">
            詳細範例請看
            <router-link
              :to="{ path: '/VBAdvanced/ForNext', hash: '#forNextContinue' }"
              class="link-info bold text-decoration-underline"
              >Continue For</router-link
            >、
            <router-link
              :to="{ path: '/VBAdvanced/DoLoop', hash: '#DoLoopContinue' }"
              class="link-info bold text-decoration-underline"
              >Continue Do</router-link
            >。
          </h5>
        </div>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Exit陳述式</h1>
        <p class="mb-0 fs-5">
          <font class="bold text-success">迴圈的終止</font
          >除了迴圈變數值超過終止值，條件式成立與否外，
          <font class="bold text-success">還有強制跳出迴圈的方法</font
          >，也就是exit陳述式，exit陳述式通常寫於迴圈結構內， 且<font
            class="bold text-success"
            >通常會配合一個判斷式</font
          >，像是If-Else，當條件符合時，<font class="bold text-success"
            >執行exit跳出迴圈</font
          >。 一般迴圈的執行流程都是在程式區塊執行完畢後，才繼續執行下一輪。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <h5>
            For 迴圈變數 = 初始值 To 終止值 Step 變量 <br />
            &emsp;&emsp;If 條件式 Then Exit For<br />
            &emsp;&emsp;程式區塊<br />
            Next<br />
          </h5>

          <br />
          <h5>
            Do<br />
            &emsp;&emsp;If 條件式 Then Exit Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop While 條件式<br />
          </h5>

          <br />
          <h5>
            Do<br />
            &emsp;&emsp;If 條件式 Then Exit Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop Until 條件式<br />
          </h5>

          <br />
          <h5>
            Do While 條件式<br />
            &emsp;&emsp;If 條件式 Then Exit Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop<br />
          </h5>

          <br />
          <h5>
            Do Until 條件式<br />
            &emsp;&emsp;If 條件式 Then Exit Do<br />
            &emsp;&emsp;程式區塊<br />
            Loop<br />
          </h5>

          <h5 class="mt-4">
            詳細範例請看
            <router-link
              :to="{ path: '/VBAdvanced/ForNext', hash: '#forNextExit' }"
              class="link-info bold text-decoration-underline"
              >Exit For</router-link
            >、
            <router-link
              :to="{ path: '/VBAdvanced/DoLoop', hash: '#DoLoopExit' }"
              class="link-info bold text-decoration-underline"
              >Exit Do</router-link
            >。
          </h5>
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
