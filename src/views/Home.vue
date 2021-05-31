<template>
  <div class="default-color text-center h-full p-8">
    <Title text="GENERATIONS" />
    <div class="flex justify-center w-full py-8">
      <Suspense>
        <PokemonGenerationsList />
      </Suspense>
    </div>
  </div>
</template>

<script>
import PokemonGenerationsList from '@/components/pokemonGenerationsList/PokemonGenerationsList.vue';
import Title from '@/components/common/title/Title.vue';

export default {
  name: 'Home',
  components: {
    PokemonGenerationsList,
    Title,
  },
};
</script>

<style scoped>
.default-color {
  background-color: #ef6050;
}
</style>
