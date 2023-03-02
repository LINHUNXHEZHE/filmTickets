<template>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="video-o" to="/film">电影</van-tabbar-item>
    <van-tabbar-item icon="hotel-o" to="/cinema">影院</van-tabbar-item>
    <van-tabbar-item icon="comment-o" to="/info">资讯</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem, Icon } from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Icon)

export default {
  props: {
    pageNumber: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      active: this.pageNumber
    }
  }
}
</script>
