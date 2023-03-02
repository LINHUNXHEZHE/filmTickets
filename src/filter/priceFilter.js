import Vue from 'vue'

Vue.filter('priceFliter', (data) => {
  return data / 100
})
