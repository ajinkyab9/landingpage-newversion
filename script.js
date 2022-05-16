/* ---- particles.js config ---- */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ["#ffffff", "#356797"],
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 4,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 125,
      color: "#ffffff",
      opacity: 0.2,
      width: 0.75,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "left",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
