// Javascript

// Capturando os campos
const inputN1 = window.document.querySelector('input#n1');
const inputN2 = window.document.querySelector('input#n2');
const resultado = document.querySelector("div#resultado");

// Funções da calculadora
function somar() {
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);

    // Somando os valores
    const soma = n1 + n2;

    // Exibindo o resultado
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>.`;
}

function subtrair() {
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);

    // Subtraindo os valores
    const subtracao = n1 - n2;

    // Exibindo o resultado
    resultado.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <strong>${subtracao}</strong>.`;
}

function multiplicar() {
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);

    // Multiplicando os valores
    const multiplicacao = n1 * n2;

    // Exibindo o resultado
    resultado.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a <strong>${multiplicacao}</strong>.`;
}

function dividir() {
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);

    // Dividindo os valores
    const divisao = n1 / n2;

    // Exibindo o resultado
    resultado.innerHTML = `A divisão entre ${n1} e ${n2} é igual a <strong>${divisao}</strong>.`;
}

function limpar() {
    resultado.innerHTML = "";
}