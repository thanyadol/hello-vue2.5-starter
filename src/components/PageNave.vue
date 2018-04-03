<template>
  <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex ml-auto">
         <li class="nav-item">
            <router-link :to="prev" class="href"> { prev } </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="next" class="href"> { next } </router-link>
        </li>
  </ul>
</template>

<script>
export default {
  name: 'PageNave',
  data: function () {
    return {
      count: 0
    }
  },
  props: ['next', 'prev']
}
</script>

<style scoped>
.href
{
  padding: 10px;
}
</style>
