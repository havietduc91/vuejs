import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import BaseCounter from './../src/components/BaseCounter'

describe('BaseCounter.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = shallowMount(BaseCounter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).contains('1')
  })
})