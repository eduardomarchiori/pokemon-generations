<template>
  <div ref="imageContainer" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="flex
    items-center
    justify-center border-2 border-black rounded-lg w-1/3 my-8 pb-2 mt-20 img-container">
    <img class="rounded-lg h-1/3 w-1/3" ref="image" :src="getGenerationImage(generation)" alt="bg">
  </div>
</template>

<script>
import generationOneImage from '@/assets/images/generations/g1t.png';
import generationTwoImage from '@/assets/images/generations/g2t.png';
import generationThreImage from '@/assets/images/generations/g3t.png';
import generationFourImage from '@/assets/images/generations/g4t.png';
import generationFiveImage from '@/assets/images/generations/g5t.png';
import generationSixImage from '@/assets/images/generations/g6t.png';
import generationSevenImage from '@/assets/images/generations/g7t.png';
import generationEigthImage from '@/assets/images/generations/g8t.png';

export default {
  props: {
    generation: {
      type: String,
    },
  },
  methods: {
    getGenerationImage(name) {
      const images = {
        'generation-i': generationOneImage,
        'generation-ii': generationTwoImage,
        'generation-iii': generationThreImage,
        'generation-iv': generationFourImage,
        'generation-v': generationFiveImage,
        'generation-vi': generationSixImage,
        'generation-vii': generationSevenImage,
        'generation-viii': generationEigthImage,
      };
      return images[name];
    },
    onMouseEnter() {
      const { image } = this.$refs;

      image.style.transition = 'all 0.2s ease';
      image.style.transform = 'perspective(350px) translateZ(100px)';
    },
    onMouseLeave() {
      const { image } = this.$refs;

      image.style.transform = 'none';
    },
  },
};
</script>
