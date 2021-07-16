<template>
<v-app>
  <appBar />
  <navigationDrawer />
</v-app>
  
</template>

<script>
import appBar from '../components/AppBar.vue'
import navigationDrawer from '../components/navigationDrawer.vue'

  export default {
    name: 'Home',

    components: {
      navigationDrawer,
      appBar,
    },
  }
</script>
