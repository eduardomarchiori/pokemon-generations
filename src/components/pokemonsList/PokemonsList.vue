<template>
  <div class="w-1/3">
    <span><b>Pokemons:</b></span>
    <br>
    <span v-for="pokemon in pokemons" :key="pokemon.name" class="
              inline-flex
              items-center justify-center px-2 py-1
              mr-2 text-xs font-bold leading-none
              text-red-100 bg-red-600 rounded-full">{{pokemon.name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
    },
  },
};
</script>
