<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">Select Case</h1>
          <p class="mb-0 h4">
            Visual Basic Select Case判斷式說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">Select Case</h1>
        <p class="mb-0 fs-5">
         前面的教學我們知道程式碼需要判斷時可以使用IF...THEN...ELSE，但今天如果選擇條件很多，使用IF這個方法會變得非常冗長，且難以維護與識別，這時我們會使用Select...Case的方法。
        </p>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          那我們就試著用 判斷月份是第幾個季節 這個例子來看看IF-ELSE跟Select-Case的差異吧!<br>
          首先，拉出一個能讓使用者輸入月份的畫面，畫面及各元件屬性如下 :
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/selectcase1.jpg" class="img-fluid" />
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
                <td>輸入月份:</td>
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
          <img src="../../assets/img/VBImg/selectcase2.jpg" class="img-fluid" />
        </div>
      </div>

      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          我們先用IF判斷式來完成月份的判斷，會發現條件越多的判斷式非常不直觀，不好修改也不好維護，因此我們在撰寫程式時，遇到有很多條件的情況，會習慣使用Select-Case的方法來做敘述。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/ifelse_2.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          將原本的程式碼改成使用Select-Case的方法，發現條件區塊劃分的比較明顯與直觀。當然再撰寫程式時條件的判斷沒有規定一定要用哪種方法，但建議大家多試試各種寫法，找到在不同情境下適合用於描述條件的方式。
          <br>當然我們還是要執行一下結果，結果畫面如下:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/selectcase4.jpg"
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
