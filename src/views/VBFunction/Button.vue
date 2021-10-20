<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">Button 常用方法</h1>
          <p class="mb-0 h4">
            VB 物件Button常用的方法說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Hide()">Hide()</h1>
        <p class="mb-0 fs-5">
          做用為將button物件隱藏，可以使用觸發事件來執行該方法，而佔用的電腦資源會比在屬性區直接設定visible
          = false來得少。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          這裡放程式的圖
        </div>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="Show()">Show()</h1>
        <p class="mb-0 fs-5">
          可以將隱藏的button物件重新生成出來，，而佔用的電腦資源會比在屬性區直接設定visible
          = false來得少。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3" id="ToString()">ToString()</h1>
        <p class="mb-0 fs-5">
          可以讀取到物件Button的Text屬性。
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <img
            src="../../assets/img/VBImg/VB_install_3.png"
            class="img-fluid"
          />
        </div>
      </div>
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
