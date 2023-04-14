//Exercicio - Calculo de Dano

//P1 - atacante
let nomeP1 =  prompt("Digite o nome do(a) personagem atacante:");
let ataqueP1 = parseFloat(prompt(nomeP1 + " - Digite a quantidade do poder de ataque:"));

//P2 - defensor
let nomeP2 =  prompt("Digite o nome do(a) personagem defensor:");
let vidaP2 = parseFloat(prompt(nomeP2 + " - Digite a quantidade de vida:"));
let defesaP2 = parseFloat(prompt(nomeP2 + " - Digite a quantidade do poder de defesa:"));
let escudoP2 = confirm(nomeP2 + " possui escudo?");

//qtde de dano
let qtdeDano = 0;
//condições para aplicar dano
if (ataqueP1 > defesaP2 && escudoP2 == false) {
    qtdeDano = ataqueP1 - defesaP2
} else if (ataqueP1 > defesaP2 && escudoP2 == true) {
    qtdeDano = (ataqueP1 - defesaP2) / 2
} else if (ataqueP1 < defesaP2) {
    qtdeDano = 0
};

//vida restante do p2
let vidaRestP2 = vidaP2 - qtdeDano;
//resultado do combate
let resultado = (qtdeDano > vidaP2) ? nomeP1 + " ganhou de " + nomeP2 : nomeP2 + " resistiu ao ataque de " + nomeP1;

//anuncio de informações
alert(
    "RESUMO\n\n" +
    nomeP1 +
    "\n  Poder de Ataque: " + ataqueP1 + "\n\n" +

    nomeP2 +
    "\n  Quantidade de vida: " + vidaP2 +
    "\n  Quantidade de defesa: " + defesaP2 +
    "\n  Possui escudo? " + (escudoP2 ? "Sim" : "Não") +

    "\n\n Combate:" +
    "\n  " + nomeP1 + " - Dano causado: " + qtdeDano +
    "\n  " + nomeP2 + " - Vida restante: " + vidaRestP2 +

    "\n\n RESULTADO DO COMBATE!!!" +
    "\n" + resultado
);

//anuncio de informações
console.log(
    "RESUMO\n\n" +
    nomeP1 +
    "\n  Poder de Ataque: " + ataqueP1 + "\n\n" +

    nomeP2 +
    "\n  Quantidade de vida: " + vidaP2 +
    "\n  Quantidade de defesa: " + defesaP2 +
    "\n  Possui escudo? " + (escudoP2 ? "Sim" : "Não") +

    "\n\n Combate:" +
    "\n  " + nomeP1 + " - Dano causado: " + qtdeDano +
    "\n  " + nomeP2 + " - Vida restante: " + vidaRestP2 +

    "\n\n RESULTADO DO COMBATE!!!" +
    "\n  " + resultado
);