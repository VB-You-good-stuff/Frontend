<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">Label 常用方法</h1>
          <p class="mb-0 h4">
            VB 物件Label常用的方法說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Hide()">Hide()</h1>
        <p class="mb-0 fs-5">
          將label隱藏。
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
        <h1 class="h3" id="Show()">Show()</h1>
        <p class="mb-0 fs-5">
          將隱藏的label顯示出來。
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
        <h1 class="h3" id="ToString()">ToString()</h1>
        <p class="mb-0 fs-5">
          回傳包含label名稱的字串。
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
        <h1 class="h3" id="GetPreferredSize()">GetPreferredSize()</h1>
        <p class="mb-0 fs-5">
          取得該控制項之矩形區域大小。
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
