<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">VB 11/05 作業</h1>
          <p class="mb-0 h4">
            Visual Basic 11/05上課作業題目說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">題目說明</h1>
        <p class="mb-0 fs-5">
          完成畫面上按鈕需求。畫面如下:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/1105.jpg" class="img-fluid" />
        </div>
      </div>
      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">題目要求</h1>
        <p class="mb-0 mt-3 fs-5">
          3個Label， 4個Button， 2個TextBox，各元件屬性要求如下表:
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
                <td rowspan="3">Lable</td>
                <td>(無特別規定)</td>
                <td>X:</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>Y:</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>結果:</td>
              </tr>
              <tr>
                <td rowspan="4">Button</td>
                <td>(無特別規定)</td>
                <td>字串串聯</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>相加</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>X ^ Y</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>X % Y</td>
              </tr>
              <tr>
                <td rowspan="2">TextBox</td>
                <td>(無特別規定)</td>
                <td>(清空)</td>
              </tr>
              <tr>
                <td>(無特別規定)</td>
                <td>(清空)</td>
              </tr>
              <tr></tr>
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
          <img src="../../assets/img/VBImg/1105_1.jpg" class="img-fluid mr-2" />
          <img src="../../assets/img/VBImg/1105_2.jpg" class="img-fluid" />
        </div>

        <div class="card-body">
          <img src="../../assets/img/VBImg/1105_3.jpg" class="img-fluid mr-2" />
          <img src="../../assets/img/VBImg/1105_4.jpg" class="img-fluid" />
        </div>
      </div>
      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">解答</h1>
      </div>
      <div class="card border-0 shadow">
        <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header class="fs-5 text-info"
              >程式碼</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <img
                src="../../assets/img/VBImg/11_05.png"
                class="img-fluid mr-2"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </v-row>
</template>
<style>
.bold {
  font-weight: bold;
}
</style>
