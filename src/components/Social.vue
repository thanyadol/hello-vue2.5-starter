<template>
  <div class="social">
    <div class="rotrate"><span class="mine"> {{ meetMessage }} </span></div>
    <ul class="navbar-nav">
      <li class="nav-item" v-bind:key="s.id" v-for="s in socials">
        <a href="javscript:void(0);" v-on:click="socialClick(s)"><img class="icon" :src="s.image"/></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data () {
    return {
      socials: [
        { id: 2, title: 'Facebook', url: 'facebook.com', image: '/assert/facebook.png' },
        { id: 1, title: 'LinkedIn', url: 'linkedin.com', image: '/assert/linkedin.png' },
        { id: 3, title: 'Medium', url: 'medium.com', image: '/assert/medium.png' }
      ],
      meetMessage: 'Meet me on'
    }
  },
  // define methods under the `methods` object
  methods: {
    socialClick: function (s) {
      alert(s.id)
    }
  }
  // you can invoke methods in JavaScript too
  // vm.greet() // -> 'Hello Vue.js!'
}
</script>
<style scoped>

ul
{
  display: block;
}

li
{
  padding: 10px;
}

.icon
{
  width: 100%;
  height: 100;
}

.mine
{
  font-size: 12px;
}

.rotrate
{
  position: relative;
  left: -20px;
  transform: rotate(270deg);
  margin-bottom: 30px;
}

.social
{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    margin-bottom: 40px;
    margin-left: 40px;
}

</style>
