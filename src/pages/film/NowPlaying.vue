<template>
    <div>
        <div class="nowplaying" v-for="playing in nowplaying" :key="playing.filmId" @click="toDetail(playing.filmId)">
            <div class="left">
                <img :src="playing.poster" style="width:66px;height:99px;background-color:red" :alt="playing.name">
            </div>
            <div class="center">
                <div class="film-title">
                    <span>{{playing.name}}</span>
                    <span>{{playing.filmType.name}}</span>
                </div>
                <div class="film-grade">
                    <span>观众评分</span>
                    <span>{{ !playing.grade ? '暂无' :playing.grade }}</span>
                </div>
                <div class="film-person">
                    <span>主演：{{playing.actors | actorFilter}}</span>
            </div>
            <div class="film-stateTime">
                <span>{{playing.nation}} | </span>
                <span>{{playing.runtime}}分钟</span>
            </div>
        </div>
        <div class="right">
            <van-button color="#ff5f16" plain size="small">购票</van-button>
        </div>
    </div>
    </div>
</template>

<script>
import { Button } from 'vant'
import { mapState } from 'vuex'
import '../../filter/actorsFilter'

export default {
  components: {
    vanButton: Button
  },
  // 获取正在热映数据
  created () {
    this.$store.dispatch('HomeModule/getNowPlaying')
  },
  computed: {
    ...mapState('HomeModule', ['nowplaying'])
  },
  methods: {
    toDetail (fimlID) {
      // 跳转路由并携带参数
      this.$router.push('/detail/' + `${fimlID}`)
    }
  }
}
</script>

<style>
    .nowplaying{
        display: flex;
        flex-flow: nowrap;
        align-items: center;
        width: 100%;
        padding:0.5rem 0;
    }
    .nowplaying .left{
        flex: 1;
        text-align: center;
    }
    .nowplaying .center{
        flex:2;
    }
    .nowplaying .center .film-title{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        width:12.5rem;
    }
    .nowplaying .center .film-title span:nth-child(1){
        /* font-size: 1rem; */
        height: 1.5rem;
        color:#191a1b;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .nowplaying .center .film-title span:nth-child(2){
        margin-left: .3125rem;
        padding: .06rem .06rem;
        border-radius: .125rem;
        color: white;
        font-size: .75rem;
        text-align: center;
        background-color: #d2d6dc;
    }
    .nowplaying .center .film-grade{
        display: flex;
    }
    .nowplaying .center .film-grade span:nth-child(1){
        font-size: .8125rem;
        color:#797d82
    }
    .nowplaying .center .film-grade span:nth-child(2){
        font-size: .8125rem;
        color: #ffb232;
        padding-left:.625rem;
    }
    .nowplaying .center .film-person{
        display: flex;
        /* flex:2 */
    }
    .nowplaying .center .film-person span:nth-child(1){
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .8125rem;
        color:#797d82;
        /* height: .8125rem; */
        width:12.5rem;
    }
    .nowplaying .center .film-stateTime span:nth-child(1){
        font-size: .8125rem;
        color:#797d82
    }
    .nowplaying .center .film-stateTime span:nth-child(2){
        font-size: .8125rem;
        color:#797d82
    }
    .nowplaying .right{
        flex: 1;
        text-align: center;
    }
</style>
