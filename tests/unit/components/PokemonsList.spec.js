import { shallowMount } from '@vue/test-utils';
import PokemonsList from '@/components/pokemonsList/PokemonsList.vue';

function createShallowMount(props) {
  const wrapper = shallowMount(PokemonsList, { props });

  return wrapper;
}

function getspanByText(wrapper, text) {
  return wrapper.findAll('span')
    .filter((w) => w.text().includes(text));
}

describe('PokemonsList', () => {
  it('should render title pokemon list with props', () => {
    const wrapper = createShallowMount();

    const title = wrapper.find('b');

    expect(title.text()).toBe('Pokemons:');
  });

  it('should be render pokemon name when pokemons prop is passed', () => {
    const wrapper = createShallowMount({ pokemons: [
      { name: 'pokemon a' },
      { name: 'pokemon b' },
      { name: 'pokemon c' }
    ] });

    const spans = getspanByText(wrapper, 'pokemon');

    expect(spans.length).toBe(3);
  });
});
