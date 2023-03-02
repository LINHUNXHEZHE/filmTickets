<template>
    <div v-if="filmdetail" >
        <navbar v-top :isFixed="true" :fname="filmdetail.name" ></navbar>
        <div class="Detail">
            <div class="film-detail">
                <!-- 海报 -->
                <div class="detail-bill">
                    <van-image fit="cover" :src="filmdetail.poster" width="100%" height="210" alt=""/>
                </div>
                <!-- 电影详情 -->
                <div class="detail">
                    <div class="detail-title">
                        <div class="film-title">
                            <span>{{filmdetail.name}}</span>
                            <span>{{filmdetail.filmType.name}}</span>
                        </div>
                        <div class="film-grade">
                            <span><i>{{filmdetail.grade}}</i></span>
                            <span v-if="filmdetail.grade"> 分</span>
                        </div>
                        <div class="film-type">
                            <span>{{filmdetail.category}}</span>
                        </div>
                        <div class="film-time">
                            <span>{{filmdetail.premiereAt | dateFilter}}上映</span>
                        </div>
                        <div class="film-country">
                            <span>{{ filmdetail.nation }} |</span>
                            <span> {{filmdetail.runtime}}分钟</span>
                        </div>
                        <div class="film-summarize">
                            <span :class="isShow == true ? '' :'film-shade'">{{ filmdetail.synopsis }}</span>
                        </div>
                        <div class="toggle">
                            <van-icon name="arrow-down" size="5" v-show="isShow==true" @click="isShow=!isShow"/>
                            <van-icon name="arrow-up" size="5" v-show="isShow==false" @click="isShow=!isShow"/>
                        </div>
                    </div>
                </div>
                <div class="cut"></div>
                <!-- 演职人员 -->
                <div class="actors-list">
                    <p>演职人员</p>
                    <van-swipe :width="96" :loop="false" :show-indicators="false" >
                        <van-swipe-item v-for="(item,index) in filmdetail.actors" :key="index">
                            <div class="actors-gather">
                                <van-image
                                fit="cover"
                                width="5.3rem"
                                height="5.3rem"
                                :src="item.avatarAddress"
                                />
                                <span>{{ item.name }}</span>
                                <span>{{ item.role }}</span>
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div class="cut"></div>
                <!-- 剧照 -->
                <div class="stage">
                    <div class="stage-title">
                        <span>剧照</span>
                        <span @click="allPhoto">全部({{filmdetail.photos.length}})<van-icon name="arrow" /></span>
                    </div>
                    <div class="stage-photo">
                        <van-swipe class="my-swipe" :loop="false" :width="150" :height="100" :show-indicators="false">
                            <van-swipe-item v-model="isShow" class="photo-marrig" v-for="(photo,index) in filmdetail.photos" :key="index" @click="handleAll(index)">
                                <van-image
                                width="9.375rem"
                                height="5.25rem"
                                :src="photo"
                                fit="cover"
                                />
                            </van-swipe-item>
                        </van-swipe>
                    </div>
                </div>
                <div class="cut" style="margin-bottom:4rem"></div>
            </div>
            <div class="back" @click="routeBack">
                <van-icon name="arrow-left" />
            </div>
            <footbtn :title="btnTitle" ></footbtn>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import navbar from '../../components/NavBar'
import footbtn from '../../components/FootBtn'
import { Icon, Swipe, SwipeItem, Image, ImagePreview } from 'vant'
import { mapState } from 'vuex'
// 过滤器
import '../../filter/dateFilter'
import '../../filter/actorsFilter'

// 自定义指令
Vue.directive('top', {
  inserted (el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 50) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  }
})

export default {
  components: {
    navbar,
    footbtn,
    vanIcon: Icon,
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    vanImage: Image
  },
  mounted () {
    // console.log(this.$route.params)  // 获取filmId
    this.$store.dispatch('HomeModule/getFilmDetail', this.$route.params)
  },
  computed: {
    ...mapState('HomeModule', ['filmdetail'])
  },
  data () {
    return {
      isShow: false, // 是否展开
      isDetail: true,
      btnTitle: ' 选座购票 '
    }
  },
  methods: {
    routeBack () {
      this.$router.back()
    },
    handleAll (index) {
      ImagePreview({
        images: this.filmdetail.photos,
        startPosition: index
      })
    },
    allPhoto () {
      this.$router.push('/film/stagePhoto')
    }
  }
}
</script>

<style>
    .back{
        position: absolute;
        top: .625rem;
        left: .625rem;
        width: 1.875rem;
        height: 1.875rem;
        background-color: #828282aa;
        border-radius: 3.125rem;
        text-align: center;
        line-height: 1.875rem;
    }
    .cut{
        height: 0.5rem;
        background-color: #F4F4F4;
    }
    .Detail{
        position: relative;
        margin: 0;
        padding: 0;
    }
    .detail-title{
        display: flex;
        flex-flow: column;
        margin-top:.625rem;
        padding:.9375rem .9375rem 0 .9375rem;
    }
    .film-title span:nth-child(1){
        font-size: 1.125rem;
        padding:0 .4375rem 0 0;
    }
    .film-title span:nth-child(2){
        font-size: .75rem;
        background-color: #d2d6dc;
        padding: 0 .125rem;
        border-radius:.3125rem;
        color:white;
    }
    .film-type{
        display: flex;
    }
    .film-type,.film-time,.film-country span{
        margin-top:0.5rem;
        font-size: .8125rem;
        color: #797d82;
    }
    .film-country{
        margin-top: 0.5rem;
    }
    .film-summarize{
        display: flex;
    }
    .film-summarize span{
        margin-top:.75rem ;
        font-size: .8125rem;
        color: #797d82;
    }
    .film-shade{
        height: 36px;
        overflow: hidden;
    }
    .toggle{
        text-align: center;
        margin-bottom: .9375rem;
    }
    .actors-list{
        margin-left:.9375rem;
        margin-bottom:.9375rem;
    }
    .actors-list span{
        font-size: 1rem ;
        color: #191a1b;
    }
    .actors-gather{
        display: flex;
        flex-flow: column;
    }
    .actors-gather span{
        padding-right:.625rem;
        text-align: center;
    }
    .actors-gather span:nth-child(2){
        margin-top: .625rem;
        font-size: 0.75rem;
        color: #191a1b;
    }
    .actors-gather span:nth-child(3){
        font-size: 0.75rem;
        color:#797d82;
    }
    .photo-marrig{
        margin-right:.9375rem;
    }
    .stage{
        margin-bottom: .9375rem;
    }
    .stage-photo{
        margin-left:.9375rem;
    }
    .stage-title{
        display: flex;
        width: 100%;
        align-items: center;
    }
    .stage-title span:nth-child(1){
        flex: 1;
        padding:.9375rem 0 .9375rem .9375rem;
        text-align: left;
        font-size: 1rem;
        color: #191a1b;
    }
    .stage-title span:nth-child(2){
        flex: 1;
        padding:.9375rem .9375rem .9375rem 0;
        text-align: right;
        font-size: .8125rem;
        color: #797d82;
    }
    .film-grade{
        text-align:right;
        color:#ffb232;
    }
    .film-grade span:nth-child(1){
        font-size: 1.125rem;
    }
    .film-grade span:nth-child(2){
        font-size: .625rem;
    }
</style>
