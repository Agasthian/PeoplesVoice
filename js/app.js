//******* FullPage.js Animation Scroll- custom script *****
 new fullpage('#fullpage', {
   //options
  //  anchors:['section1', 'section2', 'section3','section4', 'section5', 'section6'],
   scrollingSpeed: 900,
   autoScrolling:true,
   navigation:true,
   onLeave: (origin, desitination, direction) =>{
     const section = desitination.item;
     const title = section.querySelector("h1");

     const tl = new TimelineMax({ delay: 1 });
     tl.fromTo( title, 0.5, {y:"50", opacity:0}, {y:"0", opacity:1});

     if(desitination.index === 1){
      const hero = document.querySelector('.hero-wrapper__content');
      const slider = document.querySelector('.slider_bg');
      const logo = document.querySelector('.logo_img');
      const hamburger = document.querySelector('.hamburger');
      const headline = document.querySelector('.hero-wrapper__content__text');
     
      tl.fromTo(hero,1, {height: "0%"}, {height:"95%", ease: Power2.easeInOut})
        .fromTo(hero,1.2, {width: "100%"}, {width :"80%", ease: Power2.easeInOut})
        .fromTo(slider,1.2,{ x : "-100%"}, {x:'0%', ease: Power2.easeInOut}, '-=1.2')
        .fromTo( logo, 0.5, {opacity: 0, y:-30}, {opacity:1, y:0}, '-=0.5')
        .fromTo( hamburger,  0.5, {opacity: 0, x:30}, {opacity:1, x:0}, '-=0.5')
        .fromTo( headline,  0.5, {opacity: 0, y:40}, {opacity:1, y:0}, '-=0.5')
     }
   }
 });

// **************** GSAP animation**************
 const hero = document.querySelector('.hero-wrapper__content');
 const slider = document.querySelector('.slider_bg');
 const logo = document.querySelector('.logo_img');
 const hamburger = document.querySelector('.hamburger');
 const headline = document.querySelector('.hero-wrapper__content__text');
 const sectionpara = document.querySelector('.about-wrapper__content__para');

 const tl = new TimelineMax();

 tl.fromTo(hero,1, {height: "0%"}, {height:"95%", ease: Power2.easeInOut})
   .fromTo(hero,1.2, {width: "100%"}, {width :"80%", ease: Power2.easeInOut})
   .fromTo(slider,1.2,{ x : "-100%"}, {x:'0%', ease: Power2.easeInOut}, '-=1.2')
   .fromTo( logo, 0.5, {opacity: 0, y:-30}, {opacity:1, y:0}, '-=0.5')
   .fromTo( hamburger,  0.5, {opacity: 0, x:30}, {opacity:1, x:0}, '-=0.5')
   .fromTo( headline,  0.5, {opacity: 0, y:40}, {opacity:1, y:0}, '-=0.5')
   .fromTo( sectionpara, 0.5, {opacity:0, y:40}, {opacity:1, y:0}, '-=0.5')

// ************* Slick Library *************
$('.cardWrapper').slick({
  
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
   focusOnSelect: true
  
});

//Service slider animation call
$('.project-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  
});