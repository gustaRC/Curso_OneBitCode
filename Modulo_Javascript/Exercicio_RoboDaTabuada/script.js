//Exercicio - Robô da Tabuada

const numeroEscolhido = parseFloat(prompt("Digite um número:"))
let resultado = ""

for (let i = 1; i <= 20; i++) {
    resultado += numeroEscolhido + " x " + i + " = " + (numeroEscolhido * i) + "\n"
}

alert("Tabuada de " + numeroEscolhido + ":\n" + resultado)