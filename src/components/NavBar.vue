<template>
    <van-nav-bar
    :title="fname"
    :fixed="isFixed"
    :left-arrow="isLeft"
    :left-text="fText"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
</template>

<script>
import { NavBar } from 'vant'

export default {
  props: {
    isFixed: {
      type: Boolean,
      default: true
    },
    fname: {
      type: String,
      default: ''
    },
    isLeft: {
      type: Boolean,
      default: true
    },
    fText: {
      type: String,
      default: ''
    }
  },
  // props: ['isFixed', 'fname', 'isLeft'],
  components: {
    vanNavBar: NavBar
  },
  methods: {
    onClickLeft () {
      // 返回上一级路由
      this.$router.back()
    },
    onClickRight () {
    }
  }
}
</script>
