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
  right: -45%;
  bottom: 0;
  left: -45%;
  height: 100%;
  z-index: auto;
}

.line {
  width: 1px;
  height: 100%;
  background: #f0f0f0;
  transform: rotate(-201deg);
}

/* large scale desktop */
@media (min-width: 1200px) {

.lines-container {
      left: -47%;
}

}

@media (max-width: 575.98px) {
  .lines-container {
    right: -59%;
  }
}
</style>
