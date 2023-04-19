//Exercicio - Calculadora Geométrica

let opcoes = ''

function aTriangulo(bs, al) {
    return (bs * al) / 2
}

function aRetangulo(bs, al) {
    return (bs * al)
}

function aQuadrado(lado) {
    return (lado * lado)
}

function aTrapezio(bM, bm, al) {
    return ((bM + bm) * al) / 2
}

function aCirculo(raio) {
    return 3.14 * (raio * raio)
}


do {

    opcao = prompt(
        "Calculadora Geométrica!\n" + 
        "Escolha alguma das opções:\n" +
        " -> 1 - Área do triângulo\n" +
        " -> 2 - Área do retângulo\n" + 
        " -> 3 - Área do quadrado\n" + 
        " -> 4 - Área do trapézio\n" + 
        " -> 5 - Área do círculo\n" + 
        " -> 6 - Sair\n"
    )
    calculo(opcao)
} while (opcao != '6')

function calculo(x) {

    let altura = 0
    let base = 0
    let lado = 0
    let baseM = 0
    let basem = 0
    let raio = 0


    switch (x) {
        case "1" :
            //triangulo
            altura = parseFloat(prompt("Digite a altura:"))
            base = parseFloat(prompt("Digite o tamanho da base:"))
            alert("Resultado!\n" + "Área do triângulo é = " + aTriangulo(base, altura))
            break
        case "2" :
            //retangulo
            altura = parseFloat(prompt("Digite a altura:"))
            base = parseFloat(prompt("Digite o tamanho da base:"))
            alert("Resultado!\n" + "Área do retângulo é = " + aRetangulo(base, altura))
            break
        case "3" :
            //quadrado
            lado = parseFloat(prompt("Digite o tamanho do lado:"))
            alert("Resultado!\n" + "Área do quadrado é = " + aQuadrado(lado))
            break
        case "4" :
            //trapézio
            altura = parseFloat(prompt("Digite a altura:"))
            baseM = parseFloat(prompt("Digite o tamanho da base maior:"))
            basem = parseFloat(prompt("Digite o tamanho da base menor:"))
            alert("Resultado!\n" + "Área do trapézio é = " + aTrapezio(baseM, basem, altura))
            break
        case "5" :
            //círculo
            raio = parseFloat(prompt("Digite o raio:"))
            alert("Resultado!\n" + "Área do círculo é = " + aRetangulo(raio))
            break
    }
}

alert("Programa encerrado!")