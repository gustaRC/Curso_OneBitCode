//Exercicio - Sistema Vagas de Emprego

let listaVagas = [
    {
        nomeVaga: "vagaTeste0",
        descricao: "descricaoTeste0",
        dataLimite: "99/99/9999",
    },
    {
        nomeVaga: "vagaTeste1",
        descricao: "descricaoTeste1",
        dataLimite: "99/99/9999",
    },
]

let listaCand = [
    {nomeCand: "teste0", vaga: listaVagas[0]},
    {nomeCand: "teste1", vaga: listaVagas[1]},
    {nomeCand: "teste2", vaga: listaVagas[1]},
]

// let conta = listaCand.filter()



let opcao = ''

do {
    opcao = prompt(
        "Sistema Vagas de Emprego!\n\n" +
        "Escolha algumas das opções:\n" +
        " 1 - Listar vagas disponíveis\n" +
        " 2 - Criar um nova vaga\n" +
        " 3 - Visualizar uma vaga\n" +
        " 4 - Inscrever um candidato em uma vaga\n" +
        " 5 - Excluir uma vaga\n" +
        " 6 - Sair\n"
    )

    infoVagas()
} while (opcao != "6")


function infoVagas() {
    let info = ''
    if (opcao == "1") {
        for (let i = 0; i <= listaVagas; i++) {
            info = "Lista vagas:\n" +
            " - Id: " + i + 
            "\n   Vaga: " + listaVagas[i].nomeVaga +
            "\n   Quantidade de Candidatos: "
        }
        console.log(info)
        alert(info)
    }
}


alert("Programa Encerrado!")
