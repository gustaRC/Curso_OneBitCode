//Projeto Prático - Calculadora

//main será utilizado para trocar o tema da página
const main = document.querySelector("main")

//root será utilizado para manipular o tema da página
//localizado no css
const root = document.querySelector(":root")

//adiquirir o input onde será mostrado o calculo a ser realizado
const input = document.getElementById("input")

//onde será mostrado o resultado
const resultInput = document.getElementById("result")

//teclas permitidas a serem pressionadas no teclado
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//fazendo os botões funcionarem
//está pegando tds os botôes com a classe charkey e fazendo um forEach para q
//em cada botão seja adicionado um evento ao clicar q consiste em
//adicionar o valor definido data-value no HTML ao valor do input
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

//limpar input
document.getElementById("clear").addEventListener("click", function () {
    input.value = ""
    input.focus()
})

//addEventListener no input quando uma tecla for pressionada
input.addEventListener("keydown", function(ev) {
    //previne o evento padrao, logo, o registro da tecla pressionada
    ev.preventDefault()
    //ev.key é a tecla associada ao evento, logo, a tecla que o usuario pressionou
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    //adicionar a opção de apagar com o backspace
    if (ev.key === 'Backspace') {
        //metodo slice para cortar a partir do número inicial e diminuir 1 número
        input.value = input.value.slice(0, -1)
    }
    //adicionar opção de mostrar resultado a partir da tecla enter
    if (ev.key === 'Enter') {
        calculate()
    }
})

//botão de resultado. como a função está sem o parenteses() significa q retorna a função em si n o seu resultado
document.getElementById("equal").addEventListener("click", calculate)

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

//trocar tema dark/light da página
document.getElementById("themeSwitcher").addEventListener("click", function () {
    //se o main estiver com o tema "dark" faça tal coisa
    if (main.dataset.theme === "dark") {
        //acessando e alterando os estilos do elemento root
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        //alterando nome do tema main para light
        main.dataset.theme = 'light'
    } else {
        //alterando o tema do main para dark
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = 'dark'
    }
})

//botao de copiar
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    //botao que acionou o evento, logo o botao Copy
    const button = ev.currentTarget
    //alterando a caracterização do botao Copy
    if (button.innerText === "Copy") {
        button.innerText = "Copied"
        //atribuindo uma classe
        button.classList.add("success")
        //funcionalidade de copiar
        //estamos colocando para o site escrever o resultado no "menu de copiar do navegador"
        navigator.clipboard.writeText(resultInput.value)
    } else {
        //fazer o botao Copy voltar ao normal
        button.innerText = "Copy"
        button.classList.remove("success")
    }
})