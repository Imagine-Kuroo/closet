<template>
  <section id="panel">
      <div class="box_header">
        <Header/>
      </div>
      <div class="box_leftMenu">
        <Left-Menu/>
      </div>
      <div class="box_mainContent">
        <router-view />
      </div>
      
  </section>
</template>

<script>
import Header from "../layout/header.vue";
import LeftMenu from "../layout/leftMenu.vue";

export default {
  components: {
    Header,
    LeftMenu
  }
};
</script>

<style lang="stylus" scoped>
#panel {
  min-width: 1000px;
  height: 100%;
  padding-left: 240px;
  position: relative;
}

.box_header {
  width: 100%;
  margin-left: -240px;
  background-color: red;
  position: fixed;
  z-index: 100;
}

.box_leftMenu {
  height: 100%;
  width: 240px;
  margin-left: -240px;
  float: left;
  background-color: orange;
  padding-top: 60px;
}

.box_mainContent {
  width: 100%;
  height: 100%;
  float: left;
  background-color: white;
  padding-top: 60px;
}
</style>

