import { shallowMount } from '@vue/test-utils';
import PokemonsGamesList from '@/components/pokemonsGamesList/PokemonsGamesList.vue';

function createShallowMount(props) {
  const wrapper = shallowMount(PokemonsGamesList, { props });

  return wrapper;
}

function getspanByText(wrapper, text) {
  return wrapper.findAll('span')
    .filter((w) => w.text().includes(text));
}

describe('PokemonsGamesList', () => {
  it('should render title pokemons games list with props', () => {
    const wrapper = createShallowMount();

    const title = wrapper.find('b');

    expect(title.text()).toBe('Games:');
  });

  it('should be render game name when games prop is passed', () => {
    const wrapper = createShallowMount({ games: [
      { name: 'game a' },
      { name: 'game b' },
      { name: 'game c' }
    ] });

    const spans = getspanByText(wrapper, 'game');

    expect(spans.length).toBe(3);
  });
});
