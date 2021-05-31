<template>
  <div class="bg-white h-80 w-72 rounded-lg p-3 cursor-pointer card" ref="card"
       @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <div class="h-full flex flex-col justify-between">
      <div>
        <img class="w-full rounded-t-lg" :src="image" alt="kanto">
      </div>
      <div class="text-center">
        <h2>
          <b>
            {{object.name.toUpperCase().replace('-', ' ')}}
          </b>
        </h2>
      </div>
      <div class="flex justify-center w-full">
        <Button @click="onClick" text="DETALHES" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../button/Button.vue';

export default {
  name: 'Card',
  components: {
    Button,
  },
  props: {
    object: {
      type: Object,
    },
    image: {
      type: String,
    },
  },
  methods: {
    onClick() {
      this.$emit('clicked');
    },
    onMouseMove(event) {
      const xAxis = (window.innerWidth / 2 - event.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - event.pageY) / 25;
      const { card } = this.$refs;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    },
    onMouseLeave() {
      const { card } = this.$refs;

      card.style.transition = 'all 0.5s ease';
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
}
</style>
