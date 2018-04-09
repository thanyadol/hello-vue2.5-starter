<template>
    <div class="project__text | col-12 mrg-2 | m-100 m-mr-0 mt-6">  
        <div class="mlg-2 | m-mr-0">    
            <router-link :to="prev.url" class="href">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.76 23.03">
            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                <polygon class="arrow-left" points="55.76 10.51 3.83 10.51 12.93 1.41 11.51 0 0 11.51 11.51 23.03 12.93 21.61 3.83 12.51 55.76 12.51 55.76 10.51"/></g></g>
                </svg><span>{{ prev.title }}</span>  
            </router-link>  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.4 1 1">
                <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                    <rect class="separate" width="2" height="54.34"/></g></g>
            </svg>
            <router-link :to="next.url" class="href"> <span>{{ next.title }}</span>  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.76 23.03"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                    <polygon class="arrow-right" points="44.24 0 42.83 1.41 51.93 10.51 0 10.51 0 12.51 51.93 12.51 42.83 21.61 44.24 23.03 55.76 11.51 44.24 0"/></g></g>
                </svg>
            </router-link>  
        </div>
        <div class="mlg-3 | m-100 m-ml-0"><h3>&copy; {{ foot }}</h3></div>
    </div>
</template>

<script>
export default {
  name: 'Buttom',
    data() {
      return {
        foot: 'Copyright 2018 AddVenture'
      }
    },
    props: ['next', 'prev']
}
</script>
<style scoped>

.mt-6
{
  margin-top: 10rem !important;
}

.nav-wrapper
{
    padding-top: 2%;
    padding-bottom: 2%;
}

span
{
    font-weight: bold;
    color: #2f3c47;
}

h3
{
    margin-top: 7vw;
    line-height: 1.5;
    color: #2f3c47;
}

a:hover
{
    text-decoration: none;
}

div svg {
  width: 100px;
  height: auto;
  margin: 0 2rem;
  cursor: pointer;
  overflow: visible;
  padding: 0 20px 0 0px;
}

div svg.arrow-right, div svg.arrow-left
{
  top: 20px;
  position: relative;
}

div svg polygon, div svg path {
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
}
div svg:hover polygon, div svg:hover path {
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

div svg .separate
{
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
