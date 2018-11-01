<template>
  <section id="header">
    <div class="box_title">
        <Icon type="md-bonfire" size="24" style="margin-right:5px;"/>管理系统BETA
    </div>
    <div class="box_menu">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                内容管理
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="2">
                <Icon type="ios-people" />
                用户管理
            </MenuItem>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
        </Menu>
    </div>
    <div class="box_option">
        <div class="btn">登出<Icon type="md-log-out" size="22" style="margin-right:10px;"/></div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      theme1: "dark"
    };
  }
};
</script>

<style lang="stylus" scoped>
#header {
    height: 100%;
    line-height: 1.5;
}

.box_title {
    width: 200px;
    float: left;
    height: 100%;
    line-height: 60px;
    text-align: center;
}

.box_menu {
    float: left;
}

.box_option {
    line-height: 60px;
    float: right;

    .btn {
        cursor: pointer;
    }
}
</style>

