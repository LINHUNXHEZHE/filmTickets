<template>
    <div class="footer">
        <van-button type="primary" size="large" :color="color"> {{title}} </van-button>
    </div>
</template>

<script>
import { Button } from 'vant'
export default {
  props: {
    title: {
      type: String,
      default: '按钮'
    },
    color: {
      type: String,
      default: '#ff5f16'
    }
  },
  components: {
    vanButton: Button
  }
}
</script>

<style scoped>
    .footer{
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>
