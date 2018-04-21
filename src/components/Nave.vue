<template>
  <div class="nav">
    <ul>
      <li v-for="n in navs" :key="n.id">
        <router-link :to="n.url">
          <button v-bind:class="n.class" class="menu-btn" aria-label="" href="javascript:void(0);">
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

.nav {
  display: block;
  position: fixed;
  z-index: 2;
}

.nav ul li {
  display: inline;
  margin-right: 55px;
}

button:focus {
  outline: none;
}

.menu-btn {
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
  height: 44px;
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

/*.menu-btn.pitch:hover {
    background-color: #ec1e23;
    color: #2f3c47;
  }*/

.menu-btn.pitch:before,
.menu-btn.pitch:after {
  background: transparent;
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

/* .pickdeck {
        right: calc(5vw + 144px);
      }

      .career {
        right: calc(5vw + 60px);
      }

      .menu {
        right: calc(5vw - 12px);
      } */

/* // Extra large devices (large desktops, 1200px and up) */

@media (min-width: 1200px) {
  .menu-btn.pitch {
    padding-left: 20px;
    padding-right: 20px;
  }
  .nav {
    display: block;
    position: fixed;
            z-index: 2 !important;
    right: 81px;
    top: 52px;
  }
  .nav ul li:last-child {
    margin-right: 0;
  }
}

@media (max-width: 575.98px) {
}
</style>
