<template>
  <div id="app">
    <sidebar></sidebar>
  </div>
 
</template>

<script>
import Sidebar from './components/Sidebar.vue'


export default {
  name: 'App',
  components: {
    Sidebar,
  
  }
}
</script>

<style lang="scss">
  @import url("https://use.fontawesome.com/releases/v5.11.0/css/all.css");
  @import url("https://fonts.googleapis.com/css?family=Play");
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    background-color: #ccc;
    color: #333;
  }
  #app {
    position: relative;
    min-height: 100vh;
    width: 100%;
  }
</style>