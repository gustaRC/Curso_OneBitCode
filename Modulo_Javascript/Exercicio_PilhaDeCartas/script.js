//Exercicio - Pilha de Cartas

let qtdeCartas = ["teste", "teste", "teste"]

let removeCarta = ""

do {

opcoes = prompt("Pilha de Cartas!\n" + "Qtde de cartas no baralho: "
+ qtdeCartas.length + "\n\n" + "Menu:\n" + "1 - Adicionar uma carta\n" +
"2 - Puxar uma carta\n" + "3 - Sair") 

if (opcoes == 1) {
    qtdeCartas.unshift(prompt("Qual o nome da carta?"))
} else if (opcoes == 2) {
    removeCarta = qtdeCartas.shift()
    alert("Carta removida: " + removeCarta)
}
} while (opcoes != 3)

alert("Programa Encerrado!")