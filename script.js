const listData = [{name: "Maria", age: 25, phone: 99999999}]


function includeData () {

  const name = document.querySelector('.name')
  const age = document.querySelector('.age').value
  const phone = document.querySelector('.phone').value

  if(name.value.length < 3) {
    alert("O nome precisa ter ao menos 3 caracteres")
    return
  }

  listData.push({name:name.value, age:age, phone:phone})

  list()
}

function validateData () {

  const name = document.querySelector('.name')
  const age = document.querySelector('.age')
  const phone = document.querySelector('.phone')

  if(name.value.length <= 2) {
    name.classList.remove("valid")
    name.classList.add("invalid")
  } else {
    name.classList.remove("invalid")
    name.classList.add("valid")
  }
}

function list () {

  let box = document.querySelector('.listBox')
  box.innerHTML = ''

  listData.forEach((person, i) => {
    box.innerHTML += `<div class="listUnit" id = ${i}> Nome: ${person.name} \n 
    idade: ${person.age} \n
    telefone: ${person.phone}
    <button onclick="activateEdit(${i})">editar</button>
    <button onclick="deleteData(${i})">remover</button>
    </div>`
  })
}


function deleteData (index) {

  const confirmation = confirm("Tem certeza que deseja excluir?")

  confirmation && listData.splice(index, 1)

  list()
}

function activateEdit (index) {

  const element = document.getElementById(index)

  element.innerHTML = `
  <form onsubmit="editData(${index}); return false">
    <input class="nameEdit" placeholder="Nome" type="text" value="${listData[index].name}" required>
    <input class="ageEdit" placeholder="Idade" type="number" value="${listData[index].age}" required>
    <input class="phoneEdit" placeholder="Telefone" type="tel" maxlength="11" value="${listData[index].phone}" required>
    <button type="submit">Salvar</button>
    <button onclick="list()">Cancelar</button>
  </form>
  `
}

function editData (index) {

  const name = document.querySelector('.nameEdit').value
  const age = document.querySelector('.ageEdit').value
  const phone = document.querySelector('.phoneEdit').value

  listData[index].name = name
  listData[index].age = age
  listData[index].phone = phone

  list()
}