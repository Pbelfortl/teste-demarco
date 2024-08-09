const listData = [{name: "Maria", age: 25, phone: 99999999}]


function includeData () {

  let box = document.querySelector('.listBox')
  const name = document.querySelector('.name').value
  const age = document.querySelector('.age').value
  const phone = document.querySelector('.phone').value

  listData.push({name:name, age:age, phone:phone})  

  list()
}

function list () {

  let box = document.querySelector('.listBox')
  box.innerHTML = ''

  listData.forEach((person, i) => {
    console.log("i")
    box.innerHTML += `<div class="listUnit" id = ${i}> Nome: ${person.name} | 
    idade: ${person.age} | 
    telefone: ${person.phone}
    <button onclick="activateEdit(${i})">editar</button>
    <button onclick="deleteData(${i})">remover</button>
    </div>`
  })
}


function deleteData (index) {

  const confirmation = confirm("Tem certeza que deseja excluir?")

  if(confirmation){
    listData.splice(index, 1)
  }

  list()
}

function activateEdit (index) {

  const element = document.getElementById(index)

  element.innerHTML = `
  <form onsubmit="editData(${index}); return false">
    <input class="nameEdit" placeholder="Nome" type="text" value="${listData[index].name}" required>
    <input class="ageEdit" placeholder="Idade" type="number" value="${listData[index].age}" required>
    <input class="phoneEdit" placeholder="Telefone" type="number" value="${listData[index].phone}" required>
    <button type="submit">Salvar</button>
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