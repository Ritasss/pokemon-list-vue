<template>
  <div id="app">
  <!--
    <PokemonPage msg="Welcome to Your Vue.js App"/>
  -->
    <router-view></router-view>
  </div>
</template>

<script>
// import PokemonPage from './components/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    // PokemonPage
  }
}
</script>

<style  lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
  
  .other-method-link{
    
    display: flex;
    /* align-items: self-end; */
    justify-content: right;
  }
}
</style>
