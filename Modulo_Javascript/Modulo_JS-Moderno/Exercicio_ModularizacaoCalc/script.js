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

//importações/modulação exercicio
import {calculate} from "./calculate.js"
import changeTheme from "./changeTheme.js"
import copy from "./copy.js"

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

//botão de resultado. como a função está sem os parenteses() significa q retorna a função em si n o seu resultado
document.getElementById("equal").addEventListener("click", calculate)

//trocar tema dark/light da página
document.getElementById("themeSwitcher").addEventListener("click", changeTheme)

//botao de copiar
document.getElementById("copyToClipboard").addEventListener("click", copy)