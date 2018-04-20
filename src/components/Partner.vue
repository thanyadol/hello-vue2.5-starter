<template>
  <div class="partner">
  <header class="project__header action | ctn part">
      <div class="project__header__inner">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title" data-i="6">{{ title }}</h2>
          <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
            <ul>
              <li v-for="s in subs" :key="s">{{ s }}</li>
            </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="partner">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body">
            <section class="project__description grey row | ctn-content">
              <h3 class="hidden-visually">Partner</h3>
              <div class="project__text | mrg-2x col-md-6 ml-0 mr-0 pr-0 pl-0  | m-100 m-mr-0">
                <p class="title bold tb">{{ posts.title }}</p>
                <p class="sub bold tb">{{ posts.sub }}</p>
              </div>
            </section>

            <section class="project__description grey row | ctn">
              <div class="col-md-4 block" v-for="r in posts.items" :key="r.id" v-bind:class="r.class">
                <div class="project__text | col-md-12 mr-0 ml-0 pr-0 pl-0 mrg-2c | m-100 m-mr-0">
                  <img class="bg__block l" v-show="r.image != null" v-bind:src="r.image" />
                  <div class="of-l">
                    <p class="title bold pl-5"  v-bind:class="r.titleClass">{{ r.title }}</p>
                    <hr class="white n" v-bind:class="r.lineClass" />
                    <p class="sub shift bold tb">{{ r.sub }}</p>
                    <p class="sub shift tb">{{ r.content }}</p>
                  </div>
                </div>
              </div>

            </section>

            <section class="project__description white row | ctn pb-0">
              <h3 class="hidden-visually">Venture</h3>
              <div class="col-md-4 block | mb-5" v-for="r in posts.ventures" :key="r.id" v-bind:class="r.class">
                <div class="project__text |  mrg-2c | m-100 m-mr-0">
                  <img class="bg__block r" v-show="r.image != null"  v-bind:src="r.image" />
                  <div class="of-r">
                    <p class="title bold pl-5"  v-bind:class="r.titleClass" >{{ r.title }}</p>
                    <hr class="black n" v-bind:class="r.lineClass" />
                    <p class="sub shift tb bold">{{ r.sub }}</p>
                    <p class="sub shift tb">{{ r.content }}</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        <div class="project__body pt-0">
          <section class="project__description p-0 m-0 | ctn white">
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
import scroll from 'smooth-scrollbar'
export default {
  name: 'Who',
  data () {
    return {
      title: 'Our Partners',
      subs: ['VC Funds', 'Startups'],
      posts: {
        title: 'Build.Partner.Grow',
        sub:
          'At AddVentures, we aim to build long-term and reliable partnerships',
        items: [
          {
            id: 1,
            title: 'VC <br/>  Funds',
            sub: '',
            image: null,
            class: 'fill red t',
            titleClass: 'f-60',
            lineClass: 'show'
          },
          {
            id: 2,
            title: '',
            sub: 'Vertex Ventures',
            content: 'Southeast Asia & India invests in high-growth startups.',
            image: './static/img/img3.jpg'
          },
          {
            id: 3,
            title: '',
            sub: 'Wavemaker',
            content: 'is invests in seed - stage and B2B startups.',
            image: './static/img/img3.jpg'
          }
        ],
        ventures: [
          {
            id: 2,
            title: '',
            sub: 'HG Robotics',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 3,
            title: '',
            sub: 'Giztix',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 1,
            title: 'All <br/>  Startups',
            sub: '',
            image: null,
            class: 'fill red b',
            titleClass: ' f-60',
            lineClass: 'show black'
          },
          {
            id: 4,
            title: '',
            sub: 'Getlink',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 5,
            title: '',
            sub: 'Bannia',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 6,
            title: '',
            sub: 'Builk',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          },
          {
            id: 7,
            title: '',
            sub: 'Plug & Play',
            content: 'is a logistic marketplace',
            image: './static/img/img3.jpg'
          }
        ]
      },
      slide__title: false,
      slide__sub: false,
      prev: {
        title: 'Why Work With',
        url: 'whyworkwithus'
      },
      next: {
        title: 'Insign',
        url: 'insign'
      }
    }
  },
  // life cycle of component
  created () {},
  beforeMount () {
    var scrolled
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('partner')
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
  },
  beforeDestroy () {
    // window.removeEventListener('wheel', this.handleScroll)
  }
}
</script>

<style scoped>
/* .slide__title__active {
  transform: translate3d(-203px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__active {
  transform: translate3d(-466px, 0px, 0px);
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
    transform: translate3d(-13vw, 0px, 0px) !important;
  }
  .slide__sub__active {
    transform: translate3d(-30vw, 0px, 0px) !important;
  }
} */

.partner .block.red.t {
  height: 15.3vw;
  -webkit-transform: translateY(1.8%);
  transform: translateY(1.8%);
  transform: translateX(-1.8%);
  border-right: solid 2vw #f0f0f0;
  border-left: solid 1vw #f0f0f0;
}

.partner .block.red.b {
  height: 15.3vw;
  /* -webkit-transform: translateY(1.8%);
  transform: translateY(1.8%);
  transform: translateX(-1.8%); */
  border-right: solid 2vw white;
  border-left: solid 2vw white;
}

.project__text p:not(:last-of-type) {
    margin-bottom: 1.5rem;
}

/* .of-r {
  transform: translateX(6%);
}

.of-l {
  transform: translateX(-6%);
} */

/* .partner .ctn {
  padding-left: 7.1% !important;
} */

.partner hr {
  display: none;
}

.indent {
  padding-left: 70px;
}

.project__body .bg__block {
  width: 25vw;
  padding: 5px 10px 5px 5px;
}

/* .project__body .bg__block.l {
  padding: 5px 0 5px 40px;
}*/

 /* .project__body .bg__block.r {
 padding: 5px 40px 5px 0;
}*/

.scrollarea {
  height: 100vh;
  display: block;
}

.project__text .title {
  line-height: 1;
}

  @media (min-width: 1200px) {
      .partner .ctn {
    padding-left: 140px;
    padding-bottom: 110px;
    }

    .partner .block.red.t {
    height: 259px;
    /* padding: 0; */
       padding: 45px 32px 30px 51px;
    transform: translateX(-1.8%);
    border: solid 40px #f0f0f0;
        border-left: 0;
    border-top: 0;
}

 .partner .block.red.b {
   height: 259px;
    /* padding: 0; */
    padding: 45px 32px 30px 51px;
    /* -webkit-transform: translateX(-1.8%); */
    /* transform: translateX(-1.8%); */
    border: solid 40px white;
        border-left: 0;
    border-top: 0;
    /* border-left: solid 0 #f0f0f0; */
}
    .partner .f-60
    {
      font-size: 60px;
      line-height: 0.92;
    }

    /* .partner .of-r {
    -webkit-transform: translateX(6%);
    transform: translateX(6%);
    text-align: right;
} */

.project__body .bg__block {
       height: 280px;
    padding: 0px 10px 5px 0;
}

.partner .of-l p.sub
{
transform: translateX(-5%);

}

.partner .of-r p.sub
{
transform: translateX(-5%);
text-align: right;
}

.partner .ctn.part {
   padding-top: 0 !important;
    padding-bottom: 0 !important;
}
  }
</style>
