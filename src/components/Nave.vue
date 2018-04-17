<template>
  <div class="nav col-12 mt-4c" >
    <ul>
      <li v-for="n in navs" :key="n.id">
        <router-link :to="n.url">
          <button v-bind:class="n.class"  class="menu-btn" aria-label="" href="javascript:void(0);">
           <span class="menu-btn__text">{{ n.title }}</span>
          </button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nave',
  data () {
    return {
      navs: [
        {
          id: 1,
          title: 'Join us',
          url: 'joinus',
          class: 'mobile'
        },
        {
          id: 2,
          title: 'Menu',
          url: 'menu',
          class: ''
        },
        {
          id: 3,
          title: 'Pitch Desk',
          url: 'pitchdesk',
          class: 'mobile pitch'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  /* remove reboot*/

  .nav
  {
    text-align: right;
    display: block;
    position: fixed;
    z-index: 2;
  }

  .mt-4c
  {
     margin-top: 50px;
     margin-left: -150px;
  }

  .nav ul li
  {
    display: inline;
    padding-right: 35px;
  }

  button:focus {
    outline: none;
  }

  .menu-btn
  {
    top: 0;
    font-size: 22px;
  }

  /*top button*/

  a:hover {
    text-decoration: none;
  }

  .menu-btn {
    color: #2f3c47;
    padding: 0;
    z-index: 2;
    position: relative;
    right: unset;
  }

  .menu-btn.pitch {
    background-color: #ec1e23;
    color: #f7f7f7;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 2px;
  }

  /*.menu-btn :hover
        {
          border-bottom: solid 2px #2f3c47;
        }*/

  /* Top and Bottom borders go out */

  button:before,
  button:after {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 2px;
    background: #2f3c47;
    content: "";
    opacity: 0;
    transition: all 0.3s;
  }

  button:before {
    top: 0px;
    transform: translateY(10px);
  }

  button:after {
    bottom: 0px;
    transform: translateY(-10px);
  }

  button:hover:after {
    opacity: 1;
    transform: translateY(0px);
  }

  button:hover:before {
    opacity: 0;
    transform: translateY(0px);
  }

  .menu-btn:hover {
    transform: translateY(0px);
  }

  .pickdeck {
    right: calc(5vw + 144px);
  }

  .career {
    right: calc(5vw + 60px);
  }

  .menu {
    right: calc(5vw - 12px);
  }
</style>
