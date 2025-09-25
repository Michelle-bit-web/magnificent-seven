<template>
  <section class="company-bar">
    <h2>Bar</h2>
    <Card
        v-for="company in Object.keys(stockStoreService.data)"
        :key="company"
        :company="company"
        :revenue="stockStoreService.data[company.name]"
    />

  </section>
</template>

<script setup>
import Card from './Card.vue';
import { stockStore } from "./../stores/stockStore";

const stockStoreService = stockStore();
</script>

<style scoped>
.company-bar {
  display: flex;
  width: 100%;
  height: 150px;
  gap: 20px;
  border-radius: 16px;
  padding: 20px 32px;
  background: #020f1a;
}
</style>
