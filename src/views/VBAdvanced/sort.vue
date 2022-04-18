<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">排序</h1>
          <p class="mb-0 h4">
            排序對於陣列來說是一個非常重要的工具， 它可以將陣列中的<font
              class="text-success bold"
              >資料依照指定需求進行排序</font
            >，由小到大或由大到小，
            若陣列的資料過多，靠人工的方式進行排序是非常耗時且錯誤率也會很高。
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">經典的排序法</h1>
        <p class="mb-0 fs-5">
          分別為<font class="text-success bold">氣泡排序及選擇排序</font
          >，其實VB內也有自動排序的套件，
          但基礎的你還是得有一些排序的觀念，因此就來一一介紹氣泡排序及選擇排序吧，以下將會由小到大排序做說明。
        </p>
      </div>
      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">氣泡排序法</h1>
        <p class="mb-0 fs-5">
          從第一個數字開始一路比到最後，在經過全部的比較之後，我們將鎖定最後一個數字，並從頭開始，
          一路將陣列中所有數值都做完比對，以圖說明第一輪比較。
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
                <td><font style="font-size:20px;">步驟</font></td>
                <td><font style="font-size:20px;">更換前</font></td>
                <td><font style="font-size:20px;">更換後</font></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Step1</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  從5開始，5 &lt; 8，不換 <br /><img
                    src="../../assets/img/VBImg/sort_1.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>Step2</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_2.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  8 &gt; 6，換<br />
                  <img
                    src="../../assets/img/VBImg/sort_3.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>Step3</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_4.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  8 &gt; 3，換<br />
                  <img
                    src="../../assets/img/VBImg/sort_5.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>Step4</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_6.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  比對完成，第一輪結束，鎖定最後一個元素。<br />
                  <img
                    src="../../assets/img/VBImg/sort_7.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          每輪比較後的結果:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body table-responsive">
          <table
            class="table table-striped table-hover"
            style="text-align:center; vertical-align: middle;"
          >
            <thead>
              <tr>
                <td><font style="font-size:20px;">說明</font></td>
                <td><font style="font-size:20px;">資料狀態</font></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>原始陣列</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_8.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>第一輪</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_9.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>第二輪</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_10.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>第三輪</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_11.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>第四輪</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_12.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          實作結果如下 :
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/sort_13.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/sort_14.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/sort_15.png"
            class="img-fluid"
          /><br />
        </div>
      </div>

      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">選擇排序法</h1>
        <p class="mb-0 fs-5">
          與氣泡排序法類似，唯一的差異在於 永遠都是第一個數字逐一去比大小，
          若大於就換，小於就不換，並繼續比對，以圖說明第一輪及第二輪。
          <br />
          <font class="bold text-success">第一輪 :</font>
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
                <td><font style="font-size:20px;">步驟</font></td>
                <td><font style="font-size:20px;">更換前</font></td>
                <td><font style="font-size:20px;">更換後</font></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Step1</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_16.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  從5開始，5 &lt; 8，不換 <br /><img
                    src="../../assets/img/VBImg/sort_17.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>Step2</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_18.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  5 &lt; 6，不換<br />
                  <img
                    src="../../assets/img/VBImg/sort_19.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>Step3</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_20.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  5 &gt; 3，換<br />
                  <img
                    src="../../assets/img/VBImg/sort_21.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>Step4</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_22.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  比對完成，第一輪結束，鎖定第一個元素。<br />
                  <img
                    src="../../assets/img/VBImg/sort_23.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          <font class="bold text-success">第二輪 :</font>
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
                <td><font style="font-size:20px;">步驟</font></td>
                <td><font style="font-size:20px;">更換前</font></td>
                <td><font style="font-size:20px;">更換後</font></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Step1</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_24.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  從8開始，8 &gt; 6，換 <br /><img
                    src="../../assets/img/VBImg/sort_25.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>Step2</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_26.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  6 &gt; 5，換<br />
                  <img
                    src="../../assets/img/VBImg/sort_27.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>Step3</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_28.png"
                    class="img-fluid"
                  />
                </td>
                <td>
                  比對完成，第二輪結束，鎖定第二個元素。<br />
                  <img
                    src="../../assets/img/VBImg/sort_29.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          每輪比較後的結果:
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body table-responsive">
          <table
            class="table table-striped table-hover"
            style="text-align:center; vertical-align: middle;"
          >
            <thead>
              <tr>
                <td><font style="font-size:20px;">說明</font></td>
                <td><font style="font-size:20px;">資料狀態</font></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>原始陣列</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_30.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>第一輪</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_31.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>第二輪</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_32.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>第三輪</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_33.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
              <tr>
                <td>第四輪</td>
                <td>
                  <img
                    src="../../assets/img/VBImg/sort_34.png"
                    class="img-fluid"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          實作結果如下 :
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/sort_35.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/sort_36.png"
            class="img-fluid"
          /><br />
          <img
            src="../../assets/img/VBImg/sort_37.png"
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
.code_background {
  background-color: black;
}
.practice_background {
  background-color: #ffdeae;
}
</style>
