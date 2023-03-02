<template>
    <div>
        <div class="comingsoon" v-for="coming in comingsoon" :key="coming.filmId" @click="toDetail(coming.filmId)">
            <div class="left">
                <img :src="coming.poster" style="width:66px;height:99px;background-color:red" :alt="coming.name">
            </div>
            <div class="center">
                <div class="film-title">
                    <span>{{coming.name}}</span>
                    <span>{{ coming.filmType.name }}</span>
                </div>
                <div class="film-grade">
                    <span>观众评分</span>
                    <span>{{ !coming.grade ? '暂无' :coming.grade }}</span>
                </div>
                <div class="film-person">
                    <span>主演：{{coming.actors | actorFilter}}</span>
            </div>
            <div class="film-stateTime">
                <span>{{coming.nation}} | </span>
                <span>{{coming.runtime}}分钟</span>
            </div>
        </div>
        <div class="right">
            <van-button color="#ff5f16" plain size="small">预购</van-button>
        </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
import { mapState } from 'vuex'

Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(actor => actor.name).join(' ')
})

export default {
  components: {
    vanButton: Button
  },
  // 获取即将上映数据
  mounted () {
    this.$store.dispatch('HomeModule/getComingSoon')
  },
  computed: {
    ...mapState('HomeModule', ['comingsoon'])
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
    .comingsoon{
        display: flex;
        flex-flow: nowrap;
        align-items: center;
        width: 100%;
        padding:0.5rem 0;
    }
    .comingsoon .left{
        flex: 1;
        text-align: center;
    }
    .comingsoon .center{
        flex:2;
    }
    .comingsoon .center .film-title{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        width:12.5rem;
    }
    .comingsoon .center .film-title span:nth-child(1){
        /* font-size: 1rem; */
        height: 1.5rem;
        color:#191a1b;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .comingsoon .center .film-title span:nth-child(2){
        margin-left: .3125rem;
        padding: .06rem .06rem;
        border-radius: .125rem;
        color: white;
        font-size: .75rem;
        text-align: center;
        background-color: #d2d6dc;
    }
    .comingsoon .center .film-grade{
        display: flex;
    }
    .comingsoon .center .film-grade span:nth-child(1){
        font-size: .8125rem;
        color:#797d82
    }
    .comingsoon .center .film-grade span:nth-child(2){
        font-size: .8125rem;
        color: #ffb232;
        padding-left:.625rem;
    }
    .comingsoon .center .film-person{
        display: flex;
        /* flex:2 */
    }
    .comingsoon .center .film-person span:nth-child(1){
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .8125rem;
        color:#797d82;
        /* height: .8125rem; */
        width:12.5rem;
    }
    .comingsoon .center .film-stateTime span:nth-child(1){
        font-size: .8125rem;
        color:#797d82
    }
    .comingsoon .center .film-stateTime span:nth-child(2){
        font-size: .8125rem;
        color:#797d82
    }
    .comingsoon .right{
        flex: 1;
        text-align: center;
    }
</style>
