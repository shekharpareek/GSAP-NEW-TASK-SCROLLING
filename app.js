gsap.registerPlugin(ScrollTrigger);

const wrappers = gsap.utils.toArray(".wrapper");
const transform = gsap.utils.toArray(".transform");

// First, select the element you want to animate
// Create a timeline for the animation
t1 = gsap.timeline({});

// Animation - 1;

gsap.to(".container", {
  duration: 7.0,
  x: -400,
  y: -300,
  transformOrigin: "center left",
  scrollTrigger: {
    trigger: "container",
    start: "top",
    end: "+200",
    scrub: true,
    duration: 10,
    ease: "power3.in",
    stagger: 2,
    toggleActions: "restart none none none",
    markers: true,
    pin: true,
  },
});
// gsap.to(wrappers[0], {
//   duration: 6.0, // the animation should last 1 second
//   x: -950,
//   y: -600,
//   transformOrigin: "center center", // set the rotation origin to the center of the element
//   ease: "slow",
//   scrollTrigger: {
//     trigger: ".container",
//     start: "top center",
//     end: "+3200",
//     scrub: true,
//     duration: 10,
//     ease: "slow",
//     stagger: 2,
//     toggleActions: "restart none none none",
//     markers: true,
//     pin: true,
//   },
// });
// // // Animation - 2;
// gsap.to(wrappers[1], {
//   duration: 15,
//   margin: 70,
//   y: -300,
//   x: -100,
//   scrollTrigger: {
//     trigger: ".content--2",
//     start: "top center",
//     end: "+4000",
//     scrub: true,
//     duration: 10,
//     ease: "slow",
//     speed: "slow",
//     stagger: 2,
//     toggleActions: "restart none none none",
//     markers: true,
//     pin: true,
//   },
//   transformOrigin: "right top",
// });
// gsap.to(transform[0], {
//   duration: 8.0,
//   y: -500,
//   x: 500,
//   scrollTrigger: {
//     trigger: "transform",
//     start: "top center",
//     end: "+12000",
//     scrub: true,
//     duration: 11,
//     ease: "slow",
//     stagger: 3,
//     markers: true,
//     pin: true,
//   },
// });
