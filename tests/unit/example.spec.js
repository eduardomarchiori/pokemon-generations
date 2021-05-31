import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

function createShallowMount(props) {
  const wrapper = shallowMount(Home, {
    props
  });

  return wrapper;
}

describe('Home', () => {
  it('should be render title', () => {
    const wrapper = createShallowMount()
    const title = wrapper.findComponent({ name: 'Title' })

    expect(title.exists()).toBe(true);
  });
});
