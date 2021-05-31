<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Footer from '@/components/footer/Footer.vue';
import Nav from '@/components/nav/Nav.vue';

export default {
  components: { Footer, Nav },
};
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

body {
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  perspective: 1000px;
}
</style>
