<template>
  <div id="app">
    <!-- <nav class="nav">
      <router-link to="/">Accueil</router-link> | 
      <router-link to="/task">Ajouter une tache</router-link> |
      <router-link to="/user">Ajouter un utilisateur</router-link>
    </nav> -->

    <router-view/>
    <!-- <todos></todos> -->
  </div>
</template>

<script>
// import Todos from './components/Todos.vue'

export default {

//   components: {
//     Todos
// }

}
</script>

<style lang="scss">
@import "./assets/settings";
@import "~foundation-sites/scss/foundation.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 35px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
