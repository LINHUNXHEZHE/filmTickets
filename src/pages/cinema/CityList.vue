<template>
    <div>
        <!-- navBar -->
        <navbar :fname="cityName"></navbar>
        <!-- 搜索框 -->
        <form action="/">
        <van-search
            @focus="onShow"
            @blur="onHide"
            v-model="value"
            :show-action="isAction"
            placeholder="输入城市名或拼音"
            @search="onSearch"
            @cancel="onCancel"
        />
        </form>
        <!-- 当前定位 -->
        <div class="city-position">
          <span>GPS定位你所在城市</span>
          <div class="position">
            <span>定位失败</span>
          </div>
        </div>
        <!-- 热门城市 -->
        <div class="hot-city">
          <span>热门城市</span>
          <div class="hot">
            <div class="hot-item" v-for="hot in hotList" :key="hot.cityId">
              <span>{{ hot.name }}</span>
            </div>
          </div>
        </div>
        <!-- 城市 A-Z -->
        <van-index-bar :sticky="false" @select="Toast">
           <div class="city-section" v-for="(item,index) in cityList" :key="index">
               <van-index-anchor class="city-index" :index="item.title" />
               <div v-for="item in item.city" :key="item">
                   <van-cell :title="item"/>
               </div>
           </div>
        </van-index-bar>

    </div>
</template>

<style>
    .city-position{
      margin-left: 1rem;
      font-size: 13px;
      color: #797d82;
    }
    .position>span{
      display: block;
      width:30%;
      height: 1.875rem;
      line-height: 1.875rem;
      background-color:#f4f4f4;
      margin: .5rem 0;
      text-align: center;
      border-radius: .1875rem;
      color: #191a1b;
      font-size: .875rem;
    }
    .city-index{
        height:1.875rem;
        line-height: 1.875rem;
        background-color: #f4f4f4;
        color: #797d82;
    }
    .hot-city>span{
      margin-left: 1rem;
      color: #797d82;
      font-size: 13px;
    }
    .hot{
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      margin: 0.5rem 1rem 0.5rem 1rem;
    }
    .hot-item{
      width:30%;
      height: 1.875rem;
      line-height: 1.875rem;
      background-color:#f4f4f4;
      margin-bottom: .5rem;
      text-align: center;
      border-radius: .1875rem;
    }
    .hot-item span{
      display: block;
    }
    .col{
      height: 1.875rem;
      line-height: 1.875rem;
      border-radius: .1875rem;
      background-color: #f4f4f4;
      color:#191a1b;
      margin-bottom: 0.5rem;
      margin-right: .875rem;
      text-align: center;
    }
</style>

<script>
import navbar from '../../components/NavBar'
import { Search, IndexAnchor, IndexBar, Cell, Toast } from 'vant'
import { mapState } from 'vuex'

export default {
  components: {
    navbar,
    vanSearch: Search,
    vanIndexAnchor: IndexAnchor,
    vanIndexBar: IndexBar,
    vanCell: Cell
  },
  created () {
    this.$store.dispatch('CinemaModule/getCityList')
    this.$store.dispatch('CinemaModule/getHotList')
  },
  computed: {
    ...mapState('CinemaModule', ['cityList', 'hotList'])
  },
  data () {
    return {
      cityName: '当前城市-',
      isAction: true,
      value: ''
    }
  },
  methods: {
    onSearch (val) {
    },
    onCancel () {
    },
    onShow () {
      this.isAction = !this.isAction
    },
    onHide () {
      this.isAction = !this.isAction
    },
    Toast (index) {
      Toast(index)
    }
  }
}
</script>
