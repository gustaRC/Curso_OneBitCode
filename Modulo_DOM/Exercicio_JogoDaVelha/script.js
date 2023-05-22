//Exercício - Jogo da Velha

let playerX = []
let playerO = []

let round = true

let inputCurrentPlayer = document.getElementById("nameCurrentPlayer")

//BOTAO COMEÇAR JOGO!
document.getElementById("startBtn").addEventListener("click", function () {
    const namePlayerX = prompt("Nome do Jogador X:")
    const namePlayerO = prompt("Nome do Jogador O:")
    inputCurrentPlayer.value = namePlayerX

    let btnGame = document.querySelectorAll(".btnCaseGame").forEach(function (ev) {
        ev.addEventListener("click", function (btnCase) {
            const btn = btnCase.currentTarget
            if (round) {
                playerX.push(btn.id)
                btn.innerText = "X"
                round = false
                inputCurrentPlayer.value = namePlayerO
            } else {
                playerO.push(btn.id)
                btn.innerText = "O"
                round = true
                inputCurrentPlayer.value = namePlayerX
            }

            btn.setAttribute("disabled", true)
    
            winnerFunction()
        })
    })

    function winnerFunction() {
        let currentPlayer = round ? playerX : playerO
        if (currentPlayer.includes("btn1" && "btn2" && "btn3")) {
            infoWin()
        } else if (currentPlayer.includes("btn4" && "btn5" && "btn6")) {
            infoWin()
        } else if (currentPlayer.includes("btn7" && "btn8" && "btn9")) {
            infoWin()
        } else if (currentPlayer.includes("btn1" && "btn4" && "btn7")) {
            infoWin()
        } else if (currentPlayer.includes("btn2" && "btn5" && "btn8")) {
            infoWin()
        } else if (currentPlayer.includes("btn3" && "btn6" && "btn9")) {
            infoWin()
        } else if (currentPlayer.includes("btn1" && "btn5" && "btn9")) {
            infoWin()
        } else if (currentPlayer.includes("btn3" && "btn5" && "btn7")) {
            infoWin()
        }
    }

    function infoWin() {
        console.log("Teste")
    }
})







