<template>
    <div class="nav">
        <router-link to="pickdeck">
            <button class="menu-btn pickdeck" aria-label="Pickdeck" href="#">
                <span class="menu-btn__text">Pick Deck</span>
            </button>
        </router-link>
        <router-link to="carrer">
            <button class="menu-btn career" aria-label="Career" href="#">
                <span class="menu-btn__text">Career</span>
            </button>
        </router-link>
        <router-link to="menu">
            <button class="menu-btn menu" aria-label="Menu" href="#">
                <span class="menu-btn__text">Menu</span>
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "Nave"
};
</script>

<style lang="css" scoped>
/* remove reboot*/
button:focus {
  outline: none;
}

/*top button*/
a:hover {
  text-decoration: none;
}

.menu-btn {
  color: #2f3c47;
  padding: 0;
  z-index: 2;
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
