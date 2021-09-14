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
      <div class="card border-0 shadow code_background">
        <div class="card-body">
          <p>
            <font style="color:#039BE5">Dim</font>
            <font style="color:white"> name</font>
            <font style="color:#039BE5"> As</font>
            <font style="color:#039BE5"> String</font>
            <font style="color:#00C853"> //宣告變數name 是 字串</font><br />
            <font style="color:#039BE5">Dim</font>
            <font style="color:white"> number</font>
            <font style="color:#039BE5"> As</font>
            <font style="color:#039BE5"> Integer</font>
            <font style="color:#00C853"> //宣告變數number 是 整數</font>
          </p>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          當然，你也可以在宣告時就給予變數一個初始值，例如:
        </p>
      </div>
      <div class="card border-0 shadow code_background">
        <div class="card-body">
          <p>
            <font style="color:#039BE5">Dim</font>
            <font style="color:white"> name</font>
            <font style="color:#039BE5"> As</font>
            <font style="color:#039BE5"> String</font>
            <font style="color:white"> =</font>
            <font style="color:orange"> "王小明"</font>
            <font style="color:#00C853">
              //宣告變數name 是 字串，初始值 = 王小明</font
            ><br />
          </p>
        </div>
      </div>
      <div class="mb-3 mb-lg-0 mt-4">
        <h1 class="h3">命名的方式?</h1>
        <p class="mb-0 fs-5">
          在幫變數取名字的時候，盡量取有意義的名字，這樣未來再回頭看你的程式碼的時候，才知道這個變數代表的意思是什麼，例如:
        </p>
      </div>
      <div class="card border-0 shadow ">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">需要宣告的變數</th>
                <th class="table-danger" scope="col">錯誤示範</th>
                <th class="table-success" scope="col">建議的命名方式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>數字</td>
                <td class="table-danger">Z1、x2、y3...</td>
                <td class="table-success">num1、num_first、number_1...</td>
              </tr>
              <tr>
                <td>姓名</td>
                <td class="table-danger">ns、abc、n1...</td>
                <td class="table-success">name1、name_1、user_name...</td>
              </tr>
              <tr>
                <td>電話</td>
                <td class="table-danger">t、ph、aa...</td>
                <td class="table-success">user_phone、phone_num...</td>
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
          <p class="fs-5 bold mb-0">第一題</p>
          <div class="code_background">
            <p>
              <font style="color:#039BE5">Dim</font>
              <font style="color:white"> X</font>
              <font style="color:#039BE5"> As</font>
              <font style="color:#039BE5"> Integer</font>
              <font style="color:white"> =</font>
              <font style="color:#CCFF90"> 2</font><br />
              <font style="color:white">X = X + </font>
              <font style="color:#CCFF90"> 3 </font>
              <font style="color:#00C853"> // &lArr; 變數X的值為何?</font><br />
              <font style="color:white">X = X + </font>
              <font style="color:#CCFF90"> 6 </font>
              <font style="color:#00C853"> // &lArr; 現在變數X的值為何?</font
              ><br />
            </p>
          </div>
          <p class="fs-5 bold mb-0">第二題</p>
          <div class="code_background">
            <p>
              <font style="color:#039BE5">Dim</font>
              <font style="color:white"> name</font>
              <font style="color:#039BE5"> As String</font><br />

              <font style="color:white">name = </font
              ><font style="color:orange"> "abc"</font><br />
              <font style="color:white">name = </font
              ><font style="color:orange"> "王大大"</font><br />
              <font style="color:white">name = </font
              ><font style="color:orange"> "VB好好玩"</font><br />
              <font style="color:#00C853"> // 現在變數name的值為何?</font><br />
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
