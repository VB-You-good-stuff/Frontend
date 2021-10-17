<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">VB 10/15 作業</h1>
          <p class="mb-0 h4">
            Visual Basic 10/15上課作業題目說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">題目說明</h1>
        <p class="mb-0 fs-5">
          輸入雞蛋及蔬菜的單價及數量，按下「計算總價」後將總價顯示。畫面如下:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/1015_1.jpg" class="img-fluid" />
        </div>
      </div>
      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">題目要求</h1>
        <p class="mb-0 mt-3 fs-5">
          5個Label， 5個TextBox， 1個Button，各元件屬性要求如下表:
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
                <td rowspan="5">Lable</td>
                <td>(無特別規定)</td>
                <td>雞蛋</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>蔬菜</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>單價</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>數量</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>計算結果</td>
              </tr>
              <tr>
                <td rowspan="5">TextBox</td>
                <td>(無特別規定)</td>
                <td>X</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>X</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>X</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>X</td>
              </tr>
              <tr>
                <td class="text-danger bold ">txtOuput</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Button</td>
                <td class="text-danger bold ">btnSum</td>
                <td>計算總價</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">結果</h1>
        <p class="mb-0 mt-3 fs-5">
          程式執行後，結果如下圖:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/1015_2.jpg" class="img-fluid" />
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
