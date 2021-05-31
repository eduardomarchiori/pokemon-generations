<template>
  <div class="w-1/3 mb-4">
    <span><b>Games:</b></span>
    <br>
    <span v-for="game in games" class="
              inline-flex
              items-center justify-center px-2 py-1
              mr-2 text-xs font-bold leading-none
              text-green-100 bg-green-600 rounded-full" :key="game.name">{{game.name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
    },
  },
};
</script>
