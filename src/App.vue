<script setup>
import Card from './components/Card.vue';
import Header from './components/Header.vue';
import { onMounted } from "vue";
import { stockStore } from "./stores/stockStore";
import logo from './assets/images/ms-logo.png'

const stockStoreService = stockStore();
onMounted(async () => {
  await stockStoreService.loadData('AAPL');
  console.log('loaded Data:', stockStoreService.data);
});

</script>
<template>
  <Header />
  <main>
    Hallo
    <Card />
    <img :src="logo" alt="Logo of Magnificent Seven">
  </main>

</template>

<style>
#app {
  width: 100%;
  max-width: 1440px;
  height: 100dvh;
}

main {
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.2;
    width: 50%;
    height: auto;
  }
}
</style>
