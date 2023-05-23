//Exercício - Jogo da Velha

let playerX = [];
let playerO = [];

let round = true;

let inputCurrentPlayer = document.getElementById("nameCurrentPlayer");

//BOTAO COMEÇAR JOGO!
document.getElementById("startBtn").addEventListener("click", function () {
  const namePlayerX = prompt("Nome do Jogador X:");
  const namePlayerO = prompt("Nome do Jogador O:");
  inputCurrentPlayer.value = namePlayerX;

  let btnGame = document
    .querySelectorAll(".btnCaseGame")
    .forEach(function (ev) {
      ev.addEventListener("click", function (btnCase) {
        const btn = btnCase.currentTarget;
        if (round) {
          playerX.push(btn.id);
          btn.innerText = "X";
          round = false;
          inputCurrentPlayer.value = namePlayerO;
          console.log(playerX);
        } else {
          playerO.push(btn.id);
          btn.innerText = "O";
          round = true;
          inputCurrentPlayer.value = namePlayerX;
        }

        btn.setAttribute("disabled", true);

        winnerFunction();
      });
    });

  function winnerFunction() {
    let currentTarget = [playerX, playerO];
    currentTarget.forEach(function (ev) {
      if (ev.includes("btn1") && ev.includes("btn2") && ev.includes("btn3")) {
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

    function infoWin() {
      console.log("Teste");
    }
  }
});
