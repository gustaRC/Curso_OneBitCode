//Exercicio - Procurando Palíndromos

let palavra = prompt("Informe uma palavra:")
let comparativo = ""

for (let i = (palavra.length - 1); i >= 0 ; i--) {
    comparativo += palavra[i]
}

if (comparativo === palavra) {
    alert("É um palíndromo!")
} else {
    alert("Não é um palíndromo!")
}
