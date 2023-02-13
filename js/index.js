const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

const formIndex = document.getElementById("form-index")


formIndex.addEventListener("submit", function(event) {

      event.preventDefault()

      let newUser = {}
      

      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const repeatPassword = document.getElementById(
          "repeat-password"
        ).value

        const findUser = listUser.some((usuario) => usuario.email === email)

        if(findUser){
          event.target.reset()
          return alert ("Usuário já cadastrado")
          
        }

        if (repeatPassword !== password) {
          event.target.reset()
          return alert("Senhas divergentes.");
          }     
          
          
          newUser = {
              email: email,
              password: password,
              recados: [],
        
          }
          listUser.push(newUser);
  
          localStorage.setItem("listUser", JSON.stringify(listUser))
          
          alert('Conta criada com sucesso')
          window.location.href = './login.html'       
});
