<script setup>
import Card from './components/Card.vue';
import Header from './components/Header.vue';
import { onMounted } from "vue";
import { stockStore } from "./stores/stockStore";

const stockStoreService = stockStore();
onMounted(async () => {
  await stockStoreService.loadData('AAPL');
  console.log('loaded Data:', stockStoreService.data);
});

</script>
<template>
  <Header />
  <main>Hallo</main>
  <Card />
</template>

<style>
#app {
  width: 100%;
  max-width: 1440px;
  height: 100dvh;
}
</style>
