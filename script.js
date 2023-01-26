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