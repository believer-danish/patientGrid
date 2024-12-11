window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".header-anim", {
    y: -100,
    duration: 1,
    stagger: 0.2,
  });
  gsap.from(".hero-anim1", {
    x: -1000,
    scale: 0,
    duration: 1,
    stagger: 0.2,
  });
  gsap.to(".tilt-anim", {
    x: -1000,
    scale: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      scroller: "body",
      //   markers: true,
      trigger: ".tilt-anim",
      scrub: 2,
      start: "end 0%",
    },
  });
  gsap.from(".service-anim", {
    y: -300,
    scale: 0,
    scrollTrigger: {
      scroller: "body",
      //   markers: true,
      trigger: ".service-anim",
      scrub: 2,
      start: "top 50% ",
    },
  });
  gsap.from(".service-anim2", {
    y: -300,
    scale: 0,
    scrollTrigger: {
      scroller: "body",
      //   markers: true,
      trigger: ".service-anim2",
      scrub: 2,
      start: "top 50% ",
    },
  });
  gsap.from(".service-anim3", {
    y: -300,
    scale: 0,
    scrollTrigger: {
      scroller: "body",
      //   markers: true,
      trigger: ".service-anim3",
      scrub: 2,
      start: "top 50% ",
    },
  });
  gsap.from(".contact-anim", {
    x: -1000,

    scrollTrigger: {
      scroller: "body",
      //   markers: true,
      trigger: ".contact-anim",
      scrub: 2,
      start: "top 100% ",
      end: "top 30%",
    },
  });
  gsap.from(".trial-anim", {
    x: 1000,

    scrollTrigger: {
      scroller: "body",
      //   markers: true,
      trigger: ".trial-anim",
      scrub: 2,
      start: "top 100% ",
      end: "top 30%",
    },
  });
});
