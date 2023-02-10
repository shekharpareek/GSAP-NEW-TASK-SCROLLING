gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// First, select the element you want to animate
const element = document.querySelector(".wrapper");
const element2 = document.querySelector("#element2");

// Create a timeline for the animation
const tl = gsap.timeline();

// Animation-1
t1.to(element, {
  duration: 3.5, // the animation should last 1 second
  top: "-10%",
  left: "-20%", // rotate the element 360 degrees along the z-axis
  transformOrigin: "center center", // set the rotation origin to the center of the element
  scrollTrigger: {
    trigger: ".grid-lines-bg",
    start: "100px top",
    end: "+2500",
    scrub: true,
    pin: true,
    duration: 0.5,
    // ease: Power1.easeOut,
    ease: Power2.easeIn,
    stagger: 2,
    markers: true,
  },
});

t1.to(".wrapper-2", {
  duration: 3.5, // the animation should last 1 second
  top: "0%",
  left: "100px", // rotate the element 360 degrees along the z-axis
  transformOrigin: "center center", // set the rotation origin to the center of the element
  ScrollTrigger: {
    trigger: ".grid-lines-bg",
    start: "center center",
    end: "3000",
    scrub: true,
    duration: 2,
    markers: true,
  },
});
