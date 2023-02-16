'use strict'

const nomeUsuario = document.getElementById('nome')
const nota = document.getElementById('nota')
const adicionar = document.getElementById('adicionar')

const fazerCalculoCard = function (nome, nota) {
    let nomeDados = nomeUsuario.value
    let notaDados = Number(String(nota.value).replace(',', '.'))
    
    
    let resposta = 'Erro'
    const container = document.getElementById('container')
    const novaDivVermelho = document.createElement('div')
    const novaDivVerde = document.createElement('div')
    container.appendChild(novaDivVermelho)
    container.appendChild(novaDivVerde)





    if (notaDados > 10) {
        novaDivVermelho.classList.add('itemVermelho')
        novaDivVermelho.innerHTML = ` <h1 class="nomeUsuario">${nomeDados}</h1><h2 class="nota">${resposta}</h2>`



    } else if (nome == '') {
        novaDivVermelho.classList.add('itemVermelho')
        novaDivVermelho.innerHTML = ` <h1 class="nomeUsuario">${resposta}</h1><h2 class="nota">${resposta}</h2>`


    } else if (!String(nome)) {
        novaDivVermelho.classList.add('itemVermelho')
        novaDivVermelho.innerHTML = ` <h1 class="nomeUsuario">${resposta}</h1><h2 class="nota">${resposta}</h2>`


    } else if (notaDados < 0) {
        novaDivVermelho.classList.add('itemVermelho')
        novaDivVermelho.innerHTML = ` <h1 class="nomeUsuario">${nomeDados}</h1><h2 class="nota">${resposta}</h2>`

    } else if (isNaN(notaDados)) {
        novaDivVermelho.classList.add('itemVermelho')
        novaDivVermelho.innerHTML = ` <h1 class="nomeUsuario">${nomeDados}</h1><h2 class="nota">${resposta}</h2>`

    } else if (notaDados == '') {
        novaDivVermelho.classList.add('itemVermelho')
        novaDivVermelho.innerHTML = ` <h1 class="nomeUsuario">${nomeDados}</h1><h2 class="nota">${resposta}</h2>`

    } else if (notaDados <= 5) {
        novaDivVermelho.classList.add('itemVermelho')
        novaDivVermelho.innerHTML = ` <h1 class="nomeUsuario">${nomeDados}</h1><h2 class="nota">${notaDados}</h2>`

    } else {
        novaDivVerde.classList.add('itemVerde')
        novaDivVerde.innerHTML = ` <h1 class="nomeUsuario">${nomeDados}</h1><h2 class="nota">${notaDados}</h2>`

    }


}
const mostrarResultados = () => {
    fazerCalculoCard(nome, nota)
}
adicionar.addEventListener('click', mostrarResultados)