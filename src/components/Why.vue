<template>
  <div class="why">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title"  class="project__title | mlg-1x col-md-12 | m-mr-0 t tb" data-i="5">{{ title }}</h2>
        <div  class="project__info | col-md-12 mlg-3x | m-ml-0 m-100 tb">
          <h3  v-bind:class="slide__sub"  class="project__intro">{{ sub }}</h3>
        </div>
      </div>
    </header>
    <div class="project__inner scrollarea" data-scrollbar id="why">
      <div class="scroll-content">
         <div class="project__content">
            <div class="project__body grey row" v-for="p in posts" :key="p.id">
                    <section class="project__description red | ctn" v-bind:class="p.class">
                        <h3 class="hidden-visually">Project</h3>
                        <div class="project__text | mrg-2c | m-100 m-mr-0">
                          <p class="title bold indent" v-bind:class="p.titleClass">{{ p.title }}</p>
                          <img class="bg" v-bind:src="p.image" v-bind:class="p.imageClass" />
                          <p class="sub bold" v-bind:class="p.subClass" >{{ p.sub }}</p>
                          <p class="project__text">
                            <span class="sub tw" v-bind:class="p.subClass">{{ p.regular }}</span>
                          </p>
                          <ol>
                              <li class="ml-5 sub tw" v-bind:class="p.subClass"  v-for="d in p.detail" :key="d">{{ d }}</li>
                          </ol>
                        </div>
                    </section>
                    <section class="project__description col box | ctn" v-bind:class="p.box">
                        <div class="project__text bet | mrg-2c | m-100 m-mr-0">
                          <span class="title bold tw mr-5">{{ p.bold }}</span>
                        </div>
                    </section>
                  </div>
              </div>
            <div class="project__body ctn grey more"> </div>
            <!-- should move to component -->
            <div class="project__content shift grey">
            <div class="project__body ctn shift row | ctn-o">
            <section class="project__description col-12">
              <div class="project__text |  mrg-2c | m-100 m-mr-0">
                <p class="title bold tr">{{ res.title }}</p>
                <p class="sub bold tb">{{ res.sub }}</p>
              </div>
            </section>
              <section class="project__description col-md-4 block | ctn-bk"  v-for="r in res.list" :key="r.id" v-bind:class="r.class">
                  <div class="project__text |  mrg-2c | m-100 m-mr-0">
                    <ul>
                        <li class="" v-for="i in r.imageList" :key="i">
                           <img class="bg__block" v-bind:src="i" />
                        </li>
                    </ul>
                    <ul>
                        <li v-for="d in r.title" :key="d"><p class="title bold tb ll">{{ d }}</p></li>
                    </ul>
                    <p class="title bold tb">{{ r.country }}</p>
                    <p class="sub bold tb">{{ r.year }}</p>
                    <ul>
                        <li class="roll tb" v-for="d in r.bu" :key="d">{{ d }}</li>
                    </ul>
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
export default {
  name: 'Why',
  data () {
    return {
      title: 'Why Work With Us',
      sub: 'Our resources and network',
      slide__title: false,
      slide__sub: false,
      posts: [
        {
          id: 1,
          title: 'Vertical Focus',
          sub: 'More Than Just a Capital Partner',
          bold: '',
          regular:
            'At AddVentures, we look for the investment and partnership opportunities in the areas of B2B, Industrial, and Enterprise. With the support from SCG and our goal to build the portfolio companies in highly related verticals, we believe we can offer substantial synergies in 2 dimensions',
          detail: [
            'Direct-synergybetween SCG & startup',
            'Cross-synergy among startups in the portfolio'
          ],
          class: 'col-md-8 red none',
          titleClass: 'tw',
          box: '',
          image: './static/img/vertical.svg',
          imageClass: 'vertical'
        },
        {
          id: 2,
          title: 'Platform to scale up',
          sub: 'USD 18 Billion market capitalization more than 50,000 employee',
          bold: '',
          regular:
            'With our resources and extensive business network along SCG business value chain, We believe that we can help startups scale fast through our proprietary resources and access to 300+ SCG subsidiaries and 1,000+ business partners across Southeast Asia Region. We are flexible and open to various collaborationPrograms ranging from commercial partnership,Licensing, JV, minority investment or M&A.',
          detail: [],
          class: 'col-md-8 grey right none',
          titleClass: 'tr',
          subClass: 'tb',
          box: '',
          image: './static/img/platform.svg',
          imageClass: 'platform'
        },
        {
          id: 3,
          title: 'Long term <br/> partnerships',
          sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          bold: 'Corperate & Startups',
          regular:
            'As a strategic investor, we do not only provide financing but we also commit to long - term success of startups in our portfolio. Unlike traditional VC funds, we do not rush for short term financial result and investment exit. with this long term support, startups can focus on building a great company to reach their full potential fastest possible.',
          detail: [],
          class: 'col-md-6 grey none',
          titleClass: 'tr',
          subClass: 'tb',
          box: 'red mr-91',
          image: './static/img/partner.svg',
          imageClass: 'partner'
        }
      ],
      res: {
        title: 'Our resources and network',
        sub: 'USD 18 Billion market capitalization more than 50,000 employee',
        list: [

          {
            id: 3,
            country: '',
            year: '',
            bold: '',
            regular: '',
            title: ['18 Billions', '50k Employee'],
            sub: ['Market capitalizayion', 'More than'],
            bu: [],
            class: 'red shift',
            image: ''
          },
          {
            id: 1,
            country: 'Myanmar',
            year: '1994',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: ['SCG Cement - Building Materials'],
            imageList: ['./static/img/cement.svg'],
            class: '',
            image: ''
          },
          {
            id: 2,
            country: 'Vietnam',
            year: '1992',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: ['SCG Cement - Building Materials'],
            imageList: [
              './static/img/cement.svg',
              './static/img/chem.svg',
              './static/img/pack.svg'
            ],
            class: '',
            image: ''
          },
          {
            id: 4,
            country: 'Myanmar',
            year: '1994',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: ['SCG Cement - Building Materials'],
            imageList: [
              './static/img/cement.svg',
              './static/img/chem.svg',
              './static/img/pack.svg'
            ],
            class: '',
            image: ''
          },
          {
            id: 6,
            country: '',
            year: '',
            bold: '',
            regular: '',
            title: ['What we good at industrue expert'],
            sub: ['Market capitalizayion', 'More than'],
            class: 'red shift',
            image: ''
          },
          {
            id: 5,
            country: 'Vietnam',
            year: '1992',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: ['SCG Cement - Building Materials'],
            imageList: ['./static/img/cement.svg'],
            class: '',
            image: ''
          },

          {
            id: 7,
            country: 'Myanmar',
            year: '1994',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: ['SCG Cement - Building Materials'],
            imageList: [
              './static/img/cement.svg',
              './static/img/chem.svg',
              './static/img/pack.svg'
            ],
            class: '',
            image: ''
          },
          {
            id: 8,
            country: 'Vietnam',
            year: '1992',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: ['SCG Cement - Building Materials'],
            imageList: [
              './static/img/cement.svg',
              './static/img/chem.svg',
              './static/img/pack.svg'
            ],
            class: '',
            image: ''
          },
          {
            id: 9,
            country: 'Vietnam',
            year: '1992',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: ['SCG Cement - Building Materials'],
            imageList: ['./static/img/cement.svg', './static/img/pack.svg'],
            class: '',
            image: ''
          }
        ]
      },
      prev: { title: 'How We Invest', url: 'howweinvest' },
      next: { title: 'Our Partners', url: 'ourpartners' }
    }
  },
  beforeMount () {
    var scrolled = 0
    var vm = this

    window.addEventListener('wheel', function (event) {
      var div = document.getElementById('why')
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
.slide__title__active {
  transform: translate3d(-166px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__active {
  transform: translate3d(-506px, 0px, 0px);
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
          transform: translate3d(-23vw, 0px, 0px) !important;
        }
        .slide__sub__active {
          transform: translate3d(-20vw, 0px, 0px) !important;
        }
  }

/***/

.more {
  height: 900px;
}

.shift {
  margin-top: -850px;
}

.ctn {
  padding-left: 9.1%;
  padding-right: 9.1%;
}

/* cropping box */
.mr-91 {
  margin-right: 9.1%;
}

.mlg-2 {
  margin-left: 20.6342857143%;
}

.project__body .bg {
  position: absolute;
  width: 15%;
  z-index: 2;
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

.indent {
  padding-left: 70px;
}

.project__body .bg__block {
  position: relative;
  width: 4vw;
  z-index: 2;
  padding: 5px 10px 5px 5px;
}

/* for new */

.block {
  margin-top: 20px;
  margin-bottom: 20px;
  background-clip: padding-box;
  border: 10px solid transparent;
}

.block p {
  margin: 0;
  line-height: 4.1rem;
}

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.ctn-bk {
  padding-left: 5.1%;
  padding-right: 5.1%;
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

.project__description {
  padding-bottom: 30px;
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
