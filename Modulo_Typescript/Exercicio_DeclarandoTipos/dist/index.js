let spaceships = [];
function newSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    let nameSpacehips = [];
    spaceships.forEach(el => nameSpacehips.push(el.name));
    if (nameSpacehips.find(el => spaceship.name === el)) {
        alert(`O nome declarado já existe, escolha outro diferente de ${spaceship.name}`);
    }
    else {
        spaceships.push(spaceship);
        alert(`A espaçonave ${spaceship.name} pilotada por ${spaceship.pilot} com tripulação limite de ${spaceship.crewLimit} tripulantes, foi registrada!`);
    }
}
function searchSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(el => el.name === name);
    return spaceship;
}
function addCrew(member, spaceship) {
    if (spaceship.crew.length < spaceship.crewLimit) {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado(a) com sucesso a tripulação da nave ${spaceship.name}!
    Tripulação: ${spaceship.crew.length}/${spaceship.crewLimit}`);
    }
    else {
        alert(`Ocorreu um erro!
    Você está tentando adicionar mais membros do que o permitido, limite maximo: ${spaceship.crewLimit}`);
    }
}
function sendMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada. Nave já em missão`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada. Tripulação insuficiente.`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} enviada para a missão!`);
    }
}
function firtsMenuOptions() {
    const name = prompt("Qual é o nome da nave a ser registrada?");
    const pilot = prompt(`Qual é o nome do piloto da ${name}?`);
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta?`));
    const confirmation = confirm(`Confirma o registro da nave? \n - Nome: ${name}\n - Piloto: ${pilot}\n - Limite da tripulação: ${crewLimit}`);
    if (confirmation) {
        newSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOptions() {
    const member = prompt("Qual o nome do membro que vai ser adicionado?");
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
    const spaceship = searchSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrew(member, spaceship);
        }
    }
}
function thirdMenuOptions() {
    const spaceshipName = prompt(`Qual o nome da nave que deverá ser enviada?`);
    const spaceship = searchSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma o envio da ${spaceship.name} na missão?`);
        if (confirmation) {
            sendMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = `Naves registradas:\n`;
    spaceships.forEach((spaceship) => {
        list += `
      Nave: ${spaceship.name},
      Piloto: ${spaceship.pilot},
      Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
      Limite máximo de tripulantes: ${spaceship.crewLimit}
      Tripulantes: ${spaceship.crew.length}
    `;
        spaceship.crew.forEach(member => {
            list += `   - ${member}, `;
        });
    });
    alert(list);
}
/**
 * Menu
 */
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firtsMenuOptions();
            break;
        case 2:
            secondMenuOptions();
            break;
        case 3:
            thirdMenuOptions();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
