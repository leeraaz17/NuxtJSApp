import { mount, createLocalVue } from '@vue/test-utils'
import About from '@/pages/about.vue'

describe('About', () => {
  var localVue = createLocalVue();
  
  xtest('is a Vue instance', () => {
    const wrapper = mount(About, {
      localVue,
      // async asyncData({ $storybridge, 'cdn/stories/about' }) {
      //   const datasource = await $storybridge.get("cdn/stories/about")
    
      //   return {
      //     //...
      //     datasource
      //   }
      // }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
