<template>
  <v-row>
    <div class="py-4">
      <div class="d-flex justify-content-between w-100 flex-wrap">
        <div class="mb-3 mb-lg-0">
          <h1 class="display-1 bold">VB 10/29 作業</h1>
          <p class="mb-0 h4">
            Visual Basic 10/29上課作業題目說明
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 mb-4">
      <div class="mb-3 mb-lg-0">
        <h1 class="h3">題目說明</h1>
        <p class="mb-0 fs-5">
          邏輯運算子，下列題目的結果為何?
        </p>
      </div>
      <div class="card border-0 shadow">
        <div class="card-body">
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">
              X = True , Not(X) And X = ?
            </li>
            <li class="list-group-item">( 3 > 5 ) And ( 5 > 3 ) = ?</li>
            <li class="list-group-item">( 2 + 3 &lt; 6 ) Or 0 = ?</li>
            <li class="list-group-item">Y=False , Y Xor ( 3 - 1 > 2 ) = ?</li>
            <li class="list-group-item">( 7 > 4 ) Or ( 4 > 7 ) And 1 = ?</li>
            <li class="list-group-item">
              Not ( 1 + 3 &lt; 5 ) Xor ( 3 * 8 > 20 ) = ?
            </li>
          </ol>
        </div>
      </div>
      <div class="mt-3 mb-3 mb-lg-0">
        <h1 class="h3">解答</h1>
      </div>
      <div class="card border-0 shadow">
        <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header class="fs-5 text-info"
              >真值表</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <img
                src="../../assets/img/VBImg/10_29.png"
                class="img-fluid mr-2"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </v-row>
</template>
<style>
.bold {
  font-weight: bold;
}
</style>
