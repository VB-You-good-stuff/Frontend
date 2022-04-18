<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">巢狀迴圈</h1>
          <p class="mb-0 h4">
            遇到複雜運算時，可在迴圈中再加另一個迴圈，
            這就稱為巢狀迴圈。執行時，會<font class="bold text-success"
              >先執行外部迴圈第一輪</font
            >， 然後<font class="bold text-success">等內部迴圈全部執行結束</font
            >，<font class="bold text-success">才執行外部迴圈第二輪</font>。
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">巢狀迴圈</h1>
        <p class="mb-0 fs-5">
          讓我們用
          <font class="bold text-success">九九乘法表</font>
          這個例子來演練一次吧! <br />
          首先，拉出畫面，畫面及各元件屬性如下:
        </p>
      </div>

      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/nestedloop.png" class="img-fluid" />
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
                <td>Lable</td>
                <td>lbl_describe</td>
                <td>九九乘法表</td>
              </tr>
              <tr>
                <td>TextBox</td>
                <td>txt_result</td>
                <td>(清空)</td>
              </tr>
              <tr>
                <td>Button</td>
                <td>btn_start</td>
                <td>開始</td>
              </tr>
              <tr>
                <td colspan="3" class="text-center">
                  TextBox 的屬性 multiline 改成 true 便可將 textbox 展開
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          點擊兩下 開始Button 進入程式編輯區，開始撰寫程式碼
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/nestedloop_1.png"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          第一圈 i = 1 時，內部迴圈會印出 "1 X 1 = 1"、"1 X 2 = 2 "、" 1 X 3 = 3
          "、...、" 1 X 9 = 9 "，再執行到外部迴圈，i 增加 1
          ，再進入內部迴圈，重複執行，直到 i = 9。<br />
          當然我們還是要執行一下結果，結果畫面如下:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/nestedloop_2.png"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">再來一題經典的印星星吧 !</h1>
        <p class="mb-0 fs-5">
          一樣，拉出畫面，畫面及各元件屬性如下 :
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/nestedloop_3.png"
            class="img-fluid"
          />
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
                <td>Lable</td>
                <td>lbl_describe</td>
                <td>印等腰三角形</td>
              </tr>
              <tr>
                <td>TextBox</td>
                <td>txt_result</td>
                <td>(清空)</td>
              </tr>
              <tr>
                <td>Button</td>
                <td>btn_start</td>
                <td>開始</td>
              </tr>
              <tr>
                <td colspan="3" class="text-center">
                  TextBox 的屬性 multiline 改成 true 便可將 textbox 展開
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          點擊兩下 開始Button 進入程式編輯區，開始撰寫程式碼
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/nestedloop_4.png"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          當然我們還是要執行一下結果，結果畫面如下:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/nestedloop_5.png"
            class="img-fluid"
          />
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
