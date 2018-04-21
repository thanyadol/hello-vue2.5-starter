<template>
  <div class="why">
    <header class="project__header action | ctn">
      <div class="project__header__inner">
          <div class="al-c">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title fill mx-auto">
            <fraction :index="index"> </fraction>
            <span>{{ title }}</span>
            </h2>
        </div>  <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">{{ sub }}</h3>
        </div>
      </div>
    </header>
    <div class="project__inner scrollarea" data-scrollbar id="why">
      <div class="scroll-content">
        <div class="project__content">
          <div class="project__body grey row" v-for="p in posts" :key="p.id">
            <section class="project__description  | ctn-content" v-bind:class="p.class">
              <h3 class="hidden-visually">Project</h3>
              <div class="project__text col | mrg-2c | m-100 m-mr-0">
                <p class="title  bold indent" v-bind:class="p.titleClass">{{ p.title }}</p>
                <img class="bg icon" v-bind:src="p.image" v-bind:class="p.imageClass" />
                <!-- <p class="sub bold" v-bind:class="p.subClass" >{{ p.sub }}</p> -->
                <div class="project__text">
                  <span class="bold sub tw" v-bind:class="p.subClass">{{ p.bold }}</span>
                  <span class="sub" v-bind:class="p.subClass">{{ p.regular }}</span>
                </div>
                <!-- <ul>
                    <li class="ml-5 sub tw" v-bind:class="p.subClass" v-for="d in p.detail" :key="d">{{ d }}</li>
                  </ul> -->
              </div>
            </section>
            <section class="project__description box | ctn-content" v-bind:class="p.box">
              <div class="project__text | m-100 m-mr-0">

                <p class="title bold tw redd">{{ p.reddit }}</p>
                <p class="title bold tw right">{{ p.redditSub }}</p>

              </div>
            </section>
          </div>
        </div>
        <!-- <div class="project__body ctn grey more"> </div> -->
        <!-- should move to component -->
        <div class="grey">
          <div class="project__body row pb-0 | ctn-content blog">
            <!-- <section class="project__description col-12">
                <div class="project__text |  mrg-2c | m-100 m-mr-0">
                  <p class="title bold tr">{{ res.title }}</p>
                  <p class="sub bold tb">{{ res.sub }}</p>
                </div>
              </section> -->
            <section class="project__description col-md-4 block | ctn-block" v-for="r in res.list" :key="r.id" v-bind:class="r.boxClass">
              <div class="project__text |  mrg-2c | m-100 m-mr-0">
                <ul class="bus">
                  <li class="" v-for="i in r.imageList" :key="i">
                    <img class="bg__block" v-bind:src="i" />
                  </li>
                </ul>

                <!-- for black -->
                <div class="black" v-show="r.type == 'black'">
                  <p class="sm tw" v-bind:class="r.beforeClass">{{ r.before }}</p>
                  <p class="title sm bold tw" v-bind:class="r.titleClass">{{ r.title }}</p>

                  <p class="sm tw" v-bind:class="r.subClass">{{ r.sub }}</p>
                  <ul class="al-r">
                    <li class="blaz sub bold tw" v-for="d in r.bold" :key="d">{{ d }}</li>
                  </ul>
                </div>

                <!-- -->

                <p class="title sm bold tb">{{ r.country }}</p>
                <p class="sub hl-2 bold tb">{{ r.year }}</p>
                <ul>
                  <li class="roll tb" v-for="d in r.bu" :key="d">{{ d }}</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div class="project__body p-0 m-0">
          <section class="project__description py-0 m-0 | ctn grey">
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
      sub: 'AddVentures Value Add',
      index: '05',
      slide__title: false,
      slide__sub: false,
      posts: [
        {
          id: 1,
          title: 'Vertical Focus',
          sub: 'More Than Just a Capital Partner',
          bold: 'At AddVentures,',
          regular:
            'At AddVentures, we look for investment and partnership opportunities in the areas of B2B, Industrial, and Enterprise. With the support from SCG, our goal is to build a portfolio of companies in highly related verticals. We believe we can offer substantial synergies in 2 dimensions: (1) Direct-synergy between SCG & startups and (2) Cross-synergy among startups in the portfolio.',

          class: 'col red vertical',
          titleClass: 'tw indent vertical hls',
          box: '',
          image: './static/img/vertical.svg',
          imageClass: 'vertical',
          subClass: 'tw'
        },
        {
          id: 3,
          title: 'Long term partnerships',
          sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          bold: '',
          detail: [],
          regular:
            'With our resources and extensive business network along SCG business value chain, We believe that we can help startups scale fast through our proprietary resources and access to 300+ SCG subsidiaries and 1,000+ business partners across Southeast Asia Region. We are flexible and open to various collaborationPrograms ranging from commercial partnership,Licensing, JV, minority investment or M&A.',

          class: 'col grey none longterm',
          titleClass: 'tr indent longterm',
          subClass: 'tb',
          box: 'red down col',
          image: './static/img/partner.svg',
          imageClass: 'partner',
          reddit: 'Corperate and Startups'
        },
        {
          id: 2,
          title: 'Platform to scale up',
          sub: 'USD 18 Billion market capitalization more than 50,000 employee',
          bold: '',

          regular:
            'As a strategic investor, we do not only provide financing but we also will commit to the long-term success of startups in our portfolio Unlike traditionalVC funds, we do not rush for short term financial result and investment exit.With this long term support, startups can focus on building a great company to reach their fullpotential fastest possible.',

          detail: [],
          class: 'col-12 grey middle hls',
          titleClass: 'tr mb-0',
          subClass: 'tb',
          box: '',
          image: './static/img/platform.svg',
          imageClass: 'platform'
        }
      ],
      res: {
        title: 'Our resources and network',
        sub: 'USD 18 Billion market capitalization more than 50,000 employee',
        list: [
          {
            id: 1,
            country: 'Thailand',
            year: '1931',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: [
              'SCG Cement - Building Materials',
              'SCG Chemicals',
              'SCG Packaging'
            ],
            imageList: [
              './static/img/cement.png',
              './static/img/chem.png',
              './static/img/pack.png'
            ],
            boxClass: 'center',
            image: ''
          },
          {
            id: 2,
            country: 'Vietnam',
            year: '1992',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: [
              'SCG Cement - Building Materials',
              'SCG Chemicals',
              'SCG Packaging'
            ],
            imageList: [
              './static/img/cement.png',
              './static/img/chem.png',
              './static/img/pack.png'
            ],
            boxClass: 'center',
            image: ''
          },
          {
            id: 3,
            country: '',
            year: '',
            bold: '',
            regular: '',
            title: 'USD 18 Billion',
            sub: 'Market capitalization',
            bu: [],
            boxClass: 'left',
            titleClass: 'f-50 al-r',
            subClass: 'f-16 al-r',
            boldClass: '',
            image: '',
            type: 'black'
          },
          {
            id: 4,
            country: 'Laos',
            year: '1992',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: ['SCG Cement - Building Materials'],
            imageList: ['./static/img/cement.png'],
            boxClass: 'center',
            image: ''
          },
          {
            id: 6,
            country: '',
            year: '',
            bold: ['Subsidiaries and Associates'],
            regular: '',
            title: '300+',
            sub: 'Companies',
            bu: [],
            titleClass: 'f-50 al-l',
            subClass: 'f-16 al-l',
            boldClass: 'fl-r',
            boxClass: 'center',
            image: '',
            type: 'black'
          },
          {
            id: 5,
            country: 'Myanmar',
            year: '1994',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: ['SCG Cement - Building Materials'],
            imageList: ['./static/img/cement.png'],
            boxClass: 'center',
            image: ''
          },

          {
            id: 99,
            country: '',
            year: '',
            bold: null,
            regular: '',
            title: '50k  employees',
            before: 'Total Staffs',
            bu: [],
            titleClass: 'f-50 al-l',
            beforeClass: 'f-16 al-l',
            boldClass: 'fl-r',
            boxClass: 'right',
            image: '',
            type: 'black'
          },
          {
            id: 98,
            country: 'Indonesia',
            year: '1995',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: [
              'SCG Cement - Building Materials',
              'SCG Chemicals',
              'SCG Packaging'
            ],
            imageList: [
              './static/img/cement.png',
              './static/img/chem.png',
              './static/img/pack.png'
            ],
            boxClass: 'center',
            image: ''
          },

          {
            id: 97,
            country: '',
            year: '',
            bold: ['ASEAN assets'],
            regular: '',
            title: 'USD 4.3 Billion',
            sub: 'Companies',
            bu: [],
            titleClass: 'f-50 al-l',
            subClass: 'f-16 al-l',
            boldClass: 'fl-l',
            boxClass: 'left',
            image: '',
            type: 'black'
          },

          {
            id: 7,
            country: 'Philippines',
            year: '1994',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: ['SCG Cement - Building Materials', 'SCG Packaging'],
            imageList: ['./static/img/cement.svg', './static/img/pack.svg'],
            boxClass: 'center',
            image: ''
          },
          {
            id: 8,
            country: '',
            year: '',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: [],
            imageList: [],
            boxClass: 'center',
            image: ''
          },
          {
            id: 9,
            country: 'Malaysia & Singapore',
            year: '1996',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: [
              'SCG Cement - Building Materials',
              'SCG Chemicals',
              'SCG Packaging'
            ],
            imageList: [
              './static/img/cement.svg',
              './static/img/chem.svg',
              './static/img/pack.svg'
            ],
            boxClass: 'center',
            image: ''
          }
        ]
      },
      prev: {
        title: 'How We Invest',
        url: 'howweinvest'
      },
      next: {
        title: 'Our Partners',
        url: 'ourpartners'
      }
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
  },
  destroyed () {
    var vm = this
    vm.$parent.show = false
  }
}
</script>

