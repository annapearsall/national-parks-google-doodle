// GSAP included in `index.html`
const svg = document.querySelector('svg');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

svg.addEventListener("mouseenter", function () {
  
  gsap.to("text", {
    fill: '#fff',
    duration: 1,
})
});

svg.addEventListener("mouseleave", function () {
  
  gsap.to("text", {
  fill: 'transparent',
    duration: 1,
})
});

sun.addEventListener("click", toggleDark);
moon.addEventListener("click", toggleLight);



function toggleDark(){
  gsap.to("#sun", {
    x: 500, 
  y: 300,
    duration: 2,
  })
  gsap.fromTo("#moon", {
    x: -500,
    y: 300,
    duration: 2,
  },{x: 0, y: 0, duration: 2,})
    gsap.to(".cls-1", {
    fill: '#27407e',
      duration: 2,
})
  gsap.to(".cls-3", {
    fill: '#857e71',
    duration: 2,
})
  gsap.to(".cls-4", {
    fill: '#393c4e',
    duration: 2,
})
  gsap.to(".cls-6", {
    fill: '#40521f',
    duration: 2,
})
  gsap.to(".cls-8", {
    fill: '#9d5030',
    duration: 2,
})
  gsap.to(".cls-9", {
    fill: '#172560',
    duration: 2,
})
}
// var dark = {
  
// };
function toggleLight(){
  gsap.to("#moon", {
    x: 500, 
  y: 300,
    duration: 2,
  })
  gsap.fromTo("#sun", {
    x: -500,
    y: 300,
    duration: 2,
  },
              {x: 0, y: 0, duration: 2,
              
              }
             )
  gsap.to(".cls-1", {
    fill: '#cbecfc',
    duration: 2,
})
  gsap.to(".cls-3", {
    fill: '#c2b59b',
    duration: 2,
})
  gsap.to(".cls-4", {
    fill: '#594a42',
    duration: 2,
})
  gsap.to(".cls-6", {
    fill: '#b5d777',
    duration: 2,
})
  gsap.to(".cls-8", {
    fill: '#c75727',
    duration: 2,
})
  gsap.to(".cls-9", {
    fill: '#672700',
    duration: 2,
})
};
