// JAVASCRIPT

// Capturando o elemento da DOM
const caixaMagica = document.getElementById('caixaMagica')

// "Escutando" os eventos realizados com o elemento da DOM
caixaMagica.addEventListener('mouseenter', entradaMouse)

caixaMagica.addEventListener('mouseout', saidaMouse)

caixaMagica.addEventListener('click', clickMouse)

// Criando uma função
function entradaMouse(){
    caixaMagica.innerText = "Olá, Davi! ;)";
    caixaMagica.style.backgroundColor = 'blue'
}

function saidaMouse(){
    caixaMagica.innerText = "Tchau, até breve! ;(";
    caixaMagica.style.backgroundColor = 'red'
}

function clickMouse(){
    caixaMagica.innerText = "Você clicou!";
    caixaMagica.style.backgroundColor = 'purple'
}