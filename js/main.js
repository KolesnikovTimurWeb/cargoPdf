let registerBLock = document.querySelector('.register-block')
let loginBLock = document.querySelector('.login-container')
let globalBlock = document.querySelector('.global')
let buttonRegister = document.querySelector('.button-register')
let buttonLogin = document.querySelector('.register-back')

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

