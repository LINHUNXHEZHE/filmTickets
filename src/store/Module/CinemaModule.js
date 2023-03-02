/* 影院模块 */
import { reqCitiesList, reqTicketFlag } from '../../api/index'
import pyjs from 'js-pinyin'

const module = {
  namespaced: true,
  state: {
    cityList: [], // 待接收城市列表
    hotList: [], // 待接收热门城市
    cityFlag: [],
    ticketflag: [],
    districtList: []
  },
  mutations: {
    // 返回上一级
    receive_citylist (state, citylist) {
      const city = citylist.data.cities
      const block = []
      let p, c
      const d = {}
      city.forEach(item => {
        p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
        c = p.charCodeAt(0)
        if (c > 96 && c < 123) {
          if (!d[p]) {
            d[p] = []
          }
          d[p].push(item.name)
        }
      })
      for (const [k, v] of Object.entries(d)) {
        block.push({ title: k.toUpperCase(), city: v })
      }
      const result = block.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
      state.cityList = result
    },
    receive_hotlist (state, hotlist) {
      const hot = []
      const hotArr = hotlist.data.cities
      hotArr.forEach(item => {
        if (item.isHot === 1) {
          hot.push(item)
        }
      })
      state.hotList = hot
    },
    receive_cityflag (state, cityflag) {
      // cityflag
      const result = cityflag.data.cinemas
      // ticketflaf
      const arrFlag = []
      state.cityFlag = result
      result.forEach(item => {
        if (item.eTicketFlag === 1) {
          arrFlag.push(item)
        }
      })
      state.ticketflag = arrFlag
      //
      const arrDistrict = []
      result.forEach(item => {
        arrDistrict.push('全部')
        arrDistrict.push(item.districtName)
      })
      // 去重
      const arrSet = Array.from(new Set(arrDistrict))
      const rs = arrSet.map((item, index) => {
        return { text: item, value: index }
      })
      // rs.push()
      console.log(rs)
      state.districtList = rs
    }
  },
  actions: {
    // 异步获取城市列表
    async getCityList (store) {
      const result = await reqCitiesList(2985350, {
        'X-Host': 'mall.film-ticket.city.list'
      })
      console.log(result)
      store.commit('receive_citylist', result)
    },
    // 异步获取热门城市
    async getHotList (store) {
      const result = await reqCitiesList(2985350, {
        'X-Host': 'mall.film-ticket.city.list'
      })
      store.commit('receive_hotlist', result)
    },
    // 异步获取城市相关影院
    async getCityFlag (store) {
      const result = await reqTicketFlag(210300, 1, 8853145, {
        'X-Host': 'mall.film-ticket.cinema.list'
      })
      store.commit('receive_cityflag', result)
    }
  }
}

export default module
