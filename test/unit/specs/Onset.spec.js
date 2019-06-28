import Vue from 'vue'
import Onset from '@/components/Onset'

describe('Onset.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Onset)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Booking Vue.js App')
  })
})
