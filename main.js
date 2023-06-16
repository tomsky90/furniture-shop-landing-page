// mobile menu
const hamburgerBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.mobile-nav')
const body = document.querySelector('body')

hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
    body.classList.toggle('active')
})


//slider query selectors
const slider = document.querySelector('.slider');
const imgs = document.querySelectorAll('.slider-img')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')



let counter = 1;
const size = imgs[0].clientWidth;

console.log(size)
slider.style.transform = `translateX(-${size * counter}px)`

function changeSlide() {
        if(imgs[counter].id === "first-clone"){
        slider.style.transition = `none`
        counter = 1
        slider.style.transform = `translateX(-${size * counter}px)` }
    slider.style.transition = `transform 1s ease-out`;
    counter++;
    slider.style.transform = `translateX(-${size * counter}px)`;
    }
let intervalIndex = setInterval(changeSlide, 5000)

nextBtn.addEventListener('click', () => {
    clearInterval(intervalIndex)
    if(counter === imgs.length - 1) return
    slider.style.transition = `transform .5s ease-out`
    counter++
    slider.style.transform = `translateX(-${size * counter}px)`
    intervalIndex = setInterval(changeSlide, 5000)
})

prevBtn.addEventListener('click', () => {
    clearInterval(intervalIndex)
    if(counter <= 0 ) return
    slider.style.transition = `transform .5s ease-out`
    counter--
    slider.style.transform = `translateX(-${size * counter}px)`
    intervalIndex = setInterval(changeSlide, 5000)
})

slider.addEventListener('transitionend', () => {
    if(imgs[counter].id === "first-clone"){
        slider.style.transition = `none`
        counter = 1
        slider.style.transform = `translateX(-${size * counter}px)` 
    } else if (imgs[counter].id === "last-clone") {
        slider.style.transition = `none`
        counter = imgs.length - 2
        slider.style.transform = `translateX(-${size * counter}px)`
    }
})

