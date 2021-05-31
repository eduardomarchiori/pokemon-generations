<template>
  <div class="h-full flex flex-col items-center justify-center w-full">
    <Title :text="generationDetails.name" />
    <Subitle :text="generationDetails.main_region.name" />
    <PokemonBackground :generation="generationDetails.name" />
    <PokemonsGamesList :games="generationDetails.version_groups" />
    <PokemonsList :pokemons="generationDetails.pokemon_species" />
    <div class="my-6 w-1/3 flex justify-center">
      <Button @click="goToHome" text="INÍCIO" />
    </div>
  </div>
</template>

<script>
import { pokemonService } from '@/libs/pokemon';
import { useRoute } from 'vue-router';
import Button from '../common/button/Button.vue';
import PokemonsList from '../pokemonsList/PokemonsList.vue';
import PokemonBackground from '../pokemonBackground/PokemonBackground.vue';
import PokemonsGamesList from '../pokemonsGamesList/PokemonsGamesList.vue';
import Subitle from '../common/subtitle/Subtitle.vue';
import Title from '../common/title/Title.vue';

export default {
  components: {
    Button,
    Subitle,
    Title,
    PokemonsList,
    PokemonBackground,
    PokemonsGamesList,
  },
  props: {
    urlGenerationDetails: {
      type: String,
    },
  },
  async setup() {
    const route = useRoute();

    const generationDetails = await pokemonService.getPokemonGenerationDatails(
      route.params.url
    );

    return {
      generationDetails,
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.img-container {
  background-image: url('../../assets/images/grama.jpg');
}
</style>
