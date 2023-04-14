//Exercicio - Velocidade Veiculos

let veiculo1 = prompt("Digite o nome do Veiculo 1:")
let velocidade1 = prompt("Digite a velocidade do " + veiculo1 + " em Km/h:")

let veiculo2 = prompt("Digite o nome do Veiculo 2:")
let velocidade2 = prompt("Digite a velocidade do " + veiculo2 + " em Km/h:")

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rapido que o " + veiculo2)
} else if (velocidade1 < velocidade2) {
    alert(veiculo2 + " é mais rapido que o " + veiculo1)
} else {
    alert("Os dois veiculos tem a mesma velocidade!")
}