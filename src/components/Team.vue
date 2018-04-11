<template>
  <div class="team">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title" class="project__title | mlg-28 | m-mr-0 t tb" data-i="8">{{ title }}</h2>
        <div class="project__info | col-8 mlg-25 | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro">
            <ul>
              <li v-for="s in subs" :key="s">{{ s }}</li>
            </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="team" ref="divx">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body">
            <section class="project__description grey row | ctn">
              <h3 class="hidden-visually">Blog</h3>
              <div class="project__text | col-6 mrg-2 | m-100 m-mr-0">
                <p class="title bold tb">{{ post.title }}</p>
                <p class="sub bold tb">{{ post.sub }}</p>
              </div>
              <div class="col"> </div>
            </section>
            <section class="project__description grey row | ctn-r">
              <h3 class="hidden-visually">Staff</h3>
              <div class="project__description col-4 block | ctn-b" v-for="s in post.staffs" :key="s.id" v-bind:class="s.class">
                <div class="project__text | mrg-2c | m-100 m-mr-0">
                  <p class="title sm tb bold text-uppercase" v-bind:class="s.fontClass">{{ s.name }}</p>
                  <p class="sub sm tb text-uppercase" v-bind:class="s.fontClass">{{ s.position }}</p>
                  <p class="title tb bold bot t-lg">{{ s.title }}</p>
                </div>
              </div>
            </section>

            <section class="project__description grey row | ctn-l">
              <h3 class="hidden-visually">Staff</h3>
              <div class="project__description col-4 block | ctn-b" v-for="s in post.blocks" :key="s.id" v-bind:class="s.class">
                <div class="project__text | mrg-2c | m-100 m-mr-0">
                  <p class="title sm tb bold text-uppercase" v-bind:class="s.fontClass">{{ s.name }}</p>
                  <p class="sub sm tb text-uppercase" v-bind:class="s.fontClass">{{ s.position }}</p>
                  <span class="title tb bold bot t-lg">{{ s.title }}</span>
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
import scroll from 'smooth-scrollbar'
import moment from 'moment'

export default {
  name: 'Team',
  data () {
    return {
      title: 'The Team',
      subs: ['We are AddVenture'],
      post: {
        title: 'We are AddVenture',
        sub: 'We are partnering with startups to transform industries together',
        staffs: [
          {
            id: 1,
            title: '',
            name: 'Joshua Pas PH.D.',
            position: 'Managing Director and Investment Commitee',
            class: 'red',
            fontClass: 'tw'
          },
          {
            id: 2,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 3,
            title: 'The Team',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 4,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 5,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 6,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 7,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 8,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 9,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 10,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 11,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 12,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          }
        ],

        blocks: [
          {
            id: 1,
            title: '',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 2,
            title: 'Investment Commitee',
            name: '',
            position: '',
            class: 'grey',
            fontClass: 'tw'
          },
          {
            id: 3,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 4,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 5,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          },
          {
            id: 6,
            title: '',
            name: '',
            position: '',
            class: 'white',
            fontClass: 'tw'
          }
        ]
      },
      slide__title: false,
      slide__sub: false,
      prev: {
        title: 'Insign',
        url: 'insign'
      },
      next: {
        title: 'Contact',
        url: 'contact'
      }
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMM')
    }
  },
  // life cycle of component
  created () {},
  beforeMount () {
    var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('team')
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
.slide__title__active {
  transform: translate3d(-396px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__active {
  transform: translate3d(-536px, 0px, 0px);
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

.t-lg {
  font-size: 9vh !important;
}

.bot {
  position: absolute;
  bottom: 0px;
  padding: 20px 20px 40px 20px;
}

.more {
  height: 900px;
}

.project__text .sub.shift {
  /*margin-top: -90px;*/
  margin-left: -25px;
  z-index: 3;
}

a:hover {
  color: red;
  text-decoration: none;
}

.ctn {
  padding-left: 9.1%;
  padding-right: 9.1%;
}

.ctn-r {
  padding-left: 9.1%;
  padding-right: 20.1%;
}

.ctn-l {
  padding-right: 9.1%;
  padding-left: 20.1%;
}

hr.separate {
  background-color: #0f0f0f;
  margin-top: 20px;
  margin-bottom: 20px;
}

.arrow {
  width: 10vh;
  padding-top: 10px;
  margin-left: 50px;
  position: absolute;
}

/* cropping box */

.mr-91 {
  margin-right: 9.1%;
}

.mlg-28 {
  margin-left: 29.6342857143%;
}

.mlg-25 {
  margin-left: 38.43333%;
}

.platform {
  top: 120px;
  left: 520px;
}

.vertical {
  top: 130px;
  left: 150px;
}

.partner {
  top: 120px;
  left: 150px;
}

.project__text ul li {
  list-style-type: none;
  display: inline;
  padding: 0;
}

h3 > ul > li {
  display: inline;
  padding-left: 30px;
}

.indent {
  padding-left: 70px;
}

.project__body .bg__block {
  width: 100%;
  z-index: 2;
  padding: 5px 10px 5px 5px;
}

.ctn-b {
  padding: 5.1% 40px 40px 40px;
  height: 41vh;
  width: 41vh;
}

.project__text .date {
  left: -50px;
  position: absolute;
  top: 0;
}

.project__description .sm {
  font-size: 3.5rem;
}

/* for new */

.block {
  margin-top: 0;
  margin-bottom: 0;
  background-clip: padding-box;
  border: 5px solid transparent;
}

.block p {
  margin: 0;
  line-height: 5.1rem;
}

.block span {
  margin: 0;
  line-height: 6.5rem;
}

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.ctn-block {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.tr {
  color: #ee2524;
}

.roll {
  font-size: 2vh;
}

.tw {
  color: #f0f0f0;
}

.box {
  position: relative;
}

.bet {
  position: absolute;
  bottom: 0;
  right: 0;
}

.right {
  margin-left: 33.333333%;
}

.pt-6 {
  padding-top: 23.333333%;
}

.left {
  left: -50%;
}

ol {
  list-style: decimal;
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

.tw {
  color: #f0f0f0;
}

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

.t {
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
