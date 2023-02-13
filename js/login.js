
const listUser = JSON.parse(localStorage.getItem("listUser"));

const formLogin = document.getElementById("form-login")



formLogin.addEventListener('submit', function (event){

    event.preventDefault()
      
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

   const findUser = listUser.find((usuario) => usuario.email === email && usuario.password === password)
   
   if (findUser){
    localStorage.setItem("userLogged", JSON.stringify(findUser))
    
    window.location.href = './home.html'
   } else{
    alert ("Verifique seu e-mail e senha")
    event.target.reset()
   }
})