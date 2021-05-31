import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

function createShallowMount(props) {
  const wrapper = shallowMount(Home, { props });

  return wrapper;
}

describe('Home', () => {
  it('should render title with props', () => {
    const wrapper = createShallowMount();

    const title = wrapper.findComponent({ name: 'Title' });

    expect(title.exists()).toBe(true);
    expect(title.props().text).toBe('GENERATIONS');
  });
});
