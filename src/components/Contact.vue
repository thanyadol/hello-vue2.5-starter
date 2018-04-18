<template>
  <div class="contact">
            <header class="project__header action | ctn">
      <div class="project__header__inner">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title" data-i="9">{{ title }}</h2>
          <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
              <ul>
                  <li v-for="s in subs" :key="s" >{{ s }}</li>
              </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="contact">
      <div class="scroll-content">

        <div class="project__content">
          <div class="project__body row grey">
            <section class="project__description col-md-8 red row | ctn-content">
              <h3 class="hidden-visually">Contact</h3>
              <div class="project__text | m-100 m-mr-0">
                <p class="title bold tw">{{ post.title }}</p>
                <p class="sub bold tw">{{ post.sub }}</p>
              </div>
            </section>
            <section class="col grey"> </section>

            <section class="project__description col-md-6 grey row | ctn-content">
              <div class="project__text | m-100 m-mr-0 addr">
                <p class="sub bold tb">{{ addr.title }}</p>
                <p class="sub tb sm">{{ addr.sub }}</p>
              </div>
            </section>

            <section class="project__description col-md-6 grey row | ctn-content b">
              <h3 class="hidden-visually">CV</h3>
              <div class="project__text cv | m-100 m-mr-0">
                <p class="sub bold tr">{{ cv.title }}</p>
                <router-link to="">
                  <p class="sub bold tb udl">{{ cv.sub }}</p>
                </router-link>
              </div>
            </section>

            <section class="project__description col-12 grey row | ctn-content m">
              <h3 class="hidden-visually">Map</h3>
              <div class="project__text fill">
                <ggmap> </ggmap>
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
  name: 'Contact',
  data () {
    return {
      title: 'Contact',
      subs: [''],
      post: {
        title: 'Contact us',
        sub: 'We are partnering with startups to transform industries together immediately'
      },
      cv: {
        title: 'Please contact us or submit your CV to',
        sub: 'contact@addventures.co.th'
      },
      addr: {
        title: 'Our office',
        sub:
          'The Siam Cement PCL. (Headquarter) 1 Siam Cement Road, Bangsue Bangkok 10800 Thailand'
      },
      slide__title: false,
      slide__sub: false,
      prev: {
        title: 'Our Team',
        url: 'team'
      },
      next: {
        title: 'Home',
        url: 'index'
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
      var div = document.getElementById('contact')
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
  transform: translate3d(-436px, 0px, 0px);
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

  @media (max-width: 575.98px)
  {
    .slide__title__active {
        transform: translate3d(-26vw, 0px, 0px) !important;
      }
      .slide__sub__active {
        transform: translate3d(-30vw, 0px, 0px) !important;
      }
  }

/***/

.contact .fill {
  width: -webkit-fill-available;
}

.contact .udl {
  border-bottom: 2px solid black;
  letter-spacing: 0.05em;
  width: min-content;
}

.contact .addr .sub.sm
{
  font-size: 1.6vw;
}

.contact .m
{
    padding-left: 19.7%;
    padding-right: 19.7%;
    height: 50vh;
}

.scrollarea {
  height: 100vh;
  display: block;
}

.project__text p:not(:last-of-type) {
    margin-bottom: 1.5rem;
}
</style>
