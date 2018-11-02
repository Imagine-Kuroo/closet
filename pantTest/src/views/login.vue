<template>
  <section>
      <div class="box_login">
        <div class="head">登录</div>
        <Input class="inputItm" placeholder="请输入账号" clearable/>
        <Input class="inputItm" placeholder="请输入密码" clearable/>
        <Button type="primary" @click="toList()">登录</Button>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toList() {
      console.log(">>>>>");
      this.$router.push({
        path: "/panel/testmodule/list"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.box_login {
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  margin: 150px auto 0;
  padding: 15px;

  .head {
    margin-bottom: 20px;
  }

  .inputItm {
    outline: none;
    margin-bottom: 10px;
  }
}
</style>

