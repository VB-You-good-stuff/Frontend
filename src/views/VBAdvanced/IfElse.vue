<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">If...Then/ElseIf</h1>
          <p class="mb-0 h4">
            Visual Basic If判斷式說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">If...Then</h1>
        <p class="mb-0 fs-5">
          當今天我們<font class="bold text-success "> 有多個選項要做選擇 </font
          >時，我們會<font class="bold text-success "> 使用If…Then來判斷 </font
          >。例如:在日常生活中，我們決定今天出門該不該帶雨傘時，我們會依據天氣來做判斷，如果會下雨我就帶傘，反之，不會下雨我今天就不必帶傘。
        </p>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          那我們就試著將上面這段判斷<font class="bold text-success ">
            是否下雨決定帶不帶傘</font
          >的描述撰寫成程式碼吧!<br />
          首先，拉出一個能讓使用者輸入今天有沒有下雨的畫面，畫面及各元件屬性如下
          :
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/ifelse.png" class="img-fluid" />
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
                <td>今天有沒有下雨?</td>
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
          <img src="../../assets/img/VBImg/ifelse_1.png" class="img-fluid" />
        </div>
      </div>

      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          雖然上圖的程式碼也能完成題目的內容，但會發現這種<font
            class="bold text-success "
          >
            撰寫方式太過冗長了 </font
          >，除了每種假設都要寫一次If外，還必須將使用者輸入有沒有以外的字句都一一考慮進去，因此我們會<font
            class="bold text-success "
          >
            利用 ElesIf 以及 Eles </font
          >來幫助我們達成問題的需求
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/ifelse_2.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          將原本的程式碼改成使用ElseIf & Else
          後，會發現程式碼與原本的相比短了些，且<font
            class="bold text-success "
          >
            Else的判斷句 </font
          >幫助我們<font class="bold text-success "> 不必 </font
          >將所有使用者可能會輸入的錯誤<font class="bold text-success ">
            都列出來 </font
          >，是不是很方便呢?<br />
          當然我們還是要執行一下結果，結果畫面如下:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/ifelse_3.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/ifelse_4.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/ifelse_5.png"
            class="img-fluid"
          /><br />
        </div>
      </div>
    </div>
  </v-row>
</template>
<style>
.bold {
  font-weight: bold;
}
</style>
