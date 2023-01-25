// GetByTag
const titulos = document.getElementsByTagName('h2');
titulos[0].innerText = 'Texto alterado'

//getById
const titulo1 = document.getElementById('titulo1');
titulo1.style.color = 'red'

//getByName
const tituloName = document.getElementsByName('titulo2');
tituloName[0].style.color = 'yellow'

//getByClass
const tituloErros = document.getElementsByClassName('erro');
for (let index = 0; index < tituloErros.length; index++) {
    tituloErros[index].style.fontSize = '70px'
}

// QuerySelector
const tituloSelector = document.querySelector('h2#titulo1')
tituloSelector.style.color = 'purple'

//QuerySelectorAll
const tituloSelectorAll = document.querySelectorAll('.erro')
tituloSelectorAll.forEach((element) => {
    element.style.fontStyle = 'italic';
    element.innerText = `${element.innerText} + texto novo`
})

// Criando elementos no script para inclusão no HTML - sintaxe
const paragrafo = document.createElement('p');
paragrafo.innerText = 'meu textinho com appendChild';
paragrafo.style.color = 'red';

// Adicionar elemento criado no HTML com appendChild
document.body.appendChild(paragrafo)


const paragrafo2 = document.createElement('p');
paragrafo2.innerText = 'meu outro textinho com insertBefore';
paragrafo2.style.color = 'blue';

// Adicionar elemento criado no HTML com insertBefore
document.body.insertBefore(paragrafo2, titulo1)

// Removendo um elemento da árvore 
// const elementoParaRemover = document.getElementById('titulo1');
// elementoParaRemover.remove();

