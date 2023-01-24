var swiper = new Swiper(".mySwiper", {
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


const RevSlidCard = [...document.querySelector('.RevSlidCard')]
const PrevRev = [...document.querySelector('#NextRev')]
const NextRev = [...document.querySelector('#NextRev')]