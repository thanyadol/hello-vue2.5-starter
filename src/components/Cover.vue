<template>
  <div id="cover" v-bind:class="display">
    <div class="cover__container col-md-12 mx-auto ct">
      <!-- <div v-bind:class="left" class="c cover--l">
        <svg viewBox="0 0 316.22 375.79"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="173.44 375.79 0 375.79 142.78 0 316.22 0 173.44 375.79"/></g></g></svg>
      </div> -->
      <!-- <div v-bind:class="right" class="c cover--r">
        <svg viewBox="0 0 339.02 433.6"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="165.58 433.6 339.02 433.6 173.44 0 0 0 165.58 433.6"/></g></g></svg>
      </div> -->
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
  props: ['left', 'right', 'display']
}
</script>

<style scoped>
  .cls-1 {
    fill:  #222222;
     opacity: 0.5;
  }

  #cover::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

  #cover.hide::before, #cover.hide::after {
      background-color: #fff !important;
      opacity:  0;
  }

  #cover
  {
        clip-path: polygon(505px 0, 950px  0, 950px 700px, 505px 700px);

    opacity: 1;
    background-image: url('/static/img/reed_vr-sessions_cover.jpg');
    width: 100vw;
    height: 100vh;
  }

  #cover.clip
  {
        clip-path: polygon(610px 217px, 784px  217px, 950px 651px, 777px 650px);
          transition: all 1600ms ease-out;
  }

  #cover.full
  {
           clip-path: polygon(526px -5px, 1500px  -5px, 1500px 1000px, 912px 1000px);
            transition: all 1600ms ease-out;
  }

  .cover__container {
    position: relative;
  }

 .cover--l .fade
 {
   animation: faded 1600ms linear;  /* , Pulsate 4s linear infinite; */
 }

 .cover--l .enter
 {
   animation: faded 1600ms linear;  /* , Pulsate 4s linear infinite; */
 }

 @keyframes rotrate
{
    from { transform: rotate(0deg) translateX(150px) rotate(0deg) }
    to   { transform: rotate(360deg) translateX(150px) rotate(-360deg) }
}

@keyframes faded {
  from { opacity: 1; }
  50% { opacity: 0.5; }
  to { opacity: 0; }
}

@keyframes enter {
  from { opacity: 0; }
  50% { opacity: 0.5; }
  to { opacity: 1; }
}

@media (min-width: 90.063em)/* min-width 1441px, xlarge screens */
{
       .cover--r.z
    {
      transform: scale(32) translateX(4.791666666666667vw);
    }
}

  @media (min-width: 1200px) {
    .cover--l {
      position: absolute;
      left: calc(50% + -92px);
      /* top: calc(50% + 520px); */
      top: calc(50% + 57.77777777777778vh);
      width: 318px;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .cover--r {
      position: absolute;
      left: calc(50% + 64px);
      /* top: calc(50% + 435px); */
      top: calc(50% + 48.333333333333336vh);
      width: 339px;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .v {
      /* transition-duration: 1600ms; */
      /* transition-delay: 50ms; */
      /* transform: translateX(-9999px); */
    }

    .c
    {
      transition-duration: 1600ms;
      /* transition-delay: 50ms; */
    }

    .z {
      transition-duration: 1600ms;
       /* transition-delay: 50ms; */
      transform: scale(10) translateX(4.791666666666667vw);
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
