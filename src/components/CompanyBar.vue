<template>
  <section class="company-bar">
    <h2>Bar</h2>
    <Card />
    <Card />
    <Card />
    <Card />
  </section>
</template>

<script setup>
import Card from './Card.vue';

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
