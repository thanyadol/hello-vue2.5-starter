<template>
  <div class="project__text | col-md-12 m-0 p-0 | m-100 m-mr-0">
    <div class="footy mlg-2x desktop ct col-md-6  mt-6 | m-mr-0" >
      <router-link :to="prev.url" class="href hel">
        <svg class="chev l" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.76 23.03">
              <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                  <polygon class="arrow-left" points="55.76 10.51 3.83 10.51 12.93 1.41 11.51 0 0 11.51 11.51 23.03 12.93 21.61 3.83 12.51 55.76 12.51 55.76 10.51"/></g></g>
                  </svg><span class="sub bold">{{ prev.title }}</span>
      </router-link>
      <svg class="sep" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.4 1 1">
                  <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                      <rect class="separate" width="2" height="54.34"/></g></g>
              </svg>
      <router-link :to="next.url" class="href her"> <span class="sub bold">{{ next.title }}</span>
        <svg class="chev r" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.76 23.03"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                      <polygon class="arrow-right" points="44.24 0 42.83 1.41 51.93 10.51 0 10.51 0 12.51 51.93 12.51 42.83 21.61 44.24 23.03 55.76 11.51 44.24 0"/></g></g>
                  </svg>
      </router-link>
    </div>

    <div class="footy mobile row mb-6 mt-5 p-0 | m-mr-0">
      <div class="col-md-12 l">
        <router-link :to="prev.url" class="href l p-0 m-0">
             <svg class="icon pl-1 pr-0 mr-1 ml-0 icon--arrow icon--arrow--left" viewBox="0 0 38 38">
                    <path class="st0" d="M10.3,19c0-0.6,0.2-1.3,0.7-1.7L23.4,4.4c1-1,2.5-1,3.5-0.1s1,2.5,0.1,3.5L16.3,19L27,30.1c1,1,0.9,2.6-0.1,3.5c-1,1-2.6,0.9-3.5-0.1L11,20.7C10.5,20.3,10.3,19.6,10.3,19z"></path>
                  </svg>
          <span class="t sub">{{ prev.title }}</span>
        </router-link>
      </div>
      <hr class="black" />
      <div class="col-md-12 r">
        <router-link :to="next.url" class="href r p-0 m-0">
          <span class="t sub">{{ next.title }}</span>
              <svg class="icon pr-1 pl-0 mr-0 ml-1 icon--arrow icon--arrow--right" viewBox="0 0 38 38">
                    <path class="st0" d="M27.7,19c0,0.6-0.2,1.3-0.7,1.7L14.6,33.6c-1,1-2.5,1-3.5,0.1s-1-2.5-0.1-3.5L21.7,19L11,7.9c-1-1-0.9-2.6,0.1-3.5c1-1,2.6-0.9,3.5,0.1L27,17.3C27.5,17.7,27.7,18.4,27.7,19z"></path>
                    </svg>
        </router-link>
      </div>
    </div>

    <div class="mlg-3x col-5 ft bold | m-ml-0">
      <h3>&copy; {{ foot }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buttom',
  data () {
    return {
      foot: 'Copyright 2018 AddVenture'
    }
  },
  props: ['next', 'prev']
}
</script>

<style scoped>

  a.her
  {
      position: fixed;
    /* margin-left: 20%; */
    left: calc(50% + 100px);
  }

  a.hel
  {
      position: fixed;
    /* margin-left: 20%; */
    right: calc(50% + 100px);
  }

  .mlg-3x
  {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 320px;
  }

  .ft
  {
    font-size: 2.9rem;
  }

  .ct
  {
    margin: auto;
  }

  .footy .sep
  {
    position: fixed;
    top: calc(100% - 200px);
    left: calc(50% - 40px);
  }

  .footy .chev
  {
    position: relative;
    top: 15px;
  }

  .footy .chev.l
  {
    margin-right: 30px;
  }

  .footy .chev.r
  {
    margin-left: 30px;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }

  .mt-6 {
    margin-top: 10vh !important;
  }

   .mb-6 {
    margin-bottom: 10vh !important;
  }

  .nav-wrapper {
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .footy.mobile hr
  {
    margin-top: 20px !important;
  }

  span {
    font-weight: bold;
    color: #2f3c47;
  }

  .r
  {
    text-align: right;
  }

  .l
  {
    text-align: left;
  }

  .r svg.icon,
  .l svg.icon
  {
    width: 30px;
    top: 8px;
    position: relative;
  }

  .r span.t,
  .l span.t
  {
    position: relative;
  }

  .black
  {
    background-color:  #2f3c47;
  }

  h3 {
    margin-top: 7vw;
    line-height: 1.5;
    color: #2f3c47;
  }

  a:hover {
    text-decoration: none;
  }

  div svg {
    width: 100px;
    /*height: auto;
    margin: 0 2rem;*/
    cursor: pointer;
   /* overflow: visible;
    padding: 0 20px 0 0px;*/
  }

  div svg.arrow-right,
  div svg.arrow-left {
    top: 20px;
    position: relative;
  }

  div svg polygon,
  div svg path {
    transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
  }

  div svg:hover polygon,
  div svg:hover path {
    transition: all 1s cubic-bezier(0.2, 1, 0.3, 1);
    fill: #2f3c47;
  }

  div svg:hover .arrow {
    animation: arrow-anim 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite;
  }

  div svg:hover .arrow-left {
    animation: arrow-anim-left 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite;
  }

  div svg:hover .arrow-right {
    animation: arrow-anim-right 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite;
  }

  div svg:hover .arrow-fixed {
    animation: arrow-fixed-anim 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite;
  }

  div svg .separate {
    height: 100%;
    width: 5%;
  }

  @keyframes arrow-anim-right {
    0% {
      /*opacity: 1;*/
      transform: translateX(0);
    }
    5% {
      transform: translateX(-0.5rem);
    }
    100% {
      transform: translateX(-2rem);
      /*opacity: 1;*/
    }
  }

  @keyframes arrow-anim-left {
    0% {
      /*opacity: 1;*/
      transform: translateX(0);
    }
    5% {
      transform: translateX(0.5rem);
    }
    100% {
      transform: translateX(2rem);
      /*opacity: 1;*/
    }
  }

  @keyframes arrow-fixed-anim {
    5% {
      opacity: 0;
    }
    20% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
</style>
