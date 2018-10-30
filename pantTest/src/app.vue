<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <!-- <Todo></Todo> -->
        
        <router-link to="/app">app</router-link>
        <router-link to="/login">login</router-link>
        <router-link to="/login/exact">login-exact</router-link>
        <router-link to="/login/exact/two">login-exact-two</router-link>
        
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import Todo from "./todo/todo.vue";

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
#app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url('./assets/images/1.jpg');
    background-size: 100%;
}

#cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #999;
    opacity: 0.9;
    z-index: -1;
}
</style>

