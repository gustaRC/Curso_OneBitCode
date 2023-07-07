import { Component } from "./Component.js"

const botao = document.getElementById("botao")

botao.addEventListener("click", function(ev) {
    const teste = new Component(ev, "input")
    console.log(teste)
})