<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Connection msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Connection from '@/components/Connection.vue'

export default {
  name: 'HomeView',
  components: {
    Connection
  }
}
</script>
