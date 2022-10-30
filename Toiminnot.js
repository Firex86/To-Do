const kirjoitus = document.querySelector('.kirjoitusbox')
const nappi = document.querySelector('.lisaanappi')
const lista = document.querySelector('.todolista')

function painaNappia(e) {
    e.preventDefault()
    addTodo()
}

// Listätään To Do listaan
function addTodo() {
    const kaikkipalat = document.createElement('div')
    kaikkipalat.classList.add('kaikkipalat')

    const pala = document.createElement('p')
    pala.classList.add('pala')
    pala.innerText = kirjoitus.value
    kaikkipalat.appendChild(pala)

    // Tarkistetaan onko tyhjä ja annetaan varoitus
    if (kirjoitus.value === '') {
        alert("Tekstikenttä on tyhjä! Et voi lisätä listausta.")
    } else {

    const valmisbutton = document.createElement("button")
        valmisbutton.innerHTML = '<i class="buttontwo"></i>'
        valmisbutton.classList.add("valmis-button")
        kaikkipalat.appendChild(valmisbutton)

    const roskabutton = document.createElement("button")
        roskabutton.innerHTML = '<i class="buttontwo"></i>'
        roskabutton.classList.add("roska-button")
        kaikkipalat.appendChild(roskabutton)

    lista.appendChild(kaikkipalat)
    kirjoitus.value = ''
    }

    //Tallennus localStorageen
    localStorage.setItem('Listani', pala.innerText);
}

// Valmis ja poista toiminnot
function merkkaa(e) {
    const pala = e.target

    // Poista
    if (pala.classList[0] === 'roska-button') {
        const todolist = pala.parentElement
        todolist.remove()
    }
    
    // Valmis
    if (pala.classList[0] === 'valmis-button') {
        const todolist = pala.parentElement
        todolist.classList.toggle('valmis')
    }
    
    
}

nappi.addEventListener('click', painaNappia)
lista.addEventListener('click', merkkaa)
