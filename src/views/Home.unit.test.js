import { shallowMount } from '@vue/test-utils';
import Home from './Home.vue';

function createShallowMount(props) {
  const wrapper = shallowMount(Home, {
    props
  });

  return wrapper;
}

describe('Home', () => {
  it('should be render title', () => {
    const wrapper = createShallowMount()
    const title = wrapper.indComponent({ name: 'Title' })

    expect(title.isVisible()).toBe(true);
  });
});
