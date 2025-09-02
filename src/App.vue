<script setup>
import Header from './components/Header.vue';
import { onMounted } from "vue";
import { stockStore } from "./stores/stockStore";
import logo from './assets/images/ms-logo.png'
import RevBreakdown from "./components/revenue/RevBreakdown.vue";
import RevLastYears from "./components/revenue/RevLastYears.vue";
import CompanyBar from "./components/CompanyBar.vue";
import GrossMargin from "./components/kpi/GrossMargin.vue";
import NetIncome from "./components/kpi/NetIncome.vue";
import RevGrowth from "./components/kpi/RevGrowth.vue";

const stockStoreService = stockStore();
onMounted(async () => {
  await stockStoreService.loadData('AAPL');
  console.log('loaded Data:', stockStoreService.data);
});

</script>
<template>
  <Header />
  <main>
    <CompanyBar class="col-span-full"/>
    <div class="grid grid-cols-2 gap-4 col-span-full">
      <RevLastYears />
      <RevBreakdown />
    </div>
    <div class="grid grid-cols-3 gap-4 col-span-full">
      <NetIncome />
      <GrossMargin />
      <RevGrowth />
    </div>

    <img :src="logo" alt="Logo of Magnificent Seven">
  </main>

</template>

<style>
#app {
  width: 100%;
  max-width: 1440px;
  min-height: 100dvh;
}

main {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 24px;

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
