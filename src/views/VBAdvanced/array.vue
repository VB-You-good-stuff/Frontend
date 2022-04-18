<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">陣列</h1>
          <p class="mb-0 h4">
            陣列由元素組成，可以用來儲存多個相同資料型態的資料，宣告一個陣列等於宣告了多個相同資料型態的變數。
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">陣列的好處</h1>
        <p class="mb-0 fs-5">
          無陣列時需要逐一宣告，會造成程式碼過於冗長。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/array.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          有了陣列的幫助，可以更快的宣告完成，程式碼也更好維護。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/array_1.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          陣列利用<font class="text-success bold">索引來讀取值</font
          >，通常會利用For迴圈來進行陣列的讀取，要注意的是，<font
            class="text-success bold"
            >陣列是從0開始計算</font
          >，這是一個非常重要的觀念。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/array_2.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/array_3.png"
            class="img-fluid"
          /><br />
        </div>
      </div>

      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">陣列的宣告</h1>
        <p class="mb-4 fs-5">
          陣列有分一維陣列、二維陣列甚至多維陣列，我們可以利用不同方式進行宣告及給予值。
          <br />
        </p>
        <h1 class="h3">一維陣列</h1>
        <p class="mb-4 fs-5">
          <font class="text-success bold">分開設定法</font> :
          逐一給值，此方法屬於最直觀且易懂的宣告方式，但容易造成程式碼變的冗長。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img src="../../assets/img/VBImg/array_4.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          <font class="text-success bold">合併設定法</font> :
          宣告陣列後直接用括號給值，此方法不給予陣列索引值，會直接判斷後面給多少值而直接讀取索引值。
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body">
          <img src="../../assets/img/VBImg/array_5.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          <font class="text-success bold">迴圈設定法</font> :
          此方法適用於須給陣列中每個元素相同的初始值或序列。
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body">
          <img src="../../assets/img/VBImg/array_6.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">二維陣列</h1>
        <p class="mb-0 fs-5">
          <font class="text-success bold">土法煉鋼法</font>
          : 宣告一個二維陣列，並<font class="text-danger bold"
            >每一筆每一筆的給予相對應的值</font
          >。
          <br />
          宣告二維陣列時，<font class="text-success bold"
            >資料型態不一定需要設置</font
          >，若無設置VB會自動將資料型態視為Object，意指二維陣列中資料型態可以不用一樣，
          反之若設定了，整個陣列就必須儲存相同的資料型態。
          <br />
          以儲存學生資料為例，student_data(0,x)去存放學生John的成績及個人資料，
          student_data ( 1 , x )
          為Mary的資料，每個學生都有相對應的資料需要儲存如表格所示。
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
                <th scope="col">
                  <font style="font-size:20px;">student_data ( x , 0 )</font>
                </th>
                <th scope="col">
                  <font style="font-size:20px;">student_data ( x , 1 )</font>
                </th>
                <th scope="col">
                  <font style="font-size:20px;">student_data ( x , 2 )</font>
                </th>
                <th scope="col">
                  <font style="font-size:20px;">student_data ( x , 3 )</font>
                </th>
                <th scope="col">
                  <font style="font-size:20px;">student_data ( x , 4 )</font>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><font style="font-size:20px;">學號</font></td>
                <td><font style="font-size:20px;">姓名</font></td>
                <td><font style="font-size:20px;">國語成績</font></td>
                <td><font style="font-size:20px;">數學成績</font></td>
                <td><font style="font-size:20px;">自然成績</font></td>
              </tr>
            </tbody>
          </table>
          <img src="../../assets/img/VBImg/array_7.png" class="img-fluid" />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          <font class="text-success bold">利用大括弧設定初始值</font> :
          跟宣告一維陣列時一樣，此種方法不需給予索引值，VB會自己判斷此陣列有多少資料。
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body">
          <img src="../../assets/img/VBImg/array_8.png" class="img-fluid" />
        </div>
      </div>
      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">二維陣列的範例</h1>
        <p class="mb-4 fs-5">
          我們會使用巢狀迴圈來進行資料的讀取，將用以下範例來說明二維陣列之應用:請利用巢狀迴圈顯示二維陣列中的所有學生資料。
          <br />
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/array_9.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/array_10.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/array_11.png"
            class="img-fluid"
          /><br />
        </div>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">小練習</h1>
        <p class="mb-0 fs-5">
          馬鈴薯大學資管系研究所總共有10位學生，座號及姓名如表格所示，
          由於老師記性不好沒辦法記住所有同學的名字，請幫老師做一個功能
          ，讓老師輸入座號即可顯示相對應姓名。(請使用長度為10的一維陣列)
        </p>
        <img src="../../assets/img/VBImg/array_12.png" class="img-fluid" />
        <img
          src="../../assets/img/VBImg/array_13.png"
          class="img-fluid"
        /><br />
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          程式碼
        </p>
      </div>
      <div class="card border-0 shadow  ">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/array_14.png"
            class="img-fluid"
          /><br />
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          結果畫面
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body">
          <img src="../../assets/img/VBImg/array_15.png" class="img-fluid" />
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
