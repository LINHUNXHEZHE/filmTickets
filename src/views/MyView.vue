<template>
    <div class="my">
        <div class="bgImage">
            <img src="data:image/png;base64,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" alt="">
            <div class="login" @click="toLogin" v-if="userInfo.nickName">{{userInfo.nickName}}</div>
            <div class="login" @click="toLogin" v-else>立即登录</div>
        </div>
        <div class="grid">
            <div class="left">
                <span>0 张</span>
                <span>卖座券</span>
            </div>
            <div class="right">
                <span>￥0</span>
                <span>余额</span>
            </div>
        </div>
        <van-cell to="/user/order">
            <div class="my-card">
                <img src="data:image/png;base64,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" alt="">
                <span>电影订单</span>
                <van-icon name="arrow" class="icon" color="#797d82"/>
            </div>
        </van-cell>
        <van-cell to="/user/redPacket">
            <div class="my-card">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAzxJREFUWAntWEFoE0EUnUm7BkSktFLQCgoeCirUo3qoLVpqThaEoK0UKeJNBQ8KaSsBS8FePHgTBWlSC0XBi1SbajT14NGCCB7Eg0ovmosHcTfZ7//rznaymxm3bCIKu5DMn5n/33u8mZ3NhrF//OL19BXz2Z0VsGaAsT4GsL1eTsPGOF9DES9auXGl/0z2sx83IJDEWba1yhi0+5Ob2+dlI2H0+EW2+knJOUcc54sGN877C/z5UfuOIWDdxpVK/eZmwzJmQu5Q7Cwrtn9DHPGRAcRFseCmWFwBgWLPtYBZFUnNbj2uOvs9KNBV8xP4yrO58V3NFlecz+4mLhWPUiAw2FO14dXz3ES3qjjqOGFbFXOFuFRYgZvES+S8hMvdW+FQKs5lBvtHpt94c76g5ljCOd2xIUoR84Blw1PceJ3M5RJzcqt0cEuy4zjn/AmK7KxUeXH5/uQhuVDE4lgCgNPO/sV9RDEdVTQn8uSWsAiTsFHcInHJ83KsFHg4ffnHjqRxAu14gEvQZlerhaX8taNyMcXiWNrW1c16T151PhTTUeUeGzUlhEFYhEnYXUljiLhqkqSOeokxaV86a8LCwqmCuXqH2XCWQeVxIZeZROBvHgawFMV7Dw6x5OatzjDFpYc3KE4V8pkxZ5C+gHWAXbmOUZIl+L2BTT3neDqtPS20AgmTAHDJxpZz49/xnLoAwGbowFq/ajrrwxhhXRvm3q0ZxA7u0VvHRqYu4RZSF7tFfxRIeS7QxcLsxEek3e/WOg2SHbHxLnz3+pHjIg1STFeC8Q+o4KXT8b7424HRqZtsdNob0QWhBAoAB1h03JZuBBtviK9f3re7y+rO8HJLwuiL+qhU3iQ+Hcqu86jChzy6PI9Wr9GH4noPfiWIZmJDDqpwXJeGVfNRxiM7GIU8TG0sMIxLupzYQZ07YeZiB8O4pMuJHdS5E2YudjCMS7qc2EGdO2HmYgfDuKTLiR3UuRNmLugg/WzHS/XSHQZ0ozkel8st1wcE0t8WlGDhf3ZeoVzR4Jg4iItgBbdMEXgnob9isWAQX2pTFpiflmYzcn7DY8s2XUxeJm4/QcDBwFuav6LR/Qa/BTZa3v+P9wstjEbQV26IwAAAAABJRU5ErkJggg==" alt="">
                <span>组合红包</span>
                <van-icon name="arrow" class="icon" color="#797d82"/>
            </div>
        </van-cell>
        <van-cell to="/help">
            <div class="my-card">
                <img src="https://assets.maizuo.com/h5/v5/public/app/img/help.a9203368.png" alt="">
                <span>帮助与客服</span>
                <van-icon name="arrow" class="icon" color="#797d82"/>
            </div>
        </van-cell>
        <van-cell to="/center/setting">
            <div class="my-card">
                <img src="data:image/png;base64,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" alt="">
                <span>设置</span>
                <van-icon name="arrow" class="icon" color="#797d82"/>
            </div>
        </van-cell>
        <tabbar :pageNumber="pageNumber"></tabbar>
    </div>
</template>

<script>
import tabbar from '../components/TabBar'
import { Icon, Cell } from 'vant'
import { mapState } from 'vuex'
export default {
  created () {
    if (!localStorage.getItem('loginInfo')) {
    //   console.log(localStorage.getItem('loginInfo').value)
    }
  },
  components: {
    tabbar,
    vanIcon: Icon,
    vanCell: Cell
  },
  computed: {
    ...mapState(['userInfo'])
  },
  data () {
    return {
      pageNumber: 3
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.my-card{
    display: flex;
    height: 49px;
    justify-content: center;
    align-items: center;
    margin-left: 3%;
}
.my-card img{
    /* flex:1; */
    width: 20px;
    height: 20px;
    margin-right: 3%;
}
.my-card span{
    flex: 2;
}
.my-card .icon{
    flex: 1;
    margin-right: 3%;
    text-align: end;
}
.grid{
    display: flex;
    text-align: center;
    /* justify-content: center;
    align-items: center; */
}
.left{
    flex:1;
    padding: 20px 0;
}
.left span:nth-child(1){
    display: block;
}
.left span:nth-child(2){
    font-size: .8125rem;
    color:#797d82;
}
.right{
    flex: 1;
    padding: 20px 0;
}
.right span:nth-child(1){
    display: block;
}
.right span:nth-child(2){
    font-size: .8125rem;
    color:#797d82;
}
    .my{
        position: relative;
        top: 0;
        right: 0;
        left: 0;
    }
    .bgImage{
        display: flex;
        margin-top: -44px;
        padding-top: 64px;
        padding-left: 22px;
        background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.a5bdd690.png);
        background-size: cover;
        text-align: center;
        align-items: center;
        height: 140px;
    }
    .bgImage img{
        width: 3.9375rem;
        height: 3.9375rem;
        border: 2px solid #fff;
        border-radius: 50%;
    }
    .bgImage .login{
        color:white;
        padding-left: 20px;
    }
</style>
