<template>
    <div class="content">
        <navbar :fname="pageTitle"></navbar>
        <van-cell-group class="mt">
            <van-cell title="账户ID" :value="userInfo.userId"></van-cell>
        </van-cell-group>
        <van-cell-group class="mtt">
            <van-cell title="登录密码" is-link value="修改" />
            <van-cell title="安全密码" is-link value="未设置" />
        </van-cell-group>
        <van-cell-group class="mtt">
            <van-cell title="手机号码" is-link :value="userInfo.nickName" />
            <van-cell title="软件版本" is-link />
            <van-cell title="隐私政策" is-link />
            <van-cell title="用户协议" is-link />
            <van-cell title="意见反馈" is-link />
        </van-cell-group>
        <van-cell-group class="mtt">
            <van-cell title="清除缓存" value="0KB"></van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="注销用户" is-link />
        </van-cell-group>
        <button class="btn-exit mtt">退出登录</button>
    </div>
</template>

<style scoped>
    .content{
        background-color: #f4f4f4;
    }
    .btn-exit{
        width:100%;
        height: 3.0625rem;
        line-height: 3.0625rem;
        text-align: center;
        color:#ff5f16;
        border: none;
        background-color: white;
    }
    .mt{
        margin-top:3.75rem;
    }
    .mtt{
        margin-top: 1.25rem;
    }
</style>

<script>
import { Cell, CellGroup } from 'vant'
import navbar from '../../components/NavBar'
import { mapState } from 'vuex'

export default {
  components: {
    navbar,
    vanCell: Cell,
    vanCellGroup: CellGroup
  },
  data () {
    return {
      pageTitle: '设置'
    }
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>
