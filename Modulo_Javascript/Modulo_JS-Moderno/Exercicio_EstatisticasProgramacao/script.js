//Exercicio - Estatística na Programação

const mediaAritmeticaSimples = (...numbers) => {
    const somaTotal = numbers.reduce((accum, num) => accum + num, 0)
    console.log(`Média Aritmética Simples: ${somaTotal/numbers.length}`)
}