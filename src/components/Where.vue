<template>
  <div class="where">
    <header class="project__header action | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title" data-i="3">{{ title }}</h2>
        <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
            <ul>
              <li v-for="s in subs" :key="s">{{ s }}</li>
            </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="where">
      <div class="scroll-content" style="">
        <div class="project__content">
          <div class="project__body row white">

            <!-- red bar -->
            <svg class="rectang" width="150" height="2500">
                        <rect x="0" y="0" width="150" height="2500" />
                      </svg>

            <section class="project__description col-md-6 | ctn-content" v-for="p in posts" :key="p.id" v-bind:class="p.background">
              <h3 class="hidden-visually">Project</h3>
              <div class="project__text | m-100 m-mr-0">
                <p class="title bold tb t mlg-2">{{ p.title }}</p>
                <p class="sub tb">{{ p.sub }}</p>
              </div>
            </section>
            <section class="project__description col-md-6 pd-1 tr | ctn-content">
              <ul class="down">
                <li v-bind:class="v.class" v-for="v in invests" :key="v.id">
                  <span class="sub bold">{{ v.title }}</span>
                  <p class="sub">{{ v.sub }}</p>
                </li>
              </ul>
            </section>

            <section class="project__map col-12 pt-0 pb-5 | ctn-content" v-for="p in posts" :key="p.id" v-bind:class="p.background">
              <img class="mx-auto map" :src="sample">
            </section>

            <!-- tags lat long -->
            <section class="project__description tags__wrapper">
              <div class="tags"
                  v-bind:style="{ left: t.x + 'px', top: t.y + 'px' }"
                  v-for="t in tags" :key="t.id">
                <span class="sub bold sm tw">{{ t.title }}</span>
              </div>
            </section>

          </div>
        </div>

        <div class="project__body pt-0">
          <section class="project__description p-0 m-0 white | ctn">
            <buttom :next="next" :prev="prev"></buttom>
          </section>
        </div>
      </div>
    </div>
    <!-- end scroll content -->
    <canvas class="overscroll-glow" style="display: none; pointer-events: none;"></canvas>
  </div>
</template>

<script>
import scroll from 'smooth-scrollbar'
export default {
  name: 'Where',
  data () {
    return {
      title: 'Where We Invest',
      subs: ['Geographical', 'Focus'],
      slide__title: false,
      slide__sub: false,

      tags: [
        {
          id: 1,
          title: 'USA',
          x: 200,
          y: 200,
          color: 'red'
        },
        {
          id: 2,
          title: 'China',
          x: 1150,
          y: 200,
          color: 'black red'
        },
        {
          id: 3,
          title: 'Israel',
          x: 920,
          y: 300,
          color: 'red'
        },
        {
          id: 4,
          title: 'Asean',
          x: 1000,
          y: 450,
          color: 'red'
        }

      ],
      posts: [
        {
          // id: 99,
          title: 'Focused Ecosystems',
          sub: '',
          bold: '',
          regular: '',
          detail: [],
          background: 'white'
        }
      ],
      invests: [
        {
          id: 1,
          title: 'Technology',
          sub: '',
          image: './static/img/img3.jpg',
          class: 'tb'
        },
        {
          id: 2,
          title: 'Business Model',
          sub: '',
          image: './static/img/img3.jpg',
          class: 'tr'
        }
      ],

      separator: './static/img/separator.',
      sample: './static/img/map.svg',
      prev: {
        title: 'What We Invest',
        url: 'whatweinvest'
      },
      next: {
        title: 'How We Invest',
        url: 'howweinvest'
      }
    }
  },
  // life cycle of component
  created () {},
  mounted: function () {},
  beforeMount () {
    var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('where')
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
    })

    console.log(scrolled)
  },
  beforeDestroy () {
    // window.removeEventListener('wheel', this.handleScroll)
  }
}
</script>

<style scoped>
/* alider class*/

 .slide__title__active {
    transform: translate3d(-40px, 0px, 0px);
    transition-duration: 1600ms;
  }

  .slide__sub__active {
    transform: translate3d(-390px, 0px, 0px);
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

@media (max-width: 575.98px) {
  .slide__title__active {
    transform: translate3d(-3vw, 0px, 0px) !important;
  }
  .slide__sub__active {
    transform: translate3d(-24vw, 0px, 0px) !important;
  }
}

/***/

.tags__wrapper
{
  position: absolute;
  display: block;
  width: 100%;
  margin-top: 200px;
}

.tags
{
  position: absolute;
  display: block;
  background-color: #ec1e24;
  cursor: pointer;
}

.tags span:hover
{
  color: #2f3c47;
}

.sm
{
  font-size: 2.1rem;
}

.tags
{
  padding: 5px 20px 5px 20px;
}

.down
{
  transform: translateY(60%)
}

.project__text .title
{
  line-height: 1;
}

.map {
  width: 65vw;
}

.ctn-m {
  padding-top: 50px;
  padding-left: 9.1%;
  padding-right: 9.1%;
}

.mlg-2 {
  margin-left: 18.6342857143%;
}

/* for new */

svg.rectang {
  opacity: 0.95;
  width: 180px;
  margin-left: 50%;
  transform: translateX(-100px);
  position: absolute;
  z-index: 3;
  height: 95vh;
  fill: #ec1e24;
}

ul li.indent {
  margin-top: 50px;
  margin-left: 35%;
}

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.project__body ul {
  list-style-type: square;
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

.project__text p:not(:last-of-type) {
  margin-bottom: 2rem;
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
