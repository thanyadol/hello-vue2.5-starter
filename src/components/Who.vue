<template>
  <div class="who">
    <!-- <head :overrideStyles="overrideStyles" :sub="sub" :title="title" :index="index"> </head> -->
    <header class="project__header action | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title" v-bind:style="[baseStyles, overrideStyles]" class="project__title | ml-0 | m-mr-0 t tb slide__title" :data-i="index">{{ title }}</h2>
        <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">{{ sub }}</h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="who">
      <div class="scroll-content" style="">

        <div class="project__content">
          <div class="project__body">
            <section class="project__description | ctn-content" v-for="p in posts" :key="p.id" v-bind:class="p.background">
              <h3 class="hidden-visually">Project</h3>
              <div class="project__text | col-12 mrg-2 | m-100 m-mr-0">
                <p class="title bold tb" v-bind:class="p.text">{{ p.title }}</p>
                <p class="sub bold tb" v-bind:class="p.text">{{ p.sub }}</p>
                <p class="project__text">
                  <span class="sub bold tb" v-bind:class="p.text">{{ p.bold }}</span>
                  <span class="sub tb" v-bind:class="p.text">{{ p.regular }}</span>
                </p>
                <p class="sub tb" v-for="d in p.detail" :key="d">{{ d }}</p>
              </div>
            </section>

           <section class="project__description pt-0 | ctn-content white">
            <div class="project__text | col-12 mrg-2 | m-100 m-mr-0">
              <p class="title bold tb"><a class="btn btn--cta" href="#"> About us</a></p>
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
      title: 'Who We Are',
      sub: 'Partnering With Startups',
      index: '1',
      offsetLeft: { title: '120', sub: '150' },
      slide__title: false,
      slide__sub: false,
      baseStyles: {
        // transform: 'translate3d(0px, 0px, 0px)'
        // color: 'blue'
      },
      overrideStyles: {
        // transform: 'translate3d(120px, 0px, 0px)'
        // color: 'red'
      },
      posts: [{
        id: 1,
        title: 'You Inovate, We Scale',
        sub: 'We are partnering with startups and transfrom industries together',
        bold: 'At Addventure',
        regular: 'we aim to accelerate and scale technologies, inovations and companies with strategic fit and share our core value',
        detail: [],
        background: 'red',
        text: 'tw'
      },
      {
        id: 2,
        title: '',
        sub: 'More Than Just a Capital Partner',
        bold: '',
        regular: '',
        detail: [
          'Addenture provides unrivaled access to a global network of SCG experies and resources.',
          'We partner and invest in the best digital innovations in Industrial - Enterprise - B2B verticals.'
        ],
        background: 'white pt-5'
      },
      {
        id: 3,
        title: '',
        sub: 'Corporate Venture of SCG',
        bold: '',
        regular: '',
        detail: [
          'AddVentures is subsidiary of SCG (The Siam Cement PLC).',
          "Southeast Asia's leading Industrial conglomerate estabilished in 1913.",
          'We believe open innovation is part of our roadmap to success in the next centernnial.'
        ],
        background: 'white pt-5'
      }
      ],
      prev: {
        title: 'Home',
        url: 'index'
      },
      next: {
        title: 'What We Invest',
        url: 'whatweinvest'
      }
    }
  },
  // life cycle of component
  created () {},
  beforeMount () {
    var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('who')
      const scrollbar = scroll.init(div)

      // slide title
      if (scrollbar.scrollTop > 50) {
        vm.slide__title = 'slide__title__active'
        vm.slide__sub = 'slide__sub__active'
        /* vm.overrideStyles = {
          transform: 'translate3d(0px, 0px, 0px)'
        } */
      } else {
        vm.slide__title = 'slide__title__leave'
        vm.slide__sub = 'slide__sub__leave'
        /* vm.overrideStyles = {
          transform: 'translate3d(' + vm.offsetLeft.title + 'px, 0px, 0px)'
        } */
      }

      // slide sub
      /* if (scrollbar.scrollTop > 55) {
        vm.slide__sub = 'slide__sub__active'
      } else {
        vm.slide__sub = 'slide__sub__leave'
      } */

      /* if (event.deltaY < 0) {
        scrolled++
        vm.overrideStyles = {
          transform: 'translate3d(' + scrolled + 'px, 0px, 0px)'
        }
      }
      if (event.deltaY > 0) {
        scrolled--
        vm.overrideStyles = {
          transform: 'translate3d(' + scrolled + 'px, 0px, 0px)'
        }
      } */
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
    transform: translate3d(-256px, 0px, 0px);
    transition-duration: 1600ms;
  }

  .slide__sub__active {
    transform: translate3d(-446px, 0px, 0px);
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
          transform: translate3d(-15vw, 0px, 0px) !important;
        }
        .slide__sub__active {
          transform: translate3d(-20vw, 0px, 0px) !important;
        }
  }

  /***/

  .ctn-cu {
    padding-left: 9.1%;
    padding-right: 9.1%;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  /* .ctn {
    padding-left: 7.7%;
    padding-right: 7.7%;
  } */

  .index {
    z-index: unset;
  }

  .bold {
    font-weight: bold;
  }

  .tb {
    color: #221f1f;
  }

  .tw {
    color: #f0f0f0;
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

  /*project__title::before {
    content: "0" attr(data-i);
    position: absolute;
    top: 0;
    left: -80px;
    font-size: 3.4rem;
  }*/

  .project__description {
    padding-bottom: 30px;
  }

  .project__text p:not(:last-of-type) {
    margin-bottom: 2rem;
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
