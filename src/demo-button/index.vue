<template>
  <button class="demo-button">
    <slot />
  </button>
</template>

<script setup>
const a = () => {
  
}
</script>

<style lang="less">
.demo-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
