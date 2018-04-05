<template>
  <div class="partner">
    <header class="project__header | ctn">
      <div class="project__header__inner">
        <h2 class="project__title | mlg-2 | m-mr-0 t black" data-i="6">{{ title }}</h2>
        <div class="project__info | col-8 mlg-2 | m-ml-0 m-100 black">
           <h3 class="project__intro">
              <ul>
                  <li v-for="s in subs" :key="s" >{{ s }}</li>
              </ul>
          </h3>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
export default {
  name: "Partner",
  data() {
    return {
      title: 'Our Partners',
      subs: [ 'Funding', 'Startups' ],
      prev: { title : 'Why Work With', url : 'whyworkwithus'},
      next:  { title : 'Insign', url : 'insign'}
    };
  },
};
</script>
<style scoped>

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

.tr
{
  color: #ee2524;
}

.box {
    position:relative;
}

.bet {
    position:absolute;
    bottom:0;
    right:0;
}

.right
{
  left: 33.333333%;
}

.pt-6
{
  padding-top: 23.333333%;
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
