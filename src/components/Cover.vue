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

    <!-- <div class="cover__container col-md-12 mx-auto ct">
        <div v-bind:class="left" class="c cover--ll">
          <svg viewBox="0 0 316.22 375.79"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-2" points="173.44 375.79 0 375.79 142.78 0 316.22 0 173.44 375.79"/></g></g></svg>
        </div>
        <div v-bind:class="right" class="c cover--rr">
          <svg viewBox="0 0 339.02 433.6"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-2" points="165.58 433.6 339.02 433.6 173.44 0 0 0 165.58 433.6"/></g></g></svg>
        </div>
      </div> -->
  </div>
</template>

<script>
// import scrollbar from "smooth-scrollbar";

export default {
  name: 'Cover',
  props: ['left', 'right']
}
</script>

<style scoped>
  .cls-1 {
    fill: #f7f7f7;
  }

  .cover__container {
    position: relative;
  }

  @media (min-width: 1200px) {
    .cover--l {
      position: absolute;
      left: calc(50% + -92px);
      top: calc(50% + 520px);
      width: 318px;
      transform: translate(-50%, -50%);
    }
    .cover--r {
      position: absolute;
      left: calc(50% + 64px);
      top: calc(50% + 435px);
      width: 339px;
      transform: translate(-50%, -50%);
    }
    .v {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
      transform: translateX(-9999px);
    }

    .c
    {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
    }

    .z {
      transition-duration: 1600ms;
       /* transition-delay: 50ms; */
      transform: scale(10) translateX(69px);
    }

  }

  @media (max-width: 575.98px) {

    .cover--l {
       top: 31.334332833583208vh;
       position: absolute;
    /* -webkit-transform: translate(-50%, -50%); */
    /* transform: translate(-50%, -50%); */
    width: 42.666666666666664vw;
    left: 16.533333333333335vw;
  }

  .cover--r {
    top: 24.28785607196402vh;
     position: absolute;
    /* -webkit-transform: translate(-50%, -50%); */
    /* transform: translate(-50%, -50%); */
    width: 45.333333333333336vw;
    right: 16.8vw;

  }

      .v {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
      transform: translateX(-9999px);
    }

    .c
    {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
    }

    .z {
      transition-duration: 1600ms;
       /* transition-delay: 50ms; */
         transform: translateX(125px) scale(4);
    }
  }

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .cover--r {
      top: 28.287856vh;
       position: absolute;
      /* -webkit-transform: translate(-50%, -50%); */
      /* transform: translate(-50%, -50%); */
      width: 45.333333333333336vw;
      right: 16.8vw;
      ;
    }

    .cover--l {
      top: 34.334333vh;
       position: absolute;
      /* -webkit-transform: translate(-50%, -50%); */
      /* transform: translate(-50%, -50%); */
      width: 42.666666666666664vw;
      left: 16.533333333333335vw;
    }
  }
</style>
