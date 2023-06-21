//Exercicio - Estatística na Programação

// MEDIA ARITMETICA SIMPLES
const mediaSimples = (...numbers) => {
    //SOMA TDS OS ITENS
    const somaTotal = numbers.reduce((accum, num) => accum + num, 0)
    //SOMA DE TDS OS ITENS DIVIDO PELO NUMERO TOTAL DE ELEMENTOS
    return somaTotal/numbers.length
}
console.log(`Média Aritmética Simples: ${mediaSimples(3, 5, 2, 4)}`)

//MEDIA PONDERADA
const mediaPonderada = (...entradas) => {
    //RESULTADO DA MULTIPLICAÇÃO ENTRE O NUMERO E O PESO
    const sum = entradas.reduce((accum, {number, weight}) => accum + (number *( weight ?? 1)), 0) //SE PESO EXISTIR ELE SERÁ O VALOR, SE NN SERÁ 1
    //SOMA DOS PESOS
    const PesoSum = entradas.reduce((accum, entradaPeso) => accum + (entradaPeso.weight ?? 1), 0)
    //DIVISAO ENTRE A MULTIPLICAO DO NUMERO * PESO DIVIDIDO PELA SOMA DOS PESOS
    return sum / PesoSum
}

console.log(`Média Ponderada: ${mediaPonderada(
    { number: 9, weight: 2},
    { number: 7, weight: 1},
    { number: 10, weight: 3}
)}`)

//MEDIANA
const median = (...numbers) => {
    //ORDENAR NUMEROS DO MENOR PARA O MAIOR
    const orderNumbers = [...numbers].sort((a, b) => a - b)
    //ARREDONDA O NUMEROS DECIMAIS PARA MENOS E OS DIVIDE POR DOIS, ACHANDO O MEIO DO ARRAY
    const middle = Math.floor(orderNumbers.length / 2)
    //SE O RESTO DA DIVISÃO FOR DIFERENTE DE 0, LOGO É IMPAR, ENTAO RETORNARA O MEIO DO ARRAY ORDENADO 
    if (orderNumbers.length % 2 !== 0) {
        return orderNumbers[middle]
    }
    //CASO O ARRAY SEJA PAR
    //PEGARA O PRMEIRO NUMERO DO MEIO
    const firstNumber = orderNumbers[middle - 1]
    //PEGA O SEGUNDO NUMERO DO MEIO
    const secondNumber = orderNumbers[middle]
    //E OS RETORNA
    return mediaSimples(firstNumber, secondNumber)
}

console.log(`Mediana: ${median(2, 4, 54, 1, 56, 5)}`)
console.log(`Mediana: ${median(2, 4, 54, 1, 56)}`)

//MODA
const moda = (...numbers) => {
    //QUANT É UM ARRAY BIDIMENSIONAL EM QUE NA PRIMEIRA COLOCAÇÃO SERÁ UM NÚMERO QUALQUER DO ARRAY
    //EM SEGUNDA COLOCAÇÃO SERÁ A CONTAGEM DESSE NÚMERO
    //== [ [n, qtde], [n, qtde], [n, qtde] ]
    const quant = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    //ORGANIZANDO NA ORDEM DECRESCENTE O ARRAYS INTERNOS POR ISSO O [1]
    quant.sort((a, b) => b[1] - a[1]) //LOGICA GERAL SORT: B maior q A
    //COMO COLOCAMOS OS MAIORES NÚMEROS EM PRIMEIRO LUGAR
    //SERÁ RETORNADO O QUANT NA POSIÇÃO 0, LOGO O MAIOR NÚMERO DESSE ARRAY
    return quant[0][0]
}