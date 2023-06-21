const resultInput = document.getElementById("result")
const input = document.getElementById("input")

//função para realizar os calculos
function calculate() {
    //sistema para caso ocorra erro na operação do calculo
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    
    //SITEMA PARA ERRO: ao aperta o botao result, por padrao será mostrado a mensagem de erro
    //e como "deu" erro no codigo ao chegar na função eval o codigo será brecado
    //sendo q, caso n ocorra o erro, logo, caso n ocorra o breck na função eval
    //o resultado aparece e será removida a classe error que caracteriza o input caso ocorra erro
    //td isso acontencedo em poucos milesimos, o usuario n perceberá

    //função eval interpreta o código e o executa. CUIDADO COM ESTÁ FUNÇÃO!!!
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}

export {calculate}