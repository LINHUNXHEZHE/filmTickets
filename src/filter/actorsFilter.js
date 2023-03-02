/* 演职人员过滤器 */
import Vue from 'vue'
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(actor => actor.name).join(' ')
})
