$(document).ready(function() {
	hideObjects();
	checkObjectsVisibility();
});

$(window).scroll( function() {
	hideObjects();
	checkObjectsVisibility();
});

function hideObjects() {
	$('.fadeInUp-scroll').css({
		'opacity': 0,
		'transform': 'translateY(100px)'
	});
}

function checkObjectsVisibility() {
	$('.fadeInUp-scroll').each( function(i) {
		var objectTop = $(this).offset().top;
		var windowBottom = $(window).scrollTop() + $(window).outerHeight();

		if( windowBottom > objectTop - 100){
			$(this).addClass('visible');
		} else {
			$(this).removeClass('visible');
		}
	});
}
'use strict'

class SideNav {
  constructor () {
    this.sideNavEl = document.querySelector('.js-side-nav');
    this.sideNavContainerEl = document.querySelector('.js-side-nav-container');
    this.showButtonEl = document.querySelector('.js-menu-open');
    this.closeButtonEl = document.querySelector('.js-menu-close');
    
    this.openSideNav = this.openSideNav.bind(this);
    this.closeSideNav = this.closeSideNav.bind(this);
    this.blockClicks = this.blockClicks.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    
    this.addEventListeners();
  }
  
  addEventListeners() {
    this.showButtonEl.addEventListener('click', this.openSideNav);
    this.closeButtonEl.addEventListener('click', this.closeSideNav);
    this.sideNavEl.addEventListener('click', this.blockClicks);
    this.sideNavContainerEl.addEventListener('click', this.closeSideNav);
  }
 
  blockClicks(evt) {
    evt.stopPropagation();
  }
  
  onTransitionEnd(evt) {
    this.sideNavContainerEl.classList.remove('side-nav-animatable');
    this.sideNavContainerEl.removeEventListener('transitionend', this.onTransitionEnd);
  }
  
  openSideNav() {
    this.sideNavContainerEl.classList.add('side-nav-animatable');
    this.sideNavContainerEl.classList.add('side-nav-visible');
    this.sideNavContainerEl.addEventListener('transitionend', this.onTransitionEnd);
  }
  
  closeSideNav() {
    this.sideNavContainerEl.classList.add('side-nav-animatable');
    this.sideNavContainerEl.classList.remove('side-nav-visible');
    this.sideNavContainerEl.addEventListener('transitionend', this.onTransitionEnd);
  }
}

new SideNav();

        

/* ------------------------
    accordian
------------------------*/
$(document).ready(function(){
  $('.acc-head').click(function(){
    $(this).next().slideToggle(500);
    $(this).toggleClass('active');
  })
});

/* ------------------------
   slider
------------------------*/
 $('.brand-carousel').owlCarousel({
  loop:true,
  margin:-70,
  autoplay:false,
  dots: false,
  nav: true,
  navText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:6
    }
  }
});

/* ------------------------
   mypage
------------------------*/


