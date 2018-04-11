<template>
  <div id="cover">
    <div class="cover__container">
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
  position: fixed;
}

.c {
  width: 50vh;
  position: relative;
  transition: transform 1600ms;
}

.z
{
  transform: scale(5) translateX(90px);
}

.v
{
   transform: translateX(-900px);
}

.cover--l {
  left: 400px;
  top: 150px;
}

.cover--r {
  left: 630px;
  bottom: 300px;
}
</style>
