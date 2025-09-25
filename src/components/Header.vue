<template>
  <header>
    <div class="header-flag"></div>
    <h1>The Magnificent Seven Companies</h1>
    <img :src="logo" alt="Logo of Magnificent Seven">
  </header>
</template>

<script>
import logo from "../assets/images/ms-logo.png";
export default {
  name: 'Header',
  data() {
    return {
      logo, 
    };
  },
}
</script>

<style scoped>

  header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px 0;
    position: relative;

    img {
      position: fixed;
      top: -10px;
      right: 0;
      width: 180px;
      height: auto;
    }
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