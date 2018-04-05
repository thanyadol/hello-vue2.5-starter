<template>
    <aside id="frame">
      <transition name="fade" mode="out-in">
        <div class="borders-container"  v-show="display">
          <div class="border border--t"></div>
          <div class="border border--r"></div>
          <div class="border border--b"></div>
          <div class="border border--l"></div>
        </div>
      </transition>
    </aside>
</template>

<script>
export default {
  name: 'Frame',
  props: ['display']
}
</script>

<style scoped>

.border {
  border: none !important;
  -webkit-transition: opacity 2s ease-in;
  transition: opacity 2s ease-in;
  background-color: #2f3c47;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
}

/* animate fade */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 2s;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
