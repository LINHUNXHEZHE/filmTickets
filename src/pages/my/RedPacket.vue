<template>
    <div>
        <navbar :fname="pageTitle"></navbar>
        <div class="default-page">
            <img src="https://assets.maizuo.com/h5/v5/public/app/img/nopacket.9c5ff9d1.png" alt="">
            <div class="no-text">没有组合红包</div>
        </div>
    </div>
</template>

<script>
import navbar from '../../components/NavBar'
export default {
  components: {
    navbar
  },
  data () {
    return {
      pageTitle: '组合红包'
    }
  }
}
</script>

<style>
    .default-page{
        margin-top: 50%;
        text-align: center;
    }
    .default-page img{
        width:95px;
    }
    .no-text{
        color: #bdc0c5;
        font-size: 14px;
        padding: 16px 0 20px;
    }
</style>
