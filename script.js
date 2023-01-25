let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
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