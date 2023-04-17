//Exercicio - Fila de Espera

let fila = ["Fulano", "Sicrano"]

let escolha = ""

let filaUlt = []

do {
    let posFila = ""

    for (let i = 0; i < fila.length; i++) {

        posFila += " - " + (i + 1) + ". " + fila[i] + "\n" 
    }

    escolha = prompt("Consultorio Médico\n" + "Fila de espera:\n" +
    posFila + "\n" + "Menu:\n" + "1 - Novo paciente\n" + "2 - Consultar paciente\n" + "3 - Sair")

    if (escolha == "1") {
        fila.push(prompt("Qual o nome do paciente?"))
    } else if (escolha == "2") {
        alert("Nome do paciente: " + fila[0])
    }

} while (escolha != "3")