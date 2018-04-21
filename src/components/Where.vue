<template>
  <div class="where">
    <header class="project__header action | ctn">
      <div class="project__header__inner">
          <div class="al-c">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title fill mx-auto">
            <fraction :index="index"> </fraction>
            <span>{{ title }}</span>
            </h2>
        </div>  <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
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
            <!-- <svg class="rectang" width="180" height="2500">
                              <rect x="0" y="0" width="180" height="2500" />
                            </svg> -->
            <img class="rectang" v-bind:src="sep" />

            <section class="project__description col-md-6 | ctn-content" v-for="p in posts" :key="p.id" v-bind:class="p.background">
              <h3 class="hidden-visually">Project</h3>
              <div class="project__text | m-100 m-mr-0">
                <p class="title bold tb t mlg-2">{{ p.title }}</p>
                <p class="sub tb">{{ p.sub }}</p>
              </div>
            </section>
            <section class="project__description col-md-6 pd-1 tr | ctn-content focus">
              <ul class="down">
                <li class="fix" v-bind:class="v.class" v-for="v in invests" :key="v.id">
                  <span class="sub bold f-30">{{ v.title }}</span>
                  <p class="sub">{{ v.sub }}</p>
                </li>
              </ul>
            </section>

            <section class="project__map col-12 pt-0 pb-5 | ctn-content | mapp__wrapper" v-for="p in posts" :key="p.id" v-bind:class="p.background">
              <img class="mx-auto map" :src="sample">
            </section>

            <!-- tags lat long -->
            <section class="project__description tags__wrapper">
              <div class="tags" v-bind:class="t.color" v-bind:style="{ left: t.x + 'px', top: t.y + 'px' }" v-for="t in tags" :key="t.id">
                <span class="sub bold sm tw">{{ t.title }}</span>
              </div>
            </section>

          </div>
        </div>

        <div class="project__body pt-0">
          <section class="project__description py-0 m-0 white | ctn">
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
      index: '03',
      subs: ['Geographical', 'Focus'],
      sep: './static/img/sep.png',
      slide__title: false,
      slide__sub: false,

      tags: [
        {
          id: 1,
          title: 'USA',
          x: 200,
          y: 150,
          color: 'red'
        },
        {
          id: 2,
          title: 'China',
          x: 1150,
          y: 140,
          color: 'custom'
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
          x: 1200,
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
          background: ''
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
      sample: './static/img/map.png',
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

/* .slide__title__active {
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

      @media (max-width: 575.98px)
      {
        .slide__title__active {
          transform: translate3d(-3vw, 0px, 0px) !important;
        }
        .slide__sub__active {
          transform: translate3d(-24vw, 0px, 0px) !important;
        }
      } */

/***/

.where .tags__wrapper {
  position: absolute;
  display: block;
  width: 100%;
  margin-top: 200px;
}

.where .tags {
  position: absolute;
  display: block;
  background-color: #ec1e24;
  cursor: pointer;
}

.where .tags span:hover {
  color: #2f3c47;
}

.where .sm {
  font-size: 2.1rem;
}

.where .tags {
  padding: 5px 20px 5px 20px;
}

.where .down {
  transform: translateY(60%);
}

.where .project__text .title {
  line-height: 1;
}

.where .map {
  width: 65vw;
}

.where .mlg-2 {
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

@media (min-width: 1200px) {
  .where .tags__wrapper {
    margin-top: 295px;
    z-index: 6;
    position: fixed;
    height: auto;
    padding-top: 0 !important;
  }
  .where img.rectang {
    width: 180px;
    height: 864px;
    margin-left: 615px;
    /* display: inline; */
    position: absolute;
    z-index: 5;
    /* opacity: 0.9; */
  }
  .where svg.rectang {
    width: 180px;
    margin-left: 815px;
    z-index: 3;
    height: 863px;
    fill: #ec1e24;
  }
  .where .mlg-2 {
    margin-left: 0;
  }
  .f-30 {
    font-size: 30px;
    line-height: 1.7;
    letter-spacing: normal;
  }
  .where .map {
    width: 956px;
    z-index: 4;
  }
  .where .mapp__wrapper {
    z-index: 5;
    margin-top: 61px;
  }
  .where .tags span {
    font-size: 22px;
    line-height: 1.6;
  }
  .where .tags {
    width: 80px;
    height: 40px;
    padding: 3px 0px 2px 0px;
    text-align: center;
    /* padding-top: 3px; */
  }
  .where .tags.custom {
    background: linear-gradient(
      to right,
      black 0%,
      black 50%,
      #000000 50%,
      #dc3545 50%,
      #dc3545 100%
    );
  }
  .where .project__body ul {
    list-style-type: square;
    font-size: 30px;
  }
  .where ul li.fix {
    height: 40px;
  }
  .where .ctn-content.focus {
    padding-left: 220px;
    padding-top: 137.5px;
  }
  .where .pt-10c {
    padding-top: 110px;
  }

  .where .fill {
  width: max-content
}
}
</style>
