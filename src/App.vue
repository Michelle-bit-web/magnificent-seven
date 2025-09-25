<script setup>
import Header from './components/Header.vue';
import RevBreakdown from "./components/revenue/RevBreakdown.vue";
import RevLastYears from "./components/revenue/RevLastYears.vue";
import CompanyBar from "./components/CompanyBar.vue";
import GrossMargin from "./components/kpi/GrossMargin.vue";
import NetIncome from "./components/kpi/NetIncome.vue";
import RevGrowth from "./components/kpi/RevGrowth.vue";
import {onMounted, reactive, toRaw} from "vue";
import { stockStore } from "./stores/stockStore";

const stockStoreService = stockStore();

onMounted(async () => {
  await stockStoreService.loadData();
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
  gap: 24px;
}
</style>
