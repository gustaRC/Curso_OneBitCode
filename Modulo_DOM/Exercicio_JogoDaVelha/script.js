//Exercício - Jogo da Velha

let playerX = [];
let playerO = [];

let round = true;

let inputCurrentPlayer = document.getElementById("nameCurrentPlayer");

//BOTAO COMEÇAR JOGO!
document.getElementById("startBtn").addEventListener("click", function () {
  const namePlayerX = prompt("Nome do Jogador X:");
  const namePlayerO = prompt("Nome do Jogador O:");


  document.getElementById("startBtn").innerText = "Recomeçar Jogo!"
  
  inputCurrentPlayer.value = namePlayerX;
  let btnGame = document
    .querySelectorAll(".btnCaseGame")
    .forEach(function (ev) {
      ev.addEventListener("click", function (btnCase) {
        const btn = btnCase.currentTarget;
        if (round) {
          playerX.push(btn.id);
          btn.innerText = "X";
          btn.dataset.value = "X"
          btn.classList.add("playerX")
          round = false;
          inputCurrentPlayer.value = namePlayerO;
        } else {
          playerO.push(btn.id);
          btn.innerText = "O";
          btn.dataset.value = "O"
          btn.classList.add("playerO")
          round = true;
          inputCurrentPlayer.value = namePlayerX;
        }

        btn.setAttribute("disabled", true);

        winnerFunction();
      });
    });

  function winnerFunction() {
    let btn = document.querySelectorAll(".btnCaseGame")

    let currentPlayerName = round ? namePlayerO : namePlayerX

    let currentTarget = [playerX, playerO];
    currentTarget.forEach(function (ev) {
      if (ev.includes("btn1") &&
          ev.includes("btn2") &&
          ev.includes("btn3")
      ) {
        colorCase();
        infoWin();
      } else if (
        ev.includes("btn4") &&
        ev.includes("btn5") &&
        ev.includes("btn6")
      ) {
        infoWin();
      } else if (
        ev.includes("btn7") &&
        ev.includes("btn8") &&
        ev.includes("btn9")
      ) {
        infoWin();
      } else if (
        ev.includes("btn1") &&
        ev.includes("btn4") &&
        ev.includes("btn7")
      ) {
        infoWin();
      } else if (
        ev.includes("btn2") &&
        ev.includes("btn5") &&
        ev.includes("btn8")
      ) {
        infoWin();
      } else if (
        ev.includes("btn3") &&
        ev.includes("btn6") &&
        ev.includes("btn9")
      ) {
        infoWin();
      } else if (
        ev.includes("btn1") &&
        ev.includes("btn5") &&
        ev.includes("btn9")
      ) {
        infoWin();
      } else if (
        ev.includes("btn3") &&
        ev.includes("btn5") &&
        ev.includes("btn7")
      ) {
        infoWin();
      }
    });

    function colorCase(b1, b2, b3) {
      let currentPlayerColor = round ? "O" : "X"

      btn





    }


    function infoWin() {
      
      let btnGame = document.querySelectorAll(".btnCaseGame")
      btnGame.forEach(function (ev) {
        ev.setAttribute("disabled", true)
      })

      let winner = document.getElementById("winner")

      winner.value = "🏆 " + currentPlayerName + " 🏆"

      document.getElementById("nameCurrentPlayer").value = "Jogue Novamente! 😁"
    }
  }
});
