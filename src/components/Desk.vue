<template>
  <div class="desk">

    <div class="project__inner white scrollarea" data-scrollbar id="desk" ref="scrolled">
      <div class="scroll-content">
        <div class="project__content">
          <div class="project__body grey">
            <section class="project__description white col pd-1 | ctn">
                   <!-- <div class="translate">
                      <h3 class="sub bold tb">The standard Lorem Ipsum passage, used since the 1500s</h3>
                      <p class="sub tb">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                      <h3 class="sub bold tb">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                      <p class="sub tb">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                      <h3 class="sub bold tb">1914 translation by H. Rackham</h3>
                      <p class="sub tb">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                      <h3 class="sub bold tb">Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                      <p class="sub tb">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                      <h3 class="sub bold tb">1914 translation by H. Rackham</h3>
                      <p class="sub tb">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
                  </div> -->
                  <div class="clearfix"> </div>
                  </section>
            <section class="project__description  mb-0 pb-0 grey row">
              <h3 class="hidden-visually">Pitch</h3>
              <div class="project__description mb-0 pb-0 col-12 | ctn r">
                <div class="project__text mb-0 col-6 ll | m-100 m-mr-0">
                  <img class="bg__form" v-bind:src="about.image" v-bind:class="about.imageClass" />
                  <p class="title tr bold t-lg al-c">{{ about.title }}</p>
                  <ul class="form">
                    <li v-for="f in about.forms" :key="f.id">
                      <p class="sub tb bold mb-1">{{ f.title }}</p>
                      <input class="form-control flg mb-4 ml-2 w-125" :v-model="f.name" :placeholder="f.placeholder">
                    </li>
                  </ul>
                </div>

                <div class="project__text col-6 red ctn c pb-6 pb-c text-right mb-0 | m-100 m-mr-0">
                  <p class="sub tw w-22 ">{{ about.detail }}</p>
                  <p class="title tw bold">{{ about.sub }}</p>
                </div>

              </div>
            </section>

            <section class="project__description grey row pt-0 mb-0 pb-0">
              <h3 class="hidden-visually">Pitch</h3>
              <div class="project__description col-12 | ctn l | py-0">

                <div class="project__text col-6 red ctn pb-6 sft pt-5 text-right mb-30 | m-100 m-mr-0">
                  <p class="sub tw w-22 ">{{ pitch.detail }}</p>
                  <p class="title tw bold pt-d">{{ pitch.sub }}</p>
                </div>

                <div class="project__text col-6 | m-100 m-mr-0">
                  <img class="bg__form" v-bind:src="pitch.image"  v-bind:class="pitch.imageClass"  />
                  <p class="title tr bold t-lg plg-1 al-r">{{ pitch.title }}</p>
                </div>
              </div>
            </section>

            <section class="project__description grey row mt-0 pt-0 pb-0 mb-0 shift">
              <h3 class="hidden-visually">Pitch</h3>
              <div class="project__description col-12 mt-0 pt-0 pb-0 mb-0 | ctn b pt-0">

                <div class="project__text col-12 ctn rr | m-100 m-mr-0">
                  <ul class="form ctn">

                    <li v-if="f.type == 'text'" v-for="f in pitch.forms" :key="f.id">
                      <p class="sub tb bold mb-1">{{ f.title }}</p>
                      <input class="form-control flg mb-4 ml-2 w-125" :v-model="f.name" :placeholder="f.placeholder">
                    </li>

                    <li v-if="f.type == 'button-group'" v-for="f in pitch.forms" :key="f.id">
                      <p class="sub tb bold mb-1">{{ f.title }}</p>
                      <div :v-model="f.name" class="btn-group ml-2 mb-4 jc-b" role="group" aria-label="">
                        <button :v-model="b.name" :value="b.id" v-for="b in f.buttons" :key="b.id" type="button" class="btn btn-default">{{ b.title }}</button>
                      </div>
                    </li>

                    <li v-if="f.type == 'number'" v-for="f in pitch.forms" :key="f.id">
                      <p class="sub tb bold mb-1">{{ f.title }}</p>
                      <input class="form-control flg mb-4 ml-2 w-125" :v-model="f.name" :placeholder="f.placeholder">
                    </li>

                    <li v-if="f.type == 'check'" v-for="f in pitch.forms" :key="f.id">
                      <p class="sub tb bold mb-1">{{ f.title }}</p>
                      <div :v-model="f.name" class="btn-group ml-2 mb-4" role="group" aria-label="">
                        <button :v-model="b.name" :value="b.id" v-for="b in f.buttons" :key="b.id" type="button" class="btn btn-default">{{ b.title }}</button>
                      </div>
                    </li>

                  </ul>
                </div>

              </div>

              <div class="project__text | col-12">
                <div class="m-100 m-ml-0 | ctn my-5c al-c">
                  <h3 class="sub bold tb">&copy; {{ foot }}</h3>
                </div>
              </div>

              <div class="project__text col | p-0 m-0">
                <button v-on:click="submit"  type="button" class="btn btn-default btn-fill red title bold">Submit
                <svg class="arrow" viewBox="0 0 55.76 23.03"><title>Footer_Next</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="44.24 0 42.83 1.41 51.93 10.51 0 10.51 0 12.51 51.93 12.51 42.83 21.61 44.24 23.03 55.76 11.51 44.24 0"/></g></g></svg>
                </button>
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
  name: 'Desk',
  // define methods under the `methods` object
  methods: {
    submit: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.url)
      // `event` is the native DOM event
      /* if (event) {
        alert(event.target.tagName)
      } */
    }
  },
  // el: '#deck',
  data () {
    return {
      title: 'Pitch Deck',
      foot: 'Copyright 2018 AddVenture',
      arrow: './static/img/next.svg',
      url: '/api/pitch/create',
      about: {
        title: 'About You',
        sub: 'Step 1',
        image: './static/img/you.svg',
        imageClass: 'you',
        detail:
          'Before submitting your pitch deck, please fill out the form below',
        forms: [
          {
            id: 1,
            name: 'fullname',
            title: 'Full Name *',
            placeholder: 'Full Name'
          },
          {
            id: 2,
            name: 'company',
            title: 'Company *',
            placeholder: 'Company'
          },
          {
            id: 3,
            name: 'email',
            title: 'Email *',
            placeholder: 'Email'
          },
          {
            id: 4,
            name: 'contact',
            title: 'Contact *',
            placeholder: 'Telephone no.'
          }
        ]
      },
      pitch: {
        title: 'Pitch Desk',
        sub: 'Step 2',
        image: './static/img/deck.svg',
        imageClass: 'deck',
        detail: '',
        forms: [
          {
            id: 1,
            name: 'link',
            title: 'Attach your pitch desk link *',
            placeholder: 'http://',
            type: 'text'
          },
          {
            id: 2,
            name: 'business',
            title: 'Type of business',
            placeholder: '',
            type: 'button-group',
            buttons: [
              {
                id: 99,
                name: 'industrail',
                title: 'Industrail'
              },
              {
                id: 98,
                name: 'b2b',
                title: 'B2B'
              },
              {
                id: 97,
                name: 'enterprise',
                title: 'Enterprise'
              },
              {
                id: 96,
                name: 'others',
                title: 'Others'
              }
            ]
          },
          {
            id: 3,
            name: 'stage',
            title: 'Your most recent fund raising stage',
            placeholder: '',
            type: 'button-group',
            buttons: [
              {
                id: 99,
                name: 'never',
                title: 'Never'
              },
              {
                id: 98,
                name: 'seed',
                title: 'Seed'
              },
              {
                id: 97,
                name: 'seriesa',
                title: 'Series A'
              },
              {
                id: 96,
                name: 'seriesb',
                title: 'Series B and above'
              }
            ]
          },
          {
            id: 4,
            name: 'amount_fund',
            title: 'Amount of most recent fundraising',
            placeholder: 'Amount',
            type: 'number'
          },
          {
            id: 5,
            name: 'robot',
            title: 'I`m not a robot',
            placeholder: '',
            type: 'check',
            buttons: [
              {
                id: 99,
                name: 'notrobot',
                title: 'Yes'
              }
            ]
          }
        ]
      }
    }
  },
  mounted: function () {
    // var vm = this

    /* var scrollbarOptions = {
        renderByPixels: true,
        continuousScrolling: true
      } */

    var scrollOffset = 950

    var el = document.getElementById('desk')
    const s = scroll.init(el)
    s.scrollTop = scrollOffset

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
      var scrollOffset = 950

      // var div = document.getElementById('scrollbar')
      // const scrollbar = scroll.init(div)
      var el = document.getElementById('desk')
      const s = scroll.get(el)

      // s.scrollTop = 750
      // s.destroy()
      if (s.scrollTop < scrollOffset) {
        s.scrollTop = scrollOffset
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
/***/

.desk .ctn.rr
{
  transform: translateX(17%);
}

.desk .title.t-lg
{
  font-size: 6.0vw !important;
  letter-spacing: 2px;
}

.desk .ll
{
    transform: translateX(10%);
    z-index: 4;
}

.desk .my-5c
{
  margin-bottom: 12rem;
  margin-top: 12rem;
}

.desk .w-22
{
    width: 22vw;
    margin-left: 12vw;
    margin-bottom: 0 !important;
}

.desk .clearfix
{
  height: 100px;
}

.desk .translate h3,
.desk .translate p {
  margin-bottom: 20px;
}

.desk .translate p {
  margin-bottom: 70px;
}

.desk .ctn.c
{
  padding-top: 130px;
  transform: translateY(-11.8%);
}

.desk .jc-b
{
  justify-content: space-between;
  display: flex;
}

/**** input ***/

.btn-fill
{
  width: inherit;
  padding: 30px 400px 30px 400px;
  margin: 0;
  /* padding-right: 0; */
  /* padding-left: 0; */
  text-align: right;
  color: #f0f0f0f0;
  margin: 0 !important;
}

.btn {
  font-weight: normal;
  border-radius: 0;
  font-size: 1.8vw;
}

.btn-group {
  margin-left: 30px;
}

.btn-group > .btn:hover,
.btn-group > .btn:visited,
.btn-group > .btn:active {
  z-index: 1;
  color: #ec1e24;
  border: 1px solid #ec1e24;
}

.form.ctn
{
  margin-top: 10rem;
}

ul.form li {
  list-style: none;
}

.desk .title.lg {
  font-size: 10vh !important;
}

.flg {
  padding-left: 2rem;
  padding: 1rem 2rem 1rem 2rem;
  display: block;
  width: 48vw;
  /* padding: .375rem .75rem; */
  font-size: 2rem;
  /* line-height: 1.7; */
  color: #221f1f;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ffff;
  border-radius: 0.25rem;
  z-index: 4 !important;
  position: relative;
}

/* .w-125 {
  width: 110%;
} */

.desk .pb-c {
  border-bottom: 450px solid #f0f0f0;
}

.desk .pt-c {
  border-top: 450px solid #ec1e24;
}

.desk .pt-d {
  border-top: 20vh solid #ec1e24;
}

.desk .you
{
  /* margin-top: 50px;
  margin-left: -50px; */
      transform: translate3d(0vw, 12vh ,0);
}

.desk .deck
{
  transform: translate3d(13vw, 12vh ,0);
}

.desk .arrow {
    width: 10vh;
    padding-top: 10px;
    margin-left: 30px;
    position: absolute;
    fill: #f0f0f0f0;
}

/***/

.desk
.project__body .bg__form {
  position: absolute;
  width: 4vw;
  z-index: 2;
}

.desk .pb-6 {
  padding-bottom: 5vh;
}

.desk .sft
{
    margin-top: -15.5%;
}

.desk .ctn.r {
  padding-left: 9.1%;
  padding-right: 0;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.desk .ctn.l {
  padding-left: 0;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.desk .ctn.b {
  padding-left: 15.1%;
  padding-right: 20.1%;
}

.scrollarea {
  height: 100vh;
  display: block;
}
</style>
