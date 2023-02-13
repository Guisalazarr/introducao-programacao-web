const userLogged = JSON.parse(localStorage.getItem("userLogged"));

const listUser = JSON.parse(localStorage.getItem("listUser"));

document.addEventListener("DOMContentLoaded", function(){

   if (!userLogged){
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "./login.html"  
   }

})

let tableEl = document.getElementById("lista-contatos");
const formRecados = document.getElementById("recados-form");

formRecados.addEventListener ("submit", function(event) {
  event.preventDefault()
  
  const description = document.getElementById("imput-descricao").value
  const detalhamento = document.getElementById("imput-detalhamento").value

  const novoRecado = {
    description: description,
    detalhamento: detalhamento,
  };

  userLogged.recados.push(novoRecado);


  event.target.reset()
  saveOnStorage();
  renderTable();

});

function saveOnStorage() {
  localStorage.setItem("userLogged", JSON.stringify(userLogged));

  const findUser = listUser.findIndex((usuario) => usuario.email === userLogged.email) 

  listUser[findUser] = userLogged

  localStorage.setItem("listUser", JSON.stringify(listUser));
}

function renderTable() {
  tableEl.innerHTML = "";
  userLogged.recados.map((user, index) => {
    
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const deleteButton = document.createElement("button");
    const EditButton = document.createElement("button");

    deleteButton.setAttribute("class", "button-apagar");
    EditButton.setAttribute("class", "button-editar");

    deleteButton.setAttribute("onClick", `deleteErrand(${index})`);
    EditButton.setAttribute("onClick", `editErrand(${index})`);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    td4.appendChild(deleteButton);
    td4.appendChild(EditButton);

    td1.innerHTML = index + 1;
    td2.innerHTML = user.description;
    td3.innerHTML = user.detalhamento;
    deleteButton.innerHTML = "Apagar";
    EditButton.innerHTML = "Editar";
    tableEl.appendChild(tr);
  });
  }
renderTable();

function deleteErrand(index) {
  userLogged.recados.splice(index, 1);
  renderTable();
  saveOnStorage();
}

function editErrand(index) {
  const newDescricao = prompt("Digite descrição");
  const novoDetalhamento = prompt("Digite o recado");

  userLogged.recados[index].description = newDescricao;
  userLogged.recados[index].detalhamento = novoDetalhamento;
  renderTable();
  saveOnStorage();
}

const exit = document.getElementById('button-exit')
exit.addEventListener('click', () => {

    localStorage.removeItem('userLogged')

    window.location.href = './login.html'
})

