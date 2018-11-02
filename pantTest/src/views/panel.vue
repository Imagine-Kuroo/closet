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
  width: 100%;
  height: 100%;
  padding-left: 240px;
  position: relative;
}

.box_header {
  width: 100%;
  margin-left: -240px;
  position: fixed;
  z-index: 999;
  color: #ffffff;
  background-color: #515a6e;
  box-shadow: 0 0 5px #333333;
}

.box_leftMenu {
  width: 240px;
  height: 100%;
  margin-left: -240px;
  float: left;
  padding-top: 60px;
  background-color: #515a6e;
  overflow: hidden;
}

.box_mainContent {
  width: 100%;
  height: 100%;
  float: left;
  background-color: white;
  padding-top: 60px;
}
</style>

