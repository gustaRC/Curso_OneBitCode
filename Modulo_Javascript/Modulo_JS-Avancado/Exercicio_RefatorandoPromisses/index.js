//REFATORANDO PROMISES

async function calculoIMC(peso, altura) {
        if (typeof peso !== "number" || typeof altura !== "number") {
            return Promise.reject("Valores invalidos!")
        } else {
            return (peso / (altura * altura)).toFixed([1]) //calculo do IMC
        }
}

async function IMC(peso, altura) {
    console.log("Inicando execução da aplicação IMC!")

    const imc = await calculoIMC(peso, altura)
    
    try {
        if (imc < 18.5) {
            console.log(`Abaixo de 18.5: Magreza (resultado: ${imc})`)
        } else if (imc > 18.5 && imc < 24.9) {
            console.log(`Entre 18.5 e 24.9: Normal (resultado: ${imc})`)
        } else if (imc > 25 && imc < 29.9) {
            console.log(`Entre 25 e 29.9: Sobrepeso (resultado: ${imc})`)
        } else if (imc > 30 && imc < 39.9) {
            console.log(`Entre 30 e 39.9: Obesidade (resultado: ${imc})`)
        } else if (imc > 40) {
            console.log(`Acima de 40: Obesidade grave (resultado: ${imc})`)
        }
    } catch (err) {
        console.log(err)
    }
    console.log("Encerrando aplicação!")
}

IMC(70, 1.71)
IMC(70, null)
IMC(140, 1.71)
