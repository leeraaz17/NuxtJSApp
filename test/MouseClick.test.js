import { shallowMount } from "@vue/test-utils"
import MouseClick from "@/pages/MouseClick.vue"

describe("Click event", () => {
  it("Click on yes will pop up and alert", () => {
    const wrapper = shallowMount(MouseClick)
    wrapper.find('button.yes').trigger('click')
  })
})