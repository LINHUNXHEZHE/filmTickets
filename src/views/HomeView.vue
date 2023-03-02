<template>
  <div class="home">
    <!-- swiper轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" :height="200" indicator-color="white">
      <van-swipe-item v-for="(sw,index) in swiperList" :key="index">
        <div :style="{backgroundImage : 'url('+sw.poster+')'}" style="height:12.5rem; background-size:cover;" alt="" ></div>
      </van-swipe-item>
    </van-swipe>
    <!-- Tab标签页 -->
    <van-tabs v-model="active">
    <van-tab title="正在热映" to="/film/nowplaying">
      <nowplaying></nowplaying>
    </van-tab>
    <van-tab title="即将上映" to="/film/comingsoon">
      <comingsoon></comingsoon>
    </van-tab>
  </van-tabs>
    <!-- tabbar -->
    <tabbar></tabbar>
  </div>
</template>

<script>
// components
import tabbar from '../components/TabBar'

// pages
import nowplaying from '../pages/film/NowPlaying'
import comingsoon from '../pages/film/ComingSoon'

// vant组件库
import { Swipe, SwipeItem, Tab, Tabs } from 'vant'
import { mapState } from 'vuex'

export default {
  components: {
    tabbar,
    nowplaying,
    comingsoon,
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    vanTab: Tab,
    vanTabs: Tabs
  },
  created () {
    // 异步请求swiper数据
    this.$store.dispatch('HomeModule/getSwiperData')
  },
  computed: {
    ...mapState('HomeModule', ['swiperList'])
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>
