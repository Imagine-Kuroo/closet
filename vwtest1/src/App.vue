<template>
  <div id="app">
    <div class="commonHeader">
      大名叫优秀啊
      <img class="logo" src="./assets/logo.png">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.commonHeader{
  height: 50px;
  line-height: 50px;
  background-color: #cccccc;
  text-align: left;
  padding-left: 50px;
  position: relative;
  margin-bottom: 30px;
}
.logo{
  width: 30px;
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>
