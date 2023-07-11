/*
let animation = anime({
  targets: '#square',
  translateX: 100,
  borderRadius: 50,
  duration: 2000,
  easing: 'linear',
  direction: 'alternate',
  loop: true
});


let animation1 = anime({
  targets: '#rod',
  rotate: [0, 360], // from 60 to -60 degrees
  duration: 3000,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});


let animation2 = anime({
  targets: '.segment',
  width: 20,
  duration: 300,
  delay: function(el, i, l) {
    return i * 500;
  },
  endDelay: 500,
  easing: 'linear',
  loop: true
});


let progress = document.querySelector('#progress');

let battery = {
  progress: '0%'
}

let icon = anime({
  targets: '.segment',
  width: 20,
  duration: 300,
  delay: anime.stagger(500),
  endDelay: 500,
  easing: 'linear',
  loop: true
});

let label = anime({
  targets: battery,
  progress: '100%',
  duration: 30000,
  easing: 'linear',
  round: 1,
  update: function() {
    progress.innerHTML = battery.progress
  },
  complete: function() {
    icon.pause();
    icon.seek(icon.duration);
  }
});

*/


let box = document.querySelector('#box');

let animation3 = anime({
  targets: '#content',
  translateY: [
    {value: 50, duration: 500},
    {value: 0, duration: 500, delay: 1500},
    {value: -53, duration: 500, delay: 500},
    {value: 0, duration: 500, delay: 2500},
    {value: 50, duration: 500, delay: 500},
    {value: 0, duration: 500, delay: 1500}
  ],
  translateX: [
    {value: 53, duration: 500, delay: 1000},
    {value: 0, duration: 500, delay: 2500},
    {value: -53, duration: 500, delay: 500},
    {value: 0, duration: 500, delay: 2500}
  ],
  easing: 'linear',
  begin: function() {
    box.style.borderBottom="none";
  },
  complete: function() {
    box.style.borderBottom="solid darkorange 3px";
  }
});
