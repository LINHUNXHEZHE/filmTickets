/* 首页模块 */
import { reqSwiperList, reqNowPlaying, reqComingSoon, reqFilmDetail } from '../../api/index'

const module = {
  namespaced: true,
  state: {
    swiperList: [], // 待接收swiperData数据
    nowplaying: [], // 待接收nowplaying数据
    comingsoon: [], // 待接收comingsoon数据
    filmdetail: null // 待接收电影详情,设置为[]会报错
  },
  mutations: {
    // receive_swiperData
    receive_swiperData (state, swiperData) {
      state.swiperList = swiperData.data.films
    },
    // receive_nowplaying
    receive_nowplaying (state, nowplaying) {
      state.nowplaying = nowplaying.data.films
    },
    // receive_comingsoon
    receive_comingsoon (state, comingsoon) {
      state.comingsoon = comingsoon.data.films
    },
    // receive_filmdetail
    receive_filmdetail (state, filmdetail) {
      state.filmdetail = filmdetail.data.film
      console.log(filmdetail)
    }
  },
  actions: {
    // 异步获取swiper数据
    async getSwiperData (store) {
      const result = await reqSwiperList(440100, 1, 6, 1, 5438780, {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16753207015161962279272449","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      })
      // commit
      store.commit('receive_swiperData', result)
    },
    // 异步获取nowplaying数据 - type=1
    async getNowPlaying (store) {
      const result = await reqNowPlaying(440100, 1, 10, 1, 5438780, {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16753207015161962279272449","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      })
      // commit
      store.commit('receive_nowplaying', result)
    },
    // 异步获取comingsoon数据 - type=2
    async getComingSoon (store) {
      const result = await reqComingSoon(440100, 1, 10, 2, 5438780, {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16753207015161962279272449","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      })
      // commit
      store.commit('receive_comingsoon', result)
    },
    // 异步获取电影详情
    async getFilmDetail (store, filmId) {
      filmId = filmId.id
      const result = await reqFilmDetail(filmId, 6951879, {
        'X-Host': 'mall.film-ticket.film.info'
      })
      // commit
      store.commit('receive_filmdetail', result)
    }
  }
}

export default module
