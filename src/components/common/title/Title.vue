<template>
  <h1 class="text-5xl">
    <b>{{text.toUpperCase().replace('-', ' ')}}</b>
  </h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
    },
  },
};
</script>
