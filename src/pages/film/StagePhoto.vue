<template>
    <div v-if="filmdetail">
        <navbar :fname="title+'('+filmdetail.photos.length+')'"></navbar>
        <!-- {{ filmdetail }} -->
        <div class="stagephoto">
            <div class="photo" v-for="(photo,index) in filmdetail.photos" :key="index" @click="handlePreview(index)">
                <van-image
                width="124"
                height="124"
                :src="photo"
                fit="cover"
                />
            </div>
        </div>
    </div>
</template>

<style>
    .stagephoto{
        display: flex;
        flex-flow: wrap;
        width: 100%;
    }
    .stagephoto .photo{
        width: 33.33%;
        /* background-color: red; */
    }
</style>

<script>
import { Image, ImagePreview } from 'vant'
import { mapState } from 'vuex'
import navbar from '../../components/NavBar'
export default {
  components: {
    navbar,
    vanImage: Image
  },
  computed: {
    ...mapState('HomeModule', ['filmdetail'])
  },
  data () {
    return {
      title: '剧照'
    }
  },
  methods: {
    handlePreview (index) {
      ImagePreview({
        images: this.filmdetail.photos,
        startPosition: index
      })
    }
  }
}
</script>
