<template>
  <div class="project">
    <header id="header" class="ctn noselect">
    <h1 class="header__title">
      <a href="/">home</a>
    </h1>
    <nave></nave>

   <!-- should move to component -->
    <framed :display="!show"> </framed>

		</header>
		<!-- header -->
    	<main id="content" role="main" class="main"> 
			<div class="content__wrapper">
				<div id="inner-nav">
					<ul class="inner-nav__list">
						<li class="inner-nav__item">
              <router-link :to="chevron().prev" class="">
							<button class="inner-nav__btn inner-nav__btn--prev" aria-label="Backward" style="background-color: transparent;">
								Backward
								<svg class="icon icon--arrow icon--arrow--left" viewBox="0 0 38 38">
									<path class="st0" d="M10.3,19c0-0.6,0.2-1.3,0.7-1.7L23.4,4.4c1-1,2.5-1,3.5-0.1s1,2.5,0.1,3.5L16.3,19L27,30.1c1,1,0.9,2.6-0.1,3.5c-1,1-2.6,0.9-3.5-0.1L11,20.7C10.5,20.3,10.3,19.6,10.3,19z"></path>
								</svg>
							</button>
              </router-link>
						</li>
						<li class="inner-nav__item">
              <router-link :to="chevron().next" class="">
							<button class="inner-nav__btn inner-nav__btn--next swiper-button-disabled" aria-label="Forward" style="background-color: transparent;">
								Forward
								<svg class="icon icon--arrow icon--arrow--right" viewBox="0 0 38 38">
									<path class="st0" d="M27.7,19c0,0.6-0.2,1.3-0.7,1.7L14.6,33.6c-1,1-2.5,1-3.5,0.1s-1-2.5-0.1-3.5L21.7,19L11,7.9c-1-1-0.9-2.6,0.1-3.5c1-1,2.6-0.9,3.5,0.1L27,17.3C27.5,17.7,27.7,18.4,27.7,19z"></path>
								</svg>
							</button>
              </router-link>
						</li>
					</ul>
				</div>

				<div id="projects-container" class="slider | noselect swiper-container-horizontal" aria-hidden="true">
					<ul class="projects__slider | slider__wrapper" style="transform: translate3d(-2173px, 0px, 0px); transition-duration: 0ms;">
						<li class="projects__slider__item | slider__item slider__item--active" style="width: 795px;">
							<a class="is--long" data-i="04" href="javascript: void(0);" style="transform: matrix(1, 0, 0, 1, -154.907, 0);"></a>
						</li>
					</ul>
				</div>

				<div class="content__inner">
					<article class="project">
            <transition name="fade">
              <router-view></router-view> <!-- route view here !!! -->
            </transition>
					</article>
				</div>
			</div>
		</main>
		<!-- content -->

    <footer id="footer">
			<ul class="social-list">
        <li class="social-list__item">
            <a href="#">#</a>
				</li>
        <li class="social-list__item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_Medium</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,0V28H28V0ZM23.33,9.42h-1c-.27,0-1,.29-1,.54v9c0,.25.7.45,1,.45h1v2H16.66v-2H18V10.09h-.23L14.56,21.41H12.08L8.91,10.09H8.67v9.32H10v2H4.67v-2h.74c.29,0,.6-.2.6-.45V10a.64.64,0,0,0-.6-.54H4.67v-2h6.91l2.26,8h.06l2.27-8h7.16Z"/></g></g></svg>
					<a href="https://medium.com/" target="_blank">Medium</a>
				</li>
				<li class="social-list__item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_LinkIedn</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,0V28H28V0ZM9.64,21.44H6.31v-10H9.64ZM8,10.13H8A1.72,1.72,0,1,1,8,6.7a1.72,1.72,0,1,1,0,3.43ZM21.64,21.44H18.31V16.12c0-1.34-.48-2.25-1.69-2.25a1.81,1.81,0,0,0-1.7,1.21,2.2,2.2,0,0,0-.12.81v5.55H11.48s0-9,0-10h3.33V12.9a3.31,3.31,0,0,1,3-1.64c2.19,0,3.84,1.42,3.84,4.48Z"/></g></g></svg>
					<a href="https://twitter.com/" target="_blank">Linkedin</a>
				</li>
				<li class="social-list__item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Social_Facebook</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M28,0H0V28H13.94V16.68H11.65V12.87h2.29V9.76c0-.57-.12-4.39,4.8-4.38h3.47v4H19.66a1.1,1.1,0,0,0-1,.91v2.61h3.57c-.14,2-.44,3.82-.44,3.82H18.63V28H28Z"/></g></g></svg>
					<a href="https://www.facebook.com//" target="_blank">Facebook</a>
				</li>
			</ul>
		</footer>

		<canvas id="stage" width="1828" height="1332" style="touch-action: none; cursor: inherit;"></canvas>
		
	  <axiom> </axiom>
	</div>
	<!-- wrapper -->
