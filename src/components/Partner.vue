<template>
  <div class="who">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title"  class="project__title | mlg-2 | m-mr-0 t tb" data-i="6">{{ title }}</h2>
        <div class="project__info | col-8 mlg-3 | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub"  class="project__intro">
              <ul>
                  <li v-for="s in subs" :key="s" >{{ s }}</li>
              </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="scrollbar">
      <div class="scroll-content" style="transform: translate3d(0px, 0px, 0px);">

        <div class="project__content">
          <div class="project__body">
              <section class="project__description red row | ctn">
                  <h3 class="hidden-visually">Partner</h3>
                  <div class="project__text | col-6 mrg-2 | m-100 m-mr-0">
                    <p class="title bold tw">{{ posts.title }}</p>
                    <p class="sub bold tw">{{ posts.sub }}</p>
                  </div>
                  <div class="col"> </div>

                  <div class="project__description col-4 block | ctn-bk"  v-for="r in posts.items" :key="r.id" v-bind:class="r.class">
                    <div class="project__text |  mrg-2c | m-100 m-mr-0">
                      <img class="bg__block" v-bind:src="r.image" />
                      <p class="title bold pl-5 t-lg">{{ r.title }}</p>
                      <p class="sub shift bold">{{ r.sub }}</p>
                      <p class="sub shift">{{ r.content }}</p>
                    </div>
                  </div>

              </section>

             <section class="project__description white row | ctn">
                  <h3 class="hidden-visually">Venture</h3>
                  <div class="project__description col-4 block | ctn-bk"  v-for="r in posts.ventures" :key="r.id" v-bind:class="r.class">
                    <div class="project__text |  mrg-2c | m-100 m-mr-0">
                      <img class="bg__block" v-bind:src="r.image" />
                      <p class="title tb bold pl-5 t-lg">{{ r.title }}</p>
                      <p class="sub shift tb bold">{{ r.sub }}</p>
                      <p class="sub shift tb">{{ r.content }}</p>
                    </div>
                  </div>
              </section>

            </div>
        </div>

         <div class="project__body pt-0">
          <section class="project__description pt-0 | ctn white">
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
import { log } from 'util';
export default {
  name: "Who",
  data() {
    return {
      title: 'Our Partners',
      subs: [ 'Funding', 'Startups' ],
      posts : {
        title: 'Build / Partner / Grow',
        sub: 'At AddVentures, we aim to build long-term and reliable partnerships',
        items:
        [
          { 
            id: 1,
            title: 'VC Funds', 
            sub: '',
            image: '',
            class: ''
          },
          { 
            id: 2,
            title: '', 
            sub: 'Vertex Ventures',
            content: ' Southeast Asia & India invests in high - growth startups',
            image: './static/img/img3.jpg',
          },
          { 
            id: 3,
            title: '', 
            sub: 'Wavemaker',
            content: 'is invests in seed - stage and B2B startups. we aim to build long-term and reliable partnerships not invest first',
            image: './static/img/img3.jpg',
          }
        ],
        ventures:
        [
          { 
            id: 2,
            title: '', 
            sub: 'HG Robotics',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg',
          },
          { 
            id: 3,
            title: '', 
            sub: 'Giztix',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg',
          },
          { 
            id: 1,
            title: 'All Startups', 
            sub: '',
            image: '',
            class: ''
          },
          { 
            id: 4,
            title: '', 
            sub: 'Getlink',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg',
          },
          { 
            id: 5,
            title: '', 
            sub: 'Bannia',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg',
          },
          { 
            id: 6,
            title: '', 
            sub: 'Builk',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg',
          },
          { 
            id: 7,
            title: '', 
            sub: 'Plug & Play',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg',
          },
        ]
      },
      slide__title: false,
      slide__sub: false,
      prev: { title : 'Why Work With', url : 'whyworkwithus'},
      next:  { title : 'Insign', url : 'insign'}

    };
  },
  // life cycle of component
  created() {},
  beforeMount() {
      var scrolled = 0
      var vm = this

      window.addEventListener('wheel', function (event) {
      var div = document.getElementById("scrollbar");
      const scrollbar = Scrollbar.init(div);
     
      //slide title
      if(scrollbar.scrollTop > 50)
      {
        vm.slide__title = 'slide__title__active'
      }
      else
      {
        vm.slide__title = 'slide__title__leave'
      }

      //slide sub
      if(scrollbar.scrollTop > 55)
      {
        vm.slide__sub = 'slide__sub__active'
      }
      else
      {
         vm.slide__sub = 'slide__sub__leave'
      }

      if (event.deltaY < 0) {
        scrolled++
      }
      if (event.deltaY > 0) {
        scrolled--
      }
    })
  },
  beforeDestroy() {
    // window.removeEventListener('wheel', this.handleScroll)
  }
};
</script>
<style scoped>

.slide__title__active
{
  transform: translate3d(-266px, 0px, 0px); 
  transition-duration: 1600ms;
}

.slide__sub__active
{
  transform: translate3d(-536px, 0px, 0px); 
  transition-duration: 1600ms;
}

.slide__title__leave
{
  transform: translate3d(0px, 0px, 0px); 
  transition-duration: 1600ms;
}

.slide__sub__leave
{
  transform: translate3d(0px, 0px, 0px); 
  transition-duration: 1600ms;
}

/***/

.t-lg
{
  font-size: 9vh !important;
}

.more
{
  height: 900px;
}

.project__text .sub.shift
{
  /*margin-top: -90px;*/
  margin-left: -25px;
  z-index: 3;
}

.ctn {
  padding-left: 9.1%;
  padding-right: 9.1%;
}

/* cropping box */
.mr-91
{
  margin-right: 9.1%;
}

.mlg-2
{
  margin-left: 20.6342857143%
}

.platform
{
  top: 120px;
  left: 520px;
}

.vertical
{
  top: 130px;
  left: 150px;
}

.partner
{
  top: 120px;
  left: 150px;
}

.project__text ul li
{
  list-style-type: none;
  display: inline;
  padding: 0;
}

h3 > ul > li
{
    display: inline;
    padding-left: 30px;
}

.indent
{
  padding-left: 70px;
}

.project__body .bg__block
{
    width: 100%;
    z-index: 2;
    padding: 5px 10px 5px 5px;
}


/* for new */

.block
{
  margin-top: 20px;
  margin-bottom: 20px;
  background-clip: padding-box;
  border: 25px solid transparent;
}

.block p
{
    margin: 0;
    line-height: 4.1rem;
}

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.ctn-bk {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 3rem;
  padding-top: 3rem;
}


.tr
{
  color: #ee2524;
}

.roll
{
  font-size: 2vh;
}

.tw
{
  color: #f0f0f0; 
}

.box {
    position:relative;
}

.bet {
    position:absolute;
    bottom:0;
    right:0;
}

.right
{
  margin-left: 33.333333%;
}

.pt-6
{
  padding-top: 23.333333%;
}

.left
{
  left: -50%;
}

ol {
    list-style: decimal;
}

.red 
{
  background-color: #ee2524;
}

.grey 
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

.tb {
  color: #2f3c47;
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

.project__description
{
  padding-bottom: 30px;
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
