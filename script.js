//hamburger js
const togglebtn = document.getElementsByClassName('toggle-btn')[0] //to get first item in array
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

togglebtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//carousel js
const track = document.querySelector('.carousel-track') //shows null
const slides = Array.from(track.children)
const leftbtn = document.querySelector('.carousel-btn-left')
const rightbtn = document.querySelector('.carousel-btn-right')
console.log(track)

const slideWidth = slides[0].getBoundingClientRect().width

//used to arrage slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

// console.log(track.children)
//need to make arrows work in the correct direction
rightbtn.addEventListener('click', (e) => {
  //before slide moves need to make sure we know what slide we're on
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling
  const amountToMove = nextSlide.style.left
  track.style.transform = 'translateX(-' + amountToMove + ')'
  currentSlide.classList.remove('.current-slide')
  nextSlide.classList.add('.current-slide')
})

leftbtn.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide')
  const previousSlide = currentSlide.previousElementSibling
  const amountToMove = nextSlide.style.right
  track.style.transform = 'translateX(-' + amountToMove + ')'
  currentSlide.classList.remove('.current-slide')
  previousSlide.classList.add('.current-slide')
})
