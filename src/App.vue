<template>
  <div>
    <SideBar/>
    <main class="content">
      <Header/>
      <div class="container-fluid" style="height:100vh">
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </div>
      
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@import './assets/css/volt.css';
</style>