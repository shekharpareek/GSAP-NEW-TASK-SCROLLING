gsap.registerPlugin(ScrollTrigger);
const transform = gsap.utils.toArray(".transform");
const wrappers = gsap.utils.toArray(".wrapper");

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
const tr1 = gsap.timeline({
  delay: 0.5,
  value: 100,
});

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
    ease: "SlowMo.easeInOut",
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
  x: "-20%",
  y: "-10%",
  transformOrigin: "center left",
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
