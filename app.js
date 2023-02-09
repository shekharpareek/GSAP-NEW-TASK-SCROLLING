gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// First, select the element you want to animate
const element = document.querySelector(".wrapper");
const element2 = document.querySelector("#element2");

// Create a timeline for the animation
const tl = gsap.timeline();

// Add the animation to the timeline
tl.to(element, {
  duration: 3.5, // the animation should last 1 second
  top: -261,
  left: -1380, // rotate the element 360 degrees along the z-axis
  transformOrigin: "center center", // set the rotation origin to the center of the element
  scrollTrigger: {
    trigger: ".grid-lines-bg",
    start: "top top",
    end: "+=200",
    scrub: true,
    pin: true,
    ease: "slow(0.7, 0.7, false)",
    stagger: 2,
  },
});
// let verticalScrollOffset =
//   window.pageYOffset || document.documentElement.scrollTop;

// $("html, body").animate({ scrollTop: verticalScrollOffset }, "slow"); //slow Or fast option
