<template>
  <div class="grid grid-cols-3 gap-8">
    <div class="h-full" v-for="generation in generations" :key="generation.name">
      <GenerationCard :generation="generation" />
    </div>
  </div>
</template>

<script>
import { pokemonService } from '@/libs/pokemon';
import GenerationCard from '../generationCard/GenerationCard.vue';

export default {
  name: 'PokemonGenerationsList',
  components: {
    GenerationCard,
  },
  async setup() {
    const {
      results: generations,
    } = await pokemonService.getPokemonGenerations();

    return { generations };
  },
};
</script>
