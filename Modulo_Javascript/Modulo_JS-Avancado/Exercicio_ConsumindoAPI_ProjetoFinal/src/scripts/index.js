import { criarSpan } from "./tagsHtml.js";

async function loadTransacao() {
    const spanTransacoes = await fetch("http://localhost:3000/transacoes").then(result => result.json())
    spanTransacoes.forEach(criarSpan)
}

document.addEventListener("DOMContentLoaded", () => {
    loadTransacao()
})