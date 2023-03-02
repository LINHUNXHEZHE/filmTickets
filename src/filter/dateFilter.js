/* 日期处理过滤器 */
import Vue from 'vue'
import moment from 'moment/moment'

export const dateFilter = Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-D')
})
