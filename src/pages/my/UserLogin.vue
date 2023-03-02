<template>
    <div>
        <div class="logo">
            <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">
        </div>
        <van-cell-group>
        <van-field
            v-model="phone"
            center
            label-align="center"
            label="手机号"
            placeholder="请输入手机号"
            >
            <template #button>
                <van-button size="small" color="#FF6E00" @click="getChecking">{{ computTime>0 ? computTime : '获取验证码'}}</van-button>
            </template>
        </van-field>
        <van-field
            v-model="sms"
            center
            label-align="center"
            label="验证码"
            placeholder="请输入验证码"
         />
        </van-cell-group>
        <div class="btn-submit">
            <van-button type="primary" block color="#FF6E00" @click="toLogin">登录</van-button>
        </div>
    </div>
</template>

<script>
import { reqChecking, reqCheckLogin } from '../../api/index'
import { CellGroup, Field, Button, Toast } from 'vant'
export default {
  components: {
    vanCellGroup: CellGroup,
    vanField: Field,
    vanButton: Button
  },
  data () {
    return {
      sms: '',
      phone: '',
      computTime: 0 // 倒计时
    }
  },
  methods: {
    async getChecking () {
      const check = /^1[3|4|5|8][0-9]\d{4,8}$/
      if (!check.test(this.phone)) {
        Toast.fail('输入合法号码')
      } else {
        // 发起验证码请求
        const result = await reqChecking(this.phone)
        if (result.status === 0 && result.msg === 'ok') {
          Toast.success('已发送验证码')
          // 倒计时启动
          this.computTime = 30
          const intervalId = setInterval(() => {
            this.computTime--
            if (this.computTime <= 0) {
              // 停止计时
              clearInterval(intervalId)
            }
          }, 1000)
        }
      }
    },
    async toLogin () {
      if (!this.phone && !this.sms) {
        Toast.fail('请输入信息')
        if (!this.phone) {
          Toast.fail('输入电话号码')
          if (!this.sms) {
            Toast.fail('输入验证码')
          }
        }
      }
      // 登录验证
      const result = await reqCheckLogin(this.phone, this.sms)
      if (result.status === 0 && result.msg === 'ok') {
        Toast.success('登录成功')
        // 保存用户信息
        const info = result.data
        console.log(info)
        this.$store.commit('userInfo', info)
        // 跳转个人中心页
        this.$router.push('/my')
      } else {
        Toast.fail('验证码过期')
      }
    }
  }
}
</script>

<style>
    .btn-submit{
        margin:70px 25px 0;
    }
    .logo{
        margin: 79px auto 40px;
        text-align: center;
        line-height: 60px;
    }
    .logo img{
        width: 60px;
        height: 60px;
    }
</style>
