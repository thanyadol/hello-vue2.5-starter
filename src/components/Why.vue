<template>
  <div class="why">
    <header class="project__header action | ctn">
      <div class="project__header__inner">
        <h2 v-bind:class="slide__title" v-bind:style="[baseStyles, overrideStyles]" class="project__title | ml-0 | m-mr-0 t tb slide__title" :data-i="5">{{ title }}</h2>
        <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">{{ sub }}</h3>
        </div>
      </div>
    </header>
    <div class="project__inner scrollarea" data-scrollbar id="why">
      <div class="scroll-content">
        <div class="project__content">
          <div class="project__body grey row" v-for="p in posts" :key="p.id">
            <section class="project__description red | ctn-content" v-bind:class="p.class">
              <h3 class="hidden-visually">Project</h3>
              <div class="project__text | mrg-2c | m-100 m-mr-0">
                <p class="title hls bold indent" v-bind:class="p.titleClass">{{ p.title }}</p>
                <img class="bg icon" v-bind:src="p.image" v-bind:class="p.imageClass" />
                <!-- <p class="sub bold" v-bind:class="p.subClass" >{{ p.sub }}</p> -->
                <p class="project__text mb-5c">
                  <span class="bold sub tw" v-bind:class="p.subClass">{{ p.bold }}</span>
                  <span class="sub" v-bind:class="p.subClass">{{ p.regular }}</span>
                </p>
                <ol>
                  <li class="ml-5 sub tw" v-bind:class="p.subClass" v-for="d in p.detail" :key="d">{{ d }}</li>
                </ol>
              </div>
            </section>
            <section class="project__description col box | ctn-content" v-bind:class="p.box">
              <div class="project__text | m-100 m-mr-0">
                <p class="title bold hls tw">{{ p.reddit }}</p>
                <p class="title bold hls tw right">{{ p.redditSub }}</p>
              </div>
            </section>
          </div>
        </div>
        <!-- <div class="project__body ctn grey more"> </div> -->
        <!-- should move to component -->
        <div class="grey">
          <div class="project__body row | ctn-content">
            <!-- <section class="project__description col-12">
              <div class="project__text |  mrg-2c | m-100 m-mr-0">
                <p class="title bold tr">{{ res.title }}</p>
                <p class="sub bold tb">{{ res.sub }}</p>
              </div>
            </section> -->
            <section class="project__description col-md-4 block | ctn-block" v-for="r in res.list" :key="r.id" v-bind:class="r.class">
              <div class="project__text |  mrg-2c | m-100 m-mr-0">
                <ul>
                  <li class="" v-for="i in r.imageList" :key="i">
                    <img class="bg__block" v-bind:src="i" />
                  </li>
                </ul>

                <!-- for black -->
                <p class="title sm bold tw" v-bind:class="r.titleClass">{{ r.title }}</p>

                <p class="sm tw" v-bind:class="r.subClass">{{ r.sub }}</p>
                <ul class="al-r">
                  <li class="blaz sub bold tw" v-for="d in r.bold" :key="d">{{ d }}</li>
                </ul>
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
          bold: 'At AddVentures,',
          regular:
            'we look for the investment and partnership opportunities in the areas of B2B, Industrial, and Enterprise. With the support from SCG and our goal to build the portfolio companies in highly related verticals, we believe we can offer substantial synergies in 2 dimensions',
          detail: [
            'Direct-synergybetween SCG & startup',
            'Cross-synergy among startups in the portfolio'
          ],
          class: 'col-md-8 red none',
          titleClass: 'tw indent vertical',
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
          regular:
            'With our resources and extensive business network along SCG’s business value chain, we believe that we can help startups scale fast through our proprietary resources whilst allowing access to 300+ SCG subsidiaries and 1,000+ business partners across the Southeast Asian region. We are flexible and open to various collaboration programs ranging from commercial partnerships, licensings, JVs, minority investments or M&A.',
          detail: [],
          class: 'col-md-6 grey none mt-5 pr-5c',
          titleClass: 'tr indent longterm',
          subClass: 'tb',
          box: 'red down',
          image: './static/img/partner.svg',
          imageClass: 'partner',
          reddit: 'Corperate &',
          redditSub: 'Startups'
        },
        {
          id: 2,
          title: 'Platform to scale up',
          sub: 'USD 18 Billion market capitalization more than 50,000 employee',
          bold: '',
          regular:
            'With our resources and extensive business network along SCG business value chain, We believe that we can help startups scale fast through our proprietary resources and access to 300+ SCG subsidiaries and 1,000+ business partners across Southeast Asia Region. We are flexible and open to various collaborationPrograms ranging from commercial partnership,Licensing, JV, minority investment or M&A.',
          detail: [],
          class: 'col-md-10 grey middle',
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
            year: '1994',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: ['SCG Cement - Building Materials', 'SCG Chemicals', 'SCG Packaging'],
            imageList: [
              './static/img/cement.svg',
              './static/img/chem.svg',
              './static/img/pack.svg'
            ],
            class: '',
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
            bu: ['SCG Cement - Building Materials', 'SCG Chemicals', 'SCG Packaging'],
            imageList: [
              './static/img/cement.svg',
              './static/img/chem.svg',
              './static/img/pack.svg'
            ],
            class: '',
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
            class: 'black clip',
            titleClass: 'fl-r',
            subClass: 'fl-r',
            boldClass: '',
            image: ''
          },
          {
            id: 4,
            country: 'Myanmar',
            year: '1994',
            bold: null,
            regular: '',
            title: null,
            sub: null,
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
            bold: [ 'Subsidiaries and', 'Associates' ],
            regular: '',
            title: '300+',
            sub: 'Companies',
            bu: [],
            titleClass: '',
            subClass: '',
            boldClass: 'fl-r',
            class: 'black clip',
            image: ''
          },
          {
            id: 5,
            country: 'Vietnam',
            year: '1992',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: ['SCG Cement - Building Materials'],
            imageList: ['./static/img/cement.svg'],
            class: '',
            image: ''
          },

          {
            id: 99,
            country: '',
            year: '',
            bold: null,
            regular: '',
            title: '50k <br/> employees',
            sub: 'Total Staffs',
            bu: [],
            titleClass: '',
            subClass: '',
            boldClass: 'fl-r',
            class: 'black clip',
            image: ''
          },
          {
            id: 98,
            country: 'Vietnam',
            year: '1992',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: ['SCG Cement - Building Materials'],
            imageList: ['./static/img/cement.svg'],
            class: '',
            image: ''
          },

          {
            id: 97,
            country: '',
            year: '',
            bold: [ 'ASEAN assets' ],
            regular: '',
            title: 'USD 4.3 Billion',
            sub: 'Companies',
            bu: [],
            titleClass: '',
            subClass: '',
            boldClass: 'fl-r',
            class: 'black clip',
            image: ''
          },

          {
            id: 7,
            country: 'Myanmar',
            year: '1994',
            bold: null,
            regular: '',
            title: null,
            sub: null,
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
            country: '',
            year: '',
            bold: '',
            regular: '',
            title: [],
            sub: [],
            bu: [],
            imageList: [
            ],
            class: '',
            image: ''
          },
          {
            id: 9,
            country: 'Vietnam',
            year: '1992',
            bold: null,
            regular: '',
            title: null,
            sub: null,
            bu: ['SCG Cement - Building Materials'],
            imageList: ['./static/img/cement.svg', './static/img/pack.svg'],
            class: '',
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
  }
}
</script>

<style scoped>
/* alider class*/

.slide__title__active {
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
}

/***/

.why .project__text .title.hls {
    line-height: 1;
}

.why .indent.longterm {
  transform: translateX(35%);
}

.why .indent.vertical {
  transform: translateX(9%);
}

ul.al-r
{
  text-align: right;
  margin-left: 8vw;
}

.blaz
{
  display: block !important;
}

.sub.hl-2
{
  line-height: 2.2;
}

.project__text .title.sm
{
  font-size: 3.47vw;
}

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

.why .middle {
  transform: translate3d(10%, 11%, 0);
  text-align: center;
}

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

.why .block.clip
{
    border: 60px solid transparent;
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

</style>
