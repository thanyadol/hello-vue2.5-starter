<template>
  <div id="cover">
    <div class="cover__container col-md-12 mx-auto ct">
      <div v-bind:class="left" class="c cover--l">
        <svg viewBox="0 0 316.22 375.79"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="173.44 375.79 0 375.79 142.78 0 316.22 0 173.44 375.79"/></g></g></svg>
      </div>
      <div v-bind:class="right" class="c cover--r">
        <svg viewBox="0 0 339.02 433.6"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="165.58 433.6 339.02 433.6 173.44 0 0 0 165.58 433.6"/></g></g></svg>
      </div>
    </div>
  </div>
</template>

<script>
// import scrollbar from "smooth-scrollbar";

export default {
  name: 'Cover',
  props: ['left', 'right']
  /* mounted: function() {
        var options = {
          wheelEventTarget: EventTarget,
        };
        var div = document.getElementById("scrollbar");
        scrollbar.init(div);

        console.log("scrolling")
      }, */
  /* beforeMount() {
        var scrolled = 0
        var vm = this

        window.addEventListener('wheel', function (event) {
          var div = document.getElementById("scrollbar");
          const scrollbar = scrollbar.init(div);

          if (event.deltaY < 0) {
            scrolled++
            console.log('scrolling up hanlde : ' + event.deltaY)
          }
          if (event.deltaY > 0) {
            scrolled--
            console.log('scrolling down hanlde : ' + event.deltaY)
          }
        })
      } */
}
</script>

<style scoped>
.cls-1 {
  fill: #f7f7f7;
}

.cover__container {
  position: relative;
}

.cover__container .c {
  width: 340px;
  transition: transform 1600ms;
}

.cover__container .z {
  transform: scale(10) translateX(68.5px);
}

.cover__container .v {
  transform: translateX(-1200px);
}

.cover--l {
  position: absolute;
  left: calc(50% + -129px);
  top: calc(50% + 517px);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.cover--r {
  position: absolute;
  left: calc(50% + 88px);
  top: calc(50% + 453px);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
