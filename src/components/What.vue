<template>
  <div class="what">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 class="project__title | mlg-1 | m-mr-0 t black" data-i="2">{{ title }}</h2>
        <div class="project__info | col-8 mlg-1 | m-ml-0 m-100 black">
          <h3 class="project__intro">
              <ul>
                  <li v-for="s in subs" :key="s" >{{ s }}</li>
              </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="my-scrollbar">
      <div class="scroll-content" style="transform: translate3d(0px, 0px, 0px);">

          <div class="project__content">
            <div class="project__body white">
                <section class="project__description col-7 pd-1 | ctn"  v-for="p in posts" :key="p.id" v-bind:class="p.background">
                    <h3 class="hidden-visually">Project</h3>
                    <div class="project__text | mrg-2 | m-100 m-mr-0">
                      <p class="title bold black">{{ p.title }}</p>
                      <p class="sub bold black">{{ p.sub }}</p>
                      <p class="project__text">     
                        <span class="sub bold black">{{ p.bold }}</span>  
                        <span class="sub black">{{ p.regular }}</span>   
                      </p> 
                      <p class="sub black" v-for="d in p.detail" :key="d">{{ d }}</p>  
                    </div>
                </section>

                <!-- loop with invests -->
                <section class="project__body pb-6 pt-5 row | ctn red" v-for="i in invests" :key="i.id" >
                  <div class="col-7" v-bind:class="{ right: i.id%2 == 0 }">
                    <img class="project__image" :src="i.image" >
                  </div>
                  <div class="col" v-bind:class="{ left: i.id%2 == 0 }">
                    <h1 class="tr"> {{ i.title }} </h1> <span> </span>
                    <ul class="black">
                      <li v-for="l in i.lists" :key="l.list"> {{ l }}</li>
                    </ul>
                  </div>
                </section>
              </div>
          </div>
          <div class="project__body pt-0">
            <section class="project__description pt-0 | ctn red"> 
                <buttom :next="next" :prev="prev"></buttom>
            </section>
          </div>
        </div>
      <!-- end scroll content -->
      <canvas class="overscroll-glow" style="display: none; pointer-events: none;"></canvas>
    </div>
  </div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";
export default {
  name: "What",
  data() {
    return {
      title: 'What We Invest',
      subs: [ 'Industrail',  'B2B',  'Enterprise' ],
      show: false,
      posts: [
        { 
          id: 1,
          title: 'What we invest in 3 verticals', 
          sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          bold: '',
          regular: '',
          detail: [],
          background: 'red'
        }
      ],
      invests: [
        {
          id: 1,
          title: 'Industrail',
          lists: [ 'Smart Manufacturing', 'Robotics', 'Automation', 'Energy  Technology'],
          image: './static/img/img3.jpg',
          float: 'left'
        },
        {
          id: 2,
          title: 'B2B',
          lists: [ 'Marketplace and platform for', 'Construction product', 'Chemicals', 'Packaging', 'Logistics and Industrail supply'],
          image: './static/img/img3.jpg',
          float: 'right',
        },
         {
          id: 3,
          title: 'Enterprise',
          lists: [ 'E-commerce enablement', 'Predictive analystics', 'Chemicals', 'Omni channel', 'Construction efficiency management'],
          image: './static/img/img3.jpg',
          float: 'left'
        }
      ],
      prev: { title : 'Who We Are', url : 'whoweare'},
      next:  { title : 'Where We Invest', url : 'whereweinvest'}
    };
  },
  // life cycle of component
  created() {},
  mounted: function() {
  },
  beforeMount() {

  },
  beforeDestroy() {
    // window.removeEventListener('wheel', this.handleScroll)
  }
};
</script>
<style scoped>

.pb-6
{
  padding-bottom: 5vh;
}

.right
{
  left: 50%;
}

.left
{
  left: -50%;
}

h3 > ul > li
{
    display: inline;
    padding-left: 30px;
}

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.red 
{
  background-color: #f0f0f0;
}

.tr
{
  color: #ee2524;
}

.white 
{
  background-color: #ffff;
}

.index
{
  z-index: unset;
}

.bold
{
  font-weight: bold;
}

.black {
  color: #2f3c47;
}

.project__body h1
{
  position: relative;
  font-size: 5vw;
  font-weight: bold;
  margin-bottom: 30px;
}

.project__body ul li
{
  position: relative;
  font-size: 1.7vw;
}

.project__body ul
{
  list-style-type: square;
}

.t
{
  position: relative;
  font-size: 8vw;
  font-weight: bold;
  line-height: 1;
  opacity: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
}


/*.project__text
{
  color: #2f3c47;
  font-size: 2.1rem;
  line-height: 1.62;
}*/

.scrollarea {
  height: 100vh;
  display: block;
}

.project__header__inner {
  top: -6.75vw;
}

.project__body
{
  border-left: solid 15px #ffff;
  border-right: solid 15px #ffff;
}

.border {
  border: none !important;
  -webkit-transition: opacity 2s ease-in;
  transition: opacity 2s ease-in;
  background-color: #2f3c47;
}

project__title::before {
  content: "0" attr(data-i);
  position: absolute;
  top: 0;
  left: -80px;
  font-size: 3.4rem;
}

.project__description .title,  .project__description .sub
{
  font-size: 5.5rem;
}

.project__description .sub
{
  font-size: 3.1rem;
}

.project__text p:not(:last-of-type) {
    margin-bottom: 2.0rem;
}

/* for iphone x*/
@media only screen and (max-width: 720px)
{
  .project__description .title,  .project__description .sub
  {
    font-size: 2.5rem;
  }

  .project__description .sub
  {
    font-size: 2.1rem;
  }
  .m-ml-0 {
      margin-left: 25.6342857143%;
  }
  .btn {
    font-size: 3vw;
  }
}

@media only screen and (max-width: 960px)
{
  .ctn {
      padding-left: 5%;
      padding-right: 2%;
  }
}

.project__image
{
  top: -100px;
  width: 90%;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
}

.btn.focus, .btn:focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.btn--cta {
    padding: none;
    color: #495057;
    background: #fff;
    border-radius: 0;
    border: 1px solid;
}

</style>
