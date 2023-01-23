const SliderSelector = [...document.querySelectorAll('.SliderWrapper1')]

SliderSelector.forEach((Slide , i) => {
let SliderBoxDimision = Slide.getBoundingClientRect();
let SliderBoxWidth = SliderBoxDimision.width;
console.log(SliderBoxWidth);


})