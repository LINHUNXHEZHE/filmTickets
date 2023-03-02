import { reqInfoList } from '../../api/index'

const module = {
  namespaced: true,
  state: {
    cityInfo: null
  },
  mutations: {
    receive_infolist (state, infolist) {
      state.cityInfo = infolist.data.data
    }
  },
  actions: {
    // 异步获取资讯列表
    async getInfoList (store) {
      const result = await reqInfoList('ElzMZU125260', {
        'X-Host': 'mall.act.static-page.info'
      })
      console.log(result)
      store.commit('receive_infolist', result)
    }
  }
}

export default module
