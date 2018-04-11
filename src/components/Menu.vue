<template>
    <div class="menu">

        <div class="project__inner scrollarea" data-scrollbar id="menu" ref="scrolled">
            <div class="scroll-content">
                <div class="project__content">
                    <div class="project__body red">
                        <section class="project__description red col pb-0 mb-0">
                            <h3 class="hidden-visually">Menu</h3>
                            <div class="project__text | col-12 mx-auto ctn | m-100 m-mr-0">
                                <ol class="page mlg-3">
                                    <li v-for="l in list" :key="l.id">
                                        <p>
                                            <span class="sub sm index"> {{ l.index }} </span>
                                            <router-link :to="l.url"> <span class="site bold tw hoverCSS3"> {{ l.title }} </span> </router-link>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </section>

                        <section class="project__description red row mt-0 pt-0 pb-0 mb-0 shift">
                            <div class="project__text | col-12 ctn pt-0 mt-0">
                                <div class="mlg-3 | m-100 m-ml-0 sub tw ocp-5">
                                    <p class="sm">{{ last }}</p>
                                    <h3 class="bold">&copy; {{ foot }}</h3>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <!-- end scroll content -->
            <canvas class="overscroll-glow" style="display: none; pointer-events: none;"></canvas>
        </div>
    </div>
</template>

<script>
import scroll from 'smooth-scrollbar'
// import { isNullOrUndefined } from 'util'
// import Vue from 'vue'
export default {
  name: 'Menu',
  // el: '#deck',
  data () {
    return {
      title: '',
      foot: 'Copyright 2018 AddVenture',
      last: 'We are partnering with startups and transform industries together',
      list: [
        {
          id: 1,
          index: '01',
          title: 'Who we are',
          url: 'whoweare'
        },
        {
          id: 2,
          index: '02',
          title: 'What we invest',
          url: 'whatweinvest'
        },
        {
          id: 3,
          index: '03',
          title: 'Where we invest',
          url: 'whereweinvest'
        },
        {
          id: 5,
          index: '04',
          title: 'How we invest',
          url: 'howweinvest'
        },
        {
          id: 6,
          index: '05',
          title: 'Why work with us',
          url: 'whyworkwithus'
        },
        {
          id: 7,
          index: '06',
          title: 'Our partners',
          url: 'ourpartners'
        },
        {
          id: 8,
          index: '07',
          title: 'Insign',
          url: 'insign'
        },
        {
          id: 9,
          index: '08',
          title: 'The team',
          url: 'theteam'
        },
        {
          id: 10,
          index: '09',
          title: 'Contact',
          url: 'contact'
        }
      ]
    }
  },
  mounted: function () {
    // var vm = this

    /* var scrollbarOptions = {
                  renderByPixels: true,
                  continuousScrolling: true
                } */

    var el = document.getElementById('menu')
    const s = scroll.init(el)
    s.scrollTop = 900

    // s.destroy()
    // s.setPosition(900, 900)
    //  s.limit = { x: 200, y: 750 }

    // s.addMomentum(100, 750)

    /* scroll.scrollIntoView(el, {
                  // offsetLeft: 34,
                  // offsetBottom: 12,
                  // alignToTop: true,
                  onlyScrollIfNeeded: true
                }) */

    console.log('i was mounthed')
  },
  // life cycle of component
  created () {},
  beforeMount () {
    // var vm = this
    // const div1 = this.$refs['scrolled'] // querySelector('div#scrolled') // vm.$refs.scrolled
    // var parent = new Vue({ el: 'div.deck' })
    /* var el = document.getElementById('scrolled')
                const s = scroll.init(el)
                if (s.scrollTop > 50) {

                }

                console.log(s) */
    // var scrolled = 0
    // var vm = this

    window.addEventListener('wheel', function (event) {
      // event.preventDefault()
      // event.returnValue = false
      // return false

      // var div = document.getElementById('scrollbar')
      // const scrollbar = scroll.init(div)
      var el = document.getElementById('menu')
      const s = scroll.get(el)

      // s.scrollTop = 750
      // s.destroy()
      if (s.scrollTop < 900) {
        s.scrollTop = 900
      }

      // console.log(s.scrollTop)
    })
  },
  destroyed () {
    // var el = document.getElementById('deck')
    // const s = scroll.get(el)
    // s.destroy()
  }
}
</script>

<style scoped>
.hoverCSS3 {
  display: inline-block;
  position: relative;
  padding-bottom: 10px;
  font-size: 30px;
}

.hoverCSS3:after {
  content: "";
  position: absolute;
  background-color: #f0f0f0;
  height: 3px;
  width: 0;
  top: 100%;
  left: 0;
  display: inline-block;
  opacity: 0;
  -webkit-transition: opacity 0.4s ease-out, width 0.4s ease-out;
  -moz-transition: opacity 0.4s ease-out, width 0.4s ease-out;
  -o-transition: opacity 0.4s ease-out, width 0.4s ease-out;
  transition: opacity 0.4s ease-out, width 0.4s ease-out;
}

.hoverCSS3:before {
  /* content: "*";
        width: 22px;
        height: 22px;
        display: inline;
        float: right;
        margin-left: 8px;
        margin-top: 8px; */
  -webkit-transition: -webkit-transform 0.4s ease-out;
  -moz-transition: transform 0.4s ease-out;
  -o-transition: transform 0.4s ease-out;
  transition: transform 0.4s ease-out, -ms-transform 0.4s ease-out;
}

.hoverCSS3:hover:before {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  /* IE 9 */
  -webkit-transform: rotate(180deg);
  /* Opera, Chrome, and Safari */
}

.hoverCSS3:hover:after {
  opacity: 1;
  width: 100%;
}

/***/

a:hover {
  color: unset;
  text-decoration: underline;
}

.ocp-5 {
  opacity: 0.5;
}

.index {
  margin-right: 70px;
}

.sm {
  font-size: smaller;
}

.site {
  font-size: 5vh;
}

.translate h3,
.translate p {
  margin-bottom: 20px;
}

.translate p {
  margin-bottom: 70px;
}

.mt-ne-1 {
  margin-top: -200px;
}

.project__body .bg__form {
  position: absolute;
  width: 10%;
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

.ctn-r {
  padding-left: 9.1%;
  padding-right: 0;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.ctn-l {
  padding-left: 0;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.ctn {
  padding-left: 9.1%;
  padding-right: 9.1%;
}

.red {
  background-color: #ee2524;
}

.tr {
  color: #ee2524;
}

.white {
  background-color: #ffff;
}

.grey {
  background-color: #f0f0f0;
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

.project__body ul li {
  position: relative;
  font-size: 1.7vw;
}

.project__body ul {
  list-style-type: square;
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

.project__image {
  /*top: -180px;*/
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
