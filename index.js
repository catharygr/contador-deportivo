const nombreHome = document.querySelector('#nombre-home')
const nombreGuest = document.querySelector('#nombre-guest')
const displayTime = document.querySelector('#display-time')

const displayHome = document.querySelector('#display-home')
const displayGuest = document.querySelector('#display-guest')

const homePuntos1 = document.querySelector('#home-puntos-1')
const homePuntos2 = document.querySelector('#home-puntos-2')
const homePuntos3 = document.querySelector('#home-puntos-3')

const guestPuntos1 = document.querySelector('#guest-puntos-1')
const guestPuntos2 = document.querySelector('#guest-puntos-2')
const guestPuntos3 = document.querySelector('#guest-puntos-3')

const btnStart = document.querySelector('#btn-start')

let puntosHome = 0
let puntosGuest = 0 

homePuntos1.addEventListener('click', function() {
  puntosHome += 1
  renderHomeDisplay(puntosHome)
})
homePuntos2.addEventListener('click', function() {
  puntosHome += 2
  renderHomeDisplay(puntosHome)
})
homePuntos3.addEventListener('click', function() {
  puntosHome += 3
  renderHomeDisplay(puntosHome)
})

function renderHomeDisplay(num) {
  displayHome.textContent = num
  colorGanador()
}

guestPuntos1.addEventListener('click', function() {
  puntosGuest += 1
  renderGuestDisplay(puntosGuest)
})
guestPuntos2.addEventListener('click', function() {
  puntosGuest += 2
  renderGuestDisplay(puntosGuest)
})
guestPuntos3.addEventListener('click', function() {
  puntosGuest += 3
  renderGuestDisplay(puntosGuest)
})

function renderGuestDisplay(num) {
  displayGuest.textContent = num
  colorGanador()
}

function colorGanador() {
  if(puntosHome > puntosGuest) {
    nombreHome.classList.remove('rojo')
    nombreHome.classList.remove('amarillo')
    nombreHome.classList.add('verde')

    nombreGuest.classList.remove('amarillo')
    nombreGuest.classList.remove('verde') 
    nombreGuest.classList.add('rojo')
  } else if(puntosHome < puntosGuest) {
    nombreHome.classList.remove('verde') 
    nombreHome.classList.remove('amarillo')
    nombreHome.classList.add('rojo')

    nombreGuest.classList.remove('amarillo')
    nombreGuest.classList.remove('rojo') 
    nombreGuest.classList.add('verde')
  } else {
    nombreHome.classList.remove('rojo') 
    nombreHome.classList.remove('verde') 
    nombreHome.classList.add('amarillo')

    nombreGuest.classList.remove('rojo')
    nombreGuest.classList.remove('verde')  
    nombreGuest.classList.add('amarillo')
  
  }
}

function elReloj() {
    btnStart.removeEventListener('click',startGame)
    let losSegundos = 120

    const temporizador = setInterval(function() {
      let losMinutos = Math.floor(losSegundos / 60)
      let losSegunditos = losSegundos % 60 

      if(losSegunditos < 10) {
        losSegunditos = '0' + losSegunditos
      }
      if (losMinutos < 10) {
        losMinutos = '0' + losMinutos
      }

      displayTime.innerHTML = `
      ${losMinutos} : ${losSegunditos}
      ` 
      losSegundos--
      if(losSegundos < 0) {
        clearInterval(temporizador)
        btnStart.addEventListener('click', startGame)
      }
    } ,1000)

  }


function startGame() {
  puntosHome = 0
  renderHomeDisplay(puntosHome)
  puntosGuest = 0
  renderGuestDisplay(puntosGuest)
  elReloj()
}

btnStart.addEventListener('click', startGame)