//Exercicio - Cadastro de Imóveis



let listaImoveis = []


let opcao = ""

do {
    let imoveis = {
        nome: String,
        qtdeQuartos: Number,
        qtdeBanheiros: Number,
        possuiGaragem: Boolean
    }

    opcao = prompt(
        "Cadastro de Imóveis!\n" +
        "Quantidade de imóveis cadastrados: " + listaImoveis.length +

        "\n\nMenu de Opções:" +
        "\n  1 - Cadastrar imóvel" + 
        "\n  2 - Mostrar imóveis salvos" +
        "\n  3 - Sair"
    )

    switch (opcao) {
        case "1":
            imoveis["nome"] = prompt("Qual o nome do proprietario?");
            imoveis["qtdeQuartos"] = prompt("Quantos quartos tem a propriedade?");
            imoveis["qtdeBanheiros"] = prompt("Quantos banheiros tem a propriedade?");
            imoveis["possuiGaragem"] = confirm("Possui garagem?");
            listaImoveis.push(imoveis);
        case "2":
            let infoLista = ""
            for (let i = 0; i < listaImoveis.length; i++) {
                infoLista +=
                " - Nome: " + listaImoveis[i].nome + "; Qtde Quartos: " + listaImoveis[i].qtdeQuartos +
                "; Qtde Banheiros: " + listaImoveis[i].qtdeBanheiros + "; Possui garagem: "
                + (listaImoveis[i].possuiGaragem ? "Sim" : "Não") + "\n"
            }
            alert("Imoveis Cadastrados:\n" + infoLista);
        }
} while (opcao != "3")

alert("Programa encerrado!")