<template>
  <div class="insign">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title"  class="project__title | m-mr-0 t tb" data-i="7">{{ title }}</h2>
        <div class="project__info | col-12 | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub"  class="project__intro">
              <ul>
                  <li v-for="s in subs" :key="s" >{{ s }}</li>
              </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="insign">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body">
              <section class="project__description red row | ctn">
                  <h3 class="hidden-visually">Blog</h3>
                  <div class="project__text | col-md-6 mrg-2 ml-0 mr-0 pr-0 pl-0 | m-100 m-mr-0">
                    <p class="title bold tw">{{ post.title }}</p>
                    <p class="sub bold tw">{{ post.sub }}</p>
                  </div>
              </section>

             <section class="project__description grey row | ctn-b">
                  <h3 class="hidden-visually">Venture</h3>
                  <div class="project__description | col-md-12 block | ctn-block" v-for="r in post.blogs" :key="r.id" v-bind:class="r.class">

                    <div class="project__text | col-md-6 | m-100 m-mr-0">
                      <img class="bg__block" v-bind:src="r.image" />
                        <div class="date">
                          <p class="title tb bold t-lg">{{ r.date | moment }}</p>
                          <p class="title tr bold t-lg">{{ r.date.getDate() }}</p>
                        </div>
                    </div>

                    <div class="project__text | col-md-6 ml-3 | m-100 m-mr-0">
                      <p class="title tb bold">{{ r.title }}</p>
                      <p class="sub tb bold at">{{ r.author }}</p>
                      <p class="sub tb sm">View 320K</p>
                      <hr class="separate">
                      <router-link to="">
                        <span class="read sub tb bold"> Read more </span>
                        <img class="arrow" v-bind:src="arrow" />
                      </router-link>
                    </div>

                  </div>
              </section>

            </div>
        </div>

         <div class="project__body pt-0">
            <section class="project__description p-0 m-0 | ctn grey">
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
  name: 'Insign',
  data () {
    return {
      title: 'Insign',
      subs: ['Be in the know with AddVenture'],
      arrow: './static/img/next.svg',
      post: {
        title: 'Insign',
        sub: 'Be in the know with AddVenture',
        blogs: [
          {
            id: 1,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 2,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 3,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 4,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 5,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          }
        ]
      },
      slide__title: false,
      slide__sub: false,
      prev: { title: 'Our Partners', url: 'ourpartners' },
      next: { title: 'The Team', url: 'theteam' }
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
      var div = document.getElementById('insign')
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
  transform: translate3d(-516px, 0px, 0px);
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

  @media (max-width: 575.98px) {
      .slide__title__active {
          transform: translate3d(-31vw, 0px, 0px) !important;
        }
        .slide__sub__active {
          transform: translate3d(-22vw, 0px, 0px) !important;
        }
  }

/***/

.mlg-25 {
  padding-left: 35.43333%;
}

.t-lg {
  font-size: 9vh;
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

hr.separate {
  background-color: #0f0f0f;
  margin-top: 20px;
  margin-bottom: 20px;
}

.insign .arrow {
  width: 10vh;
  padding-top: 10px;
  margin-left: 50px;
  position: absolute;
}

/* cropping box */
.mr-91 {
  margin-right: 9.1%;
}

.mlg-2 {
  margin-left: 20.6342857143%;
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
  padding-left: 12.1%;
  padding-right: 12.1%;
}

.project__text .date {
  left: -50px;
  position: absolute;
  top: 0;
}

/* for new */

.block {
  margin-top: 0;
  margin-bottom: 0;
  background-clip: padding-box;
  border: 25px solid transparent;
}

.block p {
  margin: 0;
  line-height: 5.1rem;
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
