import Vue from 'vue'

Vue.filter('distanceFilter', (data) => {
  return Math.floor(data * 100) / 100
})
