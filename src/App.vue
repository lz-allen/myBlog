<template>
  <div id="app" @touchmove.prevent>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  font-size: 62.5%;
}
@media only screen and (min-width: 481px){
  html {
    font-size: 94%!important;
  }
}
@media only screen and (min-width: 561px){
  html {
    font-size: 109%!important;
  }
}
@media only screen and (min-width: 641px){
  html {
    font-size: 125%!important;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 2rem;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
@media only screen and (max-width: 768px){
  .hidden-xs-only{
    display: none;
  }
}
</style>
