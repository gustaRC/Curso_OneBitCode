//Exercicio - Calculo de Medidas

let valorM = parseFloat(prompt("Digite um valor em metros:"))

const medida = prompt("Digite a unidade de medida desejada:" + 
"\nmm (milímetro)" + "\ncm (centímetro)" + "\ndm (decímetro)" +
"\ndam (decâmetro)" + "\nhm (hectômetro)" + "\nkm (quilômetro)")

switch (medida) {
    case "mm":
        alert("Valor: " + valorM + "\nConvertido para: "
        + medida + "\n\nResultado: "+ (valorM * 1000) + " " + medida);
        break;
        case "cm":
        alert("Valor: " + valorM + "\nConvertido para: "
        + medida + "\n\nResultado: "+ (valorM * 100) + " " + medida);
        break;
    case "dm":
        alert("Valor: " + valorM + "\nConvertido para: "
        + medida + "\n\nResultado: "+ (valorM * 10) + " " + medida);
        break;
    case "dam":
    alert("Valor: " + valorM + "\nConvertido para: "
    + medida + "\n\nResultado: "+ (valorM / 10) + " " + medida);
    break;
    case "hm":
        alert("Valor: " + valorM + "\nConvertido para: "
        + medida + "\n\nResultado: "+ (valorM / 100) + " " + medida);
        break;
    case "km":
    alert("Valor: " + valorM + "\nConvertido para: "
    + medida + "\n\nResultado: "+ (valorM / 1000) + " " + medida);
    break;
    default: 
    alert("Erro na Operação! \nRecarregue a página e tende novamente. ")
}