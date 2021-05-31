<template>
  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2">
    {{text}}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>
