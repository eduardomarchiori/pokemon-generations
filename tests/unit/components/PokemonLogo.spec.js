import { shallowMount } from '@vue/test-utils';
import PokemonLogo from '@/components/pokemonLogo/PokemonLogo.vue';

function createShallowMount(props) {
  const wrapper = shallowMount(PokemonLogo, { props });

  return wrapper;
}

describe('PokemonLogo', () => {
  it('should render pokemon logo', () => {
    const wrapper = createShallowMount();

    const logo = wrapper.find('img');

    expect(logo.exists()).toBe(true);
  });
});
