<template>
  <div class="card">
    <h2>{{ company }}</h2>
    <p>Revenue Q1 2023: {{ revenue["1 Aug 24"] }}</p>
  </div>
</template>

<script setup>
defineProps({
  company: String,
  revenue: Object
});
</script>

<style  scoped>
.card {
  width: 100px;
  height: 100px;
  gap: 20px;
  border-radius: 16px;
  padding: 20px 32px;
  background: rgba(1, 31, 53, 1);
}
</style>