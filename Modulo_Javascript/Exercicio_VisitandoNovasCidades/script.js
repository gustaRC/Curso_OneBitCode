//Exercicio - Visitando Novas Cidades

const turista = prompt("Qual seu nome?")

let viajou = confirm(turista + " já viajou?")

let lugares = ""
let qtdeViajens = 0

while (viajou == true) {
    lugares += prompt("Para aonde você viajou?") + "\n"
    ++qtdeViajens
    viajou = confirm(turista + " viajou para mais algum lugar?")
}
alert(turista + " viajou " + qtdeViajens + " vezes e visitou: \n" + lugares)