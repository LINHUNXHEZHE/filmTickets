<template>
    <div>
        <van-nav-bar title="影院" color="black" fixed
        @click-left="goCitySelect">
        <template #left >
          城市-
        </template>
        <template #right >
          <van-icon name="search" size="18" color="black"/>
        </template>
      </van-nav-bar>
      <van-dropdown-menu  style="width:100%;top:44px;position:fixed;" active-color="#ff5f16">
        <van-dropdown-item v-model="value1" :options="districtList" />
        <van-dropdown-item @change="handleClick" v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
        <tabbar :pageNumber="pageNumber"></tabbar>
        <div style="margin-top:100px" v-if="isShow">
          <ul>
            <li v-for="flag in cityFlag" :key="flag.cinemaId">
              <div class="flag-title">
                <span>{{ flag.name }}</span>
                <span>￥<i>{{ flag.lowPrice | priceFliter }}</i> 起</span>
              </div>
              <div class="address">
                <span>{{ flag.address }}</span>
                <span>约 {{ flag.Distance | distanceFilter }} 公里</span>
              </div>
            </li>
          </ul>
        </div>
        <div style="margin-top:100px" v-else>
          <ul>
            <li v-for="flag in ticketflag" :key="flag.cinemaId">
              <div class="flag-title">
                <span>{{ flag.name }}</span>
                <span>￥<i>{{ flag.lowPrice | priceFliter }}</i> 起</span>
              </div>
              <div class="address">
                <span>{{ flag.address }}</span>
                <span>约 {{ flag.Distance | distanceFilter }} 公里</span>
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<style>
  .flag-title{
    display: flex;
    margin: 0.5rem 1rem;
  }
  .flag-title span:nth-child(1){
    flex: 3;
    color:#191a1b;
    font-size: .9375rem;
    text-align: start;
  }
  .flag-title span:nth-child(2){
    flex: 1;
    color: #ff5f16;
    font-size: .75rem;
    text-align: end;
  }
  .flag-title span i{
    font-size: .9375rem;
  }
  .address{
    display: flex;
    margin: 0.5rem 1rem;
  }
  .address span:nth-child(1){
    flex: 3;
    font-size: .75rem;
    color: #797d82;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .address span:nth-child(2){
    flex:1;
    font-size: .6875rem;
    color: #797d82;
    text-align: end;
  }
</style>

<script>
import tabbar from '../components/TabBar'
import '../filter/priceFilter'
import '../filter/distanceFilter'
import { DropdownMenu, DropdownItem, NavBar, Icon } from 'vant'
import { mapState } from 'vuex'
export default {
  components: {
    tabbar,
    vanIcon: Icon,
    vanNavBar: NavBar,
    vanDropdownMenu: DropdownMenu,
    vanDropdownItem: DropdownItem
  },
  created () {
    this.$store.dispatch('CinemaModule/getCityFlag')
  },
  computed: {
    ...mapState('CinemaModule', ['cityFlag', 'ticketflag', 'districtList'])
  },
  data () {
    return {
      isShow: true,
      cityName: '城市-',
      value1: 0,
      value2: 'a',
      value3: true,
      option1: [
        { text: '全城', value: 0 }
      ],
      option2: [
        { text: 'APP订票', value: 'a' },
        { text: '前台兑换', value: 'b' }
      ],
      option3: [
        {
          text: '最近去过', value: true
        }, {

          text: '离我最近', value: false
        }
      ],
      pageNumber: 1,
      pageTitle: '影院'
    }
  },
  methods: {
    goCitySelect () {
      this.$router.push('/city')
    },
    handleClick (value) {
      console.log(value)
      if (value === 'b') {
        this.isShow = !this.isShow
      } else {
        this.isShow = !this.isShow
      }
    }
  }
}
</script>
