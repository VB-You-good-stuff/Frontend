<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">TextBox 常用方法</h1>
          <p class="mb-0 h4">
            VB 物件TextBox常用的方法說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Copy()">Copy()</h1>
        <p class="mb-0 fs-5">
          可以將TextBox輸入的內容複製到剪貼簿。
        </p>
      </div>
      <!-- <div class="card border-0 shadow">
        <div class="card-body">
          這裡放程式的圖
        </div>
      </div> -->
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Clear()">Clear()</h1>
        <p class="mb-0 fs-5">
          可將該欄位直接清空。
        </p>
      </div>
      <!-- <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div> -->
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Cut()">Cut()</h1>
        <p class="mb-0 fs-5">
          剪下TextBox輸入的內容到剪貼簿。
        </p>
      </div>
      <!-- <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div> -->
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Paste()">Paste()</h1>
        <p class="mb-0 fs-5">
          可以將剪貼簿上的文字貼到控制物件上。
        </p>
      </div>
      <!-- <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div> -->
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Undo()">Undo()</h1>
        <p class="mb-0 fs-5">
          將輸入的內容回復到上一次的變更。
        </p>
      </div>
      <!-- <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div> -->
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="SelectAll()">SelectAll()</h1>
        <p class="mb-0 fs-5">
          選取該控制物件上的所有文字。
        </p>
      </div>
      <!-- <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div> -->
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="AppendText()">AppendText()</h1>
        <p class="mb-0 fs-5">
          將文字附加至文字方塊。
        </p>
      </div>
      <!-- <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div> -->
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="ResetText()">ResetText()</h1>
        <p class="mb-0 fs-5">
          將text所有屬性設為預設值。
        </p>
      </div>
      <!-- <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div> -->
    </div>
  </v-row>
</template>
<script>
export default {
	mounted() {
		if(this.$route.params.fun != undefined){
			const fun = document.getElementById(this.$route.params.fun)
			console.log(fun)
			fun.scrollIntoView()
		}
	},
}
</script>
<style>
.bold {
  font-weight: bold;
}
</style>
