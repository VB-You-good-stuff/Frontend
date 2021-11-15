<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">Form 常用方法</h1>
          <p class="mb-0 h4">
            VB 物件Form常用的方法說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Close()">Close()</h1>
        <p class="mb-0 fs-5">
          關閉表單(自身不可關閉自身表單，請使用Me來呼叫)
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
        <h1 class="h3" id="Hide()">Hide()</h1>
        <p class="mb-0 fs-5">
          隱藏表單(同上)
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
        <h1 class="h3" id="Show()">Show()</h1>
        <p class="mb-0 fs-5">
          顯示表單(同上)
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
        <h1 class="h3" id="SetDesktopLocation()">SetDesktopLocation()</h1>
        <p class="mb-0 fs-5">
          設定表單在螢幕的顯示的位置(同上)
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
        <h1 class="h3" id="CenterToScreen()">CenterToScreen()</h1>
        <p class="mb-0 fs-5">
          設定表單顯示於螢幕中央(同上)
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
