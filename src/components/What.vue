<template>
  <div class="what">
    <header class="project__header action | ctn">
      <div class="project__header__inner">    <div class="al-c">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title fill mx-auto">
            <fraction :index="index"> </fraction>
            <span>{{ title }}</span>
            </h2>
        </div>
        <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
            <ul>
              <li v-for="s in subs" :key="s">{{ s }}</li>
            </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="what">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body white">
            <section class="project__description col-7 mobile | ctn-content jf" v-for="p in posts" :key="p.id" v-bind:class="p.background">
              <h3 class="hidden-visually">Project</h3>
              <div class="project__text | col-12 mrg-2 | m-100 m-mr-0">
                <p class="title bold">{{ p.title }}</p>
                <p class="sub bold">{{ p.sub }}</p>
                <p class="project__text">
                  <span class="sub bold">{{ p.bold }}</span>
                  <span class="sub">{{ p.regular }}</span>
                </p>
                <p class="sub tb" v-for="d in p.detail" :key="d">{{ d }}</p>
              </div>
            </section>

            <!-- loop with invests -->
            <section class="inv t">
              <div class="pb-0 row | ctn-content" v-for="i in invests" :key="i.id">
                <div class="col-7 m-0 p-0 ne" v-bind:class="{ right: i.id%2 == 0 }">
                  <img class="project__image" :src="i.image">
                </div>
                <div class="col ne" v-bind:class="i.containnerClass">
                  <h1 class="tr title center large mb-6c" v-bind:class="i.titleAlign"> {{ i.title }} </h1> <img class="bg" :src="i.imageIcon" v-bind:class="i.imageClass" />
                  <span class="sub bold ne tb">{{ i.sub }}</span>
                  <ul v-bind:class="i.contentAlign">
                    <li class="tb sub ne" v-for="l in i.lists" :key="l.list"> {{ l }}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div class="project__body">
          <section class="project__description py-0 | ctn white">
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
  name: 'What',
  data () {
    return {
      title: 'What We Invest',
      index: '02',
      subs: ['Industrail', 'B2B', 'Enterprise'],
      slide__title: false,
      slide__sub: false,
      posts: [
        {
          id: 1,
          title: 'What we invest in',
          sub:
            'Industrial - B2B - Enterprise are the areas that we will bring significant value to startups and our investment partners.',
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
          lists: [
            'Smart Manufacturing',
            'Robotics',
            'Automation',
            'Energy  Technology'
          ],
          image: './static/img/img3.jpg',
          imageIcon: './static/img/industrail.svg',
          imageClass: 'bg indust',
          titleAlign: 'ml-0 ind',
          float: 'left red',
          containnerClass: 'down'
        },
        {
          id: 2,
          title: 'B2B',
          sub: 'Marketplace platform for',
          lists: [
            'Construction products',
            'Chemicals',
            'Packaging',
            'Logistics and Industrial supply',
            'Logistics'
          ],
          image: './static/img/img3.jpg',
          imageIcon: './static/img/b2b.svg',
          imageClass: 'bg b2b',
          float: 'right white',
          contentAlign: 'al-r rtl',
          titleAlign: 'ml-0 b2b',
          containnerClass: 'left al-r'
        },
        {
          id: 3,
          title: 'Enterprise',
          lists: [
            'E-commerce enablement',
            'Predictive analytics',
            'Omni channel',
            'Construction efficiency management',
            'Software - as - a Service (SaaS)',
            'Artificial Intelligent (AI)',
            'AR / VR',
            'Blockchain'
          ],
          image: './static/img/img3.jpg',
          imageIcon: './static/img/enterprise.svg',
          imageClass: 'bg enterprise',
          float: 'left red',
          titleAlign: 'trs-l ent',
          containnerClass: 'down'
        }
      ],
      prev: {
        title: 'Who We Are',
        url: 'whoweare'
      },
      next: {
        title: 'Where We Invest',
        url: 'whereweinvest'
      }
    }
  },
  // life cycle of component
  created () {},
  beforeMount () {
    var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('what')
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
/* alider class*/

/* .slide__title__active {
      transform: translate3d(-170px, 0px, 0px);
      transition-duration: 1600ms;
    }

    .slide__sub__active {
      transform: translate3d(-410px, 0px, 0px);
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
          transform: translate3d(-10vw, 0px, 0px) !important;
        }
        .slide__sub__active {
          transform: translate3d(-20vw, 0px, 0px) !important;
        }
    } */

/***/

/* .mt-ne-1 {
  transform: translateY(-10%);
} */

.what .trs-l {
  margin-left: 0 !important;
}

.what .down {
  margin-top: 60px;
}

.what .mb-6c {
  margin-bottom: 6.5vh;
}

.rtl {
  direction: rtl;
}

.what .center {
  margin-left: 50%;
  transform: translateX(-50%);
}

.what .indust {
  top: 20px;
}

.what .b2b {
  top: 20px;
  right: 80px;
}

.enterprise {
  top: 40px;
  left: 300px;
}

.what .pb-6 {
  padding-bottom: 5vh;
  padding-top: 7rem !important;
}

.what .right {
  left: 50%;
  transform: translateX(0);
}

.what .left {
  left: -50%;
  transform: translateX(0);
  padding-right: 9.1%;
}

.what .project__body ul {
  list-style-type: none;
}

.what .project__text {
  margin-bottom: 70px;
}

.scrollarea {
  height: 100vh;
  display: block;
}

.what .project__image {
  /*top: -180px;*/
  width: 34.72vw;
  position: relative;
}

@media (min-width: 1200px) {
  .what .project__body ul > li:before {
    content: "–";
    /* en dash */
    position: absolute;
    margin-left: -1.1em;
    margin-right: -1.1em;
  }
  .what .project__body .bg {
    position: absolute;
    width: 60px;
    z-index: 2;
  }
  .project__content .title.large {
    font-size: 100px;
    line-height: 0.69;
    letter-spacing: normal;
  }
  .what .indust {
    top: 40px;
  }
  .what .b2b {
    top: 20px;
    right: 80px;
  }
  .enterprise {
    top: 40px;
    left: 150px;
  }
  .what .project__image {
    /* top: -180px; */
    /* width: 34.72vw; */
    position: relative;
    width: 474px;
    height: 356px;
  }
  .ctn-content.jf {
    position: absolute;
        height: 500px;
    padding-right: 130px;
    padding-bottom: 71px;
    top: 0;
  }
  /* .mt-ne-1 {
    transform: translateY(-14%);
  } */
  .what .indust {
    top: 38px;
  }
  .what .down {
    margin-top: 60px;
    margin-left: 41px;
  }
  .ctn-content {
    padding-left: 238px;
    padding-right: 223px;
    padding-top: 66.5px;
    padding-bottom: 45px;
  }
  .what .right {
    left: 50%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    padding-left: 16px !important;
  }
  .what .pb-6 {
    margin-bottom: 120px;
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 0 !important;
  }
  .what .b2b {
    width: 78px !important;
    top: 31px;
    right: 139px;
  }
  .what .enterprise {
    top: 40px;
    width: 70px !important;
    left: 170px;
  }
  .what .pt-5c {
    padding-top: 120px;
  }
  .what .project__body .title.ent {
    transform: translateX(-57%);
  }
  .what .project__body .title.ind {
    transform: translateX(25%);
  }
  .what .ft {
    margin-top: -150px !important;
  }
  .what .inv
  {
    padding-top: 330px;
  }

  .what .fill {
  width: max-content
}
}
</style>