<style scoped>
/* alider class*/

/* .slide__title__active {
    transform: translate3d(-100px, 0px, 0px);
    transition-duration: 1600ms;
  }

  .slide__sub__active {
    transform: translate3d(-470px, 0px, 0px);
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
  } */

/***/

.why .project__text .title.hls {
  line-height: 1;
}

/* .why .indent.vertical {
    transform: translateX(9%);
  } */

ul.al-r {
  text-align: right;
  margin-left: 8vw;
}

.blaz {
  display: block !important;
}

.sub.hl-2 {
  line-height: 2.2;
}

/* .project__text .title.sm
  {
    font-size: 3.47vw;
  } */

.more {
  height: 20px;
}

.down {
  /*transform: translateY(60%);*/
  border-top: solid #f0f0f0 60vh !important;
}

.pr-5c {
  padding-right: 6.1%;
}

.mb-5c {
  margin-bottom: 50px;
}

/* .why .middle {
    transform: translate3d(10%, 11%, 0);
    text-align: center;
  } */

.why .project__body .bg {
  position: absolute;
  z-index: 2;
}

.why .icon.platform {
  top: 0;
  left: 693px;
  width: 13.5vw;
}

.why .icon.vertical {
  top: 80px;
  width: 5.5vw;
  left: 170px;
}

