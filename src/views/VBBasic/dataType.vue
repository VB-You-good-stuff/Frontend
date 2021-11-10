<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">資料型態</h1>
          <p class="mb-0 h4">
            Visual Basic 的資料型態說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">什麼是資料型態?</h1>
        <p class="mb-0 fs-5">
          在宣告時，你必須要<font class="bold text-success">告訴vb</font
          >這個<font class="bold text-success">變數是什麼類型的值</font
          >，這個就稱為資料型態，以下幫大家整理未來常用的資料型態
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <table
            class="table table-striped table-hover"
            style="text-align:center; vertical-align: middle;"
          >
            <thead>
              <tr>
                <th></th>
                <th scope="col">
                  <font style="font-size:20px;">資料型態</font>
                </th>
                <th scope="col"><font style="font-size:20px;">說明</font></th>
                <th scope="col">
                  <font style="font-size:20px;">所需記憶體</font>
                </th>
                <th scope="col"><font style="font-size:20px;">範例</font></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="3">整數型態</td>
                <td>Short</td>
                <td>短整數，-32,768 ~ 32,767</td>
                <td>2 bytes</td>
                <td>12,345、23,456</td>
              </tr>
              <tr>
                <td>Integer</td>
                <td>整數，-2,147,483,648 ~ 2,147,483,647</td>
                <td>4 bytes</td>
                <td>1,234,567、4,567,890</td>
              </tr>
              <tr>
                <td>Long</td>
                <td>
                  長整數，-9,233,372,036,854,775,808 ~ 9,233,372,036,854,775,807
                </td>
                <td>8 bytes</td>
                <td>123,456,789、4,656,789,456</td>
              </tr>
              <tr>
                <td rowspan="3">浮點數型態</td>
                <td>Single</td>
                <td>
                  單精度浮點數，<br />-3.402823e38 ~ -1.401298e-45 &
                  1.401298e-45 ~ 3.402823e38
                </td>
                <td>4 bytes</td>
                <td>-1.254,687,731、432.568,472</td>
              </tr>
              <tr>
                <td>Double</td>
                <td>
                  倍精度浮點數，可以儲存小數點後更多位，<br />-1.79769313486232e308
                  ~-4.94065645841247e-324 & 4.94065645841247e-324 ~
                  1.79769313486232e308
                </td>
                <td>8 bytes</td>
                <td>-1.254,687,731,785,655,555、432.568,472,858,475,322</td>
              </tr>
              <tr>
                <td>Decimal</td>
                <td>
                  適用于需要大量數位但無法容忍舍入錯誤的計算（例如財務），<br />
                  -79,228,162,514,264,337,593,543,905,335 ~
                  79,228,162,514,264,337,593,543,905,335
                </td>
                <td>16 bytes</td>
                <td>
                  153,561,854,684,521,854,456,444,456
                </td>
              </tr>
              <tr>
                <td rowspan="2">字串型態</td>
                <td>Char</td>
                <td>字元，一次只能存一個字</td>
                <td>2 bytes</td>
                <td>A、P、P、L、E</td>
              </tr>
              <tr>
                <td>String</td>
                <td>字串，只要在""內的，不管是什麼符號或文字皆可存</td>
                <td>4 bytes</td>
                <td>banana、@#$%!$、잘했습니다</td>
              </tr>

              <tr>
                <td>日期型態</td>
                <td>Date</td>
                <td>
                  日期，日期標示法為#MM/DD/YYYY#，時間標示法為#tt:mm:ss
                  AM#、#tt:mm:ss PM#
                </td>
                <td>8 bytes</td>
                <td>#12/25/2021#、#03:30:59AM#、#05/23/2020 06:13:48AM#</td>
              </tr>
              <tr>
                <td>布林值</td>
                <td>Boolean</td>
                <td>布林值，只有兩種資料 True & False</td>
                <td>依電腦類型而定</td>
                <td>True 、 False</td>
              </tr>
              <tr>
                <td>物件型態</td>
                <td>Object</td>
                <td>
                  物件，可以儲存任何型態
                </td>
                <td>4 bytes</td>
                <td>true、Button、123</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">小練習</h1>
        <p class="mb-0 fs-5">
          試著做做看下面的練習題吧!
        </p>
      </div>
      <div class="card border-0 shadow practice_background ">
        <div class="card-body">
          <p class="fs-5 bold mb-0">試著宣告出下列所有變數</p>
          <div class="code_background">
            <p>
              <font style="color:#00C853"> 1. 變數名為car的字串</font><br />
              <font style="color:#00C853">
                2. 變數名為computer的整數，值為132231</font
              ><br />
              <font style="color:#00C853"> 3. 一個值為false的變數done</font
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
