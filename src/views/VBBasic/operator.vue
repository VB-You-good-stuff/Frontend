<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">運算子</h1>
          <p class="mb-0 h4">
            Visual Basic 的運算符號說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">什麼是運算子?</h1>
        <p class="mb-0 fs-5">
          簡單來說就是運算式中+、-、*、/...等符號，例如:
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
                <th scope="col"><font style="font-size:20px;">運算式</font></th>
                <th scope="col"><font style="font-size:20px;">運算子</font></th>
                <th scope="col"><font style="font-size:20px;">結果</font></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A = 984 + 106</td>
                <td>+</td>
                <td>A = 1000</td>
              </tr>
              <tr>
                <td>C = 6 ^ 2</td>
                <td>^</td>
                <td>C = 36</td>
              </tr>
              <tr>
                <td>D = "Hello" & "World"</td>
                <td>&</td>
                <td>D = "HelloWorld"</td>
              </tr>
              <tr>
                <td>E = 2 , E += 1</td>
                <td>+=</td>
                <td>E = 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          以下幫大家整理常用的運算子:
        </p>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-2 fs-5">
          數值:
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
                <th scope="col"><font style="font-size:20px;">運算子</font></th>
                <th scope="col"><font style="font-size:20px;">意思</font></th>
                <th scope="col"><font style="font-size:20px;">舉例</font></th>
                <th scope="col"><font style="font-size:20px;">結果</font></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>^</td>
                <td>指數</td>
                <td>6 ^ 2</td>
                <td>36</td>
              </tr>
              <tr>
                <td>-</td>
                <td>減法</td>
                <td>100 - 25</td>
                <td>75</td>
              </tr>
              <tr>
                <td>+</td>
                <td>加法</td>
                <td>25 + 75</td>
                <td>100</td>
              </tr>
              <tr>
                <td>*</td>
                <td>乘法</td>
                <td>25 * 4</td>
                <td>100</td>
              </tr>
              <tr>
                <td>/</td>
                <td>除法</td>
                <td>26 / 4</td>
                <td>6.5</td>
              </tr>
              <tr>
                <td>\</td>
                <td>除法(取整數)</td>
                <td>26 / 4</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Mod or %</td>
                <td>除法(取餘數)</td>
                <td>26 Mod 4 、 26 % 4</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-2 fs-5">
          字串:
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
                <th scope="col"><font style="font-size:20px;">運算子</font></th>
                <th scope="col"><font style="font-size:20px;">意思</font></th>
                <th scope="col"><font style="font-size:20px;">舉例</font></th>
                <th scope="col"><font style="font-size:20px;">結果</font></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&</td>
                <td>字串合併</td>
                <td>"Hello" & "World"</td>
                <td>"HelloWorld"</td>
              </tr>
              <tr>
                <td>Like</td>
                <td>字串比較(符合傳回True，不符合傳回False)</td>
                <td>"Hello" Like "[a-z]"</td>
                <td class=" text-success bold">True</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-2 fs-5">
          在使用Like時，規則要怎麼訂定呢，你需要用到特殊字元，例如:
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body table-responsive">
          <table
            class="table table-hover"
            style="text-align:center; vertical-align: middle;"
          >
            <thead>
              <tr>
                <th scope="col">
                  <font style="font-size:20px;">特殊字元</font>
                </th>
                <th scope="col"><font style="font-size:20px;">意思</font></th>
                <th scope="col"><font style="font-size:20px;">運算式</font></th>
                <th scope="col"><font style="font-size:20px;">舉例</font></th>
                <th scope="col"><font style="font-size:20px;">結果</font></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="4" class="table-active">?</td>
                <td rowspan="4" class="table-active">任何單一字元</td>
                <td rowspan="4" class="table-active">str1 Like "ap?le"</td>
                <td class="table-active">str1 = "ap2le"</td>
                <td class="table-active text-success bold">True</td>
              </tr>
              <tr>
                <td>str1 = "apble"</td>
                <td class=" text-success bold">True</td>
              </tr>
              <tr>
                <td class="table-active">str1 = "aple"</td>
                <td class=" text-danger bold table-active">False</td>
              </tr>
              <tr>
                <td>str1 = "apppple"</td>
                <td class=" text-danger bold">False</td>
              </tr>
              <tr>
                <td rowspan="5">*</td>
                <td rowspan="5">* 號前後一致即可</td>
                <td rowspan="5">str1 Like "ap*le"</td>
                <td class="table-active">str1 = "ap2le"</td>
                <td class="table-active text-success bold">True</td>
              </tr>
              <tr>
                <td>str1 = "apble"</td>
                <td class=" text-success bold">True</td>
              </tr>
              <tr>
                <td class="table-active">str1 = "aple"</td>
                <td class="table-active text-success bold">True</td>
              </tr>
              <tr>
                <td>str1 = "apppple"</td>
                <td class=" text-success bold">True</td>
              </tr>
              <tr>
                <td class="table-active">str1 = "appleeee"</td>
                <td class="table-active text-danger bold">False</td>
              </tr>
              <tr>
                <td rowspan="3" class="table-active">#</td>
                <td rowspan="3" class="table-active">任 0 ~ 9 的單一數字</td>
                <td rowspan="3" class="table-active">str1 Like ###</td>
                <td>str1 = "123"</td>
                <td class=" text-success bold">True</td>
              </tr>
              <tr>
                <td class="table-active">str1 = "1ab"</td>
                <td class=" text-danger bold table-active">False</td>
              </tr>
              <tr>
                <td>str1 = "12"</td>
                <td class=" text-danger bold">False</td>
              </tr>
              <tr>
                <td rowspan="2">[ ]</td>
                <td rowspan="2">只要符合括號內任一字元</td>
                <td rowspan="2">str1 Like "[apple]"</td>
                <td class="table-active">str1 = "a"</td>
                <td class="table-active text-success bold">True</td>
              </tr>
              <tr>
                <td>str1 = "b"</td>
                <td class=" text-danger bold">False</td>
              </tr>
              <tr>
                <td rowspan="2" class="table-active">[! ]</td>
                <td rowspan="2" class="table-active">不符合 ! 後任一字元</td>
                <td rowspan="2" class="table-active">str1 Like "[!apple]"</td>
                <td class="table-active">str1 = "a"</td>
                <td class=" text-danger bold table-active">False</td>
              </tr>
              <tr>
                <td>str1 = "b"</td>
                <td class=" text-success bold">True</td>
              </tr>
              <tr>
                <td rowspan="2">[a-z]</td>
                <td rowspan="2">符合括號內a~z其中一字元</td>
                <td>str1 Like "[a-z]"</td>
                <td class="table-active">str1 = "a"</td>
                <td class="table-active text-success bold">True</td>
              </tr>
              <tr>
                <td>str1 Like "[a-c]"</td>
                <td>str1 = "x"</td>
                <td class=" text-danger bold">False</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- <div class="mb-3 mb-lg-0 mt-4">
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
      </div> -->
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
