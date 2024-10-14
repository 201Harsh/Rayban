Shery.imageEffect('.back', {
  style: 5,
  config: {
    a: { value: 1.15, range: [0, 30] },
    b: { value: -0.97, range: [-1, 1] },
    zindex: { value: '4', range: [-9999999, 9999999] },
    aspect: { value: 1.8601307189542484 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.23, range: [0, 2] },
    discard_threshold: { value: 0.43, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.41, range: [0, 2] },
    noise_scale: { value: 11.45, range: [0, 100] }
  },
  gooey: true
})

var img = document.querySelector('.imgdiv img')

var top = document.querySelector('.top')

images =[ 
  "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1683133947766-40b4c2e4f314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHBvcnRyYWl0fGVufDB8fDB8fHww"
];

var elems = document.querySelectorAll('.elem')

elems.forEach(function (ele) {
  var h1 = ele.querySelectorAll('h1')
  var index = 0
  var currentIndex = 0;
  var animating = false

  top.addEventListener('click', function () {
    if (!animating) {
      animating = true
      img.src = images[currentIndex];
      gsap.to(h1[index], {
        top: '-=100%',
        duration: 1,
        ease: 'expo.Inout',
        onComplete: function () {
          gsap.set(this._targets[0], { top: '100%' })
          animating = false
        }
      })

      index === h1.length - 1 ? (index = 0) : index++;
      currentIndex = (currentIndex + 1) % images.length;
          

      gsap.to(h1[index], {
        top: '-=100%',
        duration: 1,
        ease: 'expo.Inout'
      })
    }
  });
});
