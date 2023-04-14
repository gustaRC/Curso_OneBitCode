//Exercicio - Menu Interativo

let opcoes = ''

do {
    opcoes = prompt("Escolha uma opção: " 
    + "\n 1 - Opção1"
    + "\n 2 - Opção2"
    + "\n 3 - Opção3"
    + "\n 4 - Opção4"
    + "\n 5 - Encerrar")

    alert("Opção escolhida pelo usuário: " + opcoes)
} while (opcoes != 5);

alert("O programa foi encerrado!")