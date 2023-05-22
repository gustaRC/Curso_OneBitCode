//Exercício - Jogo da Velha

let playerX = document.getElementById("inputJogadorX")
let playerO = document.getElementById("inputJogadorO")
let inputName = document.getElementsByClassName("inputJogador")
const startBtn = document.getElementById("startBtn").addEventListener("click", function() {
    
    if (playerX.value != null) {
        inputName.setProperty(inputName.value, "")
        inputName.setProperty(inputName.placeholder, "Jogador O")
        inputName.setProperty(inputName.id, "inputJogadorO")
    }
    console.log(playerX.value)
    console.log(playerO.value)
})





