<template>
  <transition name="slide-up">
      <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
        <div class="icon-wrapper">
          <i class="iconfont icon-menu icon"></i>
        </div>
        <div class="icon-wrapper">
          <i class="iconfont icon-progress icon"></i>
        </div>
        <div class="icon-wrapper">
          <i class="iconfont icon-bright icon"></i>
        </div>
        <div class="icon-wrapper">
          <i class="iconfont icon-A icon"></i>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global";
.menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    height: px2rem(48);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-progress {
        font-size: px2rem(26);
      }
      .icon-bright {
        font-size: px2rem(22);
      }
    }
    
  }
</style>
