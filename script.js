//Navbar
const navbar = document.querySelector('.navbar')
const navbarOffsetTop = navbar.offsetTop
const secciones = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')
const progreso = document.querySelector('.barra-progreso-wrapper')
const progresoBarPorciento = [97, 89, 85, 80, 70, 69]

window.addEventListener('scroll', () => {
  mainFn()
})

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('pegado')
  } else {
    navbar.classList.remove('pegado')
  }

  secciones.forEach((seccion, i) => {
    if (window.pageYOffset >= seccion.offsetTop - 10) {
      navbarLinks.forEach(navbarlink => {
        navbarlink.classList.remove('cambio')
      })
      navbarLinks[i].classList.add('cambio')
    }
  })

  if (window.pageYOffset + window.innerHeight >= progreso.offsetTop) {
    document.querySelectorAll('.progreso-porcentaje')
      .forEach((el, i) => {
        el.style.width = `${progresoBarPorciento[i]}%`
        el.previousElementSibling.firstElementChild.textContent = progresoBarPorciento[i]
      })
  }
}

mainFn()

window.onresize = function () {
  location.reload()
}
//Navbar final