//Exercicio - Escalação do Time

function addPlayer() {
    //identificando a lista do HTML
    let listPlayers = document.getElementById("listPlayers")
    //identificando as propriedades do jogador
    let positionPlayer = document.getElementById("positionPlayer").value
    let namePlayer = document.getElementById("namePlayer").value
    let numberPlayer = document.getElementById("nPlayer").value

    //criando uma li com todas as propriedades do jogador
    let liPlayerEspecs = document.createElement('li')
    liPlayerEspecs.textContent = "Posição: " + positionPlayer + ";\n" + 
    "Nome do jogador: " + namePlayer + ";\n" +
    "Número do jogador: " + numberPlayer + ";\n"
    //adicionando uma id variavel que será usada para excluir o jogador depois
    liPlayerEspecs.id = "player" + numberPlayer
    //confirmar escalação
    let confirmPlayer = confirm("Confirmar escalação do jogador(a): \n" + namePlayer + " ( Nº: " + numberPlayer + ", Posição: " + positionPlayer + ")")
    
    //colocando o li na lista no HTML e resetando os campos de preenchimento
    if(confirmPlayer) {
        listPlayers.appendChild(liPlayerEspecs, document.createElement("br"))
        document.getElementById("positionPlayer").value = "ATQ"
        document.getElementById("namePlayer").value = ''
        document.getElementById("nPlayer").value = ''
    }
}

function removePlayer() {
    //identificando a lista do HTML
    const listPlayers = document.getElementById("listPlayers")

    //identificando o campo sobre o número do jogador a ser excluido
    const removePlayerNumber = document.getElementById("removePlayerNumber").value
    //identificando o id do jogador a ser excluido
    const playerToRemove = document.getElementById("player" + removePlayerNumber)
    //perguntando se quer mesmo remover o jogador
    const confirmRemove = confirm("Deseja remover jogador Nº" + removePlayerNumber + "?")

    //removendo o jogador da lista e resetando o campo de preenchimento
    if (confirmRemove) {
        listPlayers.removeChild(playerToRemove)
        document.getElementById("removePlayerNumber").value = ""
    }
    
}
