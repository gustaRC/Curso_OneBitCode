const submit = document.getElementById("button-submit")
let email = document.getElementById("email-input")
const senha = document.getElementById("senha-input")
const spanBox = document.getElementById("notBox-box")


function validacaoEmail(email) {
    if(!email.match(/\w{2,}@[a-zA-z]{2,}\.[a-zA-Z]{2,/)) {
        const err = new Error("E-mail inválido!")
        err.input = "email-input"
        throw err
    }
}

function resetarStyleForm() {
    Object.entries(userInputs).forEach(([key,value]) => {
        value.classList.remove('sucesso', 'erro')
        document.querySelector('#')
    })
}

const userInputs = {
    email: document.querySelector('#email-input'),
    senha: document.querySelector('#senha-input')
}

const form = document.querySelector('form').addEventListener("submit", (ev) => {
    ev.preventDefault()

    try {
        spanBox.classList.add("sucesso")
        validacaoEmail(userInputs.email.value)
        spanBox.textContent = "Login concluído com sucesso!"
    } catch {
        spanBox.classList.add("erro")
        spanBox.textContent = "E-mail/Senha inválidos!"
    }
})

console.log(userInputs)