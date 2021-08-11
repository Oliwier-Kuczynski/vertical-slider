const slideLeft = document.querySelector('[data-slide-left]')
const slideRight = document.querySelector('[data-slide-right]')
const navArrowUp = document.querySelector('[data-navigation-arrow-up]')
const navArrowDown = document.querySelector('[data-navigation-arrow-down]')
const slidesLength = slideRight.querySelectorAll('div').length

let slideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

navArrowUp.addEventListener('click', () => slideSlides('up'))
navArrowDown.addEventListener('click', () => slideSlides('down'))

const slideSlides = (direction) => {
    if (direction === 'up') {
        slideIndex++;

        if(slideIndex > slidesLength - 1) {
            slideIndex = 0;
        }

    }else if(direction === 'down') {
       slideIndex--; 

       if(slideIndex < 0) {
            slideIndex = slidesLength - 1;
       }
    }

    slideLeft.style.transform = `translateY(${slideIndex * 100}vh)`
    slideRight.style.transform = `translateY(-${slideIndex * 100}vh)`
}
