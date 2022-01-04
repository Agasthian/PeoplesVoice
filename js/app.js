//******* FullPage.js Animation Scroll- custom script *****
var g_interval;
new fullpage('#fullpage', {
  licenseKey: 'GPLv3',
  //options
  anchors: [
    'home',
    'services',
    'aboutus',
    'vision',
    'ourprojects',
    'enquiry',
  ],

  //Scrolling
  scrollingSpeed: 900,
  autoScrolling: true,
  navigation: true,
  easing: 'easeInOutCubic',

  //Custom selector
  //lazyLoading: true,
  // Design
  responsiveWidth: 425,

  onLeave: (origin, desitination, direction) => {
    const section = desitination.item;
    const title = section.querySelector('h1');
    const titleh3 = section.querySelector('h3');
    const cardwrapper = document.querySelector('.cardWrapper');
    const sectionpara = document.querySelector('.paraS3');

    const tl = new TimelineMax({ delay: 1 });
    tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1 })
      .fromTo(titleh3, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1 })
      .fromTo(
        sectionpara,
        0.5,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0 },
        '-=0.5'
      );

    if (desitination.index === 1) {
      const headline = document.querySelector('.hero-wrapper__content__text');

      tl.fromTo(
        headline,
        0.5,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0 },
        '-=0.5'
      ).fromTo(cardwrapper, 0.5, { opacity: 0, y: 60 }, { opacity: 1, y: 0 });
    }

  },
  
  /************Auto Slide Feature for WE HERE YOU Section (Section 4) */

  afterLoad: function (origin, destination, direction) {
    clearInterval(g_interval);
    
    // 1000 milliseconds lapse
    const lapse = 3000;
    
    if(destination.item.querySelectorAll('.fp-slides').length){
      g_interval = setInterval(function () {
        fullpage_api.moveSlideRight();
      }, lapse);
    }
  },
});

//**************** GSAP animation**************
const hero = document.querySelector('.hero-wrapper__content');
const slider = document.querySelector('.slider_bg');
const logo = document.querySelector('.logo_img');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.hero-wrapper__content__text');
const sectionpara = document.querySelector('.paraS3');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: '0%' }, { height: '85%', ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: '100%' },
    { width: '80%', ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: '-100%' },
    { x: '0%', ease: Power2.easeInOut },
    '-=1.2'
  )
  .fromTo(logo, 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, '-=0.5')
  .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
  .fromTo(headline, 0.5, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, '-=0.5')
  .fromTo(
    sectionpara,
    0.5,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0 },
    '-=0.5'
  );

// ************* Slick Library *************
$('.cardWrapper').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//Service slider animation call
$('.project-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//import
// const bootstrap = require('bootstrap');

//Method to Auto Close hamburge nav
document.querySelector('.hero-wrapper').addEventListener('click', () => {
  document.querySelector('.toggler').checked = false;
});
document.querySelector('.s2').addEventListener('click', () => {
  document.querySelector('.toggler').checked = false;
});
document.querySelector('#menu-ul').addEventListener('click', () => {
  document.querySelector('.toggler').checked = false;
});
