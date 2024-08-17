var loader = document.getElementById("preloader");
var body = document.getElementById("body");
window.addEventListener("load", function(){
    loader.style.display = "none";
    body.style.animation = "transitionIn 0.75s ease-in-out";
});

let clip = document.querySelector(".innovVideo1");
clip.addEventListener("mouseover", function (e) { 
  clip.play(); 
}); 
clip.addEventListener("mouseout", function (e) { 
  clip.pause(); 
});

let clip2 = document.querySelector(".innovVideo2");
clip2.addEventListener("mouseover", function (e) { 
  clip2.play(); 
}); 
clip2.addEventListener("mouseout", function (e) { 
  clip2.pause(); 
});

let clip3 = document.querySelector(".innovVideo3");
clip3.addEventListener("mouseover", function (e) { 
  clip3.play(); 
}); 
clip3.addEventListener("mouseout", function (e) { 
  clip3.pause(); 
});

let clip4 = document.querySelector(".innovVideo4");
clip4.addEventListener("mouseover", function (e) { 
  clip4.play(); 
}); 
clip4.addEventListener("mouseout", function (e) { 
  clip4.pause(); 
});

let clip5 = document.querySelector(".innovVideo5");
clip5.addEventListener("mouseover", function (e) { 
  clip5.play(); 
}); 
clip5.addEventListener("mouseout", function (e) { 
  clip5.pause(); 
});

function canvas(){
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 30;

const currentFrame = (index) => `./asus/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "15%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".ball-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 0 });
    },
  }
);

window.addEventListener("resize",function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}
}
canvas()

function canvas2(){
const canvas = document.querySelector(".canvas2");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 110;

const currentFrame = (index) => `./graphic card/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 2.5,
    pin: "canvas2",
    end: "300%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".ball-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 0 });
    },
  }
);

window.addEventListener("resize",function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}
}
canvas2()


function canvas3(){
  const canvas = document.querySelector(".canvas3");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 75;

const currentFrame = (index) => `./key/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 6.5,
    pin: "canvas3",
    start: "400%",
    end: "400%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".ball-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "60%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 0 });
    },
  }
);

window.addEventListener("resize",function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}
}
canvas3()

function hidden(){
  
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
}
hidden()


function hidden1(){
  
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show1')
    }else{
      entry.target.classList.remove('show1')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));
}
hidden1()

function hidden2(){
  
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show2')
    }else{
      entry.target.classList.remove('show2')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden2');
hiddenElements.forEach((el) => observer.observe(el));
}
hidden2()

function slider(){
  
const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 3000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}
}
slider()


