//Exercício - Jogo da Velha

//declarando variavel armazenadora dos players
let playerX = [];
let playerO = [];

//chamando o input
let inputCurrentPlayer = document.getElementById("nameCurrentPlayer");

//declaração contagem para o empate
let cont = 0;

//declaração de variavel booleana para definir a vez de cada player, adicionar o CSS, armazenar na variavel de cada player
let round = true;

//BOTAO COMEÇAR JOGO!
//addEL ao clicar o botão de "Começar Jogo!"
document.getElementById("startBtn").addEventListener("click", function () {
  //função armazenando tds as features iniciais do jogo
  startGame();

  //perguntando o nome de cada jogador e as armazenando
  const namePlayerX = prompt("Nome do Jogador X:");
  const namePlayerO = prompt("Nome do Jogador O:");

  //alteração do botao "Começar Jogo!" para "Recomeçar Jogo!"
  document.getElementById("startBtn").innerText = "Recomeçar Jogo!";

  //campo onde sera mostrado a vez de cada player
  inputCurrentPlayer.value = namePlayerX;

  //pegando os botoes/cases do tabuleiro
  //e adicionando um forEach, que percorrera por cada botão fazendo algo
  let btnGame = document
    .querySelectorAll(".btnCaseGame")
    .forEach(function (ev) {
      //adicionando um EventListener em cada botão
      ev.addEventListener("click", function (btnCase) {
        console.log("round: " + round);
        //variavel q armazenara o botao q foi pressionado naquele momento em especifico
        let btn = btnCase.currentTarget;
        //estrutura de condição que se baseara pela boolean round
        if (round) {
          //SE round for verdadeiro acontecerá tais coisas
          //o id do botao q foi apertado será adicionado na variavel armazenadora do player X
          playerX.push(btn.id);
          //botando o X no botao sinalizando que foi pressionado pelo player
          btn.innerText = "X";
          //adicionando a estilização no botao pressinado pelo player X
          btn.classList.add("playerX");
          //mostrando no campo de vez o proximo jogador, no caso jogador O
          inputCurrentPlayer.value = namePlayerO;
          //transformando o round em false para na proxima rodada cair no else na estrutura de condição
          round = false;
          console.log("X: " + playerX);
        } else {
          //SE round for falso acontecerá tais coisas
          //o id do botao q foi apertado será adicionado na variavel armazenadora do player O
          playerO.push(btn.id);
          //botando o O no botao sinalizando que foi pressionado pelo player
          btn.innerText = "O";
          //adicionando a estilização no botao pressinado pelo player O
          btn.classList.add("playerO");
          //mostrando no campo de vez o proximo jogador, no caso jogador X
          inputCurrentPlayer.value = namePlayerX;
          //transformando o round em true para na proxima rodada cair no if na estrutura de condição
          round = true;
          console.log("O: " + playerO);
        }
        //desabilitando o botao q foi pressionado
        btn.setAttribute("disabled", true);
        //chamando a função para verificar o ganhador
        winnerFunction();
      });
    });

  function winnerFunction() {
    //nome do jogador atual com base na variavel booleana round, q se for vdd será o nome do jogador O se nn sera o do jogador X
    let currentPlayerName = round ? namePlayerO : namePlayerX;
    //sera usado para definir a estilização para sinalizar o vencedor, q se round for vdd será estilizado para o jogador O se nn sera o do jogador X
    let currentPlayerClass = round ? "caseWinO" : "caseWinX";

    //variavel q armazenara os botoes pressinados pelos jogadores
    let currentWinner = [playerX, playerO];
    //forEach para percorrer tds os botoes pressionados para verificar se existe a combinação certa para haver um ganhador
    currentWinner.forEach(function (ev) {
      if (ev.includes("btn1") && ev.includes("btn2") && ev.includes("btn3")) {
        //adicionando a estilização da combinação de botoes para sinalizar um vencedor
        document.getElementById("btn1").classList.add(currentPlayerClass);
        document.getElementById("btn2").classList.add(currentPlayerClass);
        document.getElementById("btn3").classList.add(currentPlayerClass);
        //chamando a função para informar um ganhador
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
        //caso o contador seja igual a 17 ocorrera o processo de empate
        nobodyWin();
      }
      //adicionando mais 1 ao contador
      cont += 1;
    });

    function infoWin() {
      //pegando tds os botoes e os desabilitando
      document.querySelectorAll(".btnCaseGame").forEach(function (ev) {
        ev.setAttribute("disabled", true);
      });

      //pegando o input para mostrar o vencedor
      let InputWinner = document.getElementById("InputWinner");

      //mostrando o ganhador no input
      InputWinner.value = "🏆 " + currentPlayerName + " 🏆";

      //colocando no campo do jogador de vez a msg "Jogue novamente"
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
    //tirando tds os atributos desabilitados, limpando os campos com texto, tirando tds as estilizações dos botões
    document.querySelectorAll(".btnCaseGame").forEach(function (ev) {
      ev.removeAttribute("disabled");
      ev.innerText = "";
      ev.classList.remove("playerX", "playerO", "caseWinX", "caseWinO");
    });
    //alterando o valor do round para o contrario do valor atual
    // round = !round;
    //limpando as variaveis armazendoras
    playerO = [];
    playerX = [];
    //zerando o contador
    cont = 0;
  }
});
