'use strict'

let swiper = new Swiper(".mySwiper", {
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



const Slides = document.querySelectorAll('.RevSlidCard');


let counter = 0;


Slides.forEach((sld , index) => {
  sld.style.left = `${index * 100}%`;
});

const Slideimage = () => {
  Slides.forEach((sld) => {
    sld.style.transform = `translateX(-${counter * 100}%)`;
  })
}

const prev = () =>{
  counter--
  Slideimage()
}

const next = () =>{
  counter++
  Slideimage()
}


const burgermenuBtn = document.querySelector('#Burgermenu')
const navigation = document.querySelector('.navigation')
const navigationAc = document.querySelector('.navigation ul')
const SectionLastBox = document.querySelector('.SectionLastBox')
const logo = document.querySelector('#DeactiveBloks')
const header = document.querySelector('.header')
const headerLastChild = document.querySelector('.headerLastChild')

 function clicker() {
  if (burgermenuBtn.className === 'Burgermenu') {
    burgermenuBtn.className = 'Burg-active'
    navigation.className = 'navigationAc'
    navigationAc.style = `display:flex; `;
    logo.style.display = 'none';
    header.style = `width:auto; height:auto; margin:0;`;
  }else{
    burgermenuBtn.className = 'Burgermenu'
    navigationAc.style.display = 'none';
    logo.style.display = 'block';
    navigation.className = 'navigation'
    header.style = `width:100%; height:48px; margin-top: 16px;`;
  }

}


