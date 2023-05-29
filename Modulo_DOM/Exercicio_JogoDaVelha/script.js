//Exercício - Jogo da Velha

//INICIO
document.getElementById("startBtn").addEventListener("click", function () {
    
  let playerX = [];
  let playerO = [];

  let inputCurrentPlayer = document.getElementById("nameCurrentPlayer");

  let cont = 0;

  let round = true;

  startGame();

  const namePlayerX = prompt("Nome do Jogador X:");
  const namePlayerO = prompt("Nome do Jogador O:");

  document.getElementById("startBtn").innerText = "Recomeçar Jogo!";

  inputCurrentPlayer.value = namePlayerX;

  //BTNS PRESSIONADOS
  let btnGame = document
    .querySelectorAll(".btnCaseGame")
    .forEach(function (ev) {
      ev.addEventListener("click", function (btnCase) {

        let btn = btnCase.currentTarget;

        if (round) {
          playerX.push(btn.id);

          btn.innerText = "X";

          btn.classList.add("playerX");

          inputCurrentPlayer.value = namePlayerO;
          console.log(playerX)
        } else {
          playerO.push(btn.id);
          btn.innerText = "O";

          btn.classList.add("playerO");

          inputCurrentPlayer.value = namePlayerX;
          console.log(playerO)
        }

        round = !round

        btn.setAttribute("disabled", true);

        winnerFunction();
      });
    });

  function winnerFunction() {
    let currentPlayerClass = round ? "caseWinO" : "caseWinX";

    let currentWinner = [playerX, playerO];
    currentWinner.forEach(function (ev) {
      if (ev.includes("btn1") && ev.includes("btn2") && ev.includes("btn3")) {
        document.getElementById("btn1").classList.add(currentPlayerClass);
        document.getElementById("btn2").classList.add(currentPlayerClass);
        document.getElementById("btn3").classList.add(currentPlayerClass);
        infoWin();
      } else if (
        ev.includes("btn4") &&
        ev.includes("btn5") &&
        ev.includes("btn6")
      ) {
        document.getElementById("btn4").classList.add(currentPlayerClass);
        document.getElementById("btn5").classList.add(currentPlayerClass);
        document.getElementById("btn6").classList.add(currentPlayerClass);
        infoWin();
      } else if (
        ev.includes("btn7") &&
        ev.includes("btn8") &&
        ev.includes("btn9")
      ) {
        document.getElementById("btn7").classList.add(currentPlayerClass);
        document.getElementById("btn8").classList.add(currentPlayerClass);
        document.getElementById("btn9").classList.add(currentPlayerClass);
        infoWin();
      } else if (
        ev.includes("btn1") &&
        ev.includes("btn4") &&
        ev.includes("btn7")
      ) {
        document.getElementById("btn1").classList.add(currentPlayerClass);
        document.getElementById("btn4").classList.add(currentPlayerClass);
        document.getElementById("btn7").classList.add(currentPlayerClass);
        infoWin();
      } else if (
        ev.includes("btn2") &&
        ev.includes("btn5") &&
        ev.includes("btn8")
      ) {
        document.getElementById("btn2").classList.add(currentPlayerClass);
        document.getElementById("btn5").classList.add(currentPlayerClass);
        document.getElementById("btn8").classList.add(currentPlayerClass);
        infoWin();
      } else if (
        ev.includes("btn3") &&
        ev.includes("btn6") &&
        ev.includes("btn9")
      ) {
        document.getElementById("btn3").classList.add(currentPlayerClass);
        document.getElementById("btn6").classList.add(currentPlayerClass);
        document.getElementById("btn9").classList.add(currentPlayerClass);
        infoWin();
      } else if (
        ev.includes("btn1") &&
        ev.includes("btn5") &&
        ev.includes("btn9")
      ) {
        document.getElementById("btn1").classList.add(currentPlayerClass);
        document.getElementById("btn5").classList.add(currentPlayerClass);
        document.getElementById("btn9").classList.add(currentPlayerClass);
        infoWin();
      } else if (
        ev.includes("btn3") &&
        ev.includes("btn5") &&
        ev.includes("btn7")
      ) {
        document.getElementById("btn3").classList.add(currentPlayerClass);
        document.getElementById("btn5").classList.add(currentPlayerClass);
        document.getElementById("btn7").classList.add(currentPlayerClass);
        infoWin();
      } else if (cont == 17) {
        nobodyWin();
      }
      cont += 1;
    });

    function infoWin() {
      document.querySelectorAll(".btnCaseGame").forEach(function (ev) {
        ev.setAttribute("disabled", true);
      });

      let currentPlayerName = round ? namePlayerO : namePlayerX;

      let InputWinner = document.getElementById("InputWinner");

      InputWinner.value = "🏆 " + currentPlayerName + " 🏆";

      document.getElementById("nameCurrentPlayer").value =
        "Jogue Novamente! 😁";
    }
  }

  function nobodyWin() {
    let InputWinner = document.getElementById("InputWinner");

    InputWinner.value = "Empate! 😒";

    document.getElementById("nameCurrentPlayer").value = "Jogue Novamente! 😁";
  }

  //FUNÇÃO DE INICIO DO JOGO
  function startGame() {
    document.querySelectorAll(".btnCaseGame").forEach(function (ev) {
      ev.removeAttribute("disabled");
      ev.innerText = "";
      ev.classList.remove("playerX", "playerO", "caseWinX", "caseWinO");
    });
    playerO = [];
    playerX = [];
    cont = 0;
  }
});
