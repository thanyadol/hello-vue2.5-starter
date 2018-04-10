<template>
  <div class="lines-container">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Axiom'
}
</script>

<style scoped>
/* line */

.lines-container {
  top: 0;
  right: -20%;
  bottom: 0;
  left: -20%;
  height: 100%;
  z-index: auto;
}

.line {
  width: 1px;
  height: 100%;
  background: #f0f0f0;
  transform: rotate(-200deg);
}
</style>
