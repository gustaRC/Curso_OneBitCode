//Exercicio - Controle Financeiro

let dinheiroDisp = parseFloat(prompt("Dinheiro disponivel:"))
let opcoes = ''

let valor = 0

do {

    if (dinheiroDisp >= 0) {
        opcoes = prompt("Dinheiro disponivel: R$" + dinheiroDisp +
        "\n\nOpções:" + "\n  1 - Adicionar Valor" + "\n  2 - Remover Valor" + 
        "\n  3 - Sair")

        switch (opcoes) {
            case "1":
                valor = parseFloat(prompt("Valor a ser adicionado:"));
                dinheiroDisp += valor;
                break;
            case "2":
                valor = parseFloat(prompt("Valor a ser removido:"));
                dinheiroDisp -= valor;
                break;
        }
    } else {
        alert("Dinheiro insuficiente!")
        opcoes = 3
    }
} while (opcoes != 3)

alert("Programa encerrado!")