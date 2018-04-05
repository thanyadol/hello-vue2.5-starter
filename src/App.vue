<template>
  <div class="project">
    <header id="header" class="ctn noselect">
			<h1 class="header__title">
				<a href="/">home</a>
			</h1>
      <nave></nave>

   <!-- should move to component -->
    <aside id="frame">
      <transition name="fade" mode="out-in">
        <div class="borders-container"  v-show="!show">
          <div class="border border--t"></div>
          <div class="border border--r"></div>
          <div class="border border--b"></div>
          <div class="border border--l"></div>
        </div>
      </transition>
    </aside>

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
				  <svg viewBox="0 50 512 512" class="icon icon--li" >
            <path d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
            C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
            M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
            c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
            s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
          </svg>
					<a href="https://medium.com/" target="_blank">Medium</a>
				</li>
				<li class="social-list__item">
					<svg class="icon icon--li" viewBox="0 0 16 16" aria-hidden="true">
						<path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"></path>
					</svg>
					<a href="https://twitter.com/" target="_blank">Twitter</a>
				</li>
				<li class="social-list__item">
					<svg class="icon icon--fb" viewBox="0 0 16 16" aria-hidden="true">
						<path d="M14,0H2C0.9,0,0,0.9,0,2v12c0,1.1,0.9,2,2,2h6V9.6H6.6V7.3H8c0,0,0-1.5,0-1.9c0-0.3-0.1-2.6,2.9-2.6h2.1v2.4h-1.5c-0.3,0-0.6,0.3-0.6,0.5c0,0.2,0,1.5,0,1.5s1.9,0,2.1,0c-0.1,1.2-0.3,2.3-0.3,2.3h-1.9V16H14c1.1,0,2-0.9,2-2V2C16,0.9,15.1,0,14,0z"></path>
					</svg>
					<a href="https://www.facebook.com//" target="_blank">Facebook</a>
				</li>
			</ul>
		</footer>

		<canvas id="stage" width="1828" height="1332" style="touch-action: none; cursor: inherit;"></canvas>
		
		<div class="lines-container">
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>
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
    var div = document.getElementById("my-scrollbar");
    Scrollbar.init(div);

    // alert("scrolling")
  },
  beforeMount() {
    // window.addEventListener('scroll', this.handleScroll)
    var scrolled = 0
    // var scrolling
    var vm = this

    window.addEventListener('wheel', function (event) {

    var div = document.getElementById("my-scrollbar");
    const scrollbar = Scrollbar.init(div);
    if(scrollbar.scrollTop > 400)
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
        whyworkwithus: { next: 'index', prev: 'howweinvest' },
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

/* line */
.lines-container {
    top: 0;
    right: -20%;
    bottom: 0;
    left: -20%;
    height: 100%;
    z-index: auto;
}

.line {
    width: 1px;
    height: 100%;
    background: #f0f0f0;
    transform: rotate(-200deg);
}

.red
{
  background-color: #2c3e50;
}

.main
{
  background-color: #fcfcfc;
}

.border {
  border: none !important;
  -webkit-transition: opacity 2s ease-in;
  transition: opacity 2s ease-in;
  background-color: #2f3c47;
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

/* animate fade */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 2s;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
