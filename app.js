gsap.registerPlugin(ScrollTrigger);
const transform = gsap.utils.toArray(".transform");
const wrappers = gsap.utils.toArray(".wrapper");

// GSAP timelite (working on window load)
// Gsap set the elements initial values
gsap.set(".content--2", {
  xPercent: 50,
});
gsap.set(".content--2", {
  xPercent: 50,
});
gsap.set(".content--3", {
  xPercent: -20,
});
gsap.set(".content--4", {
  xPercent: 100,
});
const tr1 = gsap.timeline({});

tr1.to(".content--1", {
  duration: 120,
  x: "-20%",
  y: "-10%",
  ease: "power4",
  transformOrigin: "center center",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top",
    end: "bottom",
    scrub: true,
    duration: 90,
    end: "+=" + window.innerHeight * 2,
    stagger: 2,
    toggleActions: "restart none none none",
    markers: false,
    paused: true,
  },
});
tr1.to(".content--2", {
  duration: 120,
  // x: "-100%",
  // scale: 0,
  xPercent: 0,
  ease: "none",
  transformOrigin: "center center",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top",
    bottom: "bottom",
    scrub: true,
    duration: 90,
    ease: "none",
    stagger: 2,
    toggleActions: "restart none none none",
    markers: false,
  },
});
tr1.to(".content--2", {
  duration: 120,
  // x: "-100%",
  // scale: 0,
  y: "-50%",
  x: "50%",
  ease: "slow",
  value: 20,
  transformOrigin: "center right",
  scrollTrigger: {
    trigger: ".content--2",
    start: "top",
    end: "+=" + window.innerHeight * 4,
    bottom: "bottom",
    scrub: true,
    duration: 90,
    delay: 0.5,
    ease: "none",
    stagger: 2,
    toggleActions: "restart none none none",
    markers: false,
  },
});
tr1.to(".content--3", {
  duration: 120,
  xPercent: 30,
  yPercent: 80,
  transformOrigin: "center center",
  scrollTrigger: {
    trigger: ".content--3",
    start: "top",
    bottom: "bottom",
    scrub: true,
    duration: 90,
    ease: "none",
    stagger: 2,
    toggleActions: "restart none none none",
    markers: false,
  },
});
tr1.to(".content--3", {
  duration: 120,
  x: "-30%",
  y: "-10%",
  transformOrigin: "center center",
  scrollTrigger: {
    trigger: ".content--3",
    start: "top",
    bottom: "bottom",
    scrub: true,
    duration: 90,
    ease: "none",
    stagger: 2,
    toggleActions: "restart none none none",
    markers: false,
  },
});
tr1.to(".nav-items", {
  duration: 20,
  width: "100%",
  scrollTrigger: {
    trigger: ".nav",
    start: "top",
    end: "100px",
    scrub: true,
    duration: 20,
    ease: Power4.easeIn,
    stagger: 1,
  },
});

AOS.init();
