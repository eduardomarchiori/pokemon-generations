<template>
  <div class="default-color h-full p-8">
    <Suspense>
      <PokemonGenerationContent :url-generation-details="urlGenerationDetails" />
    </Suspense>
  </div>
</template>

<script>
import PokemonGenerationContent from '@/components/pokemonGenerationContent/PokemonGenerationContent.vue';

export default {
  name: 'Generation',
  components: {
    PokemonGenerationContent,
  },
  mounted() {
    this.urlGenerationDetails = this.$route.params.url;
  },
  data() {
    return {
      urlGenerationDetails: '',
    };
  },
};
</script>
