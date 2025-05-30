ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "+=100%",
  pin: true,
  pinSpacing: false,
});

// Move the overlay in the second section up
gsap.to(".pin .overlay", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".pin",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  },
});

let split = SplitText.create(".split", { type: "words, chars" });

const tl = gsap.timeline();

tl.from(
  ".heroimage img",
  {
    duration: 1.5,
    ease: "expo.out",
    autoAlpha: 0,
    y: 30,
  },
  "a"
);

// now animate the characters in a staggered fashion
tl.from(
  split.words,
  {
    duration: 0.9,
    ease: "expo.out",
    y: 100, // animate from 100px below
    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
    stagger: 0.04, // 0.05 seconds between each
  },
  "a"
);


