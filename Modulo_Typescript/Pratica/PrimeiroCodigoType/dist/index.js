function enviarEspaço(nome, capitao) {
    var espaconave = {
        nome: nome,
        capitao: capitao,
        velocidade: 0,
        emMissao: true,
        tripulacao: []
    };
    alert("A nave ".concat(espaconave.nome, " comandada pelo capit\u00E3o ").concat(espaconave.capitao, " foi enviada em uma miss\u00E3o!"));
    return espaconave;
}
function acelerar(velocidadeD, espaconave) {
    if (espaconave.velocidade > velocidadeD) {
        alert("Reduzindo a velocidade da ".concat(espaconave.nome, " para ").concat(velocidadeD, "..."));
    }
    else if (espaconave.velocidade < velocidadeD) {
        alert("Aumentando a velocidade da ".concat(espaconave.nome, " para ").concat(velocidadeD, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(espaconave.nome, "..."));
    }
}
var nomeEspaconave = prompt("Insira o nome da nave a ser enviada.");
var capitaoEspaconave = prompt("Insira o nome do capitão da nave.");
var naveAtual = enviarEspaço(nomeEspaconave, capitaoEspaconave);
function veloc() {
    var vel = Number(prompt("Insira a velocidade para a qual deseja adicionar."));
    return vel;
}
acelerar(veloc(), naveAtual);
var teste;
teste = ["a1", "a2"];
var x1 = teste[0], x2 = teste[1];
