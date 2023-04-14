let nome = window.prompt("Digite seu nome:")
let sobrenome = window.prompt("Digite seu sobrenome:")
let campoEstudo = window.prompt("Digite seu campo de estudo:")
let anoNascimento = window.prompt("Digite seu ano de nascimento:")

let idade = 2023 - parseFloat(anoNascimento)

console.log(
    "Cadastro realizado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de Estudo: " + campoEstudo +
    "\nIdade: " + idade
)

alert(
    "Cadastro realizado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de Estudo: " + campoEstudo +
    "\nIdade: " + idade + " anos"
)
