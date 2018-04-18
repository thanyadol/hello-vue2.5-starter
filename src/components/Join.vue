<template>
  <div class="join">

    <div class="project__inner white scrollarea" data-scrollbar id="join" ref="scrolled">
      <div class="scroll-content">
        <div class="project__content">
          <div class="project__body">
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
                  <!-- <div class="clearfix"> </div> -->
                  </section>

            <section class="project__description white col pd-1 | ctn c">
              <h3 class="hidden-visually">Join</h3>
              <div class="project__text | col-6 | m-100 m-mr-0">
                <p class="title bold tb">{{ title }}</p>
                <p class="sub bold tb mb-5c">{{ sub }}</p>
                <p class="sub bold tr">{{ cv }}</p>
                <router-link to=""> <p class="sub bold tb udl">{{ email }}</p> </router-link>
              </div>
            </section>

            <section class="project__description white row | py-5c">
              <div class="project__text | col-12 ctn pt-0 mt-0">
                <div class="mlg-3 | m-100 m-ml-0">
                  <h3 class="sub bold tb">&copy; {{ foot }}</h3>
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
  name: 'Join',
  // el: '#deck',
  data () {
    return {
      title: 'Join our team',
      sub:
        'We are looking energetic and passionate people to join our team and grow tofether.',
      foot: 'Copyright 2018 AddVenture',
      cv: 'Please contact us or submit your CV to',
      email: 'contact@addventures.co.th'
    }
  },
  mounted: function () {
    // var vm = this

    /* var scrollbarOptions = {
          renderByPixels: true,
          continuousScrolling: true
        } */

    var scrollOffset = 950

    var el = document.getElementById('join')
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
      var el = document.getElementById('join')
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
.project__text p:not(:last-of-type) {
    margin-bottom: 0;
}

.join .clearfix
{
  height: 100px;
}

.join .py-5c
{
  padding-bottom: 5rem;
  padding-top: 12rem;
}

.join .mb-5c
{
  margin-bottom: 5rem !important;
}

.join .ctn.c
{
  padding-left: 8.1%;
  padding-bottom: 25rem;
}

.udl {
  border-bottom: 2px solid black;
  letter-spacing: 0.05em;
  width: min-content;
}

.scrollarea {
  height: 100vh;
  display: block;
}
</style>