.why .icon.partner {
  top: 120px;
  width: 5.5vw;
  left: 220px;
}

.why .project__text ul li {
  list-style-type: none;
  display: inline;
  padding: 0;
}

.why .project__text ul li.roll {
  font-size: 2vh;
  display: block !important;
}

.project__body .bg__block {
  position: relative;
  width: 3.5vw;
  z-index: 2;
  padding: 5px 10px 5px 5px;
}

/* for new */

.why .block {
  margin-top: 20px;
  margin-bottom: 20px;
  background-clip: padding-box;
  /* border: 10px solid transparent; */
}

.why .block.clip {
  /* border: 60px solid transparent; */
  border-left: 0;
  padding-left: 25px;
  padding-right: 25px;
}

.why .block p {
  margin: 0;
  line-height: 4.1rem;
}

ol {
  list-style: decimal;
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
  .why .indent.longterm {
    text-align: right;
    line-height: 1.29;
    transform: translateX(120px);
    margin-bottom: 25px !important;
  }
  .why .ctn-content.focus {
    padding-right: 151px;
  }
  .why .project__text .title.hls {
    margin-bottom: 30px;
    margin-left: 98px;
    margin-bottom: 70px;
  }
  .why .icon.vertical {
    top: 50px;
    width: 75px;
    left: 2px;
  }
  .why .pr-5c {
    padding-right: 40px;
    padding-top: 0;
  }
  .why .icon.partner {
    top: 46px;
    width: 90px;
    left: 0;
  }
  .why .down {
    transform: translateY(125%);
    /* border-top: solid #f0f0f0 350px !important; */
    /* border-left: solid #f0f0f0 158px !important; */
    padding: 134px 98px 69px 74px;
    /* padding-top: 123.5px;
      padding-left: 0;
      /* text-align: right; */
    /*padding-right: 150px; */
    height: 360px;
    /* direction: rtl; */
    /* height: 590px; */
    /* padding: 0; */
    border: none !important;
  }
  .why .icon.platform {
    top: -43px;
    left: 453px;
    width: 215px;
  }
  .why .middle {
    text-align: center;
    padding-top: 106px;
    padding-left: 342px;
    padding-bottom: 0;
    padding-right: 342px;
  }
  .block p.title {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: normal;
  }
  .block p.sub {
    font-size: 30px;
    font-weight: bold;
    /* line-height: 2.33; */
    letter-spacing: normal;
  }
  .block p.roll {
    font-size: 18px;
    /* line-height: 1.44; */
  }
  .block .f-50 {
    font-size: 50px !important;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.1 !important;
    letter-spacing: normal;
  }
  .block .f-16 {
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.1 !important;
    letter-spacing: 2px;
  }
  .why .block.clip {
    /* border: 60px solid transparent; */
    border-left: 0;
    padding: 18px 36px 18px 36px;
    height: 200px;
    margin: 0 !important;
  }
  .why .ctn-content.blog {
    padding-left: 140px;
    padding-right: 140px;
    /* justify-content: left; */
    display: flex;
    /* content: close-quote; */
  }
  .why .block {
    margin: 0;
    padding-top: 0;
    padding-bottom: 84px;
    padding-bottom: 60px;
    /* margin-top: 20px; */
    /* margin-bottom: 20px; */
    background-clip: padding-box;
    /* border: 10px solid transparent; */
  }
  .why .col.vertical {
    /* height: 550px; */
    width: 900px;
    padding-right: 109px;
    padding-left: 221px;
    padding-bottom: 115px;
  }
  .why .col.longterm {
    /* height: 550px; */
    width: 900px;
    padding-right: 192px;
    padding-left: 221px;
    padding-bottom: 115px;
    padding-top: 66px;
  }
  .why .title.redd {
    font-size: 70px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
  }
  .project__body .bg__block {
    position: relative;
    width: 55px;
    z-index: 2;
    padding: 5px 10px 5px 5px;
  }
  .why .project__text ul li.roll {
    font-size: 18px;
    line-height: 1.44;
    display: block !important;
  }
  .why ul.bus {
    padding-top: 5px;
  }
  .why .block.clip {
    /* border-top: 10px solid #f0f0f0;
      border-bottom: 10px solid #f0f0f0; */
  }
  .why .block.left {
    display: flex;
    justify-content: flex-start;
  }
  .why .block.right {
    display: flex;
    justify-content: flex-end;
  }
  .why .block.center {
    display: flex;
    justify-content: center;
  }
  .why .black {
    padding: 25px 36px 0 26px;
    background-color: black;
    height: 200px;
    width: 320px;
  }

  .why .fill {
  width: max-content
}
}
</style>
