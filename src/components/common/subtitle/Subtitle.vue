<template>
  <h1 class="text-2xl">
    <b>{{text}}</b>
  </h1>
</template>

<script>
export default {
  name: 'Subtitle',
  props: {
    text: {
      type: String,
    },
  },
};
</script>
