//Exercicio - Sistema Vagas de Emprego

let listaVagas = [
    {
        nomeVaga: "vagaTeste0",
        descricao: "descricaoTeste0",
        dataLimite: "99/99/9990",
        candidatos: [
            "nomeCand", "nomeCand", "nomeCand" 
        ]
    },
]

let opcao = ''

do {
    opcao = prompt(
        "Sistema Vagas de Emprego!\n\n" +
        "Escolha algumas das opções:\n" +
        " 1 - Listar vagas disponíveis\n" +
        " 2 - Criar um nova vaga\n" +
        " 3 - Visualizar uma vaga\n" +
        " 4 - Inscrever candidato em uma vaga\n" +
        " 5 - Excluir uma vaga\n" +
        " 6 - Sair\n"
    )

    listarV()
    criarVaga() 
    vizualiarVaga()
    cadastroCandidato()
    excluirVaga()
} while (opcao != "6")




function listarV() {
    let info = ''
    let totalVagas = 0
    if (opcao == "1") {
        for (let i = 1; i < listaVagas.length; i++) {
            info += " - Id: " + i + 
            "\n   Nome da vaga: " + listaVagas[i].nomeVaga +
            "\n   Quantidade de Candidatos: " + listaVagas[i].candidatos.length + "\n"

            totalVagas += listaVagas[i].candidatos.length
        }
        alert("Lista vagas:\n" + info + 
        "\nTotal de Canditatos: " + totalVagas
        )
    }
}

function criarVaga() {
    if (opcao == '2'){
        const nomeV = prompt("Nome da vaga:")
        const descricaoV = prompt("Descrição sobre a vaga:")
        const dataLimiteV = prompt("Data limite de incrição:")
        const confirmV = confirm("Nome da vaga: " + nomeV +
        "\nDescrição: " + descricaoV + "\nData limite de inscrição: " + dataLimiteV +
        "\n\nDeseja confirmar o cadastro da vaga?"
        )
        if (confirmV) {
            listaVagas.push({
                nomeVaga: nomeV,
                descricao: descricaoV,
                dataLimite: dataLimiteV,
                candidatos: []})
            alert("Cadastro realizado com sucesso!")
        } else {
            alert("Operação cancelada!")
        }
    }
}

function vizualiarVaga() {
    if (opcao == '3') {
        const indiceVaga = prompt("Digite o índice da vaga:")
        if (indiceVaga >= listaVagas.length || indiceVaga < 0) {
            alert("Erro!")
            return
        }
        const totalCand = listaVagas[indiceVaga].candidatos.length
        alert(
            "Índice: " + indiceVaga +
            "\nNome da vaga: " + listaVagas[indiceVaga].nomeVaga +
            "\nDescrição: " + listaVagas[indiceVaga].descricao +
            "\nData limite: " + listaVagas[indiceVaga].dataLimite +
            "\nQtde candidatos inscritos: " + totalCand +
            "\nCandidatos: " + listaVagas[indiceVaga].candidatos      
        )
    }
}

function cadastroCandidato() {
    if (opcao == '4') {
        const novoCand = prompt("Nome do candidato:")
        const indiceVaga = prompt("Digite o índice da vaga:")
        if (indiceVaga >= listaVagas.length || indiceVaga < 0) {
            alert("Erro!")
            return
        }
        const totalCand = listaVagas[indiceVaga].candidatos.length
        const confirmV = confirm(
            "Nome do candidato: " + novoCand +
            "\n\nResumo da vaga:" +
            "\nÍndice: " + indiceVaga +
            "\nNome da vaga: " + listaVagas[indiceVaga].nomeVaga +
            "\nDescrição: " + listaVagas[indiceVaga].descricao +
            "\nData limite: " + listaVagas[indiceVaga].dataLimite +
            "\nQtde candidatos inscritos: " + totalCand + 
            "\n\nDeseja confirmar a inscrição?"
        )
        if (confirmV) {
            listaVagas[indiceVaga].candidatos.push(novoCand + " ")
            alert("Inscrição realizado com sucesso!")
        } else {
            alert("Operação cancelada!")
        }
    }
}

function excluirVaga() {
    if (opcao == '5') {
        const indiceVaga = prompt("Digite o índice da vaga:")
        if (indiceVaga >= listaVagas.length || indiceVaga < 0) {
            alert("Erro!")
            return
        }
        const totalCand = listaVagas[indiceVaga].candidatos.length
        const confirmV = confirm(
            "Resumo da vaga:" +
            "\nÍndice: " + indiceVaga +
            "\nNome da vaga: " + listaVagas[indiceVaga].nomeVaga +
            "\nDescrição: " + listaVagas[indiceVaga].descricao +
            "\nData limite: " + listaVagas[indiceVaga].dataLimite +
            "\nQtde candidatos inscritos: " + totalCand + 
            "\n\nDeseja confirmar a exclusão?"
        )
        if (confirmV) {
            listaVagas.splice(indiceVaga, 1)
            alert("Exclusão realizado com sucesso!")
        } else {
            alert("Operação cancelada!")
        }
    }
}

alert("Programa Encerrado!")