</template>

<script>
// import your components here
// import RightHref from '@/components/RightHref'
import Scrollbar from "smooth-scrollbar";

export default {
  name: 'App',
  data () {
    return {
        show: false,
    }
  },
  // life cycle of component
  created () {
    // let pixiscript = document.createElement('script')
    // pixiscript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.2.7/smooth-scrollbar.js')
    // document.body.appendChild(pixiscript)
    
  },
  mounted: function() {
    var options = {
      wheelEventTarget: EventTarget,
    };
    var div = document.getElementById("scrollbar");
    Scrollbar.init(div);

    // alert("scrolling")
  },
  beforeMount() {
    // window.addEventListener('scroll', this.handleScroll)
    var scrolled = 0
    // var scrolling
    var vm = this

    window.addEventListener('wheel', function (event) {

    var div = document.getElementById("scrollbar");
    const scrollbar = Scrollbar.init(div);
    if(scrollbar.scrollTop > 50)
    {
      // console.log(scrollbar.scrollTop)
      // console.log(scrollbar.offset.y)
      vm.show = true
    }
    else
    {
      vm.show = false
    }

    if (event.deltaY < 0) {
      scrolled++
      // scrolling = 'translate3d(0px, ' + scrolled + 'vh, 0px)'

      // vm.scrolling = scrolling
      // console.log('scrolling up hanlde : ' + event.deltaY)
    }
    if (event.deltaY > 0) {
      scrolled--
      // scrolling = 'translate3d(0px, ' + scrolled + 'vh, 0px)'
      // vm.scrolling = scrolling
      // console.log('scrolling down hanlde : ' + event.deltaY)
    }
  })

    /* var scrollTop = $(this).scrollTop();
    $('.borders-container').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop) / elementHeight;
      }
    }) */
  },
  beforeDestroy () {
    // window.removeEventListener('scroll', this.handleScroll)
  },
  // define methods under the `methods` object
  methods: {
    chevron: function () {
      // add new page here
      var pages = {
        index: { next: 'whoweare', prev: 'index' },
        whoweare: { next: 'whatweinvest', prev: 'index' },
        whatweinvest: { next: 'whereweinvest', prev: 'whoweare' },
        whereweinvest: { next: 'howweinvest', prev: 'whatweinvest' },
        howweinvest: { next: 'whyworkwithus', prev: 'whereweinvest' },
        whyworkwithus: { next: 'ourpartners', prev: 'howweinvest' },
        ourpartners: { next: 'insign', prev: 'whyworkwithus' },
        insign: { next: 'theteam', prev: 'ourpartners' },
        theteam: { next: 'contact', prev: 'insign' },
        contact: { next: 'index', prev: 'theteam' }
      }
      return pages[this.$route.path.substring(1, this.$route.path.length)]
    },
    handleScroll (event) {
      // Any code to be executed
      // when the window is scrolled
      this.scrolled = window.scrollY > 0
    }
  }
}
</script>

<style scoped>

.cls-1{fill:#2f3c47;}

/* remove reboot*/
button:focus {
  outline: none;
}

/* arrow nav */
.inner-nav__btn .icon--arrow {
    top: calc(50% - 7px);
    width: 24px;
    height: 24px;
    fill: #495057;
}

.inner-nav__list
{
  z-index: 2;
}

/* social list*/
.social-list__item .icon {
    fill: #495057;
    width: 24px;
    height: 24px;
    left: 0;
    top: 0;
}

.red
{
  background-color: #2c3e50;
}

.main
{
  background-color: #fcfcfc;
}


</style>
