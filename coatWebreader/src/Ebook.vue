<template>
  <div class="ebook">
    <transition name="slide-down">
      <div class="title-wrapper" v-show="ifTitleAndMenuShow">
        <div class="left">
          <i class="iconfont icon-back icon"></i>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <i class="iconfont icon-cart icon"></i>
          </div>
          <div class="icon-wrapper">
            <i class="iconfont icon-person icon"></i>
          </div>
          <div class="icon-wrapper">
            <i class="iconfont icon-more icon"></i>
          </div>
        </div>
      </div>
    </transition>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
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
  </div>
</template>

<script>
import Epub from "epubjs";
const DOWNLOAD_URL = "/static/113933.epub";
export default {
  data() {
    return {
      ifTitleAndMenuShow: false
    };
  },
  methods: {
    toggleTitleAndMenu() {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    },
    showEpub() {
      // 生成book
      this.book = new Epub(DOWNLOAD_URL);

      // 生成Rendition
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight
      });

      // 通过Rendition.display渲染电子书
      this.rendition.display();
    }
  },
  mounted() {
    this.showEpub();
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/global";

.ebook {
  position: relative;
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    height: px2rem(48);
    background: white;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
    .left {
      flex: 0 0 px2rem(50);
      @include center;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
        .icon-cart {
          font-size: px2rem(22);
        }
      }
    }
    &.slide-down-enter,
    &.slide-down-leave-to {
      transform: translate3d(0, -100%, 0);
    }
    &.slide-down-enter-to,
    &.slide-down-leave {
      transform: translate3d(0, 0, 0);
    }
    &.slide-down-enter-active,
    &.slide-down-leave-active {
      transition: all 0.3s linear;
    }
  }
  .read-wrapper {
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      display: flex;

      .left {
        flex: 0 0 px2rem(100);
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 px2rem(100);
      }
    }
  }
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
    &.slide-up-enter,
    &.slide-up-leave-to {
      transform: translate3d(0, 100%, 0);
    }
    &.slide-up-enter-to,
    &.slide-up-leave {
      transform: translate3d(0, 0, 0);
    }
    &.slide-up-enter-active,
    &.slide-up-leave-active {
      transition: all 0.3s linear;
    }
  }
}
</style>
