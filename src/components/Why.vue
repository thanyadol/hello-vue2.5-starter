<template>
  <div class="Why">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 class="project__title | mlg-1 | m-mr-0 t black" data-i="5">{{ title }}</h2>
        <div class="project__info | col-8 mlg-1 | m-ml-0 m-100 black">
          <h3 class="project__intro">{{ sub }}</h3>
        </div>
      </div>
    </header>

    <div class="project__inner scrollarea" data-scrollbar id="my-scrollbar">
      <div class="scroll-content" style="transform: translate3d(0px, 0px, 0px);">

        <div class="project__content">
          <div class="project__body white">
              <section class="project__description col-8 | ctn"  v-for="p in posts" :key="p.id" v-bind:class="p.background">
                  <h3 class="hidden-visually">Project</h3>
                  <div class="project__text |  mrg-2c | m-100 m-mr-0">
                    <p class="title bold black">{{ p.title }}</p>
                    <p class="sub bold black">{{ p.sub }}</p>
                    <p class="project__text">     
                      <span class="sub black">{{ p.regular }}</span>   
                    </p> 
                    <ol>
                        <li class="ml-5 sub black" v-for="d in p.detail" :key="d">{{ d }}</li>
                    </ol>
                  </div>
              </section>
            </div>
        </div>

         <div class="project__body pt-0">
          <section class="project__description pt-0 | ctn white">
            <buttom></buttom>
          </section>
        </div>

        </div>
      <!-- end scroll content -->
      <canvas class="overscroll-glow" style="display: none; pointer-events: none;"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "Why",
  data() {
    return {
      title: 'Why Work With Us',
      sub: 'Our resources and network',
      show: false,
      posts: [
        { 
          id: 1,
          title: 'Vertical Focus', 
          sub: 'More Than Just a Capital Partner',
          bold: '',
          regular: 'At AddVentures, we look for the investment and partnership opportunities in the areas of B2B, Industrial, and Enterprise. With the support from SCG and our goal to build the portfolio companies in highly related verticals, we believe we can offer substantial synergies in 2 dimensions',
          detail: ['Direct-synergybetween SCG & startup',  'Cross-synergy among startups in the portfolio'],
          background: 'red',
          image: ''
        },
        { 
          id: 2,
          title: 'Platform to scale up', 
          sub: 'USD 18 Billion market capitalization more than 50,000 employee',
          bold: '',
          regular: 'With our resources and extensive business network along SCG business value chain, We believe that we can help startups scale fast through our proprietary resources and access to 300+ SCG subsidiaries and 1,000+ business partners across Southeast Asia Region. We are flexible and open to various collaborationPrograms ranging from commercial partnership,Licensing, JV, minority investment or M&A.',
          detail: [],
          background: 'red right',
          image: ''
        },
        { 
          id: 3,
          title: 'Long term partnerships', 
          sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          bold: 'Corperate & Startups',
          regular: 'As a strategic investor, we do not only provide financing but we also commit to long - term success of startups in our portfolio. Unlike traditional VC funds, we do not rush for short term financial result and investment exit. with this long term support, startups can focus on building a great company to reach their full potential fastest possible.',
          detail: [],
          background: 'red',
          image: ''
        }
      ]
      // scrolled: false,
      // scrolling: false
      // deg: 0
    };
  },
  // life cycle of component
  created() {},
  beforeMount() {
  },
  beforeDestroy() {
    // window.removeEventListener('wheel', this.handleScroll)
  }
};
</script>
<style scoped>

.ctn-cu {
  padding-left: 9.1%;
  padding-right: 9.1%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.right
{
  left: 33.333333%;
}

.left
{
  left: -50%;
}

ol {
    list-style: decimal;
}

.red 
{
  background-color: #f0f0f0;
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

.project__description
{
  padding-bottom: 30px;
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
}

@media only screen and (max-width: 960px)
{
  .ctn {
      padding-left: 5%;
      padding-right: 2%;
  }
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
