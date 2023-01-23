const SliderSelector = [...document.querySelectorAll('.SliderWrapper1')]
let SliderBtn = document.querySelectorAll('.SliderBtn')
let SliderBtnde = document.querySelectorAll('.SliderBtnactive')

SliderSelector.forEach((Slide , i) => {
let SliderBoxDimision = Slide.getBoundingClientRect();
let SliderBoxWidth = SliderBoxDimision.width;

SliderBtn[i].addEventListener('click' , () => {
    Slide.scrollLeft += SliderBoxWidth;
})

SliderBtnde[i].addEventListener('click' , () => {
    Slide.scrollLeft -= SliderBoxWidth;
})

})
