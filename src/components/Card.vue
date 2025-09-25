<template>
  <div class="card">
    <div>
      <img :src="`../assets/images/${company.toLowerCase()}.png`" :alt="company" />
      <h2><b>{{ company }}</b></h2>
    </div>
    <p class="small-font">Revenue Q1 2025</p>
    <p>{{ revenue['2025 Q1'] }}</p>
    <p class="small-font">in bill USD</p>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  gap: 8px;
  border-radius: 16px;
  padding: 8px 16px;
  background: rgba(1, 31, 53, 1);
  color: white;
  font-size: 16px;
}

.small-font {
  font-size: 14px;
  font-weight: lighter;
}
</style>