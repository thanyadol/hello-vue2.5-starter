<template>
  <div class="how">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title"  class="project__title | mlg-2 | m-mr-0 t tb" data-i="4">{{ title }}</h2>
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

        <div class="project__content">
          <div class="project__body row white">
              <section class="project__description col-6 red | ctn"  v-for="p in pres" :key="p.id" v-bind:class="p.background">
                  <h3 class="hidden-visually">Project</h3>
                  <div class="project__text | mrg-2 | m-100 m-mr-0">
                    <p class="title bold">{{ p.title }}</p>
                    <p class="sub">{{ p.sub }}</p>
                  </div>
                </section>
                <section class="project__description col grey | ctn"  v-for="p in posts" :key="p.id" v-bind:class="p.background">
                  <div class="project__text | mrg-2 | m-100 m-mr-0">
                    <p class="title bold tb">{{ p.title }}</p>
                  </div>
                </section>
                <section class="project__description col-12 pd-1 tr grey | ctn" >
                  <ul class="tb mlg-1">
                      <li v-bind:class="v.class" v-for="v in invests" :key="v.id">
                        <span class="sub">{{ v.sub }}</span>
                        <span class="title bold tr">{{ v.title }}</span> <img class="bg" v-bind:src="v.image" />
                      </li>
                  </ul>
                </section>
            </div>
        </div>

        <div class="project__body pt-0">
          <section class="project__description pt-0 | ctn grey">
             <buttom :next="next" :prev="prev"></buttom>
          </section>
        </div>
     </div>

      <!-- end scroll content -->
      <canvas class="overscroll-glow" style="display: none; pointer-events: none;"></canvas>
    </div>
</template>

<script>
import scroll from 'smooth-scrollbar'
export default {
  name: 'How',
  data () {
    return {
      title: 'How We Invest',
      subs: ['Stages of Startups'],
      slide__title: false,
      slide__sub: false,
      pres: [
        {
          id: 99,
          title: 'Stages of',
          sub:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          bold: '',
          regular: '',
          detail: [],
          background: 'red'
        }
      ],
      posts: [
        {
          id: 98,
          title: 'Startups',
          sub: '',
          bold: '',
          regular: '',
          detail: [],
          background: 'red'
        }
      ],
      invests: [
        {
          id: 1,
          title: 'Growth',
          sub: 'Accessories',
          image: './static/img/growth.svg',
          class: 'indent-4'
        },
        {
          id: 2,
          title: 'Series B',
          sub: 'Accessories',
          image: './static/img/growth.svg',
          class: 'indent-3'
        },
        {
          id: 3,
          title: 'Series A',
          sub: 'Accessories',
          image: './static/img/growth.svg',
          class: 'indent-2'
        },
        {
          id: 4,
          title: 'Seed',
          sub: 'Accessories',
          image: './static/img/growth.svg',
          class: 'indent-1'
        }
      ],
      prev: { title: 'Where We Invest', url: 'whereweinvest' },
      next: { title: 'Why Work With Us', url: 'whyworkwithus' }
    }
  },
  beforeMount () {
    var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('scrollbar')
      const scrollbar = scroll.init(div)

      // slide title
      if (scrollbar.scrollTop > 50) {
        vm.slide__title = 'slide__title__active'
      } else {
        vm.slide__title = 'slide__title__leave'
      }

      // slide sub
      if (scrollbar.scrollTop > 55) {
        vm.slide__sub = 'slide__sub__active'
      } else {
        vm.slide__sub = 'slide__sub__leave'
      }

      if (event.deltaY < 0) {
        scrolled++
      }
      if (event.deltaY > 0) {
        scrolled--
      }

      console.log(scrolled)
    })
  }
}
</script>
<style scoped>
/* alider class*/
.slide__title__active {
  transform: translate3d(-226px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__active {
  transform: translate3d(-496px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__title__leave {
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__leave {
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 1600ms;
}

/***/

.ctn {
  padding-left: 9.1%;
  padding-right: 9.1%;
}

.mlg-2 {
  margin-left: 20.6342857143%;
}

.project__body .bg {
  position: absolute;
  left: 15%;
  /* width: 10%; */
  z-index: 2;
  bottom: 0;
}

/* for new */

.project__body ul li {
  position: relative;
  font-size: 1.7vw;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  width: 252px;
  padding-left: 50px;
}

.project__body ul li span.title {
  line-height: 1.5em;
}

ul li.indent-1 {
  margin-left: 0;
}

ul li.indent-2 {
  margin-left: 250px;
}

ul li.indent-3 {
  margin-left: 500px;
}

ul li.indent-4 {
  margin-left: 750px;
}

.pb-6 {
  padding-bottom: 5vh;
}

.right {
  left: 50%;
}

.left {
  left: -50%;
}

h3 > ul > li {
  display: inline;
  padding-left: 30px;
}

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.red {
  background-color: #ee2524;
}

.grey {
  background-color: #f0f0f0;
}

.tr {
  color: #ee2524;
}

.white {
  background-color: #ffff;
}

.index {
  z-index: unset;
}

.bold {
  font-weight: bold;
}

.tb {
  color: #2f3c47;
}

.project__body h1 {
  position: relative;
  font-size: 5vw;
  font-weight: bold;
  margin-bottom: 30px;
}

.project__body ul {
  list-style-type: none;
}

.t {
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

.project__body {
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

.project__description .title,
.project__description .sub {
  font-size: 5.5rem;
}

.project__description .sub {
  font-size: 3.1rem;
}

.project__text p:not(:last-of-type) {
  margin-bottom: 2rem;
}

/* for iphone x*/
@media only screen and (max-width: 720px) {
  .project__description .title,
  .project__description .sub {
    font-size: 2.5rem;
  }

  .project__description .sub {
    font-size: 2.1rem;
  }
  .m-ml-0 {
    margin-left: 25.6342857143%;
  }
  .btn {
    font-size: 3vw;
  }

  svg.rectang {
    width: 10px;
    height: 450px;
  }
}

@media only screen and (max-width: 960px) {
  .ctn {
    padding-left: 5%;
    padding-right: 2%;
  }
}

.project__image {
  top: -100px;
  width: 90%;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.btn.focus,
.btn:focus {
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
