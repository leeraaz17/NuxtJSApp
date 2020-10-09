import { shallowMount } from '@vue/test-utils'
import App from '@/pages/index.vue'
import Counter from '@/pages/fun.vue'

describe('App', () => {
  const wrapper = shallowMount(App)  

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('contains the increment button', () => {
      const wrapper = shallowMount(Counter)
      expect(wrapper.vm.counter).toBe(0)
      wrapper.find('button').trigger('click')
      expect(wrapper.vm.counter).toBe(1)
  })

  it('renders correctly', () => {
      expect(wrapper.element).toMatchSnapshot();
  })
})