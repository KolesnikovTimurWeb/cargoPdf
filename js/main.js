let registerBLock = document.querySelector('.register-block')
let loginBLock = document.querySelector('.login-container')
let globalBlock = document.querySelector('.global')
let buttonRegister = document.querySelector('.button-register')
let buttonLogin = document.querySelector('.register-back')

let inputs = document.querySelectorAll('input')

buttonRegister.addEventListener('click', function () {
   loginBLock.classList.remove('active')
   registerBLock.classList.add('active')
})
buttonLogin.addEventListener('click', function () {
   loginBLock.classList.add('active')
   registerBLock.classList.remove('active')
})

registerBLock.addEventListener('submit', function (ev) {
   ev.preventDefault()
   let login = registerBLock.querySelector('input[name="login"]')
   let password = registerBLock.querySelector('input[name="password"]')

   localStorage.setItem('login', login.value)
   localStorage.setItem('password', password.value)

   registerBLock.classList.remove('active')
   globalBlock.classList.add('active')
})

loginBLock.addEventListener('submit', function (ev) {
   ev.preventDefault()

   let login = localStorage.getItem('login')
   let password = localStorage.getItem('password')
   let loginCheck = loginBLock.querySelector('input[name="login"]')
   let passworCheck = loginBLock.querySelector('input[name="password"]')
   let error = loginBLock.querySelector('.error-form')
   let logo = document.querySelector('.logo')


   if (loginCheck.value !== login) {
      console.log('error')
      error.classList.add('active')
      return
   } else {
      error.classList.remove('active')
      console.log('true')
   }
   if (passworCheck.value !== password) {
      console.log('error')
      error.classList.add('active')
      return
   } else {
      error.classList.remove('active')
      console.log('true')
   }
   loginBLock.classList.remove('active')
   globalBlock.classList.add('active')
})



inputs.forEach(el => {
   el.addEventListener('change', function () {
      console.log(el.classList.value.includes('input'))
      if (el.classList.value.includes('weight-vehichal')) {
         localStorage.setItem('weight-vehichal', el.value)
      }
      if (el.classList.value.includes('lenght-vehichal')) {
         localStorage.setItem('lenght-vehichal', el.value)
      }
      if (el.classList.value.includes('height-vehichal')) {
         localStorage.setItem('height-vehichal', el.value)
      }
      if (el.classList.value.includes('width-vehichal')) {
         localStorage.setItem('width-vehichal', el.value)
      }
      if (el.classList.value.includes('name-track-vehichal')) {
         localStorage.setItem('name-track-vehichal', el.value)
      }
      if (el.classList.value.includes('fullname-vehichal')) {
         localStorage.setItem('fullname-vehichal', el.value)
      }
      if (el.classList.value.includes('country-vehichal')) {
         localStorage.setItem('country-vehichal', el.value)
      }
      if (el.classList.value.includes('city-vehichal')) {
         localStorage.setItem('city-vehichal', el.value)
      }
      if (el.classList.value.includes("raon-vehichal")) {
         localStorage.setItem("raon-vehichal", el.value)
      }
      if (el.classList.value.includes("house-vehichal")) {
         localStorage.setItem("house-vehichal", el.value)
      }
      if (el.classList.value.includes("numberhouse-vehichal")) {
         localStorage.setItem("numberhouse-vehichal", el.value)
      }
      if (el.classList.value.includes("email-vehichal")) {
         localStorage.setItem("email-vehichal", el.value)
      }
      if (el.classList.value.includes("name-vehichal")) {
         localStorage.setItem("name-vehichal", el.value)
      }
      if (el.classList.value.includes("markcar-vehichal")) {
         localStorage.setItem("markcar-vehichal", el.value)
      }
      if (el.classList.value.includes("modelcar-vehichal")) {
         localStorage.setItem("modelcar-vehichal", el.value)
      }
      if (el.classList.value.includes("tel-vehichal")) {
         localStorage.setItem("tel-vehichal", el.value)
      }

   })
})