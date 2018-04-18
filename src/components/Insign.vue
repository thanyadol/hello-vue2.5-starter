<template>
  <div class="insign">
            <header class="project__header action | ctn">
      <div class="project__header__inner">
         <h2 v-bind:class="slide__title" class="project__title | ml-0 | m-mr-0 t tb slide__title" data-i="7">{{ title }}</h2>
          <div class="project__info col-md-12 mx-auto ct shift | m-ml-0 m-100 tb">
          <h3 v-bind:class="slide__sub" class="project__intro sub bold">
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
              <section class="project__description grey row | ctn-content">
                  <h3 class="hidden-visually">Blog</h3>
                  <div class="project__text | col-md-6 mrg-2 ml-0 mr-0 pr-0 pl-0 | m-100 m-mr-0">
                    <p class="title bold tb">{{ post.title }}</p>
                    <p class="sub bold tb">{{ post.sub }}</p>
                  </div>
              </section>

             <section class="project__description t grey row | ctn-content">
                  <h3 class="hidden-visually">Venture</h3>
                  <div class="project__description | col-md-12 |" v-for="r in post.blogs_t" :key="r.id" v-bind:class="r.class">

                    <div class="project__text | col-md-6 | m-100 m-mr-0">
                      <img class="bg__block" v-bind:src="r.image" />
                        <div class="date">
                          <p class="title tb bold t-lg month">{{ r.date | moment }}</p>
                          <p class="title tr bold t-lg day">{{ r.date.getDate() }}</p>
                        </div>
                    </div>

                    <div class="project__text | col-md-6 ml-3 | m-100 m-mr-0">
                      <p class="sub tb bold">{{ r.title }}</p>
                      <p class="sub tb mb-5c sm">{{ r.author }}</p>
                      <!-- <p class="sub tb sm">View 320K</p> -->
                      <!-- <hr class="separate"> -->

                      <router-link to="">
                        <span class="read sub tb bold sm"> Read more </span>
                        <img class="arrow" v-bind:src="arrow" />
                      </router-link>
                    </div>

                  </div>
              </section>

             <section class="project__description white row | ctn-content">
                  <div class="project__description b | col-md-12 |" v-for="r in post.blogs_b" :key="r.id" v-bind:class="r.class">

                    <div class="project__text | col-md-6 | m-100 m-mr-0">
                      <img class="bg__block" v-bind:src="r.image" />
                        <div class="date">
                          <p class="title tb bold t-lg month">{{ r.date | moment }}</p>
                          <p class="title tr bold t-lg day">{{ r.date.getDate() }}</p>
                        </div>
                    </div>

                    <div class="project__text | col-md-6 ml-3 | m-100 m-mr-0">
                      <p class="sub tb bold">{{ r.title }}</p>
                      <p class="sub tb mb-5c sm">{{ r.author }}</p>
                      <!-- <p class="sub tb sm">View 320K</p> -->
                      <!-- <hr class="separate"> -->

                      <router-link to="">
                        <span class="read sub tb bold sm"> Read more </span>
                        <img class="arrow" v-bind:src="arrow" />
                      </router-link>
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
        blogs_t: [
          {
            id: 1,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'Addventure by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          }
        ],
        blogs_b: [
          {
            id: 2,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'Addventure by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 3,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'Addventure by SCG',
            image: './static/img/img3.jpg',
            date: new Date()
          },
          {
            id: 4,
            title: 'Gixtix easy an online worldwide shipping Why we invest Why we invest',
            author: 'Addventure by SCG',
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
  transform: translate3d(-440px, 0px, 0px);
  transition-duration: 1600ms;
}

.slide__sub__active {
  transform: translate3d(-430px, 0px, 0px);
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
.insign
.date
{
  padding-top: 20px;
  transform: translateX(30%);
}

.insign .date .day
{
  font-size: 5.5vw !important;
  line-height: 0.4;
}

.insign .date .month
{
  font-size: 3.45vw !important;
  line-height: 1.3;
}

.insign .mb-5c
{
  margin-bottom: 10rem;
}

.insign .sm
{
  font-size: 1.3vw;
}

.insign
.project__description {
    padding-bottom: 0 !important;
    padding-top: 67px;
}

.insign
.project__description.t {
    padding-bottom: 30vh !important;
    padding-top: 0;
}

.insign
.project__description.b
{
    transform: translateY(-70%);
}

.project__text p:not(:last-of-type) {
    margin-bottom: 1.5rem;
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

.insign .project__body .bg__block {
    width: 34vw;
    z-index: 2;
    padding: 10px 10px 5px 5px;
}

.insign .project__text .date {
  left: -50px;
  position: absolute;
  top: 0;
}

/* for new */

.block p {
  margin: 0;
  line-height: 5.1rem;
}

.scrollarea {
  height: 100vh;
  display: block;
}

</style>
