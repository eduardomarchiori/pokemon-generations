<template>
  <Card :image="getGenerationImage(generation.name)" @clicked="goToGenerationDetails"
        :object="generation" />
</template>

<script>
import generationOneImage from '@/assets/images/generations/g1.jpg';
import generationTwoImage from '@/assets/images/generations/g2.jpeg';
import generationThreImage from '@/assets/images/generations/g3.jpg';
import generationFourImage from '@/assets/images/generations/g4.jpg';
import generationFiveImage from '@/assets/images/generations/g5.jpg';
import generationSixImage from '@/assets/images/generations/g6.jpg';
import generationSevenImage from '@/assets/images/generations/g7.jpg';
import generationEigthImage from '@/assets/images/generations/g8.jpg';
import Card from '../common/card/Card.vue';

export default {
  components: {
    Card,
  },
  props: {
    generation: {
      type: Object,
    },
  },
  methods: {
    goToGenerationDetails() {
      this.$router.push({
        name: 'Generation',
        params: {
          url: this.generation.url,
        },
      });
    },
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
  },
};
</script>
