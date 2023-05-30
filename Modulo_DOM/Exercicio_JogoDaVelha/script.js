//Exercício - Jogo da Velha

//INICIO
document.getElementById("startBtn").addEventListener("click", function () {
    
  let playerX = [];
  let playerO = [];

  let inputCurrentPlayer = document.getElementById("nameCurrentPlayer");

  let cont = 0;

//declaração de variavel booleana para definir a vez de cada player, adicionar o CSS, armazenar na variavel de cada player
let round = true;

//BOTAO COMEÇAR JOGO!
//addEL ao clicar o botão de "Começar Jogo!"
document.getElementById("startBtn").addEventListener("click", function () {
  //função armazenando tds as features iniciais do jogo
  startGame();

  //perguntando o nome de cada jogador e armazenando elas para serem mostradas na vez de cada jogador
  const namePlayerX = prompt("Nome do Jogador X:");
  const namePlayerO = prompt("Nome do Jogador O:");

  document.getElementById("startBtn").innerText = "Recomeçar Jogo!";

  inputCurrentPlayer.value = namePlayerX;

  //BTNS PRESSIONADOS
  let btnGame = document
    .querySelectorAll(".btnCaseGame")
    .forEach(function (ev) {
      ev.addEventListener("click", function (btnCase) {
        console.log("round: " + round);
        //variavel q armazenara o botao q foi pressionado naquele momento em especifico
        let btn = btnCase.currentTarget;

        if (round) {
          playerX.push(btn.id);

          btn.innerText = "X";

          btn.classList.add("playerX");

          inputCurrentPlayer.value = namePlayerO;
          //transformando o round em false para na proxima rodada cair no else na estrutura de condição
          round = false;
          console.log("X: " + playerX);
        } else {
          playerO.push(btn.id);
          btn.innerText = "O";

          btn.classList.add("playerO");

          inputCurrentPlayer.value = namePlayerX;
          //transformando o round em true para na proxima rodada cair no if na estrutura de condição
          round = true;
          console.log("O: " + playerO);
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
      } else if (cont == 17) { //caso o contador seja igual a 17 ocorrera o processo de empate
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
    //alterando o valor do round para o contrario do valor atual
    round = !round;
    //limpando as variaveis armazendoras
    playerO = [];
    playerX = [];
    cont = 0;
  }
});
