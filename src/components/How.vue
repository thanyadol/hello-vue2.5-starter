<template>
  <div class="how">
    <header class="project__header action | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title" data-i="4">{{ title }}</h2>
        <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
            <ul>
              <li v-for="s in subs" :key="s">{{ s }}</li>
            </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="how">

      <div class="project__content">
        <div class="project__body row white">
          <section class="project__description col-md-7 fill red | ctn-content stage" v-for="p in pres" :key="p.id" v-bind:class="p.background">
            <h3 class="hidden-visually">Project</h3>
            <div class="project__text | mrg-2 | m-100 m-mr-0">
              <p class="title bold">{{ p.titleTop }}</p>
              <p class="title bold">{{ p.titleBot }}</p>
              <!-- <p class="sub">{{ p.sub }}</p> -->
            </div>
          </section>
          <section class="project__description col white | ctn-content" v-for="p in posts" :key="p.id" v-bind:class="p.background">
            <div class="project__text | mrg-5 | m-100 m-mr-0">
              <p class="title bold tb">{{ p.title }}</p>
            </div>
          </section>
          <section class="project__description col-12 tr white pb-0 | ctn-content invest">
            <ul class="">
              <li v-bind:class="v.class" v-for="v in invests" :key="v.id">
                <!-- <span class="sub tb fixed">{{ v.sub }}</span> -->
                <span class="title lg bold fixed mx-auto f-50">{{ v.title }} <o class="title lg bold f-80"> {{ v.series }} </o></span>
                <img class="bg" v-bind:class="v.imageClass" v-bind:src="v.image" />
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div class="project__body pt-0">
        <section class="project__description py-0 m-0 | ctn white">
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
          titleTop: 'Stages',
          titleBot: 'of startups',
          sub: 'Post seed startups and invest in beyond',
          bold: '',
          regular: '',
          detail: [],
          background: 'red'
        }
      ],
      posts: [
        {
          id: 98,
          title: '',
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
          sub: 'Post Seed',
          image: './static/img/growth.png',
          class: 'indent-4 tb'
        },
        {
          id: 2,
          title: 'Series',
          series: 'B',
          sub: 'Accessories',
          image: './static/img/seriesb.png',
          class: 'indent-3 tr'
        },
        {
          id: 3,
          title: 'Series',
          series: 'A',
          sub: 'Accessories',
          image: './static/img/seriesa.png',
          class: 'indent-2 tr'
        },
        {
          id: 4,
          title: 'Seed',
          sub: 'Accessories',
          image: './static/img/seed.png',
          imageClass: 'seed',
          class: 'indent-1 tb'
        }
      ],
      prev: {
        title: 'Where We Invest',
        url: 'whereweinvest'
      },
      next: {
        title: 'Why Work With Us',
        url: 'whyworkwithus'
      }
    }
  },
  beforeMount () {
    var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('how')
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

/* .slide__title__active {
    transform: translate3d(-170px, 0px, 0px);
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

  /* mobile *
  @media (max-width: 575.98px)
  {
    .slide__title__active {
      transform: translate3d(-9vw, 0px, 0px) !important;
    }
    .slide__sub__active {
      transform: translate3d(-30vw, 0px, 0px) !important;
    }
  } */

/***/

.how .lg {
  font-size: 3.47vw;
}

.how .project__body .bg {
  position: absolute;
  left: 15%;
  width: 11vw;
  z-index: 2;
  bottom: -2px;
}

.how .project__description ul li span {
  margin-bottom: 8vh;
  /* display: block;
      transform: translateX(20%); */
}

/* for new */

.project__body ul li {
  position: relative;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  width: 17vw;
}

ul li.indent-1 {
  transform: translateX(0);
}

ul li.indent-2 {
  transform: translateX(16.9vw);
}

ul li.indent-3 {
  transform: translateX(33.8vw);
}

ul li.indent-4 {
  transform: translateX(50.7vw);
  border-right: none !important;
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
  .project__content .title {
    font-size: 70px;
    line-height: 1;
    letter-spacing: normal;
  }
  .how .ctn-content.stage {
    width: 800px;
    height: 350px;
  }
  .how .ctn-content.invest {
    padding-top: 24px;
    /* -webkit-transform: translateY(-55px); */
    /* transform: translateY(21px); */
    background: transparent;
    /* padding-left: 296px !important; */
  }
  .how .project__body .bg {
    position: absolute;
    left: 22%;
    /* width: 11vw; */
    height: 63px;
    z-index: 2;
    bottom: -2px;
  }
  /* .how .project__body .bg.seed {
                 bottom: -0.45rem;
        } */
  .how .f-60 {
    font-size: 60px;
    line-height: 1.69;
  }
  .how .f-50 {
    font-size: 50px;
    line-height: 1.69;
  }
  .how .f-80 {
    font-size: 80px;
    line-height: 1.69;
  }
  .how .project__description ul li span {
    margin-bottom: 0;
    /* text-align: center; */
    display: block;
    /* -webkit-transform: translateX(20%); */
    transform: translateY(-52%);
  }
  .project__body ul li {
    position: relative;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    width: 240px;
    height: 120px;
  }
  ul li.indent-4 {
    -webkit-transform: translateX(50.7vw);
    transform: translateX(49.34vw);
    border-right: none !important;
  }
  ul li.indent-2 {
    -webkit-transform: translateX(16.9vw);
    transform: translateX(16.45vw);
  }
  ul li.indent-3 {
    -webkit-transform: translateX(33.8vw);
    transform: translateX(32.895vw);
  }
}
</style>
