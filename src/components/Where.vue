<template>
  <div class="where">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 class="project__title | mlg-1 | m-mr-0 t black" data-i="3">{{ title }}</h2>
        <div class="project__info | col-8 mlg-1 | m-ml-0 m-100 black">
          <h3 class="project__intro">
              <ul>
                  <li v-for="s in subs" :key="s" >{{ s }}</li>
              </ul>
          </h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="my-scrollbar">
 
 
        <div class="project__content">
          <div class="project__body row white">
              <!-- red bar -->
              <svg class="rectang" width="80" height="2500">
                <rect x="0" y="0" width="80" height="2500" />
              </svg>

              <section class="project__description col pd-1 | ctn"  v-for="p in posts" :key="p.id" v-bind:class="p.background">
                  <h3 class="hidden-visually">Project</h3>
                  <div class="project__text | mrg-2 | m-100 m-mr-0">
                    <p class="title bold black">{{ p.title }}</p>
                    <p class="sub black">{{ p.sub }}</p>
                  </div>
                </section>
                <section class="project__description col pd-1 tr | ctn" >
                  <ul class="black">
                      <li v-bind:class="v.class" v-for="v in invests" :key="v.id">
                        <span class="title">{{ v.title }}</span>
                        <p class="sub">{{ v.sub }}</p>
                      </li>
                  </ul>
                </section>

              <section class="project__description col-12 pd-1 | ctn"  v-for="p in posts" :key="p.id" v-bind:class="p.background">
                  <img class="mx-auto" :src="sample">
              </section>

            </div>
        </div>

        <div class="project__body pt-0">
          <section class="project__description pt-0 | ctn red">
              <buttom></buttom>
          </section>
        </div>
     </div>

      <!-- end scroll content -->
      <canvas class="overscroll-glow" style="display: none; pointer-events: none;"></canvas>
    </div>
</template>

<script>
export default {
  name: "Where",
  data() {
    return {
      title: 'Where We Invest',
      subs: [ 'Geographical', 'Focus'],
      show: false,
      posts: [
        { 
          id: 1,
          title: 'Investment Strategy', 
          sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          bold: '',
          regular: '',
          detail: [],
          background: 'red'
        }
      ],
      invests: [
        {
          id: 1,
          title: 'Thailand & Asian Countries',
          sub : 'Lorem ipsum dolor sit amet',
          image: './static/img/img3.jpg',
          class: 'indent'
        },
        {
          id: 2,
          title: 'USA / Europe / Silicon Valley / Televiv / Chaina',
          sub : 'Consectetur adipiscing elit',
          image: './static/img/img3.jpg',
          class: '',
        }
      ],

      separator: './static/img/separator.',
      sample: './static/img/img3.jpg'
      // scrolled: false,
      // scrolling: false
      // deg: 0
    };
  },
  // life cycle of component
  created() {},
  mounted: function() {
  },
  beforeMount() {

  },
  beforeDestroy() {
    // window.removeEventListener('wheel', this.handleScroll)
  }
};
</script>
<style scoped>

svg.rectang
{
  opacity: 0.6;
  left: 47%;
  position: absolute;
  z-index: 3;
  height: 160vh;
}

ul li.indent
{
  left: 30%;
}

.pb-6
{
  padding-bottom: 5vh;
}

.right
{
  left: 50%;
}

.left
{
  left: -50%;
}

h3 > ul > li
{
    display: inline;
    padding-left: 30px;
}

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.red 
{
  background-color: #f0f0f0;
}

.tr
{
  color: #ee2524;
}

.white 
{
  background-color: #ffff;
}

.index
{
  z-index: unset;
}

.bold
{
  font-weight: bold;
}

.black {
  color: #2f3c47;
}

.project__body h1
{
  position: relative;
  font-size: 5vw;
  font-weight: bold;
  margin-bottom: 30px;
}

.project__body ul li
{
  position: relative;
  font-size: 1.7vw;
}

.project__body ul
{
  list-style-type: square;
}

.t
{
  position: relative;
  font-size: 8vw;
  font-weight: bold;
  line-height: 1;
  opacity: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
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

.project__body
{
  border-left: solid 15px #ffff;
  border-right: solid 15px #ffff;
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

.project__description .title,  .project__description .sub
{
  font-size: 5.5rem;
}

.project__description .sub
{
  font-size: 3.1rem;
}

.project__text p:not(:last-of-type) {
    margin-bottom: 2.0rem;
}

/* for iphone x*/
@media only screen and (max-width: 720px)
{
  .project__description .title,  .project__description .sub
  {
    font-size: 2.5rem;
  }

  .project__description .sub
  {
    font-size: 2.1rem;
  }
  .m-ml-0 {
      margin-left: 25.6342857143%;
  }
  .btn {
    font-size: 3vw;
  }

  svg.rectang
  {
    width: 10px;
    height: 450px;
  }

}

@media only screen and (max-width: 960px)
{
  .ctn {
      padding-left: 5%;
      padding-right: 2%;
  }
}

.project__image
{
  top: -100px;
  width: 90%;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
}

.btn.focus, .btn:focus {
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
