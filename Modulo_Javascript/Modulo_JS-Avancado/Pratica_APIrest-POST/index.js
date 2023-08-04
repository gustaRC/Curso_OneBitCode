function renderizarArtigo(article) {
    const artigo = document.createElement("article")
    artigo.classList.add("article")
    artigo.id = `article-${article.id}`

    const titulo = document.createElement("h3")
    titulo.classList.add("article-title")
    titulo.textContent = article.title
    
    const conteudo = document.createElement("div")
    conteudo.classList.add("article-content")
    conteudo.innerHTML = article.content

    const autor = document.createElement("div")
    autor.classList.add("article-title")
    autor.textContent = article.author

    artigo.append(titulo, autor, conteudo)
    document.querySelector("#articles").appendChild(artigo)
}

async function fetchArtigos() {
    const artigos = await fetch("http://localhost:3000/articles").then(res => res.json())
    artigos.forEach(renderizarArtigo)
}

document.addEventListener("DOMContentLoaded", () => {
    fetchArtigos()
})

const form = document.querySelector("form")

form.addEventListener("submit", async (ev) => {
    ev.preventDefault()

    const artigoData = {
        title: document.querySelector("#title").value,
        author: document.querySelector("#author").value,
        content: document.querySelector("#content").value
    }

    const resposta = await fetch("http://localholt:3000/articles", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(artigoData)
    })

    const artigoSalvado = await resposta.json()
    form.reset()
    renderizarArtigo(artigoSalvado)
    console.log(artigoSalvado)
})
