<template>
    <div v-if="cityInfo">
        <navbar :fname="pageName" :isFixed="false"></navbar>
        <div class="content" v-html="cityInfo.content">
        </div>
    </div>
</template>

<script>
import navbar from '../components/NavBar'
import { mapState } from 'vuex'
// document.querySelector("#app > div > div.content > p > a:nth-child(1)")
// javascript:(function(AppBridge){AppBridge.redirect('movie-film',{filmId:'5439'});})(AppBridge);
// (function (AppBridge) { AppBridge.redirect('movie-film', { filmId: '5439' }) })()

export default {
  components: {
    navbar
  },
  created () {
    this.$store.dispatch('InfoModule/getInfoList')
  },
  computed: {
    ...mapState('InfoModule', ['cityInfo'])
  },
  data () {
    return {
      pageName: '资讯'
    }
  }
}
</script>
