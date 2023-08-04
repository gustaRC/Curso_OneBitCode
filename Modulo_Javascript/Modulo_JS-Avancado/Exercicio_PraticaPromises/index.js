function calculoIMC(peso, altura) {
    return new Promise((resolve, reject) => {
        if (typeof peso !== "number" || typeof altura !== "number") {
            reject("Valores invalidos!")
        } else {
            resolve((peso / (altura * altura)).toFixed([1])) //calculo do IMC
        }
    })
}

function IMC(peso, altura) {
    const imc = calculoIMC(peso, altura)
    
    imc.then((result) => {
        if (result < 18.5) {
            console.log(`Abaixo de 18.5: Magreza (resultado: ${result})`)
        } else if (result > 18.5 && result < 24.9) {
            console.log(`Entre 18.5 e 24.9: Normal (resultado: ${result})`)
        } else if (result > 25 && result < 29.9) {
            console.log(`Entre 25 e 29.9: Sobrepeso (resultado: ${result})`)
        } else if (result > 30 && result < 39.9) {
            console.log(`Entre 30 e 39.9: Obesidade (resultado: ${result})`)
        } else if (result > 40) {
            console.log(`Acima de 40: Obesidade grave (resultado: ${result})`)
        }
    }).catch((err) => {
        console.log(`Erro: ${err}`)
    }).finally(() => {
        console.log("Encerrando execução da aplicação IMC!")
    })

    console.log("Inicando execução da aplicação IMC!")
}

IMC(70, 1.71)
