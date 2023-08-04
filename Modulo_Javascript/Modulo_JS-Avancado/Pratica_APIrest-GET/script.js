function criarCardsPaises(pais) {
    const card = document.createElement("div")
    card.classList.add("country")

    const nomePais = pais.name.common
    const nome = document.createElement('h2')
    nome.textContent = nomePais

    const bandeira = document.createElement("img")
    bandeira.src = pais.flags.svg
    bandeira.alt = nomePais

    card.append(nome, bandeira)
    document.querySelector("#countries").append(card)

}

async function paises_get() {
    const resposta = await fetch("https://restcountries.com/v3.1/all")
    const paises = await resposta.json()

    paises.forEach(criarCardsPaises);
}

paises_get()