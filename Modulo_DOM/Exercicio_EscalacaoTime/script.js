//Exercicio - Escalação do Time



function addPlayer() {
    let listPlayers = document.getElementById("listPlayers")
    let positionPlayer = document.getElementById("positionPlayer").value
    let namePlayer = document.getElementById("namePlayer").value
    let numberPlayer = document.getElementById("nPlayer").value

    let section = document.createElement('section')
    section.id = "sectionPlayer"

    const h4 = document.createElement('h4')
    h4.innerText = "Jogador Escalado: "

    let liPosition = document.createElement('li')
    liPosition.textContent = "Posição: " + positionPlayer

    let liName = document.createElement('li')
    liName.textContent = "Nome do jogador: " + namePlayer
    
    let liNumber = document.createElement('li')
    liNumber.textContent = "Número do jogador: " + numberPlayer

    section.append(h4, liPosition)
    section.append(liName)
    section.append(liNumber ,document.createElement("br"))
    listPlayers.appendChild(section)
}

function removePlayer() {
    const listPlayers = document.getElementById("listPlayers")

    const sectionPlayer = document.getElementById("sectionPlayer")
    // listPlayers.removeChild(sectionPlayer)

    console.log(sectionPlayer)
}