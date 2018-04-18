<template>
  <div class="what">
    <header class="project__header action | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title" data-i="2">{{ title }}</h2>
        <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
              <ul>
                  <li v-for="s in subs" :key="s" >{{ s }}</li>
              </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="what">
      <div class="scroll-content" >

          <div class="project__content">
            <div class="project__body white">
                <section class="project__description col-7 mobile | ctn-content"  v-for="p in posts" :key="p.id" v-bind:class="p.background">
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
               <section class="mt-ne-1">
                <div class="project__body pb-6 pt-5 row | ctn-content" v-for="i in invests" :key="i.id" >
                  <div class="col-7 ne" v-bind:class="{ right: i.id%2 == 0 }">
                    <img class="project__image" :src="i.image" >
                  </div>
                  <div class="col ne" v-bind:class="i.containnerClass">
                    <h1 class="tr title center mb-60" v-bind:class="i.titleAlign" > {{ i.title }} </h1> <img class="bg" :src="i.imageIcon" v-bind:class="i.imageClass" />
                    <ul v-bind:class="i.contentAlign">
                      <li class="tb sub ne" v-for="l in i.lists" :key="l.list"> {{ l }}</li>
                    </ul>
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
  name: 'What',
  data () {
    return {
      title: 'What We Invest',
      subs: ['Industrail', 'B2B', 'Enterprise'],
      slide__title: false,
      slide__sub: false,
      posts: [
        {
          id: 1,
          title: 'What we invest',
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
          float: 'left red',
          containnerClass: 'down'
        },
        {
          id: 2,
          title: 'B2B',
          lists: [
            'Marketplace and platform for',
            'Construction product',
            'Chemicals',
            'Packaging',
            'Logistics and Industrail supply'
          ],
          image: './static/img/img3.jpg',
          imageIcon: './static/img/b2b.svg',
          imageClass: 'bg b2b',
          float: 'right white',
          contentAlign: 'al-r rtl',
          titleAlign: '',
          containnerClass: 'left'
        },
        {
          id: 3,
          title: 'Enterprise',
          lists: [
            'E-commerce enablement',
            'Predictive analystics',
            'Chemicals',
            'Omni channel',
            'Construction efficiency management'
          ],
          image: './static/img/img3.jpg',
          imageIcon: './static/img/b2b.svg',
          imageClass: 'bg enterprise',
          float: 'left red',
          titleAlign: 'trs-l',
          containnerClass: 'down'
        }
      ],
      prev: { title: 'Who We Are', url: 'whoweare' },
      next: { title: 'Where We Invest', url: 'whereweinvest' }
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
 .slide__title__active {
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

  @media (max-width: 575.98px) {
      .slide__title__active {
          transform: translate3d(-10vw, 0px, 0px) !important;
        }
        .slide__sub__active {
          transform: translate3d(-20vw, 0px, 0px) !important;
        }
  }

/***/

.mt-ne-1 {
  transform: translateY(-10%);
}

.trs-l
{
  margin-left: 0 !important;
}

.down
{
  margin-top: 60px;
}

.mb-60
{
  margin-bottom: 60px;
}

.rtl
{
  direction: rtl;
}

.al-r
{
  text-align: right;
}

.center
{
    margin-left: 50%;
    transform: translateX(-50%);
}

.indust {
  top: 20px;
}

.b2b {
  top: 20px;
  right: 80px;
}

.enterprise {
  top: 40px;
  left: 300px;
}

.project__body .bg {
  position: absolute;
  width: 15%;
  z-index: 2;
}

.project__body .title {
  z-index: 1;
  position: relative;
}

.mlg-2 {
  margin-left: 22.6342857143%;
}

.pb-6 {
  padding-bottom: 5vh;
  padding-top: 7rem!important;
}

.right {
  left: 50%;
}

.left {
  left: -50%;
  padding-right: 9.1%;
}

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

/* .project__body ul li {
  position: relative;
  font-size: 1.7vw;
} */

.project__body ul {
  list-style-type: square;
}

.project__text {
  margin-bottom: 70px;
}

.scrollarea {
  height: 100vh;
  display: block;
}

.project__header__inner {
  top: -6.75vw;
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

/* .project__description .sub,
.mt-ne-1 .sub {
  font-size: 3.1rem;
}

.project__text p:not(:last-of-type) {
  margin-bottom: 2rem;
} */

.project__image {
  /*top: -180px;*/
  width: 34.72vw;
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
