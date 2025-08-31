<template>
  <header>
    <div class="header-flag"></div>
    <h1>The Magnificent Seven Companies</h1>
  </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px 0;
  }

  h1 {
    text-align: start;
    margin: 0;
    color: white;
    font-size: 32px;
  }

  .header-flag {
    width: 100px;
    height: 32px;
    background-color: #39daff;
    border-radius: 0 20px 20px 0;
  }
</style>