import { mount } from '@vue/test-utils'
import Index from '@/pages/blog/index.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
})
