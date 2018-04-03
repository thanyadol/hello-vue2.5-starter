<template>
  <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex ml-auto">
   <li class="nav-item"  v-bind:key="n.id" v-for="n in navs">
        <router-link  v-bind:to="n.url" class="href">{{ n.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightHref',
  /* data: function () {
    return {
      count: 0
    }
  },
  props: ['title', 'url'] */
  data () {
    return { navs: [
      { id: 2, title: 'Hello', url: 'hello' },
      { id: 1, title: 'About', url: 'about' },
      { id: 3, title: 'Nave', url: 'nave' }
    ] }
  }
}
</script>

<style scoped>
.href
{
  padding: 10px;
}
</style>
