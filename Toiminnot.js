const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// Listätään To Do listaan
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    // Tarkistetaan onko tyhjä ja annetaan varoitus
    if (inputtdl.value === '') {
        alert("Tekstikenttä on tyhjä! Et voi lisätä listausta.")
    } else {

    const valmisbutton = document.createElement("button")
    valmisbutton.innerHTML = '<i class="buttontwo"></i>'
    valmisbutton.classList.add("valmis-button")
    itemall.appendChild(valmisbutton)

    const roskabutton = document.createElement("button")
    roskabutton.innerHTML = '<i class="buttontwo"></i>'
    roskabutton.classList.add("roska-button")
    itemall.appendChild(roskabutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''
    }
}

// Valmis ja poista toiminnot
function okdel(e) {
    const item = e.target

    // Poista
    if (item.classList[0] === 'roska-button') {
        const todolist = item.parentElement
        todolist.remove()
    }

    // Valmis
    if (item.classList[0] === 'valmis-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('valmis')
    }

    
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)
