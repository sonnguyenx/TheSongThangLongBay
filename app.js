var nav = document.querySelectorAll('.nav__page--item')
var navText = document.querySelectorAll('.nav__page--item-text')
var section = document.querySelectorAll('.fullscreen')

// SCROLL HORVER
nav.forEach((item) => {
  item.addEventListener('mouseover', elementMouseover)
  item.addEventListener('mouseout', elementMouseout)
})

function elementMouseover() {
  this.querySelector('.nav__page--item-text').style.transform = 'translateX(0)'
  this.querySelector('.nav__page--item-text').style.transition = '.3s ease-in'
}

function elementMouseout() {
  this.querySelector('.nav__page--item-text').style.transform =
    'translateX(220%)'
}

// MENU SECTION ACTIVE
window.addEventListener('scroll', sectionScrollActive)

function sectionScrollActive() {
  section.forEach((item, index) => {
    if (
      window.scrollY >= item.offsetTop &&
      window.scrollY < item.offsetTop + item.offsetHeight
    ) {
      navText[index].classList.add('active')
    } else {
      navText[index].classList.remove('active')
    }
  })

  section.forEach((item) => {
    if (
      window.scrollY >= item.offsetTop &&
      window.scrollY < item.offsetTop + item.offsetHeight
    ) {
      navText[index].classList.add('activeSectionGradien')
    } else {
      navText[index].classList.remove('activeSectionGradien')
    }
  })
}

// SCROLL DOWN EVENT
window.addEventListener('scroll', scrollDown)

const deepLinkClick = document.querySelectorAll('.nav__page--item-numb a')
var navScroll = document.querySelector('.nav__scroll-effect--text a')

function scrollDown() {
  var anchorMenu = [],
    heightScreen,
    stepMenu

  deepLinkClick.forEach((item) => {
    anchorMenu.push(item.hash)
  })

  section.forEach((item, index) => {
    index < 1 ? (heightScreen = item.offsetHeight) : heightScreen
  })

  stepMenu = Math.floor(window.scrollY / heightScreen)

  if (stepMenu < anchorMenu.length) {
    // navScroll.style.display = 'block'
    navScroll.setAttribute('href', `${anchorMenu[stepMenu]}`)
  } else {
    navScroll.style.display = 'none'
  }
}

// HEADER HERO
window.addEventListener('scroll', headerHeroF)

function headerHeroF() {
  var headerHero = document.querySelector('.header-hero')
  var footer = document.querySelector('.footer')
  var nav = document.querySelector('.nav')
  var heightHero = headerHero.offsetHeight

  if (window.scrollY >= heightHero) {
    nav.classList.add('activeDisplay')
    footer.classList.add('activeDisplay')
  } else {
    nav.classList.remove('activeDisplay')
    footer.classList.remove('activeDisplay')
  }
}

// SET DATA-HEIGHT HEADER HERO
// var headerHero = document.querySelector('.header-hero')
// var dataHeight = headerHero.offsetHeight
// headerHero.setAttribute('data-height', dataHeight)

// console.log(headerHero)
