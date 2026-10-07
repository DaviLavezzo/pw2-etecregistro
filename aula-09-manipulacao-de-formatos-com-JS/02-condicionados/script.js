// Javascript

const limite = 80;

function calcularVelocidade() {
    const inputVelo = document.querySelector('input#velocidade');
    const velocidade = Number(inputVelo.value)
    // Resultado
    const resultado = document.querySelector("div#resultado");
    resultado.innerHTML = `<p>Sua velocidade atual é de <strong>${velocidade} Km/h</strong></p>. O limite da via é de <strong>${limite} Km/h</strong>.`;
    // Condicionais
    if (velocidade > limite) {
        resultado.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade!</p>`;
    }
    else{
         resultado.innerHTML += `<p>Você está <strong>dentro do limite</strong> de velocidade. Dirija com cuidado!</p>`;
    }
}