<template>
  <nav class="flex flex-col justify-center items-center w-full text-white p-4">
    <PokemonLogo />
  </nav>
</template>

<script>
import PokemonLogo from '@/components/pokemonLogo/PokemonLogo.vue';

export default {
  components: {
    PokemonLogo,
  },
};
</script>

<style scoped>
nav {
  background-color: #2c3e50;
}
</style>
