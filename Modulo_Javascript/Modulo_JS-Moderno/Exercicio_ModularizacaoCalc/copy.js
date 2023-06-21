const resultInput = document.getElementById("result")

export default function (ev) {
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
}