<template>
  <div class="menu">

    <div class="top fixed col-12 red">
      <header id="header" class="">
        <h1 class="header__title" v-show="true">
          <img class="logo__sm" v-bind:src="logo" />
          <router-link to="/">
          </router-link>
        </h1>
         <div class="nav_wrapper">
          <nave flex="menu"></nave>
        </div>
      </header>
    </div>

    <div class="project__inner red scrollarea" data-scrollbar id="menu">

      <div class="scroll-content">

            <section class="project__description py-0 red">
              <h3 class="hidden-visually">Menu</h3>
              <div class="project__text | col-md-12 mx-auto pt-130  | m-100 m-mr-0">
                <ol class="page">
                  <li v-for="l in list" :key="l.id">
                    <p>
                      <span class="sub site index"> {{ l.index }} </span>
                      <router-link :to="l.url"> <span class="site bold tw"> {{ l.title }} </span> </router-link>
                    </p>
                  </li>
                </ol>
              </div>
            </section>

            <section class="project__description red row mt-0 pt-0 pb-0 mb-0  mx-0 px-0 | ctn">
              <div class="project__text | pt-0 mx-0 | footy ctn c">
                <div class="page | m-100 m-ml-0">
                     <h3 class="bold sub"> {{ last }}</h3>
                  <h3 class="bold sub">&copy; {{ foot }}</h3>
                </div>
              </div>
            </section>

      </div>
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
      foot: 'Copyright 2018 AddVentures',
      logo: './static/img/logow.png',
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
    var vm = this
    vm.$parent.show = true

    /* var scrollbarOptions = {
                    renderByPixels: true,
                    continuousScrolling: true
                  } */

    // var scrollOffset = 950

    // var el = document.getElementById('menu')
    // const s = scroll.init(el)
    // s.scrollTop = scrollOffset

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

    // var scrollOffset = 950

    window.addEventListener('wheel', function (event) {
      // event.preventDefault()
      // event.returnValue = false
      // return false

      // var div = document.getElementById('scrollbar')
      // const scrollbar = scroll.init(div)
      var el = document.getElementById('menu')
      // const s =
      scroll.get(el)

      // s.scrollTop = 750
      // s.destroy()
      // if (s.scrollTop < scrollOffset) {
      //   s.scrollTop = scrollOffset
      // }

      // console.log(s.scrollTop)
    })
  },
  destroyed () {
    var vm = this
    vm.$parent.show = false
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

  .project__body {
    border-left: solid 0 #ffff;
    border-right: solid 0 #ffff;
  }

a:hover {
  color: unset;
  text-decoration: none;
}

.ocp-5 {
  opacity: 0.5;
}

.index {
  margin-right: 70px;
}

.menu .sm {
  font-size: 1.66vw;
}

/* .menu .page {
  margin-left: 50%;
  transform: translateX(-25%);
}

.menu .feet
{
    transform: translateX(40%);
} */

.scrollarea {
  height: 100vh;
  display: block;
}

@media (min-width: 1200px) {
  /* .desk {
        height: 150vh;
        background-color: #f0f0f0;
      }

      .desk header
      {
        background-color: white;
      }*/
  .menu .top.fixed {
    display: block;
    position: absolute;
    height: 130px;
    z-index: 100;
  }

.menu .site {
  height: 57px;
  line-height: 57px;
  font-size: 34px;
}

.menu .site.index
{
  height: 41px;
  font-size: 24px;
   line-height: 41px;
   margin-right: 35px;
}

  .pt-130 {

    padding-top: 130px;
    padding-left: 567px;
    padding-bottom: 18px;
  }

  .menu .logo__sm
  {
    width: 180px;
  height: 50.8px;
  object-fit: contain;
  }

  .menu .footy .sub
  {
  font-size: 20px;
line-height: 1.25;
opacity: 0.5;
  }

  .menu .ctn .c
  {
        padding-left: 630px;
    padding-bottom: 35px;
  }

}
</style>
