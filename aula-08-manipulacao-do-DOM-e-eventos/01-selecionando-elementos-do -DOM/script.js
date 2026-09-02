//JAVASCRIPT

//Selecionando um elemento pela tag
const p0 = window.document.getElementsByTagName('p')[0]
// Alterando as caracteristicas do elemento
p0.style.color = 'yellow';
p0.innerText = "Mudei o texto"

const p1 = document.getElementsByTagName('p')[1]
p1.style.color = "black";

// Capturando o corpo do site
const corpoSite = window.document.body
// Mudando sua cor
corpoSite.style.background = "#2f2f2f"
// Acessando o conteudo de um elemento DOM
document.write('<br>No 2° paragrafo do site está escrito assim: ${p1.innerText}')