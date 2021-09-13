<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">變數宣告</h1>
          <p class="mb-0 h4">
            Visual Basic 的變數宣告方法說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">什麼是變數?</h1>
        <p class="mb-0 fs-5">
          變數，顧名思義就是會<font class="text-success bold">"變動的值"</font
          >，在程式的世界裡，等於(=)
          不僅僅用在數學，他也是一個賦予變數"值"的動作，將<font
            class="text-success bold"
            >等號右邊的值給予左邊的變數</font
          >，例如說
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <p>
            Name = "王小名"<br />
            <font class="text-info"
              >//將右邊的"王小名"這個值給左邊命名為Name的變數
            </font>
          </p>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          上面為最簡單的例子，那如果再進階點呢!
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <p>
            X = 1<br />
            <font class="text-info">//將右邊1這個值給左邊命名為X的變數</font
            ><br />
            X = X+1 <br />
            <font class="text-info"
              >//將右邊X變數的值加上1後，重新給左邊的變數X</font
            ><br />
          </p>
        </div>
      </div>

      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          是不是覺得和以前學到的數學有很大的衝突呢，<font
            class="text-success bold"
            >程式不像數學，等號的左右兩邊相等</font
          >，這也是為什麼X=X+1是存在的，因為他只是<font
            class="text-success bold"
            >重新給予X這個變數一次值</font
          >。
        </p>
      </div>
      <div class="mb-0 mb-lg-0">
        <p class="mb-3 mt-1 fs-5">
          而變數，在VB裡都是需要宣告的。
        </p>
      </div>
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">我要怎麼宣告?</h1>
        <p class="mb-0 fs-5">
          在VB裡，你<font class="text-success bold">必須使用Dim</font>進行<font
            class="text-success bold"
            >宣告</font
          >，例如:
        </p>
      </div>
      <div class="card border-0 shadow code_background">
        <div class="card-body">
          <p>
            <font style="color:#039BE5">Dim</font>
            <font style="color:white"> name</font>
            <font style="color:#00C853"> //宣告變數name</font>
          </p>
        </div>
      </div>
      <div class="mb-3 mb-lg-0">
        <p class="mb-0 mt-3 fs-5">
          接著你必須告訴他，這個變數是數字?還是字串?或是其他資料型態，例如:
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
