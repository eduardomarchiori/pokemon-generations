import { shallowMount } from '@vue/test-utils';
import Card from '@/components/common/card/Card.vue';

function createShallowMount(props) {
  const wrapper = shallowMount(Card, { props });

  return wrapper;
}

describe('Card', () => {
  it('should render button card with props', () => {
    const wrapper = createShallowMount({ object: { name: '' } });

    const button = wrapper.findComponent({ name: 'Button' });

    expect(button.exists()).toBe(true);
    expect(button.props().text).toBe('DETALHES');
  });

  it('should emit clicked event when button is clicked', async () => {
    const wrapper = createShallowMount({ object: { name: '' } });

    const button = wrapper.findComponent({ name: 'Button' });
    button.vm.$emit('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().clicked).toBeTruthy();
  });

  it('should render title card when object name is passed', async () => {
    const wrapper = createShallowMount({ object: { name: 'hello' } });

    const title = wrapper.find('b');

    expect(title.text()).toBe('HELLO');
  });

  it('should render image card when image is passed', async () => {
    const wrapper = createShallowMount({ object: { name: '' }, image: 'image.png' });

    const img = wrapper.find('img');

    expect(img.attributes().src).toBe('image.png');
  });
});
