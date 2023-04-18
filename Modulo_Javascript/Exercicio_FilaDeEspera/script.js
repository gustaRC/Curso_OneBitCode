//Exercicio - Fila de Espera

let fila = ["Fulano", "Sicrano"]

let opcao = ""

let filaUlt = []

do {
    let pacientes = ""

    for (let i = 0; i < fila.length; i++) {

        pacientes += " - " + (i + 1) + ". " + fila[i] + "\n" 
    }

    opcao = prompt("Consultorio Médico\n" + "Fila de espera:\n" +
    pacientes + "\n" + "Menu:\n" + "1 - Novo paciente\n" + "2 - Consultar paciente\n" + "3 - Sair")

    if (opcao == "1") {
        fila.push(prompt("Qual o nome do paciente?"))
    } else if (opcao == "2") {
        const pacienteConsultado = fila.shift()
        alert("Nome do paciente consultado: " + pacienteConsultado)
    }

} while (opcao != "3")