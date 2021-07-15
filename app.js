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
}

// SCROLL DOWN EVENT
const deepLinkClick = document.querySelectorAll('.nav__page--item-numb a')
window.addEventListener('scroll', scrollDown)

function scrollDown() {
  var anchorMenu = [],
    heightScreen,
    stepMenu

  var navScroll = document.querySelector('.nav__scroll--text a')

  deepLinkClick.forEach((item) => {
    anchorMenu.push(item.hash)
  })

  section.forEach((item, index) => {
    index < 1 ? (heightScreen = item.offsetHeight) : heightScreen
  })

  stepMenu = Math.floor(window.scrollY / heightScreen)

  if (stepMenu < anchorMenu.length) {
    navScroll.style.display = 'block'
    navScroll.setAttribute('href', `${anchorMenu[stepMenu]}`)
  } else {
    navScroll.style.display = 'none'
  }
}
