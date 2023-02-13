gsap.registerPlugin(ScrollTrigger);

// First, select the element you want to animate
const element = document.querySelector(".wrapper");
const element2 = document.querySelector("#element2");
let maxWidth = 0;
// Create a timeline for the animation
t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-bg",
    start: "top",
    end: "+2500",
    scrub: 3,
    pin: true,
    duration: 0.5,
    ease: "slow",
    stagger: 3,
    markers: true,
  },
});
// Animation-1
t1.to(element, {
  duration: 5.0, // the animation should last 1 second
  top: "-12%",
  left: "-20%", // rotate the element 360 degrees along the z-axis
  transformOrigin: "center center", // set the rotation origin to the center of the element
  ease: "slow",
});
// Animation-2
t1.to(".transform", {
  duration: 4.0,
  top: "30%",
  left: "160%",
  transformOrigin: "left top",
  ease: "slow",
  opacity: 0,
});
// Animation-3
t1.to(".wrapper-2", {
  duration: 1.0,
  left: "3%",
  top: "6%",
  transformOrigin: "center center",
  ease: "slow",
});
