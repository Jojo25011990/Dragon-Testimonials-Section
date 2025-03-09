// *** Strict mode + Gsap Register Plugin - Text ***
'use strict';
gsap.registerPlugin(TextPlugin);

// *** Select Elements ***
// *** Section 01 - Heading ***
const h1 = document.querySelectorAll('span');
const leftSpan = document.querySelector('.span-left');
const centerSpan = document.querySelector('.span-center');
const rightSpan = document.querySelector('.span-right');

// *** Section 02 - Dragon + Clients ***
// *** Dragon ***
const dragon = document.querySelector('.section2__dragon');

// *** Client 01 - Man ***
const clientMan = document.querySelector('.section2__client-img--man');
const bubbleMan = document.querySelector('.section2__bubble--man');

// *** Client 02 - Woman ***
const clientWoman = document.querySelector('.section2__client-img--woman');
const bubbleWoman = document.querySelector('.section2__bubble--woman');

// *** Initialization Variable ***
let animGsapPlayed = false;

// *** Gsap Timeline ***
const TL = gsap.timeline();

// *** Gsap Timeline Dragon Start & End ***
const tlDragonStart = gsap.timeline({ paused: true });
const tlDragonEnd = gsap.timeline({ paused: true });

// *** Funcionality ***

// *** Section 01 - Heading, Gsap timeline ***
TL.from(leftSpan, {
  autoAlpha: 0,
  scale: 0,
  delay: 0.5,
  y: 150,
  x: 75,
  ease: 'power4.out',

  duration: 0.65,
})
  .from(
    rightSpan,
    {
      autoAlpha: 0,
      scale: 0,
      delay: 0.5,
      y: 150,
      x: 75,
      ease: 'power4.out',

      duration: 0.65,
    },
    '-=0.5'
  )
  .from(
    centerSpan,
    {
      autoAlpha: 0,
      scale: 0,
      delay: 0.5,
      y: 150,
      ease: 'bounce.out',
      duration: 1,
    },
    '-=0.5'
  );

//  *** Scroll Event - Trigger, Gsap Animation Dragon ***
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight * 0.75;

  if (scrollY > windowHeight && !animGsapPlayed) {
    animGsapPlayed = true;
    tlDragonStart.play();
  }
});

// *** Gsap Dragon Start + Text Bubbles  ***
tlDragonStart
  .to(bubbleMan, {
    autoAlpha: 1,
    duration: 0.2,
    onStart: () => {
      clientMan.classList.add('active');
    },
    onComplete: () => {
      setTimeout(() => {
        clientMan.classList.remove('active');
      }, 2000);
    },
  })
  .to(bubbleWoman, {
    autoAlpha: 1,
    duration: 0.2,
    delay: 0.5,
    onStart: () => {
      clientWoman.classList.add('active');
    },
    onComplete: () => {
      setTimeout(() => {
        clientWoman.classList.remove('active');
      }, 2000);
    },
  })
  .add(() => {
    dragon.classList.add('active');
  })
  .to([bubbleMan, bubbleWoman], {
    autoAlpha: 0,
    delay: 1,
    duration: 0.2,
    stagger: 0.5,
    onComplete: () => {
      setTimeout(() => {
        tlDragonEnd.play();
      }, 7500);
    },
  });

// *** Gsap Dragon End  + Text Bubbles ( Finish Animation )  ***
tlDragonEnd
  .to(bubbleMan, {
    autoAlpha: 1,
    duration: 0.2,
    onStart: () => {
      document.querySelector('.section2__bubble-text--man').textContent =
        "Phew, it's gone!";
      clientMan.classList.add('active');
    },
    onComplete: () => {
      setTimeout(() => {
        clientMan.classList.remove('active');
      }, 2000);
    },
  })
  .to(bubbleWoman, {
    autoAlpha: 1,
    duration: 0.2,
    delay: 0.5,
    onStart: () => {
      document.querySelector('.section2__bubble-text--woman').textContent =
        'Quiet, please!';
      clientWoman.classList.add('active');
    },
    onComplete: () => {
      setTimeout(() => {
        clientWoman.classList.remove('active');
      }, 2000);
    },
  })
  .to([bubbleMan, bubbleWoman], {
    autoAlpha: 0,
    delay: 1,
    duration: 0.2,
    stagger: 0.5,
  });
